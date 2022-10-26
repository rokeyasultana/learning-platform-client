import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home/Home/Home';
import Courses from '../Pages/Courses/Courses';
import Blog from '../Pages/Blog/Blog';

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
                path: '/blog',
                element: <Blog></Blog>,
            },
          
        ]
    }
])