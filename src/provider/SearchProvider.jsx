import { useState } from "react";
import { SearchContext } from "../contexts";

// eslint-disable-next-line react/prop-types
const SearchProvider = ({ children }) => {
  const [searchedLocation, setSearchedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });
  return (
    <SearchContext.Provider value={{ searchedLocation, setSearchedLocation }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
