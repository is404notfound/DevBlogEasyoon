import archiveData from 'generators/output/archive-data.json'
import { useEffect } from 'react';

const useArchive = () => {

    useEffect(() => {
        console.log(archiveData);
    }, []);

    return {}
}

export default useArchive;