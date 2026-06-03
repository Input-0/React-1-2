import { useState,useRef } from "react";



const Control = () => {
    let [value,setValue] = useState("")

    let inputVal = useRef()
    

    function call(){
        setValue(inputVal.current.value)
        console.log(value);
        

    }
    

  return (
    <div>
        <h1>{value}</h1>
        
        <input className="border" type="text" ref={inputVal}  /><br />
        <button onClick={() => call()}>click</button>
        
    </div>

    
  )
};



export default Control;
