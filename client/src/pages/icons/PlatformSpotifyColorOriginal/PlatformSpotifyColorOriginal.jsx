/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlatformSpotifyColorOriginal = ({ color = "#1ED760", className }) => {
  return (
    <svg
      className={`platform-spotify-color-original ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M23.9266 0C10.7126 0 0 10.7123 0 23.9263C0 37.1409 10.7126 47.8523 23.9266 47.8523C37.142 47.8523 47.8534 37.1409 47.8534 23.9263C47.8534 10.7131 37.142 0.00114285 23.9263 0.00114285L23.9266 0ZM34.8991 34.5086C34.4706 35.2114 33.5506 35.4343 32.8477 35.0029C27.23 31.5714 20.158 30.7943 11.8294 32.6971C11.0269 32.88 10.2269 32.3771 10.044 31.5743C9.86029 30.7714 10.3611 29.9714 11.1657 29.7886C20.28 27.7054 28.098 28.6029 34.4049 32.4571C35.1077 32.8886 35.3306 33.8057 34.8991 34.5086ZM37.8277 27.9929C37.2877 28.8714 36.1391 29.1486 35.262 28.6086C28.8306 24.6546 19.0269 23.5097 11.4197 25.8189C10.4331 26.1169 9.39114 25.5609 9.09171 24.576C8.79457 23.5894 9.35086 22.5494 10.3357 22.2494C19.0251 19.6129 29.8277 20.89 37.2134 25.4286C38.0906 25.9686 38.3677 27.1169 37.8277 27.9929ZM38.0791 21.2089C30.3677 16.6286 17.6449 16.2074 10.2823 18.442C9.1 18.8006 7.84971 18.1331 7.49143 16.9509C7.13314 15.768 7.8 14.5186 8.98314 14.1591C17.4349 11.5934 31.4849 12.0891 40.3631 17.3597C41.4289 17.9909 41.7774 19.3643 41.146 20.4263C40.5174 21.4897 39.1403 21.8403 38.0803 21.2089H38.0791Z"
        fill={color}
      />
    </svg>
  );
};

PlatformSpotifyColorOriginal.propTypes = {
  color: PropTypes.string,
};