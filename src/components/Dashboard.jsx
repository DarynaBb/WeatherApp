import React, {useState, useEffect, useContext} from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Form from './Form';
import Button from './Button';
import { Link } from 'react-router-dom';

function Dashboard() {
    const { weatherData, userCities, setUserCities } = useContext(WeatherContext);
    

    const addCity = () => {
      const newCity = weatherData;
      userCities.length < 5 ? setUserCities([...userCities, newCity]) : userCities;
    }

    useEffect(() => {
      localStorage.setItem("citiesArray", JSON.stringify(userCities));
    }, [userCities]);

    const removeCity = (id) => {
      setUserCities(prevCities => {
          const updatedUserCities = prevCities.filter(city => city.id !== id )
          return updatedUserCities;
      })
    }

    console.log(userCities);
  return (
    <>
        <Form />
        <ul> Cities:
            {userCities.map((city) => (
              <div className='link'>
                <Link  to={`/${city.name}`} key={city.id}>
                <p>{city.name}</p>
                <p>{city.main.temp}</p>
                <p>{city.weather[0].description}</p>
                
              </Link>
              <button onClick={() => removeCity(city.id)}>Remove</button>
              </div>
              
            ))}
          </ul>
        <div className='city'>
        {weatherData.main?.temp ? (
          <div>
            <p>{weatherData.name}</p>
            <p>{weatherData.main.temp}</p>
            <button disabled={userCities.length > 4} onClick={addCity}>Add city</button>
          
          </div>
        ) : (
            <div></div>
        )}
        </div>
        
    </>
    
  )
}

export default Dashboard