import React, { useContext } from "react";
import { useAuth } from "../hooks/UseAuth";


const LoginPage = () => {
let{register,loginFormSubmit,reset,handleSubmit,navigate,errors} = useAuth()

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back👋
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Login to your account
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(loginFormSubmit)}
          className="mt-8 flex flex-col gap-5"
        >
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none border border-gray-600 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters are required",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none border border-gray-600 focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
          
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <button
          onClick={()=>navigate('/register')}
            type="button"
            className="text-blue-500 hover:text-blue-400 font-semibold"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
