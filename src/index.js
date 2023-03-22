import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ChakraProvider } from '@chakra-ui/react';

import LandingPage from './pages/LandingPage.jsx';
// import Layout from './pages/Layout.jsx';

// import App from './App';
import './index.css';
import chakraTheme from './utils/theme/base-theme';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider theme={chakraTheme}>
          <LandingPage />
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </BrowserRouter>
);
