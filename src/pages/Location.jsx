import { useParams } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";
import { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TopNav from "../components/TopNav";
import { MenuContext } from "../context/MenuContext";
import MainCityData from "../components/MainCityData";
import { weatherVisualization } from '../constants';

function Location() {
  const { city } = useParams();
  const { userCities, goBack } = useContext(WeatherContext);
  const { edit, degree, value } = useContext(MenuContext);
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

  return (
    <section>
      <div className="max-container padding-container">
        <Swiper pagination={{dynamicBullets: true}} modules={[Pagination]} className="mySwiper w-full">
          <SwiperSlide>
            <MainCityData />
          </SwiperSlide>
          {restCities.map((location) => (
            <SwiperSlide>
              <TopNav text={`${location ? location.name : ""}`} to="/dashboard" />
              {location ? (
                <div className="flex flex-col items-center w-full mt-[50px]">
                  <div className="text-[12px] relative flex flex-col items-center xs:w-[350px] w-[320px]">
                    <div className="relative">
                      <img src={weatherVisualization.get(location.weather[0].main).iconLocation} 
                        alt="icon" width={200} height={200} />
                      <p className="text-[130px]">
                        {`${degree === "celsius" ? Math.floor(location.main.temp) : (Math.floor(location.main.temp * 9 / 5 + 32))}`}
                        <span className="text-[31px]">{`${degree === "celsius" ? "°C" : "°F"}`}</span>
                      </p>
                    <div className="-left-[20px] absolute bottom-[20px]">
                        <div className="relative">
                          <p>TEMP: {`${degree === "celsius" ? Math.floor(location.main.temp) + "°C" 
                            : 
                            (Math.floor(location.main.temp * 9 / 5 + 32)) + "°F"}`}
                          </p>
                          <p>
                            FEELS: {`${degree === "celsius" ? Math.floor(location.main.feels_like) + "°C"
                                : 
                                (Math.floor(location.main.feels_like * 9 / 5 + 32)) + "°F"}`}
                          </p>
                          <div className={`${value > 50 ? "bg-white" : "bg-black"} w-[10px] h-[1px] absolute -top-[5px] -rotate-45 -right-[10px]`} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-[20px] top-[5px]">
                      <div className="relative">
                        <p>RISE: 7:20 </p>
                        <p>SET: 16:56 </p>
                        <div className={`${value > 50 ? "bg-white" : "bg-black" } w-[10px] h-[1px] absolute -bottom-[5px] -rotate-45 -left-[10px]`} />
                      </div>
                    </div>
                    <div className="absolute left-0 top-[40px]">
                      <div className="relative text-left">
                        <p>WIND: {location.wind.speed} M/S</p>
                        <p>CLOUDS: {location.clouds.all} %</p>
                        <div className={`${value > 50 ? "bg-white" : "bg-black"} w-[10px] h-[1px] absolute -bottom-[5px] rotate-45 -right-[10px]`} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <p className="text-[24px]">
                    {weatherVisualization.get(location.weather[0].main).titleText}
                    </p>
                    <p className="font-sans text-[14px] max-w-[218px]">
                      {weatherVisualization.get(location.weather[0].main).descriptionText}
                    </p>
                  </div>
                </div>
              ) : (
                <NotFoundPage />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Location;
