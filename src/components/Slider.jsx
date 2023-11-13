import React from "react";
import ReactSlider from "react-slider";


function Slider() {
  return (
    <ReactSlider
      className="vertical-slider"
      markClassName="example-mark"
      
      trackClassName="example-track"
      defaultValue={0}
      
      min={0}
      max={4}
     
        
      orientation="vertical"
    />
  )
}

export default Slider