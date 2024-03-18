"use client";

import Card from '@/components/dashboard/Card';
import React, { useEffect, useState } from 'react';
import useTotalCodeRecords, { CodeLineRecords } from '@/hooks/useTotalCodeRecords'
import { allBlogs } from 'contentlayer/generated'
import LineGraph from '@/components/LineGraph';
import archiveData from '@/generators/output/archive-data.json'
import { useTranslation } from 'react-i18next';


const Dashboard = () => {
  const { t } = useTranslation();
  const { totalCodeRecords, latestRecord, commitHistory } = useTotalCodeRecords();
  const [codeCounts, setCodeCounts] = useState<{}>();
  const [dates, setDates] = useState<{}>({});
  const [diff, setDiff] = useState<{}>(0);

  function getCounts(): { [key: string]: number[] } {
    const keys: string[] = Object.keys(totalCodeRecords);
    const values: CodeLineRecords[][] = Object.values(totalCodeRecords);
    const counts = values.map((record) => record.map(({ codeCount }) => codeCount));
    const result = {};

    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = counts[i];
    }

    return result;
  }

  function getDate() {
    const keys: string[] = Object.keys(totalCodeRecords);
    const values: CodeLineRecords[][] = Object.values(totalCodeRecords);
    const dates = values.map((record) => record.map(({ date }) => date.slice(5)));
    const result = {};

    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = dates[i];
    }

    return result;
  };


  useEffect(() => {
    setCodeCounts(getCounts());
    setDates(getDate());
  }, [totalCodeRecords]);

  useEffect(() => {
    if (!codeCounts) return;

    const keys: string[] = Object.keys(totalCodeRecords);
    const result = {};

    for (let i = 0; i < keys.length; i++) {
      const counts = codeCounts[keys[i]];
      result[keys[i]] = counts[counts.length - 1] - counts[0];
    }

    setDiff(result);
  }, [codeCounts]);

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {t('Dashboard')} \\\\\\\\\\\\\\\\
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Hello, World!
        </p>
      </div>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="세상으로 나간 코드" description="[줄/(tsx,ts,js,css,sh)]" content={latestRecord.codeCount || '??'} />
          <Card title="쓴 글" description="[편]" content={allBlogs.length} />
          <Card title="저장한 글" description="[편]" content={archiveData.length} />
        </div>
        { codeCounts && Object.keys(totalCodeRecords).map((key: string, i) => {
          const start = dates[key][0];
          const end = dates[key][dates[key].length - 1];
          const description = `2024-${start}부터 2024-${end}까지`;
          const diffCount = diff[key];

          return (
            <div className="grid grid-cols-1 mt-6 mb-6 pt-6">
              <LineGraph
                xAxisData={dates[key]}
                yAxisData={codeCounts[key]}
                yAxisLabel='codeCounts'
                title={`[${i + 1}] ${key} 코드 변화량`}
                description={description}
                point={diffCount > 0 ? `+${diffCount}줄` : `${diffCount}줄`}
              />
            </div>
          )
        })
        }
        <div className="grid grid-cols-1 gap-6 pt-6 ">
          <Card title="LATEST HISTORY" description="[Commit / 10건]" content={commitHistory || ''} fontSizeLevel={'xl'} />
        </div>
        <div className="grid grid-cols-1 gap-6 pt-6 ">
          <Card title="SEO 실적" description="[키워드 / 순위]" content="- / -" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;