import React, { useRef } from "react";
import { motion } from "framer-motion";
import { linearRotation } from "@lib/animations";
const RotationWrapper = ({ opacity, d, fill }) => {
  const pathRef = useRef(null);
  return (
    <path
      ref={pathRef}
      d={d}
      opacity={opacity}
      fill={fill}
      // variants={linearRotation}
      // initial={"stopped"}
      // animate={"rotating"}
    />
  );
};
export default RotationWrapper;
