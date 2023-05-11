import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { hoverEffects, linearRotation } from "@lib/animations";

const DiscWrapper = ({
  setIsDiscHovering,
  setIsDiscTapping,
  handleDiscClick,
  children,
  country,
  originX,
  originY,
  size,
}) => {
  const radius = size / 2;
  const x = originX + radius;
  const y = originY + radius;

  return (
    <motion.a
      className=" focus:outline-none"
      style={{ transformOrigin: `${x}px ${y}px` }}
      variants={hoverEffects}
      initial={"initial"}
      whileHover={"hovering"}
      whileTap={"clicking"}
      onTap={() => {
        handleDiscClick(country);
        // setIsDiscTapping(false);
      }}>
      {children}
    </motion.a>
  );
};

export default DiscWrapper;
