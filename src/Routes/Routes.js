import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home/Home/Home';
import Courses from '../Pages/Courses/Courses';
import Blog from '../Pages/Blog/Blog';
import Login from '../Pages/Login/Login/Login';
import Faq from '../Pages/Faq/Faq';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
          
            {
                path: '/courses',
                element: <Courses></Courses>,
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
          
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
          
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
            },
          
        ]
    }
])