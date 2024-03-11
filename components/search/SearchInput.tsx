import { useRecoilState } from 'recoil';
import { searchInputValue } from '@/recoil/atoms/Common';

const SearchInput = ({color = 'black', label = 'Search Keyword', placeHolder = ''}) => {
    const [value, setValue] = useRecoilState(searchInputValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="flex">
            <div className="flex-none pt-2">
                <span className="text-xl text-white">
                    [ {label} ] :
                </span>
            </div>
            <div className="flex-auto w-full">
                <input
                    className={`bg-${color} text-white text-xl w-full border-${color} ring-${color} focus:border-${color} focus:ring-${color}`}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={placeHolder}
                />
            </div>
        </div>
    );
};

export default SearchInput;