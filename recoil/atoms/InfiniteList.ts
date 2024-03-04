import { atom } from 'recoil';

export const initialItemListState = atom({
  key: 'initialItemListState', // unique ID 
  default: [], // 초기 값
});

export const itemListState = atom({
  key: 'itemListState',
  default: [], 
});
