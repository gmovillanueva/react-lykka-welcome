import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import chakraTheme from './utils/theme/base-theme';
import CustomRouter from './routes/routes';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider theme={chakraTheme}>
          <CustomRouter />
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </BrowserRouter>
);
