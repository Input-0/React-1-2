import { useMemo } from "react";
import { useState } from "react";



export const Exp = () => {
    let [value,setValue] = useState(0)
    let [data,setData] = useState("")

    let expCal = () => {
        console.log("redred");
        
        return value*20000000
    }

    let call = useMemo(() =>{
        return expCal()
    },[value])
  return (
    <div>
        <input className="border" type="text" value={data} onChange={(e) => setData(e.target.value)} />


        {call}
        <button className="block" onClick={() => setValue(value+1)}>+</button>
    </div>
  )
};
