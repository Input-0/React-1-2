import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import {useForm} from "react-hook-form"
import toast,{Toaster} from "react-hot-toast"

import { useAuthContext } from "../context/userContext.jsx";

const Register = () => {
  let {register,handleSubmit,formState:{errors}} = useForm()
  let {registerUser} = useAuthContext()

  let submitForm = (data) =>{
    registerUser(data)
    console.log("here");
    
    

  }
  let registerErr = (err) => {
    toast.error("Register failed")

  }
  // console.log(errors);
  
  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster/>
      <div className="h-80 border w-auto px-10  flex flex-col gap-10 items-center shadow-[0px_0px_15px] rounded-md">
        <h1 className="mt-5 text-2xl font-mono font-semibold text-olive-500">Get Started</h1>
        <form onSubmit={handleSubmit(submitForm,registerErr)}>
          {errors?.username && <p className="text-red-500">{errors.username.message}</p>}
            <Input {...register("username",{
              required:"username is required",
              pattern:{
                value:/^[a-zA-Z0-9_-]{3,9}$/,
                message:"Enter a valid username"
              }
            })} lText={"username"} iType={"text"} phold={"john"} className="px-2"/>
            {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
            <Input {...register("email",{
              required:"Email is required",
              pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Enter a valid email"
              }
            })} lText={"email"} iType={"email"} phold={"john@gmail.com"} className={"px-2"}/>
            <Input {...register("password")} lText={"password"} iType={"password"} phold={"j123SKDJ#$&*dj"} className={"px-2"}/>
            <Button btype={"submit"} className={'cursor-pointer'} btext={"Register"}/>
        </form>
    </div>
    </div>
  )
};

export default Register;
