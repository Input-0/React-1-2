import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import {useForm} from "react-hook-form";
import { useAuthContext } from "../context/userContext"; 

const Login = () => {
  let {register,handleSubmit,formState:{errors}} = useForm()
  let {login} = useAuthContext()
  let submitForm = (data) =>{
    login(data)
    

  }
  let loginErr = (err) => {

  }
  // console.log(errors);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-80 border w-auto px-10  flex flex-col gap-10 items-center shadow-[0px_0px_15px] rounded-md">
        <h1 className="mt-5 text-2xl font-mono font-semibold text-olive-500">Login</h1>
        <form onSubmit={handleSubmit(submitForm,loginErr)}>
          
            {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
            <Input {...register("email",{
              required:"Email is required",
              pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Enter a valid email"
              }
            })} lText={"email"} iType={"email"} phold={"john@gmail.com"} className={"px-2"}/>
            <Input {...register("password")} lText={"password"} iType={"password"} phold={"j123SKDJ#$&*dj"} className={"px-2"}/>
            <Button btype={"submit"} btext={"Register"}/>
        </form>
    </div>
    </div>
  )
};

export default Login;
