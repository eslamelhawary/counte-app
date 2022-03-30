import loggedStatus from "../actions/loggedStatus";

let logWord ="logged";
const loggedReducer = (state = false, actions) => {
  
    switch (actions.payload) {
        case logWord:
            return "you are logged in";

        default:
            return 'out';

    }

}

export default loggedReducer;
