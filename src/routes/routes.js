// Base imports
import React from 'react';
import { useRoutes } from 'react-router-dom';

// Page imports
import LandingPage from '../pages/LandingPage.jsx';

export default function CustomRouter() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPage />,
    },
  ]);

  return routes;
}
