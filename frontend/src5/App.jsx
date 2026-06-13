import { createContext, useState } from "react";
import { Register } from "./Register";


export let userContext = createContext()



const App = () => {
    let [user,setUser] = useState({})

    function addCurrentUser(ob){
        setUser(ob)
        
        
        
    }
    console.log(user);
    

    
  return (
    <userContext.Provider value={{user,addCurrentUser}}>
        <Register/>
       
    </userContext.Provider>
  )
};

export default App;
