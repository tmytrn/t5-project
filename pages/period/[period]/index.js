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

const Period = ({ period, data }) => {
  const { width, height } = useWindowSize();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const [isDiscOpen, setIsDiscOpen] = useState(false);
  const [currentDisc, setCurentDisc] = useState();
  const [isPastHover, setIsPastHover] = useState(false);
  const [isFutureHover, setIsFutureHover] = useState(false);
  const [zoom, setZoom] = useState(50);
  const { mapInstructionsDidRun, setMapInstructionsDidRun } =
    useContext(InstructionsContext);
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

  const handleThrottleScroll = (event) => {
    event.preventDefault();
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
      console.log("throttleScroll()");
      if (event.deltaY > 0) {
        handleZoomIn();
      } else {
        handleZoomOut();
      }
    }, 200);
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
      <style global jsx>{`
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
          className="flex justify-between absolute w-full px-4 md:px-12 top-[80px] font-sans  text-iceberg font-medium z-30"
          variants={blur}
          animate={isDiscOpen ? "show" : "hidden"}>
          <div className="flex flex-col-reverse md:flex-row">
            <motion.div
              className="flex items-center md:pb-4 md:mr-4 z-30"
              variants={variants}
              initial={"hidden"}
              animate={"visible"}>
              <a className=" rotate-0" onClick={handleZoomOut}>
                <img
                  className=" w-6 h-6 md:w-8 md:h-8"
                  src={"/images/zoom-out.svg"}
                />
              </a>
              <span className="px-4 text-sm md:text-normal">
                <span className="hidden md:inline-block ">Zoom: </span>
                {" " + zoom}%
              </span>
              <a className="" onClick={handleZoomIn}>
                <img
                  className=" w-6 h-6 md:w-8 md:h-8"
                  src={"/images/zoom-in.svg"}
                />
              </a>
            </motion.div>
            <div className="text-md md:text-sm text-shadow leading-normal">
              <span className="hidden md:block">
                <p>Move around to see the entire map.</p>
                <p>Click on the discs to see its meaning.</p>
              </span>
              <span className="pb-4 md:pb-0 block md:hidden">
                Click each disc to see its meaning
              </span>
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
              className="block md:hidden absolute top-[56px] w-full font-sans py-1 z-40"
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
              "relative left-0 top-0 w-full h-full overflow-hidden flex justify-center items-center"
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
              className="absolute top-0 left-0 h-full font-sans w-auto z-40 flex flex-row items-center justify-center md:px-4 lg:px-8"
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
                  <a className="rotate-90">
                    <DownArrow />
                  </a>
                  <motion.a
                    className="z-40 rotate-[270deg] ml-[-24px]"
                    variants={opacity}
                    initial={"hidden"}
                    animate={isPastHover ? "visible" : "hidden"}>
                    <span className="uppercase  text-saddle py-1  text-center">
                      To the Past
                    </span>
                  </motion.a>
                </motion.div>
              </Link>
            </motion.div>
          ) : null}

          {data.future && isMedium ? (
            <motion.div
              className="absolute top-0 right-0 h-full font-sans w-auto z-40 flex flex-row items-center justify-center px-12 "
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
                setIsPastHover(false);
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
                    <motion.a
                      className="z-40 rotate-[90deg] mr-[-24px]"
                      variants={opacity}
                      initial={"hidden"}
                      animate={isFutureHover ? "visible" : "hidden"}>
                      <span className="uppercase  text-saddle py-1  text-center">
                        To the Future
                      </span>
                    </motion.a>
                    <a className="rotate-90">
                      <UpArrow />
                    </a>
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
