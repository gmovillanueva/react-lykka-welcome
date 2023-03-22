// Base imports
import React from 'react';

// Stuff import
import { Link } from 'react-router-dom';
import { Box, Flex, Stack } from '@chakra-ui/react';

// Project imports
import { LykkaLogo } from 'components';

export const Header = () => {
  return (
    <>
      <Box>
        <Flex
          align='center'
          className='
            bg-snowdrift
            shadow-md
            fixed
            py-2
            w-full
            z-50'
        >
          {/* Logo */}
          <Flex
            className='
            flex-1
            justify-center
            md:justify-start'
          >
            <LykkaLogo className='ml-4 w-24 md:w-36 md:ml-24' />
          </Flex>

          {/* Button Stack  */}
          <Stack
            className='flex-1 justify-end mr-12'
            direction='row'
            spacing={6}
          >
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};
