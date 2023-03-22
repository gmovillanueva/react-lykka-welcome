// Base imports
import React from 'react';
import { useRoutes } from 'react-router-dom';

// Page imports
import { LandingPage, Login, SignUp } from 'pages';

export default function CustomRouter() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ]);

  return routes;
}
