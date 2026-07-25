import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5 gap-5'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
    </div>
  )
}

export default Navbar
