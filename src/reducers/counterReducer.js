
const counterReducer = (initialState= 0, actions) => {
  
    switch (actions.type) {
         
        case 'INCREMENT':
           return  initialState + actions.payload;
         break;
        case 'DECREMENT':
           return initialState - actions.payload;
            break;
        default:
           return  initialState;
    }
};

export default counterReducer;
