import { createContext, useContext, useState } from "react";

const countContext = createContext()


export const CountProvider = ({children}) => {
    let [count,setCount] = useState(0)

    return (
        <countContext.Provider value={{count,setCount}}>
            {children}
        </countContext.Provider>
    )

}



 export  function usecountContext(){

    return useContext(countContext)

  }