import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import MyBookings from '../pages/MyBookings';

  const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
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