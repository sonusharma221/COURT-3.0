import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  console.log("auth rendering");
  
  return (
    <div>
      
      <Outlet />
    </div>
  )
}

export default AuthLayout
