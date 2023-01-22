import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import period from "../admin/schemas/period";
import { getAllDiscs, getAllPeriods } from "../data";
import styles from "../styles/Home.module.scss";
import MyLayout from "components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import Selector from "svg/Selector";
import Hyphen from "svg/Hyphen";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import UpArrow from "svg/UpArrow";
import BayThumbnail from "svg/BayThumbnail";
import SelectorDesktop from "svg/SelectorDesktop";
const Home = ({ periods, periodsReverse }) => {
  const ref = useRef();
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [isChanging, setChanging] = useState(false);

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    initialSlide: 1,
    vertical: true,
    verticalSwiping: true,
    touchMove: true,
    swipeToSlide: true,
    className: "absolute left-0 top-[50%] h-screen w-full bg-transparent",
    afterChange: (index) => {
      setChanging(false);
      console.log("current index", index);
    },
    beforeChange: (current, next) => {
      setSelectedPeriod(next);
      setChanging(true);
    },
  };

  const opacity = {
    hidden: { opacity: 0, transition: { duration: 0.001 } },
    show: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const blur = {
    hidden: { filter: "blur(0px)" },
    show: { filter: "blur(3px)" },
  };

  const enter = {
    hidden: { opacity: 0, transition: { duration: 0.001 } },
    show: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const desktopEnter = {
    hidden: {
      background: "#F5DB95",
      opacity: 0,
      transition: { duration: 0.001 },
    },
    show: {
      background: "#F5DB95",
      opacity: 0.9,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const saddle = {
    hidden: {
      opacity: 1,
      backgroundColor: "transparent",
      color: "#5B3B0B",
      backdropFilter: "blur(0px)",
      transition: { duration: 0.001 },
    },
    show: {
      opacity: 1,
      backgroundColor: "#E7CD89",
      color: "#B2A875",
      backdropFilter: "blur(3px)",
      transition: { duration: 0.5 },
    },
    initial: {
      opacity: 0,
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 1,
      },
    },
  };

  const opacities = {
    full: { opacity: 1 },
    eighty: { opacity: 0.8 },
    thirty: { opacity: 0.3 },
    ten: { opacity: 0.1 },
  };

  const handleMouseDown = (e) => {
    console.log("mouse down");
  };

  let divide = 100 / 13;
  const getCenterIndex = (num) => {
    if (num < 0) return 0;
    let progress = num * 100;
    console.log("num: ", progress, "divide", divide);
    return parseInt(progress / divide);
  };

  return (
    <div className="overflow-hidden">
      <Head>
        <title>A Murmuration</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main
        className="md:h-screen d:flex md:flex-col md:justify-end pt-[310px] md:pt-[350px] px-5 md:px-0 border-solid border-saddle w-full bg-transparent overflow-hidden"
        ref={ref}
      >
        <motion.div
          className="hidden md:block absolute left-[calc(50%-372.5px)] w-[745px] pb-16 pt-[124px] bottom-[0px]"
          variants={desktopEnter}
          animate={isChanging ? "hidden" : "show"}
        >
          <span className="flex flex-col w-full justify-center items-center z-30 ">
            <motion.span
              className="font-sans text-2xl uppercase leading-[18px] pb-1 mb-4 border-b-[1px] border-b-solid border-saddle text-saddle"
              variants={enter}
              animate={isChanging ? "hidden" : "show"}
            >
              Enter
            </motion.span>
            <SelectorDesktop />
          </span>
        </motion.div>

        <motion.div className={"bg-branch hidden md:block w-full h-full"}>
          <Swiper
            slidesPerView={"3"}
            spaceBetween={43}
            initialSlide={0}
            centeredSlides={true}
            className={"mySwiper w-full h-full cursor-grab select-none"}
            onSlideChange={(i) => {
              // setSelectedPeriod(i.realIndex);
              setChanging(false);
              setSelectedPeriod(i.realIndex);
            }}
            onSliderMove={(i, e) => {
              setChanging(true);
              setSelectedPeriod(getCenterIndex(i.progress));
            }}
            onTouchEnd={(i) => {
              setChanging(false);
              setSelectedPeriod(i.realIndex);
            }}
          >
            {periodsReverse.map((period, key) => (
              <SwiperSlide
                className="w-[745px] flex justify-center items-center relative shrink-0 transition-transform"
                key={key}
              >
                <div className="text-saddle flex flex-col h-full justify-start opacity-50 hover:bg-sunset hover:cursor-pointer">
                  {/* <BayThumbnail /> */}
                  <div className="relative w-[670px] h-[274px]">
                    <img
                      src="/images/thumbnailWhite.png"
                      className="absolute top-0 left-0 "
                    />
                    <motion.img
                      src="/images/thumbnailColor.png"
                      className="absolute top-0 left-0 "
                      variants={opacity}
                      animate={
                        !isChanging && selectedPeriod == key ? "show" : "hidden"
                      }
                    />
                  </div>
                  <motion.a
                    className="text-[90px] text-center"
                    href={`/period/2020-2040`}
                  >
                    {period.period}
                  </motion.a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className=" md:hidden absolute left-0 pl-[17px] h-[108px] selector w-full flex justify-start items-center select-none">
          <span className="flex w-1/2 items center z-30 ">
            <Selector />
            <motion.span
              className="font-sans uppercase ml-2 leading-[18px] pb-1 border-b-[1px] border-b-solid border-saddle"
              variants={enter}
              animate={isChanging ? "hidden" : "show"}
            >
              Enter
            </motion.span>
          </span>
          <motion.span
            className="w-1/2 ml-[-20px] z-30 "
            variants={opacity}
            animate={isChanging ? "show" : "hidden"}
          >
            <Hyphen />
          </motion.span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={
            " md:hidden absolute left-0 top-0 h-screen w-full bg-transparent overflow-hidden"
          }
        >
          <Swiper
            direction={"vertical"}
            slidesPerView={"7"}
            initialSlide={0}
            centeredSlides={true}
            onSlideChange={(i) => {
              // setSelectedPeriod(i.realIndex);
              setChanging(false);
              setSelectedPeriod(i.realIndex);
            }}
            onSliderMove={(i, e) => {
              setChanging(true);
              setSelectedPeriod(getCenterIndex(i.progress));
            }}
            onTouchEnd={(i) => {
              setChanging(false);
              setSelectedPeriod(i.realIndex);
            }}
            className={"w-full h-full"}
          >
            {periods.map((period, key) => (
              <SwiperSlide
                className="last:border-b-solid last:border-b-[1px] last:border-b-white"
                key={key}
              >
                <motion.div
                  variants={saddle}
                  initial={"initial"}
                  animate={
                    selectedPeriod == key && !isChanging ? "show" : "hidden"
                  }
                  className={
                    "h-full flex justify-center w-full border-t-white border-solid border-t-[1px]  "
                  }
                >
                  <motion.a
                    className={
                      "w-full flex justify-between text-7xl pl-1 tracking-tightest text-left m-center max-w-[302px] py-6 "
                    }
                    variants={opacities}
                    animate={
                      selectedPeriod == key
                        ? "full"
                        : key == selectedPeriod + 1 || key == selectedPeriod - 1
                        ? "eighty"
                        : key == selectedPeriod + 2 || key == selectedPeriod - 2
                        ? "thirty"
                        : "ten"
                    }
                    href={`/period/2020-2040`}
                    //TODO: make this a dynamic route
                  >
                    <motion.span
                      className="mr-auto w-[142px] leading-[60px]"
                      variants={blur}
                      animate={
                        selectedPeriod == key && !isChanging ? "show" : "hidden"
                      }
                    >
                      {period.period.split("-")[0]}
                    </motion.span>

                    <motion.span
                      className="ml-auto leading-[60px]"
                      variants={blur}
                      animate={
                        selectedPeriod == key && !isChanging ? "show" : "hidden"
                      }
                    >
                      {period.period.split("-")[1]}
                    </motion.span>
                  </motion.a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const periods = await getAllPeriods();
  const periodsReverse = periods.reverse();
  const page = "home";
  return {
    props: { periods, periodsReverse, page },
    revalidate: 10,
  };
}

Home.Layout = MyLayout;
export default Home;
