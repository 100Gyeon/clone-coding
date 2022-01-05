import { atom } from 'recoil';

const contentState = atom<string>({
  key: 'content',
  default: '',
});

export default contentState;
