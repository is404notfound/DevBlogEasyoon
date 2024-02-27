const SearchInput = ({ value, onChange }) => {
    return (
        <div className="flex">
            <div className="flex-none pt-2">
                <span className="text-xl text-white">
                    Search Words Here >:
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