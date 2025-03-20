import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import logo1 from '../../assets/images/logo-1.png';
import logo2 from '../../assets/images/logo-2.png';
import logo3 from '../../assets/images/logo-3.png';
import logo4 from '../../assets/images/logo-4.png';
import logo5 from '../../assets/images/logo-5.png';
const brands = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 5 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 4 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 3 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 2 }
};

const BrandSection = () => {
  return (
    <div className="container-fluid py-4 bg-light">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        arrows={false}
        showDots={false}
        draggable={false}
      >
        {brands.map((logo, index) => (
          <div key={index} className="d-flex justify-content-center">
            <img src={logo} alt="Brand Logo" className="brand-logo" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandSection;
