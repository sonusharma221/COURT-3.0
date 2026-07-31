import React, { lazy, Suspense } from 'react'
import App from '../App'
import MainLayout from '../layouts/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { getUsers } from '../apis/UsersApi'
let About = lazy(()=>import('../pages/About'))
let Contact = lazy(()=>import('../pages/Contact'))
// import Contact from '../pages/Contact'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout />,
            children:[
                {
                    path:'',
                    element:<App />
                },
                {
                    path:'about',
                    loader:getUsers, // api function phle chalega because of loader
                    hydrateFallbackElement: <h1>loading api</h1>, // blank screen ke gajh par ye dekega
                    element:(
                        <Suspense fallback={<h1>Loading about...</h1>}> 
                            <About />
                        </Suspense>
                    ),
                },
                {
                    path:'contact',
                    element:(
                        <Suspense fallback={<h1>Contact loading...</h1>}>
                            <Contact />
                        </Suspense>
                    ),
                },
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes
