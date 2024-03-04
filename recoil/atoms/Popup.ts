import { atom } from 'recoil';
import { ReactElement } from 'react';

type PopupComponentType = ReactElement;

export const isPopupOpen = atom<Boolean>({
    key: 'isPopupOpen',
    default: false,
});

export const currentPopupComponent = atom<PopupComponentType | null>({
  key: 'currentPopupComponent',
  default: null,
});