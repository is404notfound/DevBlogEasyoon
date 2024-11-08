import { ReactNode, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { searchInputValue } from '@/recoil/atoms/Common';
import posts from '../../public/search.json';
import SearchInput from "./SearchInput";
import { t } from "i18next";

const SearchList = () => {
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useRecoilState(searchInputValue);

    useEffect(()=> {
        const searchList = posts.
        filter(({title})=>{
            return title.includes(searchValue);
        })
        .map(({ path, ...item })=>{
            return {
                ...item,
                path: `${location.origin}/${path}`
            }
        });
            
        setSearchResults(searchList);
    }, [searchValue]);

    function onChangeInput(e) {
        setSearchValue(e.target.value);
    }

    return (
        <div className="h-fit bg-blue-700 flex justify-center items-center border-double border-4">
            <div className="flex flex-col w-full">
                <div className="flex justify-center text-2xl pt-5">
                    <span className="text-white text-sm"> ※ {t("Pleas 'Click' the row to continue")} </span>
                </div>
                <div className="flex justify-center text-2xl pt-5 pb-5">
                    <div className="border-b-[1px] pb-1">
                        <SearchInput label="Search" color="blue-700" placeHolder="Please enter keyword" />
                    </div>
                </div>
                <div className="h-fit text-white text-2xl p-10">
                    { searchValue 
                        ? searchResults.map(({ title, path, ...rest }, index: number)=>{
                            return (
                                <div className="truncate hover:bg-white/30">
                                    <a href={path}> {`[${index}] ${title}`} </a>
                                </div>
                            );
                    }) : 
                    <span className="flex justify-center"> No Results </span>
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchList;