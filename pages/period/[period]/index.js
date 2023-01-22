import React, { useEffect } from "react";
import Head from "next/head";
import { getPeriodPage, getAllPeriods } from "../../../data";
import MyLayout from "components/Layout";
import Link from "next/link";
import Disc from "../../../components/Disc";
import { useState, useRef, useContext } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import BayA from "../../../svg/BayA";
import ZoomIn from "svg/ZoomIn";
import ZoomOut from "svg/ZoomOut";
import UpArrow from "svg/UpArrow";
import DownArrow from "svg/DownArrow";
import InstructionsContext from "components/InstructionsContext";
import { useIsSmall, useIsMedium } from "@lib/index";

const Period = ({ period, data }) => {
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const [isDiscOpen, setIsDiscOpen] = useState(false);
  const [currentDisc, setCurentDisc] = useState();
  const [zoom, setZoom] = useState(100);
  const { mapInstructionsDidRun, setMapInstructionsDidRun } =
    useContext(InstructionsContext);
  const zoomRef = useRef(null);
  data = data[0];
  const discs = data.discs;
  const handleDiscClick = (disc) => {
    let indexOfDisc = discs.findIndex((x) => x.country === disc);
    setCurentDisc(discs[indexOfDisc]);
    setIsDiscOpen(true);
  };
  const start = period.split("-")[1];
  const end = period.split("-")[0];

  const variants = isSmall
    ? {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    : {
        visible: { filter: "blur(0px)", transition: { duration: 1 } },
        hidden: { filter: "blur(3px)", transition: { duration: 1 } },
      };

  const blur = {
    hidden: { filter: "blur(0px)", transition: { duration: 1 } },
    show: { filter: "blur(3px)", transition: { duration: 1 } },
  };

  useEffect(() => {
    setZoom(isSmall ? 85 : 75);
  }, []);
  return (
    <>
      <Head>
        <title>A Murmuration</title>
        <meta
          name="description"
          content="Here we come, go and shape the land."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="absolute left-0 top-0 h-screen w-full overflow-hidden bg-sunset select-none">
        {!mapInstructionsDidRun && isSmall ? (
          <div className="absolute z-[98] h-screen w-full left-0 top-[56px] flex flex-col justify-center align-middle text-saddle bg-platinum bg-opacity-60">
            <div className="pb-12 text-base">
              <span className="font-sans block text-center ">
                Move around to see the entire map.
              </span>
              <span className="font-sans block text-center">
                Click the discs to see its meaning
              </span>
            </div>
            <a
              className="underline font-sans uppercase text-center"
              onClick={() => {
                setMapInstructionsDidRun(true);
              }}
            >
              Got it
            </a>
          </div>
        ) : null}

        <div className="hidden absolute bottom-[80px] md:flex justify-center align-bottom left-0 text-[360px] w-full stroked-text opacity-30">
          <p className="w-full stroked-text text-center h-[360px] ">{period}</p>
        </div>

        <motion.div
          className="hidden md:block absolute left-[80px] top-[80px] font-sans"
          variants={blur}
          animate={isDiscOpen ? "show" : "hidden"}
        >
          <p>Move around to see the entire map.</p>
          <p>Click on the discs to see its meaning.</p>
        </motion.div>

        <div
          className={
            mapInstructionsDidRun || isMedium
              ? " transition-all"
              : "blur-sm transition-all"
          }
        >
          <motion.div
            variants={variants}
            initial={"hidden"}
            animate={isDiscOpen ? "hidden" : "visible"}
          >
            <div className="md:hidden block absolute w-full h-[58px] period-gradient z-10 top-[56px]"></div>
            <div className="md:hidden block font-serif absolute w-full text-center text-[190px] top-[24px] left-0 stroked-text z-[0] ">
              {start}
            </div>
            <div className="absolute w-full top-[90px] flex justify-between z-30">
              <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
              <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
            </div>
          </motion.div>

          {data.future && (
            <div className="mt-[56px] relative w-full font-sans py-1 z-40">
              <div className="absolute  w-full flex flex-col items-center snap-center justify-center z-40">
                <Link href={`/period/${data.future}`}>
                  <a>
                    <UpArrow />
                  </a>
                </Link>
                <Link href={`/period/${data.future}`}>
                  <a className="uppercase text-saddle py-1 text-center ">
                    To the Future
                  </a>
                </Link>
              </div>
            </div>
          )}

          <motion.div
            className={
              "absolute z-30 left-0 top-0 w-full h-full flex justify-center align-center "
            }
            variants={variants}
            initial={"hidden"}
            animate={isDiscOpen ? "hidden" : "visible"}
            ref={zoomRef}
          >
            <BayA
              mapRef={zoomRef}
              zoom={zoom}
              handleDiscClick={handleDiscClick}
              isSmall={isSmall}
              isMedium={isMedium}
            />
          </motion.div>

          <div className="zoom-container absolute z-30">
            <span className="rotate-90 md:rotate-0">
              <ZoomOut />
            </span>
            <input
              type="range"
              ref={zoomRef}
              className="map-zoom"
              min="50"
              max="100"
              defaultValue="85"
              onChange={() => {
                setZoom(zoomRef.current.value);
              }}
            ></input>
            <ZoomIn />
          </div>
          <motion.div
            className="md:hidden flex flex-col w-full absolute bottom-0 left-0"
            variants={variants}
            initial={"hidden"}
            animate={isDiscOpen ? "hidden" : "visible"}
          >
            <div className="font-serif absolute w-full text-center text-[190px] bottom-[-60px] left-0 stroked-text z-[0]">
              {end}
            </div>
            <div className=" absolute w-full bottom-0 left-0 period-gradient-bottom z-10 h-[78px]"></div>
            {data.past && (
              <div className="py-2 font-sans w-full pb-4 z-30 flex flex-col items-center justify-center">
                <Link href={`/period/${data.past}`}>
                  <a className="">
                    <span className="uppercase  text-saddle py-1  text-center">
                      To the Past
                    </span>
                  </a>
                </Link>
                <Link href={`/period/${data.past}`}>
                  <a>
                    <DownArrow />
                  </a>
                </Link>
              </div>
            )}
          </motion.div>
          <motion.div
            className="absolute w-full bottom-[54px] flex justify-between z-30"
            variants={variants}
            initial={"hidden"}
            animate={isDiscOpen ? "hidden" : "visible"}
          >
            <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
            <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
          </motion.div>
        </div>
      </main>
      <Disc
        data={currentDisc}
        setIsDiscOpen={setIsDiscOpen}
        isDiscOpen={isDiscOpen}
        isSmall={isSmall}
      />
    </>
  );
};

export async function getStaticProps(context) {
  const data = await getPeriodPage(context.params.period);
  const page = "period";
  const period = context.params.period;
  return {
    props: { period, data, page },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const data = await getAllPeriods();
  const periods = data.map((period) => ({
    params: { period: period.period },
  }));
  return {
    paths: periods,
    fallback: false, // can also be true or 'blocking'
  };
}

Period.Layout = MyLayout;
export default Period;
