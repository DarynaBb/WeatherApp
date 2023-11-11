import { useContext } from "react";
import { commonCities } from "../constants";
import { FormContext } from "../context/FormContext";
import { WeatherContext } from "../context/WeatherContext";

function MostCommonCities() {
const { onFocus } = useContext(FormContext);
const { userCities } = useContext(WeatherContext);

    
  return (
    <div className={`${onFocus ? "opacity-40" : "opacity-100"} mt-[40px] mb-[24px]`}>
        <p className='text-[12px] text-center'>MOST COMMON</p>
        {commonCities.map((city) => (
            <p className="text-[16px]">{city}</p>
        ))}
        <p className='text-[12px] text-center mt-[40px]'>{`${userCities.length > 0 ? "MY RAINBOW" : "SEARCH BY CITY AND FEEL YOUR OWN RAINBOW"}`}</p>
    </div>
  )
}

export default MostCommonCities