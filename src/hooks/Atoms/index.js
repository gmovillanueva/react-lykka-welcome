import { atom } from 'recoil';

export const languageAtom = atom({
  key: 'language',
  default: 'en-US',
});

export const alertAtom = atom({
  key: 'alertAtom',
  default: {
    open: false,
    severity: 'info',
    message: '',
  },
});
