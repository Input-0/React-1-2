import React, { useContext, useState } from "react";
import { userContext } from "./App";

export const Register = () => {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let {addCurrentUser} = useContext(userContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        addCurrentUser({name,email,password})

    }
  return (
    <form onSubmit={handleSubmit} >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
    </form>
  )
};
