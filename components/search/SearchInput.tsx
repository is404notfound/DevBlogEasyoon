import { useEffect, useState } from "react";
import { useRecoilState } from 'recoil';
import { searchInputValue } from '@/recoil/atoms/Common';

const SearchInput = () => {
    const [value, setValue] = useRecoilState(searchInputValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="flex">
            <div className="flex-none pt-2">
                <span className="text-xl text-white">
                    Search Posts &gt;:
                </span>
            </div>
            <div className="flex-auto w-full">
                <input
                    className="bg-black text-white w-full border-black focus:border-black focus:ring-black"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Please enter to confirm a keyword..."
                />
            </div>
        </div>
    );
};

export default SearchInput;