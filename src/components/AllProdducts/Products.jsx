import React from "react";
import Lottie from "lottie-react";
import animationData from '../../Lottie/EditShirt.json'


import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="how-it-works">
        <div className="how-it-works-bg"></div>
        <div className="items">
          <div className="icon-container">
            <img
              className="rotated-image"
              src="https://static.vecteezy.com/system/resources/previews/012/041/374/original/blank-single-white-mug-png.png"
              alt=""
            ></img>
            <button className="mug-btn">
              <i
                className="fas fa-plus"
                style={{
                  alignItems: "center",
                  fontSize: "15px",
                  color: "#2a8d09",
                  width: "30px",
                }}
              ></i>
            </button>
          </div>
          <div className="icon-container case">
            <img
              className="rotated-case"
              src="https://i.pinimg.com/originals/ec/80/19/ec8019ba47ce13c9334478182db67b19.png"
              alt=""
            ></img>
            <button className="mug-btn">
              <i
                className="fas fa-plus"
                style={{
                  alignItems: "center",
                  fontSize: "15px",
                  color: "#2a8d09",
                  width: "30px",
                }}
              ></i>
            </button>
          </div>
          <div className="icon-container shirt">
            <img
              className="rotated-shirt"
              src="https://static.vecteezy.com/system/resources/previews/008/519/383/non_2x/white-folded-polo-t-shirt-mockup-png.png"
              alt=""
            ></img>
            <button className="mug-btn">
              <i
                className="fas fa-plus"
                style={{
                  alignItems: "center",
                  fontSize: "15px",
                  color: "#2a8d09",
                  width: "30px",
                }}
              ></i>
            </button>
          </div>
          <div className="icon-container cap">
            <img
              className="rotated-cap"
              src="https://png.pngtree.com/png-vector/20240701/ourmid/pngtree-white-baseball-cap-png-image_12664913.png"
              alt=""
            ></img>
            <button className="mug-btn">
              <i
                className="fas fa-plus"
                style={{
                  alignItems: "center",
                  fontSize: "15px",
                  color: "#2a8d09",
                  width: "30px",
                }}
              ></i>
            </button>
          </div>
          <div className="icon-container cap">
            <img
              className="rotated-cap"
              src="https://tr.rbxcdn.com/c54cbcc22445285d67d2319dce83f91c/420/420/Hat/Png"
              alt=""
            ></img>
            <button className="mug-btn">
              <i
                className="fas fa-plus"
                style={{
                  alignItems: "center",
                  fontSize: "15px",
                  color: "#2a8d09",
                  width: "30px",
                }}
              ></i>
            </button>
          </div>
          <div className="icon-container hoodie">
            <img
              className="rotated-hoodie"
              src="https://pnghq.com/wp-content/uploads/mockup-hoodie-png-623-download-65924.png"
              alt=""
            ></img>
            <button className="mug-btn">
              <i
                className="fas fa-plus"
                style={{
                  alignItems: "center",
                  fontSize: "10px",
                  color: "#2a8d09",
                  width: "30px",
                }}
              ></i>
            </button>
          </div>
        </div>
        <div className="triangle"></div>
        <div className="Lootie_edit">
          <Lottie
            style={{
              zIndex: "3",
              width: "170px",
              opacity: "100%",
              position: "absolute",
            }}
            animationData={animationData}
          />
        </div>

        <div className="easy-add">
          <h1 style={{ margin: "50px" }}>
            Easily add your design to a wide range of products
          </h1>
          <p>
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a
            href="#"
            style={{
              color: "green",
              marginTop: "10px",
            }}
          >{`All Products -->`}</a>
        </div>       
      </div>
    </>
  );
};

export default Products;
