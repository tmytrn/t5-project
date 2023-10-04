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
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useDebouncedEffect } from "@lib/index";

const Bay = ({ period, zoom, handleDiscClick, isDiscOpen }) => {
  const map = {
    hide: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
    show: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    scaleable: {
      scale: zoom / 100,
      opacity: 1,
      transition: { type: "spring", duration: 0.15 },
    },
  };
  const bayRef = useRef(null);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isDiscTapping, setIsDiscTapping] = useState(false);
  const [isBaySet, setIsBaySet] = useState(false);

  useDebouncedEffect(
    () => {
      // console.log("setConstraints()");
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

  useEffect(() => {
    setTimeout(() => {
      setIsBaySet(true);
    }, 2000);
  });

  const sSmooth = useSpring(zoom, { bounce: 0, damping: 50, stiffness: 400 });
  const sVelocity = useVelocity(sSmooth);

  const scale = useTransform(sSmooth, [0.5, 1.5], [0.5, 1.5], {
    clamp: false,
  });

  return (
    <motion.div
      ref={bayRef}
      variants={map}
      initial={"hide"}
      animate={"show"}
      style={{ scale }}
      className="bay z-30 hover:cursor-grab origin-center touch-none select-none"
      drag={isDiscOpen ? false : true}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 100 }}
      dragConstraints={{
        left: -size.width / 2,
        right: size.width / 2,
        top: -(size.height - 56) / 4,
        bottom: size.height / 4,
      }}
      dragElastic={0.2}>
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
            <BayB
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "2000-2010": (
            <BayC
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1990-2000": (
            <BayD
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1980-1990": (
            <BayE
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1970-1980": (
            <BayF
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1960-1970": (
            <BayG
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1950-1960": (
            <BayH
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1940-1950": (
            <BayI
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1930-1940": (
            <BayJ
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1920-1930": (
            <BayK
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1910-1920": (
            <BayL
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
          "1850-1910": (
            <BayM
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              setIsDiscTapping={setIsDiscTapping}
            />
          ),
        }[period]
      }
    </motion.div>
  );
};
export default Bay;
