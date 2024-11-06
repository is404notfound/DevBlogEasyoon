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
        <div className="fixed h-screen inset-0 bg-gray-900/90 z-50 flex justify-center items-center">
            <div className="absolute w-3/4 h-3/4 bg-gray-500/70 flex flex-col justify-center rounded-md shadow">
                <div className="flex justify-end h-10">
                    <button className="w-10" onClick={closePopup}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-gray-900 dark:text-gray-100"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div className='overflow-scroll h-screen m-1 mt-0'>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default PopupLayout;