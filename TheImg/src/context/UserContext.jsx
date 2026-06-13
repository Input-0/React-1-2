import { Children, createContext, useContext, useEffect, useState  } from "react";


let AuthContext = createContext()



export let AuthContextProvider = ({children}) => {
    let [user,setUser] = useState(() =>{
        return JSON.parse(localStorage.getItem("users")) || []
    })

    let registerUser = (data) => {
        setUser([...user,data])
    }

    let login = (data) => {
        

       let currentUser =  user.filter((uz) => uz.email == data.email&& uz.password == data.password)
       if(currentUser.length){
        console.log("user loogined",currentUser);

        
        
       }else{
        console.log("inValid credentials");
        
       }
        


        
    }


    useEffect(() =>{
        localStorage.setItem("users",JSON.stringify(user))
    },[user])
    return (
        <AuthContext.Provider value={{user,registerUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}