"use client";

import { useEffect, useState } from "react";
import totalRecordsData from 'generators/output/code-records-data.json'
import commitHistoryData from 'generators/output/commit-history-data.json'
import cookTheFridgeData from 'generators/output/cook-the-fridge-data.json'

export interface CodeLineRecords {
    codeCount: number;
    date: string;
}

export interface TotalCodeRecords {
    [key: string]: CodeLineRecords[];
}

const initialTotalCodeRecord: CodeLineRecords = {date: '', codeCount: 0};

const useTotalCodeRecords = () => {
    const [totalCodeRecords, setTotalCodeRecords] = useState<TotalCodeRecords>({DEV_BLOG_EASYOON: [], COOK_THE_FRIDGE: []});
    const [latestRecord, setLatestRecord] = useState<CodeLineRecords>(initialTotalCodeRecord);
    const [commitHistory, setCommitHistory] = useState<string[]>([]);

    useEffect(() => {
        const codeRecordsAll = {
            DEV_BLOG_EASYOON: objectToArray(totalRecordsData),
            COOK_THE_FRIDGE: objectToArray(cookTheFridgeData)
        }
        const commitHistory = Object.values(commitHistoryData);
        
        setTotalCodeRecords(codeRecordsAll);
        setLatestRecord(getLatestRecord(codeRecordsAll.DEV_BLOG_EASYOON));
        setCommitHistory(commitHistory);
    }
    , []);
    
    function objectToArray(obj: any){
        return Object.keys(obj).map((key)=>{ 
            return {date: key, codeCount: obj[key]};
        }) || [];
    }

    function getLatestRecord(records: CodeLineRecords[]){
        return records[records.length - 1] || initialTotalCodeRecord;
    }

    return { totalCodeRecords, latestRecord, commitHistory };
};

export default useTotalCodeRecords;