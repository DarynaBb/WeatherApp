import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function Button({type, text}) {

    const { fetchData, setCityName } = useContext(WeatherContext);

    const onClickhandler = (event) => {
        event.preventDefault();
        fetchData();
        setCityName("");
       } 

  return (
    <button type={type} onClick={onClickhandler}>{text}</button>
  )
}

export default Button