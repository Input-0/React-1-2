import { useCallback,memo } from "react"
import { useState } from "react"

let Cache = () => {
    let [value,steValue] = useState(0)
    let [input,setInput] = useState("")
    
    let one = useCallback(() => {
        console.log("funcation from parent");
        
    },[])

    return (
        <div>
            <h1>{value}</h1>
            <input className="border" type="text" value={input} onChange={(e) =>setInput(e.target.value)} /><br/>

            <Child fun = {one}/>
        </div>
    )
}



let Child = memo(({fun}) => {
    console.log("child element");
    
    return (
        <button onClick={() =>fun()} className="border p-1 rounded border-gray-300">click</button>
    )
}
)

export default Cache