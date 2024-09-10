/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlatformMediumColorOriginal = ({ color = "black", className }) => {
  return (
    <svg
      className={`platform-medium-color-original ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M48 23.6554C48 30.014 46.9343 35.1719 45.6193 35.1719C44.3044 35.1719 43.2392 30.0154 43.2392 23.6554C43.2392 17.2954 44.3049 12.1389 45.6193 12.1389C46.9338 12.1389 48 17.2949 48 23.6554Z"
        fill={color}
      />
      <path
        className="path"
        d="M41.9256 23.6554C41.9256 30.754 38.8951 36.5109 35.1568 36.5109C31.4184 36.5109 28.3879 30.754 28.3879 23.6554C28.3879 16.5568 31.418 10.7999 35.1563 10.7999C38.8946 10.7999 41.9251 16.5549 41.9251 23.6554"
        fill={color}
      />
      <path
        className="path"
        d="M27.0749 23.6554C27.0749 31.1968 21.0139 37.3103 13.5377 37.3103C6.06146 37.3103 0 31.1955 0 23.6554C0 16.1153 6.061 10 13.5377 10C21.0143 10 27.0749 16.114 27.0749 23.6554Z"
        fill={color}
      />
    </svg>
  );
};

PlatformMediumColorOriginal.propTypes = {
  color: PropTypes.string,
};
