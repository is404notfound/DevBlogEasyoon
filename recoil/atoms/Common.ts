import { atom } from 'recoil';

export const searchInputValue = atom<string>({
    key: 'searchInputValue',
    default: '',
});
