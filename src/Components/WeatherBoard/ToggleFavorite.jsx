import { useContext, useEffect, useState } from "react";
import heartIcon from "../../assets/heart.svg";
import heartRedIcon from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../contexts";

const ToggleFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, addToFavorites, removeFromFavorite } = useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  
  const find = favorites.find((fav) => fav.location === location);
  useEffect(() => {
    if (find) {
      setIsFavorite(true);
    }else{
      setIsFavorite(false)
    } 
  }, [find]);

  const handleFavoriteToggler = () => {
    if (!find) {
      addToFavorites(latitude, longitude, location);
      setIsFavorite(true);
    } else {
      removeFromFavorite(location);
      setIsFavorite(false);
    }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavoriteToggler}
        >
          <span>Add to Favorite</span>
          <img
            src={isFavorite ? heartRedIcon : heartIcon}
            alt="Favorite icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ToggleFavorite;
