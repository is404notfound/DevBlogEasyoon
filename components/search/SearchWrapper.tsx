import SearchInput from '@/components/search/SearchInput'

const SearchWrapper = () => {
    return (
        <div className="bg-black w-full border-double border-4 p-2 mb-10">
            <SearchInput value={''} onChange={()=>{}} />
        </div>
    )
}

export default SearchWrapper