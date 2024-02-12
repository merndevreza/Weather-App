/* eslint-disable react/prop-types */
import { FavoriteContext } from "../contexts";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([...favorites, { latitude, longitude, location }]);
  };
  const removeFromFavorite = (location) => {
    const restFavorites = favorites.filter((fav) => fav.location !== location);
    setFavorites(restFavorites);
  };
  return (
    <FavoriteContext.Provider
      value={{favorites, addToFavorites, removeFromFavorite}}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
