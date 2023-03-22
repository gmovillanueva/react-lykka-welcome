import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Container = ({ classes, children }) => {
  const containerClasses =
    classes ||
    'relative text-center flex h-screen md:h-auto justify-center items-center';
  return <Box className={containerClasses}>{children}</Box>;
};

Container.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
};
