import React, { Fragment, Suspense, useEffect, useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import Spacer from '../drivers/Spacer'

import banner from '../../assets/images/banner.jpg'
import banner1 from '../../assets/images/ehut-message-background-theme.jpg'
import Button from "./ButtonPrimary";

const BannerSlider = () => {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const carousel = document.querySelector('.carousel-inner')
    carousel.classList.add('home-banner')
  }, []);

  const banners = [
    {
      title: "Mens fassion",
      description: "Explore the Latest Trends in Men's Fashion: Stylish Outfits, Accessories, and Wardrobe Essentials",
      image: banner,
    },
    {
      title: "Women fassion",
      description: "Explore the Latest Trends in Women's Fashion: Stylish Outfits, Accessories, and Wardrobe Essentials",
      image: banner1,
    },
    {
      title: "Adult collections",
      description: "Explore the Latest Trends in Adult's Fashion: Stylish Outfits, Accessories, and Wardrobe Essentials.",
      image: banner,
    },
  ];

  return (
<Fragment>
  <Carousel activeIndex={index} onSelect={handleSelect} fade interval={4000} controls={false}>
    {banners.map((banner, i) => (
      <Carousel.Item key={i} className="banner-slide">
        <div className="banner-content" style={{ backgroundImage: `url(${banner.image})` }}>
          <div className="overlay">
            <div className="text-box">
              <h2 className="d-block">{banner.title}</h2>
              <p>{banner.description}</p>
              <Spacer Space={15}/>
              {/* <button className="btn btn-light">{banner.buttonText}</button> */}
              <Button name="Shop Now" link="https://google.com" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
</Fragment>
  );
};

export default BannerSlider;
