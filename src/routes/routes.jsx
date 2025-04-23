import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import MyBookings from '../pages/MyBookings';
import ErrorPage from '../pages/ErrorPage';
import Loader from '../components/ui/Loader';

  const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loader/>,
                loader: ()=> fetch('doctors.json'),
                Component: Home
            },
            {
              path: '/my-booking',
              Component: MyBookings
            },
            {
              path: '/blogs',
              Component: Blogs
            },
        ]

    },
    
  ])

  export default router;