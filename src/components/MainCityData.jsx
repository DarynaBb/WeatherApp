import React from 'react'
import { useParams } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";
import { useContext, useState, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import { NotFoundPage } from '../pages/NotFoundPage';
import TopNav from "../components/TopNav";
import { weatherVisualization } from '../constants';


function MainCityData() {
    const { userCities, goBack } = useContext(WeatherContext);
    const { edit, degree, theme } = useContext(MenuContext); 
    const { city } = useParams();
    const [location, setLocation] = useState(null);


    const randomPic = () => {
        const randomWeather = Math.floor(Math.random() * weatherImages.length);
        
        let randomState;
        if (randomWeather === 0) {
            randomState = "snowy";
        } else if (randomWeather === 1) {
            randomState = "rainy";
        } else {
            randomState = "sunny";
        }
        const randomIcon = Math.floor(Math.random() * weatherImages[randomWeather][randomState].length);
        const randomImage = weatherImages[randomWeather][randomState].map((image) => image);
        return randomImage[randomIcon];
      }


  useEffect(() => {
    const getCityByName = (cityParam) => {
      const foundLocation = userCities?.find((city) => city.name === cityParam);
      console.log("location:", foundLocation);
      return foundLocation;
    };
    const foundLocation = getCityByName(city);
    setLocation(foundLocation);
  }, [userCities, city]);

  const updatedArray = (cityName) => {
    const cities = userCities.filter((city) => city.name !== cityName);
    return cities;
  };

    

  return (
     <>
     <TopNav text={`${location ? location.name : ""}`} to="/dashboard"/>
         {location ? (
            <div className="flex flex-col items-center w-full mt-[50px]">
            <div className="text-[12px] relative flex flex-col items-center w-[350px]">
                <div className="relative"> 
                    <img src={weatherVisualization.get(location.weather[0].main).iconLocation} alt="icon" width={200} height={200} />
                    <p className="text-[130px]">{`${degree === "celsius" ? Math.floor(location.main.temp) : Math.floor(location.main.temp) * 9 / 5 + 32 }`}
                        <span className="text-[31px]">{`${degree === "celsius" ? "°C" : "°F"}`}</span>
                    </p>
                    <div className="absolute -left-[20px] bottom-[20px]">
                        <div className="relative">
                            <p>TEMP: {`${degree === "celsius" ? Math.floor(location.main.temp) + "°C" : Math.floor(location.main.temp) * 9 / 5 + 32 + "°F"}`}</p>
                            <p>FEELS: {`${degree === "celsius" ? Math.floor(location.main.feels_like) + "°C" : Math.floor(location.main.feels_like) * 9 / 5 + 32 + "°F"}`}</p>
                            <div className="bg-white w-[10px] h-[1px] absolute -top-[5px] -rotate-45 -right-[10px]"/>
                        </div>
                        
                    </div>
                </div>
                <div className="absolute right-[20px] top-[5px]">
                    <div className="relative">
                        <p>RISE: 7:20 </p>
                        <p>SET: 16:56 </p>
                        <div className="bg-white w-[10px] h-[1px] absolute -bottom-[5px] -rotate-45 -left-[10px]"/>
                    </div>
                </div>
                <div className="absolute left-0 top-[40px]">
                    <div className="relative text-left">
                        <p>WIND: {location.wind.speed} M/S</p>
                        <p>CLOUDS: {location.clouds.all} %</p>
                        <div className="bg-white w-[10px] h-[1px] absolute -bottom-[5px] rotate-45 -right-[10px]"/>
                    </div>
                    
                </div>           
                </div>
                <div className="mt-[50px]">
                    <p className="text-[24px]">{weatherVisualization.get(location.weather[0].main).titleText}</p>
                    <p className="font-sans text-[14px] max-w-[218px]">{weatherVisualization.get(location.weather[0].main).descriptionText}</p>
                </div>       
            </div>
                ) : (
            
            <NotFoundPage/>
        )}
</>
  )
}

export default MainCityData