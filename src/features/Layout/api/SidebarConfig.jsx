// Base imports
import React from 'react';

// @mui imports
import {
  MdDashboard,
  MdMessage,
  MdEvent,
  MdLocationPin,
  MdSettings,
} from 'react-icons/md';

// Project imports
// Style imports

export const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/',
    icon: <MdDashboard />,
  },
  {
    title: 'chat',
    path: 'chat',
    icon: <MdMessage />,
  },
  {
    title: 'events',
    path: 'events',
    icon: <MdEvent />,
  },
  {
    title: 'map list',
    path: 'maplist',
    icon: <MdLocationPin />,
  },
  {
    title: 'settings',
    path: 'settings',
    icon: <MdSettings />,
  },
];
