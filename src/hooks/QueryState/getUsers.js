import { useMutation } from 'react-query';
import { apiBackend, doFetch } from '../../utils/api';

export const getVillagerByName = (villagerFirstName) =>
  doFetch(`${apiBackend}/api/user/search?firstName=${villagerFirstName}`).then(
    (data) => data
  );

export const useGetVillagerByName = () =>
  useMutation(getVillagerByName, {
    mutationKey: 'getVillagerByName',
    onSuccess: (data) => data,
  });
