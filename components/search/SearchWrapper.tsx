import SearchInput from '@/components/search/SearchInput'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isPopupOpen, currentPopupComponent } from '@/recoil/atoms/Popup';
import SearchList from './SearchList';


const SearchWrapper = () => {
    const [isPopupOpenState, setIsPopupOpenState] = useRecoilState(isPopupOpen);
    const [popupContent, setPopupContent] = useRecoilState(currentPopupComponent);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                setIsPopupOpenState(true);
                setPopupContent(<SearchList />);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);
    return (
        <>
            <div className="mt-10 bg-black p-2 mb-10 rounded-lg">
                <SearchInput placeHolder={"Please press 'Enter Key' to confirm a keyword"} />
            </div>
        </>
    )
}

export default SearchWrapper