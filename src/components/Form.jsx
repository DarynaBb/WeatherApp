import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Button from "./Button";

function Form() {
  const { cityName, setCityName, fetchData } = useContext(WeatherContext);

  const onClickhandlerSearch = (event) => {
    event.preventDefault();
    fetchData();
    setCityName("");
  };

  return (
    <form action="">
      <label htmlFor="">City</label>
      <input
        type="text"
        value={cityName}
        onChange={(event) => setCityName((prevValue) => event.target.value)}
      />
      <Button type="submit" text="Search" onClick={onClickhandlerSearch} />
    </form>
  );
}

export default Form;
