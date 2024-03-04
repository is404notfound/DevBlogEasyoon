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

    function closePopup() {
        setIsPopupOpenState(false);
        setContent(null);
    }
    return (
        <div className="fixed inset-0 bg-black/70 z-10 flex justify-center items-center">
            <div className="w-1/2 bg-gray-700">
                <div className="flex justify-end">
                    <button className="text-2xl" onClick={closePopup}>[X]</button>
                </div>
                {content}
            </div>
        </div>
    );
};

export default PopupLayout;