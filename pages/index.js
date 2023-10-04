import React, { useRef, useState, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllPeriods } from "../data";
import MyLayout from "components/Layout";
import { motion } from "framer-motion";
import Selector from "svg/Selector";
import Hyphen from "svg/Hyphen";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper";
import "swiper/swiper-bundle.css";
import { useIsMedium, useIsSmall } from "@lib/index";
import LoaderContext from "components/LoaderContext";
import { useRouter } from "next/router";

const Home = ({ periods }) => {
  const router = useRouter();
  const ref = useRef();
  const isMedium = useIsMedium();
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [isChanging, setChanging] = useState(false);

  const opacity = {
    hidden: { opacity: 0, transition: { duration: 0.001 } },
    show: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const desktopBay = {
    hidden: { opacity: 0, transition: { duration: 0.1 } },
    show: { opacity: 1, transition: { duration: 0.25 } },
  };

  const scale = {
    normal: { scale: 0.95, transition: { duration: 0.5, delay: 0 } },
    bigger: { scale: 1.0, transition: { duration: 0.25, delay: 0.5 } },
  };

  const desktopInactiveBay = {
    hidden: { opacity: 0.35, transition: { duration: 0.25 } },
    show: { opacity: 0, transition: { duration: 0.01 } },
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

  useEffect(() => {
    setTimeout(() => {
      setLoaderDidRun(true);
    }, 6000);
  });

  const { lastBayVisited, setLastBayVisited, loaderDidRun, setLoaderDidRun } =
    useContext(LoaderContext);

  return (
    <div className="overflow-hidden h-full bg-branch">
      <Head>
        <title>a murmuration</title>
        <meta
          property="og:image"
          content="https://amurmuration.art/public/og-image.jpg"
        />
        <meta property="og:title" content="A Murmuration" />
        <meta property="og:image:width" content="2577" />
        <meta property="og:image:height" content="1350" />
        <meta
          property="og:description"
          content="An artwork at the Chicago O’Hare Airport by Jina Valentine"
        />
        <meta
          name="description"
          content="An artwork at the Chicago O’Hare Airport by Jina Valentine"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main
        className="h-full md:h-full d:flex md:flex-col md:justify-end pt-[172px] md:pt-[64px] px-5 md:px-0 border-solid border-saddle w-full bg-transparent overflow-hidden"
        ref={ref}>
        {isMedium && (
          <motion.div
            className={"hidden md:block w-full h-full"}
            animate={
              loaderDidRun
                ? { y: ["0%"], opacity: [1] }
                : { y: ["10%", "0%"], opacity: [0, 1] }
            }
            transition={{ delay: 3.5, duration: 1, ease: "easeInOut" }}>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={48}
              shortSwipes={false}
              threshhold={30}
              initialSlide={lastBayVisited}
              centeredSlides={true}
              slideToClickedSlide={true}
              preventClicks={true}
              preventClicksPropagation={true}
              keyboard={{
                enabled: true,
              }}
              modules={[Keyboard]}
              className={"mySwiper w-full h-full select-none"}
              onSlideChangeTransitionStart={() => {
                setChanging(true);
              }}
              onSlideChangeTransitionEnd={() => {
                setChanging(false);
              }}
              onSlideChange={(i) => {
                // setSelectedPeriod(i.realIndex);
                setChanging(false);
                setSelectedPeriod(i.realIndex);
              }}
              onSliderMove={(i, e) => {
                console.log("slider move");
                setChanging(true);
                setSelectedPeriod(getCenterIndex(i.progress));
              }}
              onTouchEnd={(i) => {
                setChanging(false);
                setSelectedPeriod(i.realIndex);
              }}>
              {periods.map((period, key) => (
                <SwiperSlide className="w-[800px] 2xl:w-[1024px] flex justify-center items-center relative shrink-0 transition-transform md:cursor-pointer">
                  <div
                    className="flex flex-col h-full justify-center items-center"
                    key={key}>
                    {/* <BayThumbnail /> */}
                    <div className="select-none h-full w-full flex items-center">
                      <div className="relative w-full h-[442px] 2xl:h-[556px]">
                        <motion.div
                          variants={desktopInactiveBay}
                          animate={
                            !isChanging && selectedPeriod == key
                              ? "show"
                              : "hidden"
                          }
                          className="absolute top-0 left-[calc(50% - 512px)] select-none pointer-events-none"
                          loading="lazy">
                          <Image
                            width={1024}
                            height={556}
                            src={period.inactiveImage}
                            alt={"inactive image"}
                          />{" "}
                        </motion.div>
                        <motion.div
                          className="absolute top-0 left-[calc(50% - 512px)] origin-center"
                          variants={scale}
                          initial="normal"
                          animate={
                            !isChanging && selectedPeriod == key
                              ? "bigger"
                              : "normal"
                          }
                          whileTap={{ scale: 0.95 }}>
                          <button
                            onClick={(e) => {
                              if (!isChanging && selectedPeriod == key) {
                                setLastBayVisited(key);
                                router.push(`/period/${period.period}`);
                              }
                            }}>
                            <motion.div
                              variants={desktopBay}
                              animate={
                                !isChanging && selectedPeriod == key
                                  ? "show"
                                  : "hidden"
                              }
                              className={
                                !isChanging && selectedPeriod == key
                                  ? `hover:cursor-pointer`
                                  : `hover:cursor-grab pointer-events-none`
                              }
                              loading="lazy">
                              <Image
                                width={1024}
                                height={556}
                                src={period.activeImage}
                                alt={"active image"}
                              />
                            </motion.div>
                          </button>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      className="w-[800px] 2xl:w-[1024px] text-[90px] text-center flex flex-col justify-center stroked-saddle text-transparent pb-4"
                      variants={desktopSelector}
                      animate={
                        !isChanging && selectedPeriod == key ? "show" : "hidden"
                      }>
                      <button
                        className="leading-[60px] inline"
                        href={`/period/${period.period}`}
                        onClick={(e) => {
                          if (!isChanging && selectedPeriod == key) {
                            setLastBayVisited(key);
                            router.push(`/period/${period.period}`);
                          }
                        }}>
                        {period.period}
                      </button>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
        <motion.div
          className={
            " md:hidden absolute left-0 top-0 h-full w-full bg-transparent overflow-hidden"
          }
          animate={
            loaderDidRun
              ? { y: ["0%"], opacity: [1] }
              : { y: ["50%", "0%"], opacity: [0, 1] }
          }
          transition={{ delay: 3.5, duration: 1, ease: "easeIn" }}>
          <Swiper
            direction={"vertical"}
            slidesPerView={"auto"}
            initialSlide={lastBayVisited}
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
              <SwiperSlide className=" h-[108px]">
                <motion.div
                  variants={saddle}
                  initial={"initial"}
                  animate={
                    selectedPeriod == key && !isChanging ? "show" : "hidden"
                  }
                  className={
                    "h-[108px] flex justify-center w-full  stroked-saddle"
                  }>
                  <Link
                    href={`/period/${period.period}`}
                    onClick={() => {
                      setLastBayVisited(key);
                    }}
                    passHref>
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
  const page = "home";
  return {
    props: { periods, page },
    revalidate: 10,
  };
}

Home.Layout = MyLayout;
export default Home;
