'use client';

import { useRecoilState } from 'recoil';
import { searchInputValue } from '@/recoil/atoms/Common';
import { useTranslation } from 'react-i18next';
import SearchIcon from '/public/static/icons/search.svg';
import styled from 'styled-components';

const SearchInput = ({ color = 'black', label = 'Search', placeHolder = '' }) => {
    const { t } = useTranslation();
    const [value, setValue] = useRecoilState(searchInputValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="flex">
            <SearchTitleContainer>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <span className="text-xl text-white font-semibold">
                    {t(label)}
                </span>
                <span className="text-xl text-white font-semibold">
                    |
                </span>
            </SearchTitleContainer>
            <div className="flex-auto w-full">
                <input
                    className={`bg-${color} text-white text-xl w-full border-none ring-none focus:border-none focus:ring-none}`}
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

const SearchTitleContainer = styled.div`
    width: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-3, 12px);
`;

const SearchIconWrapper = styled(SearchIcon)`
    width: 24px;
    height: 24px;
    fill: white;
    margin-left: var(--spacing-3, 12px);
`;