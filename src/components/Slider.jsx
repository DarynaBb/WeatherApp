import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import { MenuContext } from "../context/MenuContext";


function Slider() {
 const { value, setValue } = useContext(MenuContext);
 
  return (
    <ReactSlider
        className="horizontal-slider"
        thumbClassName="customSlider-thumb"
        trackClassName="customSlider-track"
        min={0}
        max={100}
        value={value }
        onChange={(newValue) => setValue(newValue)}
    />
  )
}

export default Slider