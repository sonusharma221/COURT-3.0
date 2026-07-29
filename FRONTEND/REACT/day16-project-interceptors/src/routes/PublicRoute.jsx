import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Auth } from '../context/AuthContext'

const PublicRoute = () => {
    const { logggedInUser } = useContext(Auth)

    if (logggedInUser) {
       return <Navigate to="/mainlayout" replace />
    }

    return <Outlet />
}

export default PublicRoute
