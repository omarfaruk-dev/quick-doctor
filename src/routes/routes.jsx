import React from 'react';

import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import MyBookings from '../pages/MyBookings';
import ErrorPage from '../pages/ErrorPage';
import Loader from '../components/ui/Loader';
import ViewDetails from '../pages/ViewDetails/ViewDetails';
import BlogDetail from '../pages/BlogDetail';
import Contact from '../pages/Contact';
import Emergency from '../pages/Emergency';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader />,
        loader: () => fetch('doctors.json'),
        Component: Home
      },
      {
        path: '/doctor-details/:doctorLicense',
        hydrateFallbackElement: <Loader />,
        loader: () => fetch('../doctors.json'),
        Component: ViewDetails
      },
      {
        path: '/my-bookings',
        hydrateFallbackElement: <Loader />,
        loader: () => fetch('../doctors.json'),
        Component: MyBookings
      },
      {
        path: '/blogs',
        hydrateFallbackElement: <Loader />,
        loader: () =>fetch('../blogs.json'),
        Component: Blogs
      },
      {
        path: '/blogs/:blogId',
        loader: () =>fetch('../blogs.json'),
        Component: BlogDetail
      },
      {
        path: '/contact-us',
        Component: Contact
      },
      {
        path: '/emergency',
        Component: Emergency
      }
    ]

  },

])

export default router;