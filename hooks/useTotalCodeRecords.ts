"use client";

import { useEffect, useState } from "react";
import totalRecordsData from 'code-records-data.json'

interface TotalCodeRecords {
    codeCount: number;
    date: string;
}

const initialTotalCodeRecord: TotalCodeRecords = {date: '', codeCount: 0};

const useTotalCodeRecords = () => {
    const [totalCodeRecords, setTotalCodeRecords] = useState<TotalCodeRecords[]>([]);
    const [latestRecord, setLatestRecord] = useState<TotalCodeRecords>(initialTotalCodeRecord);

    useEffect(() => {
        const result = objectToArray(totalRecordsData);
        setTotalCodeRecords(result);
        setLatestRecord(getLatestRecord(result));
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

    return { totalCodeRecords, latestRecord };
};

export default useTotalCodeRecords;