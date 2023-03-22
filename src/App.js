import React from 'react';

import CustomRouter from './routes/routes';
import { AuthProvider } from './hooks/Security/Authorization.jsx';

export default function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <CustomRouter />
      </AuthProvider>
    </div>
  );
}
