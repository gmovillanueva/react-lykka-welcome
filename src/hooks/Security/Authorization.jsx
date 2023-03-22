import React, { createContext, useContext } from 'react';
import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { doFetch, apiBackend } from '../../utils/api';

const AuthContext = createContext({
  user: {},
});

const getUserAuthContext = () =>
  doFetch(`${apiBackend}/api/auth`).then((data) => data?.user);

const useUserAuthContext = () =>
  useQuery({
    retry: 0,
    queryKey: 'userAuthGet',
    queryFn: getUserAuthContext,
    staleTime: 60 * 60 * 1000,
  });

export const AuthProvider = ({ children }) => {
  const { data, isError, isFetching } = useUserAuthContext();

  if (!isFetching && !isError) {
    if (isError) {
      return children;
    }
    return (
      <AuthContext.Provider value={{ user: data }}>
        {children}
      </AuthContext.Provider>
    );
  }
  return <CircularProgress color='secondary' />;
};

export const useAuth = () => useContext(AuthContext);

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }
  return children;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};
