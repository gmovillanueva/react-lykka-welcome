// Base import
import React from 'react';

// @chakra import
import { Box } from '@chakra-ui/react';

// Project import
import { Content } from './components/Content';

export const Sidebar = () => (
  <>
    <Box className='bg-ocean block fixed min-h-full'>
      <Box className='bg-ocean w-[280px] h-full'>
        <Content />
      </Box>
    </Box>
  </>
);
