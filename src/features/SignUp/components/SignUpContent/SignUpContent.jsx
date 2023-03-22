import React from 'react';
import { Image } from '@chakra-ui/react';

import { LoginForm } from 'features/Login';
import LoginHeader from 'assests/svg/logoCleanedCentered.svg';

export const SignUpContent = () => {
  return (
    <div className='relative md:absolute md:top-2/4 md:left-2/4 md:-translate-y-1/2 md:-translate-x-1/2 w-11/12 md:w-96'>
      <div className='z-20 min-w-full h-content bg-white rounded-lg drop-shadow-lg'>
        <div className='min-w-full flex justify-center pt-4'>
          <Image
            src={LoginHeader}
            alt='login header'
            className='max-h-16'
            loading='lazy'
          />
        </div>
        <p className='text-sm dark:text-gray-400 pt-1'>
          Sign in to access your village
        </p>
        <div className='pt-10 flex'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
