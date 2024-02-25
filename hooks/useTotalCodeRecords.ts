"use client";

import { useEffect, useState } from "react";
import totalRecordsData from 'generators/output/code-records-data.json'
import commitHistoryData from 'generators/output/commit-history-data.json'

interface TotalCodeRecords {
    codeCount: number;
    date: string;
}

const initialTotalCodeRecord: TotalCodeRecords = {date: '', codeCount: 0};

const useTotalCodeRecords = () => {
    const [totalCodeRecords, setTotalCodeRecords] = useState<TotalCodeRecords[]>([]);
    const [latestRecord, setLatestRecord] = useState<TotalCodeRecords>(initialTotalCodeRecord);
    const [commitHistory, setCommitHistory] = useState<string[]>([]);

    useEffect(() => {
        const totalRecords = objectToArray(totalRecordsData);
        const commitHistory = Object.values(commitHistoryData);
        
        setTotalCodeRecords(totalRecords);
        setLatestRecord(getLatestRecord(totalRecords));
        setCommitHistory(commitHistory);
    }
    , []);
    
    function objectToArray(obj: any){
        return Object.keys(obj).map((key)=>{ 
            return {date: key, codeCount: obj[key]};
        }) || [];
    }

    function getLatestRecord(records: TotalCodeRecords[]){
        return records[records.length - 1] || initialTotalCodeRecord;
    }

    return { totalCodeRecords, latestRecord, commitHistory };
};

export default useTotalCodeRecords;