import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { toast } from 'react-toastify';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { Button } from '@chakra-ui/react';

import { useLoginUser } from 'hooks/QueryState';
import { loginFormSchema } from 'utils/validation';
import { saveAuthToken } from 'utils/authorization';
import { Input } from 'components/Input';

import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const { mutate } = useLoginUser();

  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(loginFormSchema),
  });

  const onSuccess = (formData) => {
    mutate(formData, {
      onMutate: () => {
        toast.info('One sec...');
      },
      onSuccess: (data) => {
        saveAuthToken(data.token).then((savedToken) => {
          if (savedToken) {
            toast.success('Welcome!', {
              position: toast.POSITION.TOP_CENTER,
            });
            setTimeout(() => {
              window.location.href = '/dashboard';
            }, 2500);
          } else {
            toast.error('Uh oh! Error, check the console for more details', {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSuccess)} className='w-full mx-4'>
        <Controller
          control={control}
          name='userEmail'
          render={({
            field: { onChange, onBlur, name },
            fieldState: { error },
          }) => (
            <>
              <Input
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                error={error}
                placeholder='awesomeemail@gmail.com'
                label='Email'
                id='email'
              />
            </>
          )}
        />

        <Controller
          control={control}
          name='userPassword'
          render={({
            field: { onChange, onBlur, name },
            fieldState: { error },
          }) => (
            <>
              <Input
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                error={error}
                placeholder='Password'
                label='Password'
                type={passwordIsVisible ? 'text' : 'password'}
                id='password'
                endAdornment={
                  <button
                    type='button'
                    onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                  >
                    {passwordIsVisible ? (
                      <IoEyeSharp color='#a2a2a2' />
                    ) : (
                      <IoEyeOffSharp />
                    )}
                  </button>
                }
              />
            </>
          )}
        />
        <Button
          className='bg-sunrise text-lavender-700 w-full mb-4'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </>
  );
};
