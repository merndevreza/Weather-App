import Page from "./Page";
import { FavoriteProvider, WeatherProvider } from "./provider";
import SearchProvider from "./provider/SearchProvider";

function App() {
  return (
    <>
      <SearchProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <Page />
          </FavoriteProvider>
        </WeatherProvider>
      </SearchProvider>
    </>
  );
}

export default App;
