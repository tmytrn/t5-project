import React, { useRef } from "react";
import { motion } from "framer-motion";
import { linearRotation } from "@lib/animations";
import { useIsSmall } from "@lib/index";
const RotationWrapper = ({ opacity, d, fill }) => {
  const isSmall = useIsSmall();
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
