import {applyMiddleware, combineReducers, createStore} from 'redux'
import {findWorkReducer} from './findWorkReducer'
import {projectCreateReducer} from './projectCreateReducer'
import {authReduser} from "./authReducer"
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";
 
let reducers = combineReducers({
  projectCreate: projectCreateReducer,
  findWork: findWorkReducer,
  auth: authReduser,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;