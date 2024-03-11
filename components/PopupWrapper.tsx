import PopupLayout from "@/layouts/PopupLayout"
import { useRecoilValue } from 'recoil';
import { isPopupOpen } from '@/recoil/atoms/Popup';

/** 
 * @description This component is a wrapper for the PopupLayout component.
 * Make for recoil root boundary.
*/
const PopupWrapper = () => {
    const isPopupOpenState = useRecoilValue(isPopupOpen);

    return (
        <div>
            {isPopupOpenState && <PopupLayout />}
        </div>
    )
}

export default PopupWrapper