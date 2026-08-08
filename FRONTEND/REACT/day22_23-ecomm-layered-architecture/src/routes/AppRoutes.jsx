import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicProtected from "./protected/PublicProtected";
import AuthLayout from "../app/layout/AuthLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../app/layout/MainLayout";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPages from "../features/products/ui/pages/ProductPages";
import CartPages from "../features/cart/ui/pages/CartPages";
import OrderPage from "../features/orders/ui/pages/OrderPage";
// import { hydrateUser } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";
import { hydrateUserAction } from "../features/auth/state/authAction";

const AppRoutes = () => {

  let dispatch = useDispatch()

  useEffect(()=>{
    (()=>{
      try {
        dispatch(hydrateUserAction())
        
      } catch (error) {
        console.log("error in hydration...",error)
      }
    })()
  },[])

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
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
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "product",
              element: <ProductPages />,
            },
            {
              path: "cart",
              element: <CartPages />,
            },
            {
              path: "orders",
              element: <OrderPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
