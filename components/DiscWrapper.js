import React, { useState, useEffect, useRef } from "react";
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
  const [tap, setTap] = useState();

  return (
    <motion.a
      className=" focus:outline-none"
      style={{ transformOrigin: `${x}px ${y}px` }}
      variants={hoverEffects}
      initial={"initial"}
      whileHover={"hovering"}
      whileTap={"clicking"}
      onTapStart={(e, i) => {
        setIsDiscTapping(true);
        setTap({ x: i.point.x, y: i.point.y });
      }}
      onTap={(e, i) => {
        if (Math.abs(i.point.x - tap.x) + Math.abs(i.point.y - tap.y) < 10) {
          handleDiscClick(country);
        }
        setIsDiscTapping(false);
      }}
      onTapCancel={(e, i) => {
        setIsDiscTapping(false);
      }}>
      {children}
    </motion.a>
  );
};

export default DiscWrapper;
