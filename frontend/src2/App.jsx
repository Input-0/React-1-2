import  { useReducer, useState } from "react";


let initialState = {
    count:0,
    currentuser:"",
}

let reducer = (state,action) => {
    // console.log(state,action);
    
    switch(action.type){
        case "countUpdate":
            console.log("here");
            
            
           return {
            ...state,
            count:action.payload
           }
        case "updateUser":
            return {
                ...state,
                currentuser:action.payload
            }
    }
}

const App = () => {

    
    let [state,dispatch] =  useReducer(reducer,initialState)
  return (

    <div>
        <h2>{state.count}</h2>
        <h2>{state.currentuser}</h2>
        <input type="number"  onChange={(e) => dispatch({type:"countUpdate",payload:e.target.value})}/>
        <input type="text"  onChange={(e) => dispatch({type:"updateUser",payload:e.target.value})}/>
        
        
    </div>

  )
};

export default App;
