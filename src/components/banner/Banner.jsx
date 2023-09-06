import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="content">
          <h1 className="title">Movies</h1>
          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, esse iste. Vitae quod eveniet ipsa quasi aliquid perspiciatis soluta sapiente provident, temporibus porro nisi placeat nostrum, suscipit, nihil omnis explicabo!</h1>
        </div>
        <div className="fade-bottom"></div>
      </div>
    </>
  );
}

export default Banner;
