import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/custom-products.webp";
import image2 from "../../assets/fullfillment.webp";
import image3 from "../../assets/your-products.webp";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Carousel">
      <div className="create">
        <img src={image1} alt="Custom Products" />
        <h1>
          <span>CREATE</span> <br></br>customer products
        </h1>
        <p>
          Easily add your designs to a wide range of products using our free
          tools
        </p>
      </div>
      <div className="create">
        <img src={image3} alt="Your Products" />
        <h1>
          <span>Sell</span> <br></br>on your terms
        </h1>
        <p>You choose the products, sale price, and where to sell</p>
      </div>
      <div className="create">
        <img src={image2} alt="Fulfillment" />
        <h1>
          <span>We handle</span> <br></br>fulfillment
        </h1>
        <p>
          Once an order is placed, we automatically handle all the printing and
          delivery logistics
        </p>
      </div>
    </div>
  );
};

export default Carousel;
