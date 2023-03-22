import React from 'react';
import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const HeroImage = ({ imageSrc }) => {
  return (
    <>
      <Image
        loading='lazy'
        src={imageSrc}
        alt='Hero image'
        className='min-w-full max-h-screen aspect-auto hidden md:block'
      />
    </>
  );
};

HeroImage.propTypes = {
  imageSrc: PropTypes.string,
};

export default HeroImage;
