import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import { MenuContext } from "../context/MenuContext";


function Slider() {
 const{setIsDarkMode, isDarkMode, value, setValue} = useContext(MenuContext);
 
  const toggleDarkamode = () =>{
    setIsDarkMode(!isDarkMode);
  }
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="customSlider-thumb"
      // markClassName="example-mark"
      
      trackClassName="customSlider-track"

      // defaultValue={0}
      
       min={0}
       max={100}
       
       value={value }
       onChange={(newValue) => setValue(newValue)}

     
        
      // orientation="horizontal"
    />
  )
}

export default Slider