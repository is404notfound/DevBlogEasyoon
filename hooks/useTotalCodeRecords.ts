"use client";

import { useEffect, useState } from "react";
// import totalRecordsData from 'generators/output/code-records-data.json'
// import commitHistoryData from 'generators/output/commit-history-data.json'
// import cookTheFridgeData from 'generators/output/cook-the-fridge-data.json'
// import findAnomaliesData from 'generators/output/666-find-anomalies.json'
import postsRankingData from 'generators/output/posts-ranking-data.json'

export interface CodeLineRecords {
    codeCount: number;
    date: string;
}

export interface TotalCodeRecords {
    [key: string]: CodeLineRecords[];
}

export interface TotalPostCounts {
    totalPageViews: number;
    totalVisitors: number;
    totalMonthlyVisitors: number;
    [key: string]: number;
}

const initialTotalCodeRecord: CodeLineRecords = { date: '', codeCount: 0 };

const useTotalCodeRecords = () => {
    const [totalCodeRecords, setTotalCodeRecords] = useState<TotalCodeRecords>({ DEV_BLOG_EASYOON: [], COOK_THE_FRIDGE: [] });
    const [latestRecords, setLatestRecords] = useState<CodeLineRecords[]>([]);
    const [commitHistory, setCommitHistory] = useState<string[]>([]);
    const [postsRanking, setPostsRanking] = useState([]);
    const [totalPostCounts, setTotalPostCounts] = useState<TotalPostCounts>(
        {
            totalPageViews: 0,
            totalVisitors: 0,
            totalMonthlyVisitors: 0
        }
    );


    useEffect(() => {
        // const codeRecordsAll = {
        //     DEV_BLOG_EASYOON: objectToArray(totalRecordsData),
        //     COOK_THE_FRIDGE: objectToArray(cookTheFridgeData),
        //     FIND_ANOMALIES: objectToArray(findAnomaliesData)
        // }
        // const commitHistory = Object.values(commitHistoryData);
        // const latestRecord = [
        //     getLatestRecord(codeRecordsAll.DEV_BLOG_EASYOON)
        //     , getLatestRecord(codeRecordsAll.COOK_THE_FRIDGE)
        //     , getLatestRecord(codeRecordsAll.FIND_ANOMALIES)
        // ];

        // setTotalCodeRecords(codeRecordsAll);
        // setLatestRecords(latestRecord);
        setCommitHistory(commitHistory);
        setPostsRanking(postsRankingData.rankingPosts as any);
        setTotalPostCounts(postsRankingData.totalPostCounts);
    }
        , []);

    function objectToArray(obj: any) {
        return Object.keys(obj).map((key) => {
            return { date: key, codeCount: obj[key] };
        }) || [];
    }

    function getLatestRecord(records: CodeLineRecords[]) {
        return records[records.length - 1] || initialTotalCodeRecord;
    }

    return {
        // totalCodeRecords
        // , latestRecords
        // , commitHistory
        postsRanking
        , totalPostCounts
    };
};

export default useTotalCodeRecords;