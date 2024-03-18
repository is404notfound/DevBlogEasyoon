'use client';

import { useRecoilState } from 'recoil';
import { searchInputValue } from '@/recoil/atoms/Common';
import { useTranslation } from 'react-i18next';

const SearchInput = ({color = 'black', label = 'Search', placeHolder = ''}) => {
    const { t } = useTranslation();
    const [value, setValue] = useRecoilState(searchInputValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="flex">
            <div className="flex-none pt-2">
                <span className="text-xl text-white">
                    [ {t(label)} ] :
                </span>
            </div>
            <div className="flex-auto w-full">
                <input
                    className={`bg-${color} text-white text-xl w-full border-${color} ring-${color} focus:border-${color} focus:ring-${color}`}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={t(placeHolder)}
                />
            </div>
        </div>
    );
};

export default SearchInput;