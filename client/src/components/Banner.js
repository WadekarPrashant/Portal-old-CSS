import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img
          src="./college-group.png"
          alt="Retail and Luxury"
          className="banner-image"
        />
        <div className="text-content">
          <h1>
            Empowering Students,
            <span>Transforming Colleges</span> Your Hub for Success and
            Innovation.
          </h1>
          <p>
            Empowering Students, Transforming Colleges: Your Hub for Success and
            Innovation, bridging the gap between academic excellence and vibrant
            campus life.
          </p>
          <button className="get-started-btn">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
