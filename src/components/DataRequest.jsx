import {useState, useEffect, useContext} from 'react';
import { WeatherContext } from '../context/WeatherContext';

function DataRequest() {
    const { weatherData, fetchData, cityName, setCityName } = useContext(WeatherContext); 
    
    useEffect(() => {
        fetchData();
    }, [])

  return (
    <div>
      {weatherData.main?.temp ? (
        <div>{weatherData.name} {weatherData.main.temp}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default DataRequest;