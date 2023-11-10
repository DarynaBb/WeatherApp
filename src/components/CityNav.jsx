import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Button from './Button';
import { MenuContext } from '../context/MenuContext';

function CityNav() {
  const { userCities, setUserCities } = useContext(WeatherContext); 
  const { edit, degree } = useContext(MenuContext); 
  console.log(edit)

  const removeCity = (id) => {
    setUserCities((prevCities) => {
      const updatedUserCities = prevCities.filter((city) => city.id !== id);
      return updatedUserCities;
    });
  };

  return (
    <ul className='flex flex-col items-center gap-[10px] mt-[40px]'>
        Cities:
        {userCities.map((city) => (
          <div className={`${edit ? "flex flex-row items-center gap-[20px]" : "border-[2px] w-[60%] flex flex-col items-center"}  `}  key={city.id}>
            <Link to={`/${city.name}`}>
              <p>{city.name}</p>
              <p>{`${degree === "celsius" ? Math.floor(city.main.temp) : Math.floor(city.main.temp)*9/5+32}` }</p>
              <p>{city.weather[0].description}</p>
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