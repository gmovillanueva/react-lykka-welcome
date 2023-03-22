// Base imports
import React from 'react';

// Stuff import
import { Box, Flex, Button, Stack } from '@chakra-ui/react';

// Project imports
import LykkaLogo from '../../../../components/Logo/index';

export const Header = () => {
  return (
    <>
      <Box>
        <Flex
          align='center'
          className='
            bg-off-white
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
            <Button>Sign In</Button>
            <Button
              className='
                bg-ocean
                hover:bg-ocean-800
                hidden
                md:inline-flex'
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};
