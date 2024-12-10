import { useEffect } from 'react';
import { itemListState, initialItemListState } from '@/recoil/atoms/InfiniteList';
import { useRecoilState } from 'recoil';

const DISPLAY_ITEM_COUNT: number = 4 as const;
const OFFSET: number = 1.1 as const;

const useInfiniteScroll = () => {
    const [initialItemList, setInitialItemList] = useRecoilState(initialItemListState)
    const [itemList, setItemList] = useRecoilState(itemListState);
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        scrollTop + clientHeight >= scrollHeight / OFFSET && addMoreItems();
    };

    useEffect(() => {
        if (!initialItemList.length) return;

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