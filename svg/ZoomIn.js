import React from "react";
const ZoomIn = () => {
  return (
    <svg className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="8"
        cy="8"
        r="7"
        fill="#684C21"
        fill-opacity="0.9"
        stroke="#E2F0F8"
        stroke-width="2"
      />
      <line
        x1="3.63672"
        y1="7.72729"
        x2="12.364"
        y2="7.72729"
        stroke="#FFF3CF"
        stroke-width="2"
      />
      <line
        x1="8.27246"
        y1="3.63647"
        x2="8.27246"
        y2="12.3637"
        stroke="#FFF3CF"
        stroke-width="2"
      />
      <circle cx="8" cy="8" r="8" fill="#684C21" fill-opacity="0.9" />
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke="#684C21"
        stroke-opacity="0.9"
        stroke-width="2"
      />
      <line
        x1="3.63672"
        y1="8.22729"
        x2="12.364"
        y2="8.22729"
        stroke="#FFF3CF"
      />
      <line
        x1="7.77246"
        y1="3.63647"
        x2="7.77246"
        y2="12.3637"
        stroke="#FFF3CF"
      />
    </svg>
  );
};

export default ZoomIn;
