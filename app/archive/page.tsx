'use client'

import { useTranslation } from 'react-i18next';
import archiveData from 'generators/output/archive-data.json'
import InfiniteScrollListLayout from '@/layouts/InfiniteScrollListLayout';
import { useEffect, useState } from 'react';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

export default function Archive() {
  const { t } = useTranslation();
  const { posts, setPosts } = useInfiniteScroll();
    
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

      setPosts(parsedData);
  }, []);


  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Archive \\\\\\\\\\\\\\\\
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t('인상 깊었던 개발 관련 컨텐츠들을 모아두는 곳 입니다.')}
          </p>
        </div>
        <InfiniteScrollListLayout posts={posts} />
      </div>
    </>
  )
}
