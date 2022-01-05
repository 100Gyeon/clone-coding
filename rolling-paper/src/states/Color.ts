import { atom } from 'recoil';

const colorState = atom<string>({
  key: 'color',
  default: '',
});

export default colorState;
