import {getUserData} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state;
        }
    }
}

export const setInitialized = () => ({type: SET_INITIALIZED});

export const initialize = () => (dispatch) => {
    let promise = dispatch(getUserData());

    //В следующей строке говорится: 'Когда придет ответ (выполнятся все) от всех промисов, то делаем then( () => {} )'
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}

export default appReducer;