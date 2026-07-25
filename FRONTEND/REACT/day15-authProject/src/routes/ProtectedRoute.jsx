import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const ProtectedRoute = () => {
    const {logggedInUser} = useContext(Auth)

    if(!logggedInUser){
       return <Navigate to={"/"}/>
    }
  return <Outlet />
}

export default ProtectedRoute
