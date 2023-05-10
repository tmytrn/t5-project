import React, { useState, useEffect } from "react";
import { animateVisualElement, motion, useAnimate } from "framer-motion";

const Disc = ({
  handleDiscClick,
  country,
  isDiscOpen,
  children,
  setIsTapping,
}) => {
  const [isDiscTapping, setIsDiscTapping] = useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = animate(
      "#gradient",
      { rotate: 360 },
      { repeat: Infinity, ease: "linear", duration: 2 }
    );
    if (isDiscTapping || isDiscOpen) {
      console.log("animation pause");
      animation.pause();
    } else {
      console.log("animation play");
      animation.play();
    }
  }, [isDiscTapping, isDiscOpen]);

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
