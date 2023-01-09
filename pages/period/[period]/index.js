import React from "react";
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

const Period = ({ period, data }) => {
  const [isDiscOpen, setIsDiscOpen] = useState(false);
  const [currentDisc, setCurentDisc] = useState();
  const [zoom, setZoom] = useState(85);
  const { mapInstructionsDidRun, setMapInstructionsDidRun } =
    useContext(InstructionsContext);
  const zoomRef = useRef(null);
  const mapRef = useRef(null);
  data = data[0];
  const discs = data.discs;
  console.log(discs);
  console.log(data);
  const handleDiscClick = (disc) => {
    // console.log("disc clicked");
    // console.log(disc);

    let indexOfDisc = discs.findIndex((x) => x.country === disc);
    setCurentDisc(discs[indexOfDisc]);
    setIsDiscOpen(true);
  };
  console.log(period);
  const start = period.split("-")[1];
  const end = period.split("-")[0];

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>A Murmuration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="absolute left-0 top-0 h-screen w-full overflow-hidden bg-sunset select-none">
        {!mapInstructionsDidRun && (
          <div className="absolute z-[99] h-screen w-full left-0 top-[56px] flex flex-col justify-center align-middle text-saddle bg-platinum bg-opacity-60">
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
        )}
        <div
          className={
            mapInstructionsDidRun ? " transition-all" : "blur-sm transition-all"
          }
        >
          <motion.div
            variants={variants}
            initial={"hidden"}
            animate={isDiscOpen ? "hidden" : "visible"}
          >
            <div className="absolute w-full h-[58px] period-gradient z-10 top-[56px]"></div>
            <div className="font-serif absolute w-full text-center text-[190px] top-[24px] left-0 stroked-text z-[0] ">
              {start}
            </div>
            <div className="absolute w-full top-[90px] flex justify-between z-30">
              <span className="border-saddle border-solid border-t-[1px] w-4"></span>
              <span className="border-saddle border-solid border-t-[1px] w-4"></span>
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
            className={"bay-illustration z-20 "}
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
          >
            <BayA zoom={zoom} handleDiscClick={handleDiscClick} />
          </motion.div>

          <div className="zoom-container absolute z-30">
            <ZoomIn />
            <input
              type="range"
              orient="vertical"
              ref={zoomRef}
              className="map-zoom"
              min="50"
              max="100"
              defaultValue="85"
              onChange={() => {
                setZoom(zoomRef.current.value);
              }}
            ></input>
            <div>{zoom}</div>
            <ZoomOut />
          </div>
          <div className="flex flex-col w-full absolute bottom-0 left-0">
            <div className="absolute left-0 bottom-[185px] uppercase text-center w-full z-30 font-sans text-base underline text-saddle">
              About This Era
            </div>
            <div className="font-serif absolute w-full text-center text-[190px] bottom-[-60px] left-0 stroked-text z-[0]">
              {end}
            </div>
            <div className="absolute w-full bottom-[54px] flex justify-between z-30">
              <span className="border-saddle border-solid border-t-[1px] w-4"></span>
              <span className="border-saddle border-solid border-t-[1px] w-4"></span>
            </div>
            <div className="absolute w-full bottom-0 left-0 period-gradient-bottom z-10 h-[78px]"></div>
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
          </div>
        </div>
      </main>
      <AnimatePresence>
        <Disc
          data={currentDisc}
          setIsDiscOpen={setIsDiscOpen}
          isDiscOpen={isDiscOpen}
        />
      </AnimatePresence>
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
