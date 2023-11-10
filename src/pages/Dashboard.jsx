import React, { useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Form from "../components/Form";
import FoundedCityData from "../components/FoundedCityData";
import Nav from "../components/Nav";

function Dashboard() {
  const { userCities } = useContext(WeatherContext);

  useEffect(() => {
    localStorage.setItem("citiesArray", JSON.stringify(userCities));
  }, [userCities]);

  console.log(userCities);
  return (
    <>
      <Form />
      <FoundedCityData />
      <Nav />
    </>
  );
}

export default Dashboard;