import React from 'react'
import './Hero.css';
import Lottie from 'lottie-react';
import animationData from '../../Lottie/Women.json';
import shirt from '../../Lottie/shirts.json';

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="background"></div>
      <div className="hero">
        <div className="hero-ls">
          <h2>Create and sell custom products</h2>
          <div className="option1">
            <span className="tick">&#10003;</span>
            <p>100% Free to use </p>
          </div>
          <div className="option1">
            <span className="tick">&#10003;</span>
            <p>900+ High Quality Products</p>
          </div>
          <div className="option1">
            <span className="tick">&#10003;</span>
            <p>Largest global print network</p>
          </div>
          <div className="hero-btn">
            <button className="btn-l"> Start for free</button>
            <button className="btn-r">
              {" "}
              <i className="fas fa-play play-icon"></i> How it works?
            </button>
          </div>
          <span>Trusted by over 8M sellers around the world</span>
        </div>
        <div className="hero-rs">
          <div className="shirt" style={{
            width: "250px",
            position: "relative",
            top: "100px",
            left:"-20px"
          }}>
            <Lottie animationData={shirt} loop={true} />
          </div>
          <div className="women">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
