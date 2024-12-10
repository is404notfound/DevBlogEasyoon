"use client";

import Card from '@/components/dashboard/Card';
import React, { useEffect, useState } from 'react';
import useTotalCodeRecords, { CodeLineRecords, TotalCodeRecords } from '@/hooks/useTotalCodeRecords'
import { allBlogs } from 'contentlayer/generated'
import LineGraph from '@/components/LineGraph';
import archiveData from '@/generators/output/archive-data.json'
import { useTranslation } from 'react-i18next';
import Button from '@/components/Button';
import SearchIcon from '../../public/static/icons/search.svg';
import NextIcon from '../../public/static/icons/next.svg';
import { useStyledComponentsRegistry } from 'lib/StyledComponentsRegistry';
import InfiniteScrollListLayout from '@/layouts/InfiniteScrollListLayout';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const Dashboard = () => {
  const { t } = useTranslation();
  const {
    postsRanking
    , totalPostCounts
  } = useTotalCodeRecords();
  const [codeCounts, setCodeCounts] = useState<{}>();
  const [dates, setDates] = useState<{}>({});
  const [diff, setDiff] = useState<{}>(0);
  const searchURL = 'https://www.google.com/search?q=devblogeasyoon.xyz';
  const { setInitialItemList } = useInfiniteScroll();
  const { StyledComponentsRegistry, getStyleTags } = useStyledComponentsRegistry();
  const [styleTags, setStyleTags] = useState<string>('');


  // function getCounts(): { [key: string]: number[] } {
  //   const keys: string[] = Object.keys(totalCodeRecords);
  //   const values: CodeLineRecords[][] = Object.values(totalCodeRecords);
  //   const counts = values.map((record) => record.map(({ codeCount }) => codeCount));
  //   const result = {};

  //   for (let i = 0; i < keys.length; i++) {
  //     result[keys[i]] = counts[i];
  //   }

  //   return result;
  // }

  // function getDate() {
  //   const keys: string[] = Object.keys(totalCodeRecords);
  //   const values: CodeLineRecords[][] = Object.values(totalCodeRecords);
  //   const dates = values.map((record) => record.map(({ date }) => date.slice(5)));
  //   const result = {};

  //   for (let i = 0; i < keys.length; i++) {
  //     result[keys[i]] = dates[i];
  //   }

  //   return result;
  // };

  // useEffect(() => {
  //   const values = Object.values(totalCodeRecords);
  //   const last = values.length - 1;
  //   if (!values[last].length) return;

  //   setCodeCounts(getCounts());
  //   setDates(getDate());
  // }, [totalCodeRecords]);

  // useEffect(() => {
  //   if (!codeCounts) return;

  //   const keys: string[] = Object.keys(totalCodeRecords);
  //   const result = {};

  //   for (let i = 0; i < keys.length; i++) {
  //     const counts = codeCounts[keys[i]];
  //     result[keys[i]] = counts[counts.length - 1] - counts[0];
  //   }

  //   setDiff(result);
  // }, [codeCounts]);

  useEffect(() => {
    if (!postsRanking.length) return;

    setInitialItemList(postsRanking as any);

  }, [postsRanking]);


  useEffect(() => {
    const initialStyleTags = getStyleTags();

    if (!initialStyleTags) return;

    setStyleTags(initialStyleTags);
  }, [styleTags]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: styleTags }} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">

        <StyledComponentsRegistry>
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {t('Dashboard')}
            </h1>
          </div>
          <div className="container py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card title="총 페이지 뷰" description="2024년 11월 10일 ~ 2024년 12월 9일" content={totalPostCounts.totalPageViews} />
              <Card title="총 방문자 수" description="2023년 12월 9일 ~ 2024년 12월 9일" content={totalPostCounts.totalVisitors} />
              <Card title="이달의 방문자 수" description="2024년 11월 10일 ~ 2024년 12월 9일" content={totalPostCounts.totalMonthlyVisitors} />
            </div>
          </div>
        </StyledComponentsRegistry>

        <div className='grid grid-cols-1 gap-6 pt-6 pb-6'>
          <Card
            title="인기 글"
            description="2024년 11월 10일 ~ 2024년 12월 9일"
            content={<InfiniteScrollListLayout />}
          />
        </div>
        <StyledComponentsRegistry>
          <div className="grid grid-cols-1 gap-6 pt-6">
            <Card title="Google SEO" description="적용 중" size={'small'} content={(
              <div className='flex flex-row justify-center'>
                <Button text="검색해보기" type={'secondary'} onClick={() => window.open(searchURL, '_blank')} startIcon={<SearchIcon />} endIcon={<NextIcon />} />
              </div>)
            } />
          </div>
        </StyledComponentsRegistry>
      </div>
    </>
  );
}

export default Dashboard;