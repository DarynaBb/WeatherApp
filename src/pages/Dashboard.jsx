import React, { useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Form from "../components/Form";
import FoundedCityData from "../components/FoundedCityData";
import CityNav from "../components/CityNav";
import Menu from "../components/Menu";
import line from "../assets/images/Line.svg";
import { Link } from "react-router-dom";

function Dashboard() {
  const { userCities } = useContext(WeatherContext);
  

  useEffect(() => {
    localStorage.setItem("citiesArray", JSON.stringify(userCities));
  }, [userCities]);

  console.log(userCities);
  return (
    <section className=" bg-black text-white h-screen">
      <div className="max-container padding-container">
        <div className="flexBetween mb-[10px]">
          <Link to="/">
          <img src={line} className="w-[10px] h-[20px]" alt="back" />
        </Link>
        <p className="text-[12px]">LOCATION</p>
        <Menu />
      </div>

      
        <Form />
        <FoundedCityData />
        <CityNav />
        </div>
    </section>
  );
}

export default Dashboard;
