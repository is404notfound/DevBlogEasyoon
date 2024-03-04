import { atom } from 'recoil';

export const isPopupOpen = atom({
    key: 'isPopupOpen',
    default: false,
});

export const currentPopupComponent = atom({
    key: 'currentPopupComponent',
    default: null,
});
