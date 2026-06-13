import  { useReducer,useState } from "react";


let initialState = {
    count:0,
    username:""
}

function reducer(state,action){
    switch(action.type){
        case "increment":
            return {
                ...state,
                count:state.count+1
            }
        case "decrement":
            return {
                ...state,
                count:state.count-1
            }
        case "updateUsername":
            return {
                ...state,
                username:action.payload
            }
        


    }

}
const App = () => {
   let [val,setVal] =  useState(0)


    let [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>{state.count}</h1>
        <h2>{state.username}</h2>
        <button onClick={() =>dispatch({type:"increment"})}>incremnt</button>
        <button onClick={() =>dispatch({type:"decrement"})}>decrement</button>
        <input type="text" onChange={(e) => dispatch({type:"updateUsername",payload:e.target.value})} />
    </div>
  )
};

export default App;
