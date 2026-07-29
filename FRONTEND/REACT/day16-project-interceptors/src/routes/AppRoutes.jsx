import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import ProductPage from "../pages/ProductPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/mainlayout",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'users',
          element: <UsersPage />,
        },
        {
          path: 'products',
          element: <ProductPage />,
        },
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
