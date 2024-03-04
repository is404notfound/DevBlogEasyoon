import { useState } from "react";
import { useRecoilValue } from "recoil";
import { searchInputValue } from '@/recoil/atoms/Common';

export interface SearchResult {
    title: string;
    description: string;
    url: string;
}

const SearchPopup = () => {
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const searchValue = useRecoilValue(searchInputValue);

    return (
        <div className="bg-blue-500 h-1/2 flex justify-center items-center border-double border-4 p-2 mb-10">
            <div className="flex flex-col w-full">
                <div className="flex justify-center">   
                    <span className="text-2xl text-white"> 
                        * Coming Soon... * 
                    </span>
                </div>
                <div className="flex justify-center">
                    Keyword: {searchValue}
                </div>
            </div>
        </div>
    );
}

export default SearchPopup;