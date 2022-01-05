import { atom } from 'recoil';

const writerState = atom<string>({
  key: 'writer',
  default: '',
});

export default writerState;
