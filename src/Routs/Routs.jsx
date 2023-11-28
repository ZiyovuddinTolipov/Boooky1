import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"
import Register from '../pages/register/Register'
import Login from '../pages/register/Login'
import Profil from '../pages/profil/Profil'
import Chat from '../pages/chat/Chat'
import ProfilePage from '../pages/profil/Profil_UI'
import RatingList from '../pages/ratingList/Users'
import Courses from '../pages/courses/Courses'
// Courses Pages

import CoursesHome from "../components/courses/Home"


const Routs = createBrowserRouter([
    {
        path: '/',
        element: <Home />
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
        path: `/users/:id`,
        element: <ProfilePage />
    },
    {
        path: `/users`,
        element: <RatingList />
    },
    {
        path: '/chat',
        element: <Chat />
    },
    {
        path: '/courses/*',
        element: <Courses />
    },
    {
        path: '/home',
        element: <CoursesHome />
    },
    {
        path: '/*',
        element: <div>Error sahifa</div>
    },
    
])

export default Routs
