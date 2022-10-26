import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../pages/Course/Course";
import Home from "../../pages/Home/Home";
import CourseDetails from "../../shared/CourseDetails/CourseDetails";

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
                path: '/course-category/:id',
                element: <CourseDetails></CourseDetails>,
                loader: (({params}) => fetch(`http://localhost:5000/course-category/${params.id}`))
            },
        ]
    }
])