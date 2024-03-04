import { atom } from 'recoil';

type ItemType = {
  title: string;
  description: string;
  image: string;
  url: string;
  note: string;
};

export const initialItemListState = atom<ItemType[]>({
  key: 'initialItemListState', // unique ID 
  default: [], // 초기 값
});

export const itemListState = atom<ItemType[]>({
  key: 'itemListState',
  default: [], 
});
