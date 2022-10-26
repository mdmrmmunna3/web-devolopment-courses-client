import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../pages/Course/Course";
import Home from "../../pages/Home/Home";
import Login from "../../pages/LoginRegister/Login/Login";
import Register from "../../pages/LoginRegister/Register/Register";
import CourseDetails from "../../shared/CourseDetails/CourseDetails";
import CourseSummaryCard from "../../shared/CourseSummaryCard/CourseSummaryCard";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: (() => fetch('http://localhost:5000/courses'))
            },
            {
                path: '/category/:id',
                element: <CourseDetails></CourseDetails>,
                loader: (({params}) => fetch(`http://localhost:5000/category/${params.id}`))
            },
            {
                path: '/courses/:id',
                element: <CourseSummaryCard></CourseSummaryCard>,
                loader: (({params}) => fetch(`http://localhost:5000/courses/${params.id}`))
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])