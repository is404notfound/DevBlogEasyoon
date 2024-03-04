import SearchInput from '@/components/search/SearchInput'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isPopupOpen, currentPopupComponent } from '@/recoil/atoms/Popup';
import SearchPopup from './SearchPopup';

const SearchWrapper = () => {
    const [isPopupOpenState, setIsPopupOpenState] = useRecoilState(isPopupOpen);
    const [popupContent, setPopupContent] = useRecoilState(currentPopupComponent);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                setIsPopupOpenState(true);
                setPopupContent(<SearchPopup />);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);
    return (
        <>
        <div className="bg-black w-full border-double border-4 p-2 mb-10">
            <SearchInput />
        </div>
        </>
    )
}

export default SearchWrapper