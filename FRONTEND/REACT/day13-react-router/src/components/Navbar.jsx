import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className=''>
        <nav className='flex items-center justify-between p-5'>
        <h1>Logo</h1>
        <div className='flex items-center justify-between gap-10'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>

        </div>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar
