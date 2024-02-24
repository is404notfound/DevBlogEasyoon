import archiveData from 'generators/output/archive-data.json'
import { useEffect, useState } from 'react';

const useArchive = () => {
    const [parsedData, setParsedData] = useState([]) as any[];
    
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

        setParsedData(parsedData);
    }, []);

    return { archiveData: parsedData }
}

export default useArchive;