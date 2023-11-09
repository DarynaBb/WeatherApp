import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Button from "./Button";

function FoundedCityData() {
  const { weatherData, setWeatherData, userCities, setUserCities } = useContext(WeatherContext);

  const addCity = () => {
    const newCity = weatherData;
    setUserCities([...userCities, newCity]);
    setWeatherData({});

  };
  return (
    <div>
        {weatherData.main?.temp ? (
          <div className="city">
            <p>{weatherData.name}</p>
            <p>{Math.floor(weatherData.main.temp)}</p>
            <Button text="Add city" onClick={addCity} disabled={userCities.length > 4} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
  )
}

export default FoundedCityData