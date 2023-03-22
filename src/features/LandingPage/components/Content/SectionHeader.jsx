import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title }) => (
  <div className='w-full bg-sunrise font-bold text-white text-center text-4xl py-3 block mt-0'>
    {title}
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
