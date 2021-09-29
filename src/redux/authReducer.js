import {toggleIsFetching} from "./findWorkReducer";
import {authAPI, setAuth} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLogined: false
};


export const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return state;
        }
    }
}

export const setUserData = (id, email, login, isLogined) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isLogined}
});

export const getUserData = () => (dispatch) => {
    dispatch(toggleIsFetching(true))
    setAuth().then(data => {
        if( data.resultCode === 0){
            dispatch(setUserData(
                data.data.id,
                data.data.email,
                data.data.login,
                true
            ))
        }
        dispatch(toggleIsFetching(false))
    })
}

export const login = (email, password, rememberMe = false) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.login(email, password, rememberMe).then(response => {
       if(response.data.resultCode === 0){
         dispatch(getUserData())
       }
        dispatch(toggleIsFetching(false))
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        dispatch(setUserData(null, null, null, false))
    })
}