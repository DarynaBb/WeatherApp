import React, { useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Form from "../components/Form";
import FoundedCityData from "../components/FoundedCityData";
import CityNav from "../components/CityNav";
import Menu from "../components/Menu";
import { MenuContext } from "../context/MenuContext";

function Dashboard() {
  const { userCities } = useContext(WeatherContext);
  

  useEffect(() => {
    localStorage.setItem("citiesArray", JSON.stringify(userCities));
  }, [userCities]);

  console.log(userCities);
  return (
    <>
    <Menu />
      <Form />
      <FoundedCityData />
      <CityNav />
    </>
  );
}

export default Dashboard;
