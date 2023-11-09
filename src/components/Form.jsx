import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Button from './Button';

function Form() {
    const { cityName, setCityName, fetchData } = useContext(WeatherContext);

    

  return (
    <form action="" >
        <label htmlFor="">City</label>
        <input type="text" value={cityName} onChange={(event) => setCityName(prevValue => event.target.value)} />
        <Button type="submit" text="Search" />
    </form>
  )
}

export default Form