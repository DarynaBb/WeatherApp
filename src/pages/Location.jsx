import { useParams } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";
import { useContext, useState, useEffect } from "react";
<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { NotFoundPage } from "./NotFoundPage";

=======
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "../components/Button";
>>>>>>> e47587f1cce4c358f4c59c2fc352c2dbd2eb6675

function Location() {
  const { city } = useParams();
  const { userCities, goBack } = useContext(WeatherContext);
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

  const updatedArray = (cityName) => {
    const cities = userCities.filter((city) => city.name !== cityName);
    return cities;
  };
  const restCities = updatedArray(city);

<<<<<<< HEAD
    return (
        <>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {location ? (
                        <div>
                            <p>City: {location.name}</p>
                            <p>Temperature: {location.main.temp}</p>
                            <p>Description: {location.weather[0].description}</p>
                            <p>Wind Speed: {location.wind.speed}</p>
                            <p>Humidity: {location.main.humidity}</p>
                            <button onClick={goBack} >Back</button>
                        </div>
                            ) : (
                      
                        <NotFoundPage/>
                    )}
                </SwiperSlide>
                {restCities.map((city) => (
                <SwiperSlide>
                    <div>
                        <p>City: {city.name}</p>
                        <p>Temperature: {city.main.temp}</p>
                        <p>Description: {city.weather[0].description}</p>
                        <p>Wind Speed: {city.wind.speed}</p>
                        <p>Humidity: {city.main.humidity}</p>
                        <button onClick={goBack}>Back</button>
                    </div> 
                </SwiperSlide>
                ))}
            </Swiper>
        </>
  )
=======
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {location ? (
            <div>
              <p>City: {location.name}</p>
              <p>Temperature: {location.main.temp}</p>
              <p>Description: {location.weather[0].description}</p>
              <p>Wind Speed: {location.wind.speed}</p>
              <p>Humidity: {location.main.humidity}</p>
              <Button onClick={goBack} text="Back"/>
            </div>
          ) : (
            <div>Location not found</div>
          )}
        </SwiperSlide>
        {restCities.map((city) => (
          <SwiperSlide key={city.id}>
            <div >
              <p>City: {city.name}</p>
              <p>Temperature: {city.main.temp}</p>
              <p>Description: {city.weather[0].description}</p>
              <p>Wind Speed: {city.wind.speed}</p>
              <p>Humidity: {city.main.humidity}</p>
              <button onClick={goBack}>Back</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
>>>>>>> e47587f1cce4c358f4c59c2fc352c2dbd2eb6675
}

export default Location;
