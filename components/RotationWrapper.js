import React, { useRef, useState } from "react";
const RotationWrapper = ({ isHovering, opacity, d, fill }) => {
  const pathRef = useRef(null);
  return <path ref={pathRef} d={d} opacity={opacity} fill={fill} />;
};
export default RotationWrapper;
