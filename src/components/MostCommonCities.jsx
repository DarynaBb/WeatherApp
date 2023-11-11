import { useContext } from "react";
import { commonCities } from "../constants";
import { FormContext } from "../context/FormContext";
import { WeatherContext } from "../context/WeatherContext";



function MostCommonCities() {
const { onFocus, isCityFound } = useContext(FormContext);
const { userCities } = useContext(WeatherContext);


    
  return (
    <div className={`${isCityFound ? "hidden" : "block"} ${onFocus ? "opacity-40" : "opacity-100"} mt-[40px] mb-[24px]`}>
        <p className='text-[12px] text-center'>MOST COMMON</p>
        {commonCities.map((city) => (
            <p key={city} className="text-[16px]">{city}</p>
        ))}
        <p className='text-[12px] text-center mt-[40px]'>{`${userCities.length > 0 ? "MY RAINBOW" : "SEARCH BY CITY AND CREATE YOUR OWN RAINBOW"}`}</p>
    </div>
  )
}

export default MostCommonCities