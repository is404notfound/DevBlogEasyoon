import { useEffect, useState } from "react";
import tagData from 'app/tag-data.json'
import totalRecordsData from 'code-records-data.json'

interface TotalCodeRecords {
    totalCodeLines: number;
    date: Date;
}

const useTotalCodeRecords = () => {
    const [totalCodeRecords, setTotalCodeRecords] = useState<TotalCodeRecords[]>([]);

    useEffect(() => {
        console.log('useTotalCodeRecords: useEffect');
        readTotalCodeRecords();
    }
    , []);

    function readTotalCodeRecords (): void {
        // 브라우저 환경에서는 'fs' 모듈을 사용할 수 없다.
        // 별도의 api를 사용할 수 없는 환경이기 때문에 json 파이을 사용하여 import 한다.
        console.log(totalRecordsData);
    }

 

    return { totalCodeRecords, readTotalCodeRecords };
};

export default useTotalCodeRecords;