import { useContext } from "react";
import { FavoriteContext, SearchContext } from "../../contexts";
const FavoriteListModal = () => {
  const { favorites } = useContext(FavoriteContext);
  const {setSearchedLocation}=useContext(SearchContext)
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
      <ul className="space-y-2 mt-4 ">
        {favorites.length > 0
          ? favorites.map((fav) => (
              <li key={fav.location}>
                <a className="hover:bg-gray-200 block py-2 px-4 cursor-pointer" onClick={()=>setSearchedLocation({...fav})}>
                {fav.location}
                </a>
              </li>
            ))
          : "Favorite List is Empty"}
      </ul>
    </div>
  );
};

export default FavoriteListModal;
