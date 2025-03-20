import React from "react";

const DoubleArrow = ({Width, Height, Text}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="arrow-container d-flex justify-content-center">
        <div className="arrow-left"></div>
        <div className="arrow-line" style={{width: `${Width}px`, height: `${Height}px`}}>
            <h4 className="arrow-sign">{Text}</h4>
        </div>
        <div className="arrow-right"></div>
      </div>
    </div>
  );
};

export default DoubleArrow;
