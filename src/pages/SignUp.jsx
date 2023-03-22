import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { Container, HeroImage } from 'components';
import { ToastContainer } from 'react-toastify';

import Hero from 'assests/jpg/zeynep-sumer-MC_Pn0g4YmA-unsplash.jpg';
import { LoginContent } from 'features/Login';

export const SignUp = () => {
  const [isMobileDevice] = useMediaQuery('(max-width: 500px)');
  return (
    <Container>
      {!isMobileDevice && <HeroImage imageSrc={Hero} />}
      <LoginContent />
      <ToastContainer />
    </Container>
  );
};
