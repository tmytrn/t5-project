import React from "react";
import { motion } from "framer-motion";
import { linearRotation } from "@lib/animations";
const RotationWrapper = ({ opacity, d, fill, isDiscOpen }) => {
  return (
    <motion.path
      d={d}
      opacity={opacity}
      fill={fill}
      variants={linearRotation}
      initial={"stopped"}
      animate={"rotating"}
    />
  );
};
export default RotationWrapper;
