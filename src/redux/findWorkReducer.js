const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  isFetching: false,
  workSide: false
};


export const findWorkReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_IS_FETCHING: {
        return {...state, isFetching: action.isFetching}
      }
    default: {
      return state;
    }
  }
}

export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});

export default findWorkReducer;