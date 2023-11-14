import React, { useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Form from "../components/Form";
import FoundedCityData from "../components/FoundedCityData";
import CityNav from "../components/CityNav";
import MostCommonCities from "../components/MostCommonCities";
import TopNav from "../components/TopNav";
import { MenuContext } from "../context/MenuContext";
import { FormContext } from "../context/FormContext";

function Dashboard() {
  const { userCities, fetchData, cityName, setCityName, fetchDataUpdate} = useContext(WeatherContext);
  const { setIsCityFound } = useContext(FormContext);
  useEffect(() => {
    localStorage.setItem("citiesArray", JSON.stringify(userCities));
  }, [userCities]);

  useEffect(() => {
    if (userCities.length > 0) {
       userCities.forEach((city) => fetchDataUpdate(city.name));

        const intervalId = setInterval(() => {
        userCities.forEach((city) => fetchDataUpdate(city.name));

      }, 300000);
      setCityName('');
      return () => clearInterval(intervalId);
    }
  }, []);

  
  return (
    <section>
      <div className="max-container padding-container">
        <TopNav text="LOCATION" to="/" />
        <Form />
        <MostCommonCities />
        <FoundedCityData />
        <CityNav />
      </div>
    </section>
  );
}

export default Dashboard;
