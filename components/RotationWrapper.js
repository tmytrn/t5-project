import React, { useRef } from "react";
const RotationWrapper = ({ opacity, d, fill }) => {
  const pathRef = useRef(null);
  return <path ref={pathRef} d={d} opacity={opacity} fill={fill} />;
};
export default RotationWrapper;
