import React from "react";
const ZoomOut = () => {
  return (
    <svg className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="8" fill="#FFF3CF" />
      <circle cx="8" cy="8" r="7.5" stroke="#684C21" strokeOpacity="0.9" />
      <line
        x1="4.13672"
        y1="8.22705"
        x2="11.864"
        y2="8.22705"
        stroke="#684C21"
        strokeOpacity="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ZoomOut;
