import { useContext } from "react"; 
import { SearchContext } from "../../contexts";
import { getLocationByName } from "../../data/location-data"; 
import { useDebounce } from "../../hooks";
const Search = () => { 
  const { setSearchedLocation } = useContext(SearchContext);
const doSearch=useDebounce((value)=>{
  const searchedLocation = getLocationByName(value);
  setSearchedLocation({...searchedLocation});
},500)
  const handleChange = (e) => {
    const value=e.target.value 
    doSearch(value)
  }; 
  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
};

export default Search;
