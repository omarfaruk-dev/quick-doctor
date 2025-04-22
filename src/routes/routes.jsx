import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';

  const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]

    },
    
  ])

  export default router;