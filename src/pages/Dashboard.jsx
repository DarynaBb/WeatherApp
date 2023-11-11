import React, { useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Form from "../components/Form";
import FoundedCityData from "../components/FoundedCityData";
import CityNav from "../components/CityNav";
import Menu from "../components/Menu";
import line from "../assets/images/Line.svg";
import { Link } from "react-router-dom";
import MostCommonCities from "../components/MostCommonCities";
import TopNav from "../components/TopNav";

function Dashboard() {
  const { userCities } = useContext(WeatherContext);
  
  useEffect(() => {
    localStorage.setItem("citiesArray", JSON.stringify(userCities));
  }, [userCities]);

  console.log(userCities);
  return (
    <section className=" bg-black text-white h-screen">
      <div className="max-container padding-container">
        <TopNav text="LOCATION" />
        <Form />
        <MostCommonCities />
        <FoundedCityData />
        <CityNav />
      </div>
    </section>
  );
}

export default Dashboard;
