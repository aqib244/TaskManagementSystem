import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ handleLogin }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const email = watch("email", ""); //  Real-time email value dekhne ke liye
  const password = watch("password", ""); //  Real-time password value dekhne ke liye

  const submitHandler = () => {
    handleLogin(email, password); // ✅ Login function ko call karna
  };



  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-amber-300 flex justify-center w-[400px] flex-col gap-6 p-15 rounded-lg">
        <h1 className="text-center text-3xl font-bold">LOGIN</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitHandler)}>
          {/* ✅ Email input field */}
          <input
            {...register("email", {
              required: { value: true, message: "Email is required" }, // ✅ Email lazmi hai
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address", // Sahi email format hona chahiye
              },
            })}
            className="outline-none border-b border-e-black py-2 placeholder:text-black"
            type="email"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <li className="text-red-600">
              <small>{errors.email.message}</small>
            </li>
          )}

          {/*  Password input field */}
          <input
            {...register("password", {
              required: "Password is required", // Password lazmi hai
            })}
            className="outline-none border-b border-e-black py-2 placeholder:text-black"
            type="password"
            placeholder="Enter Your Password"
          />
          {errors.password && (
            <li className="text-red-600">
              <small>{errors.password.message}</small>
            </li>
          )}

          {/* Submit button */}
          <button
            className="cursor-pointer px-6 py-3 rounded-lg border hover:bg-black hover:text-white border-e-black font-bold transition-all ease-out"
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

         