import { createStore } from 'redux';
import allReducers from "../reducers/allReducers";
// import counterReducer from "../reducers/counterReducer";
// import loggedReducer from "../reducers/loggedReducer";


let myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


  

export default myStore;
