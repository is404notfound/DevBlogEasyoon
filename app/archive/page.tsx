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
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('Archives')}
          </h1>
        </div>
        <InfiniteScrollListLayout />
      </div>
    </>
  )
}
