import { useRecoilState } from 'recoil';
import { currentPopupComponent, isPopupOpen } from '@/recoil/atoms/Popup';
import { useEffect } from 'react';

const PopupLayout = () => {
    const [content, setContent] = useRecoilState(currentPopupComponent);
    const [isPopupOpenState, setIsPopupOpenState] = useRecoilState(isPopupOpen);

    useEffect(() => {
        document.body.style.overflow = "hidden";
    
        return () => {
          document.body.style.overflow = "unset";
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closePopup();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    function closePopup() {
        setIsPopupOpenState(false);
        setContent(null);
    }
    return (
        <div className="fixed h-screen inset-0 bg-teal-800/70 z-10 flex justify-center items-center">
            <div className="absolute w-3/4 h-3/4 bg-gray-500 flex flex-col justify-center">
                <div className="flex justify-end">
                    <button className="text-2xl text-white p-1" onClick={closePopup}>[X]</button>
                </div>
                <div className='overflow-scroll h-screen m-1 mt-0'>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default PopupLayout;