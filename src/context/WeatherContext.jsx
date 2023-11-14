import { createContext, useState } from "react";

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");
  const [userCities, setUserCities] = useState(JSON.parse(localStorage.getItem("citiesArray")) || []);
  const [isCityAdded, setIsCityAdded] = useState(false);


  

  const APIkey = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=11a9f7f715a24513ea614a13dabe421f`;
  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=11a9f7f715a24513ea614a13dabe421f`;

  const goBack = () => {
    window.history.back();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } else {
        console.warn("response ist nicht Ok !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataUpdate = async (city) => {
    try {
      const response = await fetch(url2.replace("London", city));
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } else {
        console.warn("response ist nicht Ok !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        fetchData,
        cityName,
        setCityName,
        userCities,
        setUserCities,
        goBack, 
        isCityAdded, setIsCityAdded, fetchDataUpdate
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
