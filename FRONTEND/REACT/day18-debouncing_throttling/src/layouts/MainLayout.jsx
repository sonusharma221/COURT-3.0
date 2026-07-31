import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className=''>
      <nav className='flex gap-10 text-xl'>
        <NavLink to={'/'}>App</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}> Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default MainLayout
