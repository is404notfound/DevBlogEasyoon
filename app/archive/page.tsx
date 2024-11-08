'use client'

import { useTranslation } from 'react-i18next';
import archiveData from '@/generators/output/archive-data.json';
import InfiniteScrollListLayout from '@/layouts/InfiniteScrollListLayout';
import { useEffect } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

export default function Archive() {
  const { t } = useTranslation();
  const { setInitialItemList } = useInfiniteScroll();
    
  useEffect(() => {
      const parsedData = archiveData.map((item: any) => {
          return {
              image: item['og:image'] || '',
              title: item['og:title'] || '',
              description: item['og:description'] || '',
              url: item['og:url'] || '',
              date: item['article:published_time'] || '',
              note: item.note || '',
          };
      });
      parsedData.reverse();

      setInitialItemList(parsedData as any);
  }, []);


  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <InfiniteScrollListLayout />
      </div>
    </>
  )
}
