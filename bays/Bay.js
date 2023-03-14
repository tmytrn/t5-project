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

const Bay = ({ period, zoom, handleDiscClick, isMedium, isSmall }) => {
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

  return (
    <motion.div
      variants={map}
      initial={"hide"}
      animate={"show"}
      className="bay drop-shadow-bay z-30 hover:cursor-grab absolute origin-center"
      drag
      // dragConstraints={mapRef}
      dragConstraints={
        isSmall
          ? { top: -200, left: -800, right: 800, bottom: 200 }
          : { top: -200, left: -700, right: 700, bottom: 200 }
      }>
      {
        {
          "2020-2040": <BayA handleDiscClick={handleDiscClick} />,
          "2010-2020": <BayB handleDiscClick={handleDiscClick} />,
          "2000-2010": <BayC handleDiscClick={handleDiscClick} />,
          "1990-2000": <BayD handleDiscClick={handleDiscClick} />,
          "1980-1990": <BayE handleDiscClick={handleDiscClick} />,
          "1970-1980": <BayF handleDiscClick={handleDiscClick} />,
          "1960-1970": <BayG handleDiscClick={handleDiscClick} />,
          "1950-1960": <BayH handleDiscClick={handleDiscClick} />,
          "1940-1950": <BayI handleDiscClick={handleDiscClick} />,
          "1930-1940": <BayJ handleDiscClick={handleDiscClick} />,
          "1920-1930": <BayK handleDiscClick={handleDiscClick} />,
          "1910-1920": <BayL handleDiscClick={handleDiscClick} />,
          "1850-1910": <BayM handleDiscClick={handleDiscClick} />,
        }[period]
      }
    </motion.div>
  );
};
export default Bay;
