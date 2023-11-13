import { Link } from "react-router-dom";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { MenuContext } from "../context/MenuContext";
import { FormContext } from "../context/FormContext";

function CityNav() {
  const { userCities, setUserCities } = useContext(WeatherContext);
  const { edit, degree } = useContext(MenuContext);
  const { onFocus } = useContext(FormContext);

  const removeCity = (id) => {
    setUserCities((prevCities) => {
      const updatedUserCities = prevCities.filter((city) => city.id !== id);
      return updatedUserCities;
    });
  };

  return (
    <ul className={`${onFocus ? "opacity-40" : "opacity-100"} flex flex-col items-center gap-[10px] mt-[40px]`}>
      {userCities.map((city, index) => (
        <div className={`flex w-full items-center bg-${index}`} key={index}>
          <div className={`${edit ? "block " : "hidden"} w-[32px] cursor-pointer`}
            onClick={() => removeCity(city.id)}>
            <button
              className={`w-[20px] h-[1px] bg-black ml-[6px] mr-[10px]`}> 
            </button>
          </div>
          <div className={`w-full flex flex-col items-center bg-${index} text-black `}
            key={city.id}>
            <Link to={`/${city.name}`} className="block w-full p-[7px]">
              <div className="flexBetween">
                <div
                  className={`${edit ? "flex items-center gap-[10px]" : ""}`}>
                  <div>
                    <p className="text-[24px]">{city.name}</p>
                    <p className="text-[14px]">{city.weather[0].description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[24px]">{`${degree === "celsius" ? Math.floor(city.main.temp) + "°C" : Math.floor((city.main.temp * 9) / 5 + 32) + "°F"}`}</p>
                  <p className="text-[14px]">FEELS:{" "}
                    {`${degree === "celsius" ? Math.floor(city.main.feels_like) + "°C" : Math.floor((city.main.feels_like * 9) / 5 + 32) + "°F"}`}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default CityNav;
