import React, { useContext } from 'react'
import { NavLink } from 'react-router'


const Navbar = () => {

  return (

    <div className='flex justify-between p-5 items-center bg-black rounded'>
      <div>logo</div>
      <div className='flex gap-10 text-xl'>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/about"}>About</NavLink>
    <NavLink to={"/products"}>Products</NavLink>
    {/* <NavLink to={"/productdetail"}>productdetail</NavLink> */}

      </div>
      
      <button>Login</button>

    </div>
  )
}

export default Navbar
