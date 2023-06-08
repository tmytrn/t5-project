import React, { useEffect } from "react";
import Head from "next/head";
import { getPeriodPage, getAllPeriods } from "../../../data";
import MyLayout from "components/Layout";
import Link from "next/link";
import DiscModal from "../../../components/DiscModal";
import { useState, useRef, useContext } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Bay from "../../../bays/Bay";
import UpArrow from "svg/UpArrow";
import DownArrow from "svg/DownArrow";
import InstructionsContext from "components/InstructionsContext";
import { useIsSmall, useIsMedium } from "@lib/index";
import { useWindowSize } from "@lib/index";
import LoaderContext from "components/LoaderContext";

const Period = ({ period, data }) => {
  const { width, height } = useWindowSize();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const [isDiscOpen, setIsDiscOpen] = useState(false);
  const [currentDisc, setCurentDisc] = useState();
  const [isPastHover, setIsPastHover] = useState(false);
  const [isFutureHover, setIsFutureHover] = useState(false);
  const [zoom, setZoom] = useState(50);
  const zoomRef = useRef(null);
  const constraintsRef = useRef(null);
  const bayRef = useRef(null);
  data = data[0];
  const discs = data.discs;
  const handleDiscClick = (disc) => {
    let indexOfDisc = discs.findIndex((x) => x.country === disc);
    setCurentDisc(discs[indexOfDisc]);
    setIsDiscOpen(true);
  };
  const start = period.split("-")[1];
  const end = period.split("-")[0];
  const throttleInProgress = useRef();

  const handleZoomIn = () => {
    if (zoom < 150) {
      setZoom(zoom + 10);
    }
  };
  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 10);
    }
  };

  const periodIndex = (period) => {
    switch (period) {
      case "2020-2040":
        return 12;
      case "2010-2020":
        return 11;
      case "2000-2010":
        return 10;
      case "1990-2000":
        return 9;
      case "1980-1990":
        return 8;
      case "1970-1980":
        return 7;
      case "1960-1970":
        return 6;
      case "1950-1960":
        return 5;
      case "1940-1950":
        return 4;
      case "1930-1940":
        return 3;
      case "1920-1930":
        return 2;
      case "1910-1920":
        return 1;
      case "1850-1910":
        return 0;
    }
  };

  const { setLastBayVisited } = useContext(LoaderContext);

  const handleThrottleScroll = (event) => {
    if (isMedium) {
      if (throttleInProgress.current) {
        return;
      }
      // Set inProgress to true and start the timer
      throttleInProgress.current = true;
      setTimeout(() => {
        // Set inProgress to false, which means
        // that setTimeout will work
        // again on the next run
        // console.log(event.deltaY);
        throttleInProgress.current = false;
        if (event.deltaY > 0) {
          handleZoomIn();
        } else {
          handleZoomOut();
        }
      }, 200);
    }
  };

  useEffect(() => {
    bayRef.current.addEventListener(
      "gesturechange",
      (e) => {
        handlePinch(e);
      },
      false
    );
    return bayRef.current.removeEventListener(
      "gesturechange",
      (e) => {
        handlePinch(e);
      },
      false
    );
  });
  useEffect(() => {
    setLastBayVisited(periodIndex(period));
  });
  const handlePinch = (e) => {
    e.preventDefault();
    if (e.scale < 1) {
      let zoomOffset = zoom - parseInt(e.scale * 10);
      if (zoomOffset >= 50) {
        setZoom(zoomOffset);
      }
    } else {
      let zoomOffset = zoom + parseInt(e.scale);
      if (zoomOffset <= 150) {
        setZoom(zoomOffset);
      }
    }
  };

  const opacity = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
  };

  const variants = isSmall
    ? {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    : {
        visible: { zIndex: 10, transition: { duration: 1 } },
        hidden: { zIndex: 30, transition: { duration: 1 } },
      };

  const blur = {
    hidden: { filter: "blur(0px)", transition: { duration: 1 } },
    show: { filter: "blur(3px)", transition: { duration: 1 } },
  };

  const bgBlur = {
    hidden: {
      backdropFilter: "blur(0px)",
      transition: { duration: 1 },
      zIndex: 0,
    },
    show: {
      backdropFilter: "blur(3px)",
      transition: { duration: 1 },
      zIndex: 10,
    },
  };

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
      <style global="true" jsx="true">{`
        html {
          body {
            overflow: hidden;
          }
        }
      `}</style>
      <main className="h-full w-full bg-main-gradient select-none overflow-hidden">
        <div
          className="hidden absolute bottom-[0px] md:flex justify-center
          align-bottom left-0 md:text-[124px] xl:text-[204px] w-full
          stroked-saddle opacity-[0.45] ">
          <p className="w-full text-center h-auto text-sunset">{period}</p>
        </div>

        <motion.div
          className="inline-flex justify-center md:justify-between absolute w-full px-4 md:px-12 top-[108px] md:top-[80px] font-sans  text-iceberg font-montreal z-30"
          variants={blur}
          animate={isDiscOpen ? "show" : "hidden"}>
          <div className="inline-flex flex-col-reverse md:flex-row w-full md:w-auto">
            <motion.div
              className="inline md:pb-4 md:mr-4 z-30 w-fit"
              variants={variants}
              initial={"hidden"}
              animate={"visible"}>
              <a className="inline rotate-0" onClick={handleZoomOut}>
                <img
                  className="inline w-6 h-6 md:w-8 md:h-8"
                  src={"/images/zoom-out.svg"}
                />
              </a>
              <span className="inline mx-4 text-sm md:text-normal w-[24px] md:w-auto font-montreal">
                <span className="hidden md:inline-block">Zoom: </span>
                {" " + zoom}%
              </span>
              <a className="inline" onClick={handleZoomIn}>
                <img
                  className="inline w-6 h-6 md:w-8 md:h-8"
                  src={"/images/zoom-in.svg"}
                />
              </a>
            </motion.div>
            <div className="text-[20px] md:text-sm leading-normal font-montreal text-center md:text-left">
              <span className="hidden md:block">
                <p>Move around to see the entire map.</p>
                <p>Click on the discs to see its meaning.</p>
              </span>
              {/* <span className="pb-4 md:pb-0 block md:hidden text-center">
                Click each disc to see its meaning
              </span> */}
            </div>
          </div>

          <Link
            className="hidden md:block uppercase bg-iceberg rounded-full px-4 text-saddle text-medium h-8 align-center leading-[2rem] hover:bg-saddle hover:text-iceberg transition-colors"
            href="/">
            Choose another era
          </Link>
        </motion.div>

        <div className={"w-full h-full relative"}>
          <motion.div
            variants={variants}
            initial={"hidden"}
            animate={"visible"}>
            <div className="md:hidden block absolute w-full h-[58px] period-gradient z-10 top-[56px]"></div>
            <div
              className="md:hidden block font-serif absolute w-full text-center top-[56px] left-0 z-[0] stroked-saddle text-sunset"
              style={{ fontSize: `${width - 250}px` }}>
              {start}
            </div>
            <div className="absolute w-full top-[90px] flex justify-between z-30">
              <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
              <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
            </div>
          </motion.div>

          <motion.div
            className="md:hidden flex flex-col w-full absolute bottom-0 left-0"
            variants={variants}
            initial={"hidden"}
            animate={"visible"}>
            <div
              className="font-serif absolute w-full text-center bottom-[-60px] left-0  z-[0] stroked-saddle text-sunset"
              style={{ fontSize: `${width - 250}px` }}>
              {end}
            </div>
            <div className=" absolute w-full bottom-0 left-0 period-gradient-bottom z-10 h-[78px]"></div>
          </motion.div>

          {data.future && isSmall ? (
            <motion.div
              className="block md:hidden absolute top-[70px] w-full font-sans z-40"
              variants={variants}
              initial={"hidden"}
              animate={isDiscOpen ? "hidden" : "visible"}>
              <div className=" w-full flex flex-col items-center justify-center z-40">
                <Link href={`/period/${data.future}`}>
                  <UpArrow />
                </Link>
                <Link
                  href={`/period/${data.future}`}
                  className="uppercase text-saddle py-1 text-center">
                  To the Future
                </Link>
              </div>
            </motion.div>
          ) : null}

          <motion.div
            className={
              "relative left-0 top-0 w-full h-full overflow-hidden flex justify-center items-center select-none"
            }
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            onWheel={(e) => {
              handleThrottleScroll(e);
            }}
            ref={bayRef}>
            <Bay
              period={period}
              mapRef={zoomRef}
              zoom={zoom}
              handleDiscClick={handleDiscClick}
              isDiscOpen={isDiscOpen}
              isSmall={isSmall}
              isMedium={isMedium}
              constraints={constraintsRef}
            />
          </motion.div>

          {data.past && isSmall ? (
            <motion.div
              className="absolute bottom-0 left-0 py-2 font-sans w-full pb-4 z-40 flex flex-col items-center justify-center"
              variants={variants}
              initial={"hidden"}
              animate={"visible"}>
              <Link href={`/period/${data.past}`} className="z-40">
                <span className="uppercase  text-saddle py-1  text-center">
                  To the Past
                </span>
              </Link>
              <Link href={`/period/${data.past}`}>
                <DownArrow />
              </Link>
            </motion.div>
          ) : null}

          {isMedium && (
            <motion.div
              className="w-full h-full absolute z-0 top-0"
              variants={bgBlur}
              initial={"hidden"}
              animate={
                isPastHover || isFutureHover ? "show" : "hidden"
              }></motion.div>
          )}

          {/* <motion.div className="absolute top-[56px] w-full h-full blur-sm bg-transparent"></motion.div> */}
          {data.past && isMedium ? (
            <motion.div
              className="absolute top-0 left-0 h-full font-sans w-auto z-40 flex flex-row items-center justify-center pl-8"
              variants={variants}
              initial={"hidden"}
              animate={"visible"}
              onHoverStart={() => {
                setIsPastHover(true);
              }}
              onHoverEnd={() => {
                setIsPastHover(false);
              }}
              onClick={() => {
                setIsPastHover(false);
              }}>
              <Link href={`/period/${data.past}`}>
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  variants={opacity}
                  initial={"hidden"}
                  animate={isPastHover ? "visible" : "hidden"}
                />
                <motion.div className="inline-flex">
                  <span className="rotate-90">
                    <DownArrow />
                  </span>
                  <motion.span
                    className="z-40 rotate-[270deg] ml-[-24px]"
                    variants={opacity}
                    initial={"hidden"}
                    animate={isPastHover ? "visible" : "hidden"}>
                    <span className="uppercase  text-saddle py-1  text-center">
                      To the Past
                    </span>
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
          ) : null}

          {data.future && isMedium ? (
            <motion.div
              className="absolute top-0 right-0 h-full font-sans w-auto z-40 flex flex-row items-center justify-center pr-8 "
              variants={variants}
              initial={"hidden"}
              animate={"visible"}
              onHoverStart={() => {
                setIsFutureHover(true);
              }}
              onHoverEnd={() => {
                setIsFutureHover(false);
              }}
              onClick={() => {
                setIsFutureHover(false);
              }}>
              <Link href={`/period/${data.future}`} legacyBehavior>
                <a>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={opacity}
                    initial={"hidden"}
                    animate={isFutureHover ? "visible" : "hidden"}
                  />
                  <motion.div className="inline-flex">
                    <motion.span
                      className="z-40 rotate-[90deg] mr-[-24px]"
                      variants={opacity}
                      initial={"hidden"}
                      animate={isFutureHover ? "visible" : "hidden"}>
                      <span className="uppercase  text-saddle py-1  text-center">
                        To the Future
                      </span>
                    </motion.span>
                    <span className="rotate-90 h-[16px]">
                      <UpArrow />
                    </span>
                  </motion.div>
                </a>
              </Link>
            </motion.div>
          ) : null}

          <motion.div
            className="absolute w-full bottom-[54px] flex justify-between z-30"
            variants={variants}
            initial={"hidden"}
            animate={"visible"}>
            <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
            <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
          </motion.div>
        </div>
      </main>
      <DiscModal
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
