import { useContext } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/WeatherBoard/WeatherBoard";
import { WeatherContext } from "./contexts";
import clearSkyImg from "./assets/backgrounds/clear-sky.jpg";
import cloudImg from "./assets/backgrounds/scattered-clouds.jpg";
import mistImg from "./assets/backgrounds/mist.jpeg";
import rainyImg from "./assets/backgrounds/rainy-day.jpg";
import winterImg from "./assets/backgrounds/winter.jpg";
import thunderImg from "./assets/backgrounds/thunderstorm.jpg";
import sunnyImg from "./assets/backgrounds/sunny.jpg";
import snowImg from "./assets/backgrounds/snow.jpg";

const Page = () => {
  const { loading, weatherData } = useContext(WeatherContext);
  const { climate } = weatherData;
  const getBg = (climate) => {
    switch (climate) {
      case "Rain":
        return rainyImg;
      case "Clouds":
        return cloudImg;
      case "Clear":
        return clearSkyImg;
      case "Snow":
        return snowImg;
      case "Thunder":
        return thunderImg;
      case "Fog":
        return winterImg;
      case "Haze":
        return mistImg;
      case "Mist":
        return mistImg; 
      default:
        return sunnyImg;
    }
  };
  return (
    <>
      {loading.state ? (
        <p className="text-center">{loading.message}</p>
      ) : (
        <div style={{backgroundImage:`url(${getBg(climate)})`}}
          className={`bg-cover bg-no-repeat h-screen justify-center flex flex-col`}
        > 
          <Header />
          <WeatherBoard />
        </div>
      )}
    </>
  );
};

export default Page;
