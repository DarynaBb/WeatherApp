import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Button from "./Button";
import search from "../assets/images/Search.svg"

function Form() {
  const { cityName, setCityName, fetchData } = useContext(WeatherContext);
  const [onFocus, setOnFocus] = useState(false);

  const onClickhandlerSearch = (event) => {
    event.preventDefault();
    fetchData();
    setCityName("");
  };

  const onFocusHandler = () => {
    onFocus ? setOnFocus(false) : setOnFocus(true);
  }



  return (
    <form action="" className="">
      <div className="relative bg-green flex justify-between items-center px-[6px] py-[1px]">
        <img src={search} alt="" className={`${onFocus ? "hidden" : "block"}`} />
        <input
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          type="text"
          value={cityName}
          onChange={(event) => setCityName((prevValue) => event.target.value)}
          className="bg-green grow outline-none text-black"
          placeholder={`${onFocus ? "SEARCH BY CITY" : ""}`}
        />
        <button type="submit" onClick={onClickhandlerSearch} className="text-text-gray">SEARCH</button>
      </div>
      
      
    </form>
  );
}

export default Form;
