import React from 'react';
import { IoAlert } from 'react-icons/io5';
import PropTypes from 'prop-types';

export const ErrorHelper = ({ image, message }) => {
  return (
    <span className='flex pl-2 pt-2 text-sunset-800 '>
      <span className='inline-block vertical-middle' aria-hidden='true'>
        {image}
      </span>
      <span className='text-sm inline-block vertical-middle' role='alert'>
        &nbsp;{message}
      </span>
    </span>
  );
};

ErrorHelper.propTypes = {
  image: PropTypes.node,
  message: PropTypes.string,
};

ErrorHelper.defaultProps = {
  image: <IoAlert />,
};
