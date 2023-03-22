import React from 'react';

import { Container, HeroImage } from 'components';
import { useMediaQuery } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';

import Hero from 'assests/jpg/nick-karvounis-cj9_lderSUk-unsplash.jpg';
import { LoginContent } from 'features/Login';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [isMobileDevice] = useMediaQuery('(max-width: 500px)');
  return (
    <Container>
      {!isMobileDevice && <HeroImage imageSrc={Hero} />}
      <LoginContent />
      <ToastContainer />
    </Container>
  );
};
export default Login;
