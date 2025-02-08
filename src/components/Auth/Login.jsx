import React, { useState } from "react";
import { useForm } from "react-hook-form";


const Login = ({ handleLogin }) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const email = watch("email" , "")
  const password= watch("password" , "")
  const submitHandler = (e) => {
    // e.preventDefault();
    handleLogin(email, password);

    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" bg-amber-300 flex  justify-center w-[400px] flex-col gap-6 p-15 rounded-lg">
        <h1 className="text-center text-3xl font-bold">LOGIN</h1>
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
           
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern : { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"}
            })}
         
            className= "outline-none border-b border-e-black py-2 placeholder:text-black "
            type="email"
            placeholder="Enter Your Email"
          />
           {errors.email && (
          <li className="text-red-600">
            <small>{errors.email.message}</small>
          </li>
        )}
          <input
           
          
            className="outline-none border-b border-e-black py-2 placeholder:text-black"
            type="password"
            placeholder="Enter Your Password"

            {...register("password", {
              required: "Password is required",
             
              
            })}
          />

{errors.password && (
          <li className="text-red-600">
            <small>{errors.password.message}</small>
          </li>
        )}
          <button
            className="cursor-pointer px-6 py-3 rounded-lg border hover:bg-black hover:text-white  border-e-black font-bold transition-all ease-out"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

         
