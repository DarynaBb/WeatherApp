import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Button from './Button';
import { MenuContext } from '../context/MenuContext';
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
          <div className={`${edit ? "flex flex-row items-center gap-[20px]" : "w-full flex flex-col items-center"} bg-${index} text-black `}  key={city.id}>
            <Link to={`/${city.name}`} 
              className='block w-full p-[7px]'
            >
              <div className='flexBetween' >
                <div>
                  <p className='text-[24px]'>{city.name}</p>
                  <p className='text-[14px]'>{city.weather[0].description}</p>
                </div>
                <div className='text-right'>
                  <p className='text-[24px]'>{`${degree === "celsius" ? Math.floor(city.main.temp) + "°C" : Math.floor(city.main.temp) * 9 / 5 + 32 + "°F"}`}</p>
                  <p className='text-[14px]'>FEELS: {`${degree === "celsius" ? Math.floor(city.main.feels_like) + "°C" : Math.floor(city.main.feels_like) * 9 / 5 + 32 + "°F"}`}</p>
                </div>
              </div>
            </Link>
            <div className={`${edit ? "block" : "hidden"} border-[2px] w-[30%] p-[5px] rounded-[8px]`}>
              <Button text="Remove" onClick={() => removeCity(city.id)} />
            </div>
          </div>
        ))}
      </ul>
  )
}

export default CityNav