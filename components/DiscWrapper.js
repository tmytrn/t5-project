import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hoverEffects } from "@lib/animations";

const DiscWrapper = ({
  handleDiscClick,
  setIsDiscTapping,
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
      onTapStart={() => {
        setIsDiscTapping(true);
      }}
      onTap={() => {
        handleDiscClick(country);
        setIsDiscTapping(false);
      }}
      onTapCancel={() => {
        setIsDiscTapping(false);
      }}>
      {children}
    </motion.a>
  );
};

export default DiscWrapper;
