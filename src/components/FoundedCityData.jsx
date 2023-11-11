import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Button from "./Button";
import { FormContext } from "../context/FormContext";
import { MenuContext } from "../context/MenuContext";

function FoundedCityData() {
  const { weatherData, setWeatherData, userCities, setUserCities, isCityAdded, setIsCityAdded } = useContext(WeatherContext);
  const { isCityFound, setIsCityFound } = useContext(FormContext);
  const { degree } = useContext(MenuContext);

  const addCity = () => {
    if (userCities.length < 7) {
    const newCity = weatherData;
    setUserCities([...userCities, newCity]);
    setWeatherData({});
    setIsCityFound(false);
    setIsCityAdded(true);
    }
    
  };
  return (
    <div className="mt-[40px]">
        {weatherData.main?.temp ? (
          <div className="flexCenter flex-col gap-[10px]">
            <p className="text-[24px]">{weatherData.name}</p>
            <p className="text-[24px]">{`${degree === "celsius" ? Math.floor(weatherData.main.temp) + "°C" : Math.floor(weatherData.main.temp) * 9/5 + 32 + "°F"}`}</p>

            {/* <div className={`${userCities.length > 6 || isCityAdded ? "hidden" : "block"} `}> */}
              <Button text={`${userCities.length > 6 ? "YOUR RAINBOW IS FULL 🌈" : "ADD +"}`} onClick={addCity} disabled={userCities.length > 6} />
            {/* </div> */}
            {/* <div className={`${isCityAdded ? "block" : "hidden"} `}>
              <Button text="DONE" />
            </div> */}
          </div>
        ) : (
          <div></div>
        )}
      </div>
  )
}

export default FoundedCityData