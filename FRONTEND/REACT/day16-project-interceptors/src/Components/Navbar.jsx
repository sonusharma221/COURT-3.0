import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  let data = useLocation();
  console.log(data);
  const {setLogggedInUser} = useContext(Auth)
  
  return (
    <div className=" border-r border-r-gray-600 flex flex-col  p-3 justify-between">
      
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-semibold">E-com</h1>

      <div className="flex flex-col gap-6 ml-5 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/mainlayout"}
          end
        >
          Home
        </NavLink>

        <NavLink
            className={({ isActive }) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/mainlayout/users"}
        >
          Users
        </NavLink>
        
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/mainlayout/products"}
        >
          Products
        </NavLink>
      </div>
      </div>

      <button
      onClick={()=>{
        localStorage.removeItem("logggedInUser")
        toast.warn("user logout")
        setLogggedInUser(null)
        console.log("hii");
        
      }}
      className="bg-red-600 p-4 text-white rounded cursor-pointer">Logout</button>
    </div>
  );
};

export default Navbar;
