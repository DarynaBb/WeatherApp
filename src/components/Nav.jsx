import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Button from './Button';

function Nav() {
  const { userCities, setUserCities } = useContext(WeatherContext);  

  const removeCity = (id) => {
    setUserCities((prevCities) => {
      const updatedUserCities = prevCities.filter((city) => city.id !== id);
      return updatedUserCities;
    });
  };

  return (
    <ul>
        Cities:
        {userCities.map((city) => (
          <div className="link"  key={city.id}>
            <Link to={`/${city.name}`}>
              <p>{city.name}</p>
              <p>{Math.floor(city.main.temp)}</p>
              <p>{city.weather[0].description}</p>
            </Link>
            <Button text="Remove" onClick={() => removeCity(city.id)} />
          </div>
        ))}
      </ul>
  )
}

export default Nav