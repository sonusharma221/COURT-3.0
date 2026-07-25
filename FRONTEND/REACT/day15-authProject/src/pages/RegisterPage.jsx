import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";

const RegisterPage = () => {
const  {setRegisterUsers,registerUsers,setLogggedInUser} = useContext(Auth)

  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    let arr = [...registerUsers,data]
    setRegisterUsers(arr)
    alert("user register successfully✅")
    setLogggedInUser(data)
    localStorage.setItem('logggedInUser',JSON.stringify(data))
    localStorage.setItem("registeredUser",JSON.stringify(arr))
    navigate("/mainlayout")
    

    reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Register to get started
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="mt-8 flex flex-col gap-5"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              {...register("name", {
                required: "name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none border border-gray-600 focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              {...register("email", {
                required: "email is required",
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
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Minimun 6 character is required",
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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            type="button"
            className="text-blue-500 hover:text-blue-400 font-semibold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
