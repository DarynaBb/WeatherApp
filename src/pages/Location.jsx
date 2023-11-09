import { useParams } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";
import { useContext, useState, useEffect } from "react";

function Location() {
    const { city } = useParams();
    const { userCities, weatherData } = useContext(WeatherContext);
    const [location, setLocation] = useState(null);



    useEffect(() => {
        
    
        const getCityByName = (cityParam) => {
          const foundLocation = userCities?.find((city) => city.name === cityParam);
          console.log("location:", foundLocation);
          return foundLocation;
        };
    
        const foundLocation = getCityByName(city);
        setLocation(foundLocation);
      }, [userCities, city]);

  return (
    <div className="city">
      {location ? (
        <div>
          <p>City: {location.name}</p>
          <p>Temperature: {location.main.temp}</p>
          <p>Description: {location.weather[0].description}</p>
          <p>Wind Speed: {location.wind.speed}</p>
          <p>Humidity: {location.main.humidity}</p>

          {/* <p>{location.temperature}</p> */}
          {/* Render other properties from the location object */}
          
           
        </div>
      ) : (
        <div>Location not found</div>
      )}
    </div>
  )
}

export default Location