import { useEffect } from 'react';
import { itemListState, initialItemListState } from '@/recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const DISPLAY_ITEM_COUNT = 2;
const useInfiniteScroll = () => {
    const [initialItemList, setInitialItemList] = useRecoilState(initialItemListState)
    const [itemList, setItemList] = useRecoilState(itemListState);
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 20) {
            addMoreItems();
        }
    };

    useEffect(() => {
        const displayItems = initialItemList.slice(0, DISPLAY_ITEM_COUNT);
        setItemList(displayItems);
    }, [initialItemList]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [itemList]);

    function addMoreItems () {
        const currentItemCount = itemList.length;
        const newItems = initialItemList.slice(currentItemCount, currentItemCount + DISPLAY_ITEM_COUNT);
        setItemList([...itemList, ...newItems]);
    }

    return { itemList, setItemList, initialItemList, setInitialItemList }
}

export default useInfiniteScroll;