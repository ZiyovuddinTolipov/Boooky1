import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from '../pages/register/Register'
import Login from '../pages/register/Login'
import Profil from '../pages/profil/Profil'

// Pages


const Routs = createBrowserRouter([
    {
        path: '/',
        element: <>Hello Home</>
    },
    {
        path: '/news',
        element: <>Hello News</>
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/profil',
        element: <Profil />
    },
    {
        path: '/*',
        element: <div>Error sahifa</div>
    },
    
])

export default Routs
