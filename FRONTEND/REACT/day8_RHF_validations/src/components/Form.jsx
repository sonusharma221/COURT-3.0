import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Form = ({ setUsers, setToggle }) => {


  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange"
  });

  let formSubmit = (data) => {
    console.log(data);
    setUsers((prev) => [...prev, data])
    reset();
    setToggle((prev) => !prev)

  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1>Create user</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col gap-3 p-4 rounded border border-white"
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /.*\S.*/,
              message: "Blank spaces is not allowed"
            }
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              message: "Email is incorrect",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}

        <input
          {...register("mobile", {
            required: "number is required",
            minLength: { value: 10, message: "minimum 10 digit are required" },
            maxLength: { value: 10, message: "maximum 10 digit are required" },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-700">{errors.mobile.message}</p>
        )}

        <input
          {...register("image", { required: "Image is required" })}
          className="p-2 rounded outline-0 border border-white"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-700">{errors.image.message}</p>}

        <button className="text-white bg-blue-700 p-4 rounded-xl cursor-pointer">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;
