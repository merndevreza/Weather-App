import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts";

const useWeather = () => {
  //Hooks
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    dateTime: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    latitude: "",
    longitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const { searchedLocation } = useContext(SearchContext);

  //functionality
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Weather Data...",
      });
      //Fetch API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching Weather Data Failed: ${response.status} `;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        dateTime: data?.dt,
        maxTemp: data?.main?.temp_max,
        minTemp: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        latitude,
        longitude,
      };
      setWeatherData(updateWeatherData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding Location...",
    });
    if (searchedLocation.latitude && searchedLocation.longitude) { 
      fetchWeatherData(searchedLocation.latitude, searchedLocation.longitude);
    } else {
      // get user current position by using JS navigator.geolocation
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [searchedLocation.latitude, searchedLocation.longitude]);

  //retun
  return {
    weatherData,
    loading,
    error,
  };
};

export default useWeather;
