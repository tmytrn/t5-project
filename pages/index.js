import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllPeriods } from "../data";
import MyLayout from "components/Layout";
import { motion } from "framer-motion";
import Selector from "svg/Selector";
import Hyphen from "svg/Hyphen";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useIsMedium, useIsSmall } from "@lib/index";
const Home = ({ periods, periodsReverse }) => {
  const ref = useRef();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [isChanging, setChanging] = useState(false);

  const opacity = {
    hidden: { opacity: 0, transition: { duration: 0.001 } },
    show: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const desktopBay = {
    hidden: { opacity: 0, transition: { duration: 0.1 } },
    show: { opacity: 1, transition: { duration: 0.1, delay: 0.5 } },
  };

  const scale = {
    normal: { scale: 1, transition: { duration: 0.1, delay: 0 } },
    bigger: { scale: 1.15, transition: { duration: 0.25, delay: 0.75 } },
  };

  const desktopInactiveBay = {
    hidden: { opacity: 0.5, transition: { duration: 0.001 } },
    show: { opacity: 0, transition: { duration: 0.1, delay: 0.5 } },
  };

  const blur = {
    hidden: { filter: "blur(0px)" },
    show: { filter: "blur(3px)" },
  };

  const enter = {
    hidden: { opacity: 0, transition: { duration: 0.001 } },
    show: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const desktopSelector = {
    hidden: {
      opacity: 0.9,
      transition: { duration: 0.001 },
    },
    show: {
      opacity: 1,
      color: "#684C21",
      transition: { duration: 0.5, delay: 0.5 },
    },
  };
  const desktopEnter = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.001 },
    },
    show: {
      opacity: 1,
      color: "#684C21",
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const saddle = {
    hidden: {
      opacity: 1,
      color: "transparent",
      transition: { duration: 0.001 },
    },
    show: {
      opacity: 1,
      color: "#684C21",
      transition: { duration: 1 },
    },
    initial: {
      opacity: 0,
    },
  };

  const opacities = {
    full: { opacity: 1, transition: { duration: 0.25 } },
    eighty: { opacity: 0.8, transition: { duration: 0.25 } },
    thirty: { opacity: 0.3, transition: { duration: 0.25 } },
    ten: { opacity: 0.1, transition: { duration: 0.25 } },
  };

  let divide = 100 / 13;
  const getCenterIndex = (num) => {
    if (num < 0) return 0;
    let progress = num * 100;
    return parseInt(progress / divide);
  };

  function throttle(cb, delay = 250) {
    let shouldWait = false;

    return (...args) => {
      if (shouldWait) return;

      cb(...args);
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, delay);
    };
  }

  return (
    <div className="overflow-hidden h-full">
      <Head>
        <title>A Murmuration</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main
        className="h-full md:h-full d:flex md:flex-col md:justify-end pt-[172px] md:pt-[124px] px-5 md:px-0 border-solid border-saddle w-full bg-transparent overflow-hidden"
        ref={ref}>
        {isMedium && (
          <div className={"bg-branch hidden md:block w-full h-full"}>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={24}
              threshhold={30}
              shortSwipes={false}
              initialSlide={0}
              centeredSlides={true}
              slideToClickedSlide={true}
              className={"mySwiper w-full h-full select-none"}
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
              }}>
              {periodsReverse.map((period, key) => (
                <SwiperSlide className="w-[800px] 2xl:w-[1024px] flex justify-center items-center relative shrink-0 transition-transform md:cursor-pointer">
                  <div
                    className=" flex flex-col h-full justify-between  "
                    key={key}>
                    {/* <BayThumbnail /> */}
                    <div className="relative select-none w-full h-full">
                      <motion.div
                        variants={desktopInactiveBay}
                        animate={
                          !isChanging && selectedPeriod == key
                            ? "show"
                            : "hidden"
                        }
                        className="absolute top-0 left-[calc(50%-400px)] 2xl:left-[calc(50%-512px)] select-none pointer-events-none"
                        loading="lazy">
                        <Image
                          width={1024}
                          height={556}
                          src={period.inactiveImage}
                          alt={"inactive image"}
                        />{" "}
                      </motion.div>
                      <motion.div
                        className="origin-center"
                        variants={scale}
                        initial="normal"
                        animate={
                          !isChanging && selectedPeriod == key
                            ? "bigger"
                            : "normal"
                        }>
                        <Link
                          href={
                            !isChanging && selectedPeriod == key
                              ? `/period/${period.period}`
                              : `#`
                          }
                          passHref>
                          <motion.div
                            variants={desktopBay}
                            animate={
                              !isChanging && selectedPeriod == key
                                ? "show"
                                : "hidden"
                            }
                            className={
                              !isChanging && selectedPeriod == key
                                ? `absolute top-0 left-[calc(50%-400px)] 2xl:left-[calc(50%-512px)] hover:cursor-pointer`
                                : `absolute top-0 left-[calc(50%-400px)] 2xl:left-[calc(50%-512px)] pointer-events-none`
                            }
                            loading="lazy">
                            <Image
                              width={1024}
                              height={556}
                              src={period.activeImage}
                              alt={"active image"}
                            />
                          </motion.div>
                        </Link>
                      </motion.div>
                    </div>
                    <motion.div
                      className="w-[800px] 2xl:w-[1024px] text-[90px] text-center flex flex-col justify-center stroked-saddle text-transparent pb-4"
                      variants={desktopSelector}
                      animate={
                        !isChanging && selectedPeriod == key ? "show" : "hidden"
                      }>
                      <Link
                        className="leading-[60px] inline"
                        href={
                          !isChanging && selectedPeriod == key
                            ? `/period/${period.period}`
                            : `#`
                        }>
                        {period.period}
                      </Link>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        <motion.div
          className={
            " md:hidden absolute left-0 top-0 h-full w-full bg-transparent bg-branch overflow-hidden"
          }>
          <Swiper
            direction={"vertical"}
            slidesPerView={"auto"}
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
            className={"w-full h-full"}>
            <div className=" md:hidden absolute left-0 top-[calc(50%-54px)] pl-[17px] h-[108px] selector w-full flex justify-start items-center select-none">
              <span className="flex w-1/2 items center z-30 ">
                <Selector />
              </span>
              <motion.span className="w-1/2 ml-[-15px] z-30 ">
                <Hyphen />
              </motion.span>
            </div>
            {periods.map((period, key) => (
              <SwiperSlide className="last:border-b-solid last:border-b-[1px] last:border-b-white h-[108px]">
                <motion.div
                  variants={saddle}
                  initial={"initial"}
                  animate={
                    selectedPeriod == key && !isChanging ? "show" : "hidden"
                  }
                  className={
                    "h-[108px] flex justify-center w-full border-t-white border-solid border-t-[1px] stroked-saddle"
                  }>
                  <Link href={`/period/${period.period}`} passHref>
                    <motion.div
                      className={
                        "w-full flex justify-between text-7xl tracking-tightest text-left m-center min-w-[300px] py-6 "
                      }
                      variants={opacities}
                      animate={
                        selectedPeriod == key
                          ? "full"
                          : key == selectedPeriod + 1 ||
                            key == selectedPeriod - 1
                          ? "eighty"
                          : key == selectedPeriod + 2 ||
                            key == selectedPeriod - 2
                          ? "thirty"
                          : "thirty"
                      }>
                      <motion.span className="mr-auto w-[142px] leading-[60px]">
                        {period.period.split("-")[0]}
                      </motion.span>

                      <motion.span className="ml-auto leading-[60px] ">
                        {period.period.split("-")[1]}
                      </motion.span>
                    </motion.div>
                  </Link>
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
