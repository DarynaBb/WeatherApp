import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Button from "./Button";
import { FormContext } from "../context/FormContext";
import { MenuContext } from "../context/MenuContext";

function FoundedCityData() {
  const { weatherData, setWeatherData, userCities, setUserCities, setIsCityAdded } = useContext(WeatherContext);
  const { isCityFound, setIsCityFound, onFocus, isCityOpen, setIsCityOpen } = useContext(FormContext);
  const { degree } = useContext(MenuContext);
  
  

  const addCity = () => {
    const newCity = weatherData;
    const cityExists = userCities.some((city) => city.name === newCity.name);

    if (userCities.length < 7 && !cityExists) {
      setUserCities([...userCities, newCity]);
      setWeatherData({});
      setIsCityFound(false);
      setIsCityAdded(true); 
    } 
  };

  return (
    <div className={`${isCityOpen ? "block" : "hidden"}`}>
    <div className={`${onFocus? "opacity-40" : "opacity-100"} mt-[40px]`}>
        {weatherData.main?.temp && isCityFound ? (
        <div className="flexCenter flex-col gap-[10px]">
          <p className="text-[24px]">{weatherData.name}</p>
          <p className="text-[24px]">{`${degree === "celsius" ? Math.floor(weatherData.main.temp) + "°C" : Math.floor(weatherData.main.temp) * 9 / 5 + 32 + "°F"}`}</p>
          <p className="text-[12px]">{weatherData.weather[0].description}</p>
          <div className="flex gap-[10px]">
            <Button text={`${userCities.length > 6 ? "YOUR RAINBOW IS FULL 🌈" : "ADD +"}`} onClick={addCity} disabled={userCities.length > 6 } />
            <Button text="Close" onClick={() => {setIsCityOpen(false); setIsCityFound(false)}} disabled={userCities.length > 6 } />
          </div>
          
        </div>
  ) : (
    <div>Is loading...</div>
  )}
  </div>
</div>
  )
}

export default FoundedCityData