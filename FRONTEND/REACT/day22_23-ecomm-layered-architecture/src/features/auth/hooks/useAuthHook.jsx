import React from "react";
import { useNavigate } from "react-router";
// import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
import { loginUserAction } from "../state/authAction";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const registerForm = (data) => {
    console.log("registerd", data);
  };

  const loginForm = async (data) => {
    try {
      //api call
      dispatch(loginUserAction(data))

    } catch (error) {
      console.log("form api error", error);
    }
  };

  return {
    navigate,
    registerForm,
    loginForm,
  };
};

export default useAuth;
