import Card from '@/components/dashboard/Card';
import React, { useEffect } from 'react';
import useTotalCodeRecords from 'hooks/useTotalCodeRecords'

const Dashboard = () => {
  const { totalCodeRecords } = useTotalCodeRecords();
    
  return (
    <div className="flex flex-col h-screen">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Dashboard \\\\\\\\\\\\\\\\
          </h1>
        </div>
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="세상으로 나간 코드" description="[2024 이후 / 개인 / 줄(line)]" content={totalCodeRecords} />
          <Card title="쓴 글" description="[편]" content="36" />
          <Card title="인상 깊었던 글" description="[편]" content="??" />
        </div>
        <div className="grid grid-cols-1 gap-6 pt-6 ">
          <Card title="SEO 실적" description="[키워드 / 순위]" content="?? / ??" />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
