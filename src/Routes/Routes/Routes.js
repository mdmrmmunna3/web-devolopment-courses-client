import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import TermsAndContdition from "../../OthersFile/TermsAndContdition/TermsAndContdition";
import UserProfile from "../../OthersFile/UserProfile/UserProfile";
import Blog from "../../pages/Blog/Blog";
import Course from "../../pages/Course/Course";
import Home from "../../pages/Home/Home";
import Login from "../../pages/LoginRegister/Login/Login";
import Register from "../../pages/LoginRegister/Register/Register";
import CheckOut from "../../shared/CheckOut/CheckOut";
import CourseDetails from "../../shared/CourseDetails/CourseDetails";
import CourseSummaryCard from "../../shared/CourseSummaryCard/CourseSummaryCard";
import ErrorPage from "../../shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: (() => fetch('https://web-devolopment-courses-server.vercel.app/courses'))
            },
            {
                path: '/category/:id',
                element: <CourseDetails></CourseDetails>,
                loader: (({params}) => fetch(`https://web-devolopment-courses-server.vercel.app/category/${params.id}`))
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><CourseSummaryCard></CourseSummaryCard></PrivateRoute>,
                loader: (({params}) => fetch(`https://web-devolopment-courses-server.vercel.app/courses/${params.id}`))
            },
            {
                path:'/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/terms',
                element: <TermsAndContdition></TermsAndContdition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: (({params}) => fetch(`https://web-devolopment-courses-server.vercel.app/courses/${params.id}`))
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])