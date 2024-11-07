import { useReducer } from "react";
import "./App.css";
const initialArg = 0;
const reducerFunction = (state,action) => {
  if(action.type==="INC_COUNT"){
    return state=state+1
  }
  if(action.type==="DEC_COUNT" &&state>0){
    return state=state-1
    
    
  }
  if(action.type==="RESET_COUNT"){
    return state=0;
  }
  return state

};

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialArg);
  return (
    <div className="App">
      <h1>counter:{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC_COUNT"});
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC_COUNT" });
        }}
      >
        Decrease
      </button>
      <button
       onClick={()=>{
        dispatch({type:"RESET_COUNT"})
       }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
