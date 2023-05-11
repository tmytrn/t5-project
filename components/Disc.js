import React from "react";
import { motion } from "framer-motion";

const Disc = ({ handleDiscClick, country, children, setIsTapping }) => {
  return (
    <motion.a
      className="focus:outline-none"
      ref={scope}
      variants={hoverEffects}
      initial={"initial"}
      whileHover={"hovering"}
      whileTap={"clicking"}
      onTapStart={() => {
        setIsDiscTapping(true);
        setIsTapping(true);
      }}
      onTap={() => {
        handleDiscClick(country);
        setIsDiscTapping(false);
        setIsTapping(false);
      }}>
      {children}
    </motion.a>
  );
};

export default Disc;
