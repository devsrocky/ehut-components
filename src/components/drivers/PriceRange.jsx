import React, { useRef, useState } from "react";


const PriceRange = () => {

  const sliderOneRef = useRef(null);
  const sliderTwoRef = useRef(null);
  const sliderTackRef = useRef(null);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(999);


  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    fileColor();
  };
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    fileColor();
  };
  function fileColor(){
    const maxValue = sliderOneRef.current.max;
    let parcent1 = (sliderOneRef.current.value / maxValue) * 100;
    let parcent2 = (sliderTwoRef.current.value / maxValue) * 100;
    sliderTackRef.current.style.background = `linear-gradient(to right, #dadae5 ${parcent1}%, var(--primary) ${parcent1}%, var(--primary) ${parcent2}%, #dadae5 ${parcent2}%)`
  }
  window.onload = function() {
    fileColor()
  }

  return (
    <div className="slider-container">
        <h5 className="title" style={{fontSize: '15px', letterSpacing: '1px'}}>price</h5>
        <div className="slider-wrapper">
          <div ref={sliderTackRef} className="slider-track" ></div>
            <input ref={sliderOneRef} type="range" min="0" max="1000" value={minValue} onChange={handleMinChange} className="thumb thumb-left" />
            <input ref={sliderTwoRef} type="range" min="0" max="1000" value={maxValue} onChange={handleMaxChange} className="thumb thumb-right" />
        </div>
         <p className="price-label">Range: ৳{minValue} - ৳{maxValue} </p>
    </div>
  );
};

export default PriceRange;
