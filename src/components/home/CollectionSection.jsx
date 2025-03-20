import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../elements/ButtonPrimary";

const CollectionSection  = () => {
    const images = [
        "https://cdn.shopify.com/s/files/1/2303/2711/files/Fashion_Photography_for_E-Commerce_How_to_Capture_Your_Model_and_Clothing_in_the_Best_Light_2.jpg?v=1684706557",
        "https://www.appnova.com/wp-content/uploads/2024/10/fashion-Ecommerce1.jpg",
        "https://jindaltechsolutions.com/ecommerce/public/uploads/all/WRzAwmcORFSJskX3ITimVKmG8Vb9nhoH92YdOYWa.png",
        "https://www.newsg24.com/uploadFile/f9f27_c4516e6be3_long.jpg",
        "https://textildealcdn.sgp1.cdn.digitaloceanspaces.com/uploads/Kimora-Sale-Saree-Kajal-Agarwal-Staring-Collection.jpg",
        "https://mariam-col.com/cdn/shop/files/ph-banner-moa009-1.jpg?v=1721475938&width=3000",
      ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="container py-5 ehut-fassion-carousel">

        <div className="container pb-3">
            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-8 col-sm-9 col-8">
                    <h2 className="title">Elevate your style with eHut</h2>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4 d-flex justify-content-end">
                    <Button name="Shop Now" link="https://google.com" />
                </div>

            </div>
        </div>


        <div className="container P0">
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} arrows showDots={false}>
                {images.map((img, index) => (
                <div key={index} className="p-2">
                    <img
                    src={img}
                    className="w-100 rounded"
                    alt={`Slide ${index + 1}`}
                    style={{ height: "250px", objectFit: "cover", cursor: "pointer" }} // Fixed Height
                    onClick={() => handleImageClick(img)}
                    />
                </div>
                ))}
            </Carousel>

            {/* Full-Screen Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center">
                <img src={selectedImage} className="img-fluid" alt="Full Screen" />
                </Modal.Body>
            </Modal>

        </div>
    </div>

  );
};

export default CollectionSection;
