import { useContext } from "react";
import { commonCities } from "../constants";
import { FormContext } from "../context/FormContext";
import { WeatherContext } from "../context/WeatherContext";



function MostCommonCities() {
const { onFocus, isCityFound } = useContext(FormContext);
const { userCities, setCityName } = useContext(WeatherContext);


    
  return (
    <div className={`${isCityFound ? "hidden" : "block"} ${onFocus ? "opacity-40" : "opacity-100"} mt-[40px] mb-[24px]`}>
        <p className='text-[12px] text-center'>MOST COMMON</p>
        <div className="flex flex-wrap ">
          {commonCities.map((city, index) => (
              <p key={city} className={`${index % 2 === 0 ? "text-left" : "text-right"} text-[16px] basis-1/2`} onClick={() => setCityName(city)}>{city}</p>
        ))}
        </div>
        <p className='text-[12px] text-center mt-[40px]'>{`${userCities.length > 0 ? "MY RAINBOW" : "SEARCH BY CITY AND CREATE YOUR OWN RAINBOW"}`}</p>
    </div>
  )
}

export default MostCommonCities
