import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";
import counterReducer from "./counterReducer";

const allReducers = combineReducers(
    {
        logging : loggedReducer,
        counting : counterReducer
    }
);


export default allReducers;