import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { alertAtom } from '../Atoms';

const CustomToast = () => {
  const [snackbarState, setSnackbarState] = useRecoilState(alertAtom);

  const handleClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackbarState.open}
      autoHideDuration={3000}
      onClose={() => handleClose()}
    >
      <Alert variant='filled' severity={snackbarState.severity}>
        {snackbarState.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomToast;
