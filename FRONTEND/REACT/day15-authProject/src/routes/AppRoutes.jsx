import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainLayout from '../layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
    const router =  createBrowserRouter([
        {
            path:'/',
            element: <AuthLayout />,
            children:[
                {
                    path: '',
                    element: <LoginPage />,
                },
                {
                    path:'register',
                    element: <RegisterPage />
                }
            ]
        },
        {
            path:'mainlayout',
            element: <ProtectedRoute />,
            children:[
                {
                    path: '',
                    element: <MainLayout />,

                }
            ]
        }
    ])


  return  <RouterProvider router={router}/>
}

export default AppRoutes
