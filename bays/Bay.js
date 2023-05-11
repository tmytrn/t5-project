import BayA from "./BayA";
import BayB from "./BayB";
import BayC from "./BayC";
import BayD from "./BayD";
import BayE from "./BayE";
import BayF from "./BayF";
import BayG from "./BayG";
import BayH from "./BayH";
import BayI from "./BayI";
import BayJ from "./BayJ";
import BayK from "./BayK";
import BayL from "./BayL";
import BayM from "./BayM";
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useDebouncedEffect } from "@lib/index";

const Bay = ({
  period,
  zoom,
  handleDiscClick,
  isMedium,
  isSmall,
  handleScroll,
  setIsDiscHovering,
  isDiscOpen,
}) => {
  const map = {
    hide: {
      scale: 1,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    show: {
      scale: zoom / 100,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  const bayRef = useRef(null);

  const [size, setSize] = useState({ width: 0, height: 0 });

  useDebouncedEffect(
    () => {
      if (bayRef.current != null) {
        setSize({
          width: bayRef.current.getBoundingClientRect().width,
          height: bayRef.current.getBoundingClientRect().height,
        });
      }
    },
    [zoom, bayRef],
    1000
  );

  const [isDiscTapping, setIsDiscTapping] = useState(false);

  // const size = useWindowSize()

  // console.log("bottom constraint: ", size.height / 4);
  // console.log("top constraint: ", -size.height / 4);
  // console.log("left constraint: ", -size.width / 4);
  // console.log("right constraint: ", size.width / 4);

  return (
    <motion.div
      ref={bayRef}
      variants={map}
      initial={"hide"}
      animate={"show"}
      className="bay z-30 hover:cursor-grab origin-center "
      drag={isDiscTapping ? false : true}
      dragConstraints={{
        left: -size.width / 2,
        right: size.width / 2,
        top: -size.height / 2,
        bottom: size.height / 2,
      }}>
      {
        {
          "2020-2040": (
            <BayA
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "2010-2020": (
            <BayB handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "2000-2010": (
            <BayC handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1990-2000": (
            <BayD handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1980-1990": (
            <BayE handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1970-1980": (
            <BayF handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1960-1970": (
            <BayG handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1950-1960": (
            <BayH handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1940-1950": (
            <BayI handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1930-1940": (
            <BayJ handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1920-1930": (
            <BayK handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1910-1920": (
            <BayL handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
          "1850-1910": (
            <BayM handleDiscClick={handleDiscClick} isDiscOpen={isDiscOpen} />
          ),
        }[period]
      }
    </motion.div>
  );
};
export default Bay;
