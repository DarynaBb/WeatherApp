import React, { useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Form from "../components/Form";
import FoundedCityData from "../components/FoundedCityData";
import CityNav from "../components/CityNav";
import MostCommonCities from "../components/MostCommonCities";
import TopNav from "../components/TopNav";
import { MenuContext } from "../context/MenuContext";

function Dashboard() {
  const { userCities } = useContext(WeatherContext);
  const { theme } = useContext(MenuContext);

  
  // document.body.style.color = theme;
  
  
  useEffect(() => {
    localStorage.setItem("citiesArray", JSON.stringify(userCities));
  }, [userCities]);

  console.log(userCities);
  return (
    <section className="text-white ">
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
