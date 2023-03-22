import React from 'react';
import { ErrorHelper } from 'components/Input';
import PropTypes from 'prop-types';

export const Input = ({
  label,
  id,
  type,
  placeholder,
  className,
  error,
  errorImage,
  onChange,
  onBlur,
  name,
  iconColor,
  endAdornment,
  startAdornment,
  ...rest
}) => {
  const errorClasses = error ? 'border-sunrise-800 ' : '';
  const startAdornmentClasses = startAdornment ? 'pl-10' : '';
  return (
    <div className='pb-4 relative'>
      {label && (
        <label htmlFor={id} className='block mb-2 text-sm flex pl-2'>
          {label}
        </label>
      )}
      <div className='flex items-center'>
        <div className='absolute left-4 text-granite'>
          <p>{startAdornment}</p>
        </div>
        <input
          {...rest}
          type={type}
          id={id}
          onChange={onChange}
          aria-invalid={!!error}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder}
          className={`
            w-full
            pl-4
            md:px-4
            py-2 
            border 
            rounded-md 
            dark:border-gray-700 
            dark:bg-gray-900 
            dark:text-gray-100 
            ${className}
            ${errorClasses}
            ${startAdornmentClasses}
            `}
        />
        <div className='absolute right-4'>{endAdornment}</div>
      </div>
      {error && <ErrorHelper image={errorImage} message={error.message} />}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  iconColor: PropTypes.string,
  errorImage: PropTypes.node,
  name: PropTypes.string,
  endAdornment: PropTypes.node,
  startAdornment: PropTypes.node,
};

Input.defaultProps = {
  id: Math.floor(Math.random() * 10000),
  type: 'text',
  placeholder: 'placeholder',
};
