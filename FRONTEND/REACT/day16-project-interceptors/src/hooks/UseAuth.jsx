import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";



export const useAuth = () => {
    const {registerUsers,setRegisterUsers,logggedInUser,setLogggedInUser,} = useContext(Auth)

  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  let loginFormSubmit = (data) => {
    let user = registerUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("invalid creds or user not found");
      reset();
      return;
    }
    setLogggedInUser(user);
    localStorage.setItem("logggedInUser", JSON.stringify(user));
    toast.success("user loggedIn");
    navigate("/mainlayout");

    reset();
  };
  let registerFormSubmit = (data) => {
    let arr = [...registerUsers,data]
    setRegisterUsers(arr)
    alert("user register successfully✅")
    setLogggedInUser(data)
    localStorage.setItem('logggedInUser',JSON.stringify(data))
    localStorage.setItem("registeredUser",JSON.stringify(arr))
    navigate("/mainlayout")
    

    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
