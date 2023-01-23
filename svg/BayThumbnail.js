import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BayThumbnail = ({ zoom, handleDiscClick, mapRef }) => {
  return (
    <svg
      width="709"
      height="315"
      viewBox="0 0 709 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_d_732_3015)">
        <rect
          x="18"
          y="16"
          width="669"
          height="275"
          fill="url(#pattern0)"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_732_3015"
          x="0"
          y="0"
          width="709"
          height="315"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.84875 0 0 0 0 0.3125 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_732_3015"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_732_3015"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_732_3015"
            transform="translate(-0.000507439) scale(0.000244388 0.00059453)"
          />
        </pattern>
        <image
          id="image0_732_3015"
          width="4096"
          height="1682"
        />
      </defs>
    </svg>
  );
};
export default BayThumbnail;