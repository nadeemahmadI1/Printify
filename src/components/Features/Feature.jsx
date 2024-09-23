import React from "react";
import "./Feature.css";
import profit from "../../assets/profit.svg";
import best from "../../assets/best-selection.svg";
import robust from "../../assets/robust-scaling.svg";

const Content = [
  {
    id: 1,
    img: profit,
    heading: "Higher Profits",
    p: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
  },
  {
    id: 2,
    img: best,
    heading: "Robust Scaling",
    p: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
  },
  {
    id: 3,
    img: robust,
    heading: "Best Selection",
    p: "With 900+ products and top quality brands, you can choose the best products for your business.",
  },
];

const Feature = () => {
  return (
    <div className="feature-wrapper">
      {Content.map((item) => {
        return (
          <div className="wrapper" key={item.id}>
            <img src={item.img} alt={item.heading} />
            <h3>{item.heading}</h3>
            <p>{item.p}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
