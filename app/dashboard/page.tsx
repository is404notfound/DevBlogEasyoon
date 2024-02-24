"use client";

import Card from '@/components/dashboard/Card';
import React, { useEffect, useState } from 'react';
import useTotalCodeRecords from 'hooks/useTotalCodeRecords'
import { allBlogs } from 'contentlayer/generated'
import LineGraph from '@/components/LineGraph';
import archiveData from 'generators/output/archive-data.json'

const Dashboard = () => {
  const { totalCodeRecords, latestRecord, commitHistory } = useTotalCodeRecords();
  const [codeCounts, setCodeCounts] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [diff, setDiff] = useState<number>(0);

  useEffect(() => {
    setCodeCounts(totalCodeRecords.map((record) => record.codeCount));
    setDates(totalCodeRecords.map((record) => record.date.slice(5)));
  }, [totalCodeRecords]);

  useEffect(() => {
    setDiff(codeCounts[codeCounts.length - 1] - codeCounts[0]);
  }, [codeCounts]);
    
  return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Dashboard \\\\\\\\\\\\\\\\
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
          <div className="grid grid-cols-1 mt-6 mb-6 pt-6">
            <LineGraph
                xAxisData={dates}
                yAxisData={codeCounts}
                yAxisLabel='Code Count'
                title={`${dates.length}일간의 코드량 변화`}
                description={`2024-${dates[0]}부터 2024-${dates[dates.length - 1]}까지의 코드 작성량 변화 추이`}
                point={diff > 0 ? `+${diff}줄` : `${diff}줄`}
              />
          </div>
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