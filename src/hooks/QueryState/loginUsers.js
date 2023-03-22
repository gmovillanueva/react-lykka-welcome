import { apiBackend, postOptions, doFetch } from 'utils/api';
import { useMutation } from 'react-query';

export const postUserByDetails = (loginDetails) =>
  doFetch(`${apiBackend}/api/auth/login`, postOptions(loginDetails)).then(
    (data) => data
  );

export const useLoginUser = () =>
  useMutation(postUserByDetails, {
    mutationKey: 'postUserByDetails',
    onSuccess: (data) => data,
  });
