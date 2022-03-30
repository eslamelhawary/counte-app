import myStore from "../src/store/myStore";
import { useSelector } from "react-redux";
import increment from "../src/actions/increment.js";
import decrement from "../src/actions/decrement";
import loggedStatus from "../src/actions/loggedStatus";
import React from "react";
import { useDispatch } from "react-redux";
function App() {
    const dispatch = useDispatch();

    myStore.dispatch(loggedStatus("logged"));

   const counter = useSelector(state =>state.counting);
   const log = useSelector(state => state.logging);

   console.log(log);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <h2>logged status : { log }</h2>
      <button onClick={() => dispatch(increment(5))} style={{ marginRight: 10}}>+</button>
      <button onClick={()=>dispatch(decrement(6))}>-</button>
    </div>
  );
}

export default App;
