// Base imports
import React from 'react';

// Stuff import

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Project imports

export const LoginModal = ({ title }) => {
  return (
    <>
      <Link to='/login'>{title}</Link>
    </>
  );
};

LoginModal.propTypes = {
  title: PropTypes.string,
};

export default LoginModal;
