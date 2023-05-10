import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import DropdownArrow from "svg/DropdownArrow";
import { PortableText } from "@portabletext/react";

const DiscModal = ({ data, setIsDiscOpen, isDiscOpen, isSmall }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const opacity = {
    visible: { opacity: 1, transition: { delay: 0.5 } },
    hidden: { opacity: 0 },
  };

  return (
    <DiscWrapper
      color={data ? data.color.name : "desert tan"}
      isDiscOpen={isDiscOpen}
      setIsDiscOpen={setIsDiscOpen}
      isSmall={isSmall}
      isData={data ? true : false}>
      <div className="px-4 md:px-16 text-saddle h-full md:h-full">
        {!data && (
          <div className="flex flex-col justify-center text-center pt-[16px] font-sans">
            What does this mean? Click the disk to see it from here.
          </div>
        )}

        {isDiscOpen || data ? (
          <motion.div
            className="flex flex-col justify-center text-center pt-[15px] hover:cursor-pointer"
            onClick={() => setIsDiscOpen(false)}
            variants={opacity}
            initial={"hidden"}
            animate={isDiscOpen ? "visible" : "hidden"}>
            <a className="font-sans text-sm inline">CLOSE</a>
            <a className="text-center flex justify-center pb-[12px] inline">
              <DropdownArrow />
            </a>
          </motion.div>
        ) : null}
        <div className=" h-[calc(100%-60px)] md:h-full overflow-y-scroll overflow-x-hidden pb-20 md:pb-12 hide-scrollbar">
          <div className="font-sans text-xl uppercase text-center pb-4">
            {data?.country}
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-2/3 md:pr-12">
              <div className="flex w-full md:w-[302px] mb-4 font-sans text-center border-[1px] border-solid border-saddle ">
                <a
                  className={
                    isEnglish
                      ? "w-1/2 hover:cursor-pointer transition-all bg-saddle text-clear"
                      : "w-1/2 hover:cursor-pointer transition-all bg-transparent text-saddle"
                  }
                  onClick={() => {
                    setIsEnglish(true);
                  }}>
                  ENGLISH
                </a>
                <a
                  className={
                    isEnglish
                      ? "w-1/2 hover:cursor-pointer transition-all bg-transparent text-saddle"
                      : "w-1/2 hover:cursor-pointer transition-all bg-saddle text-clear"
                  }
                  onClick={() => {
                    setIsEnglish(false);
                  }}>
                  ESPAÑOL
                </a>
              </div>
              <div className="text-4xl pb-8 md:pb-4 lg:pb-4 leading-[52px] ">
                {isEnglish ? (
                  data?.translation ? (
                    `“${data.translation}”`
                  ) : (
                    <PortableText value={data?.quote} />
                  )
                ) : (
                  `“${
                    data?.spanishTranslation
                      ? data.spanishTranslation
                      : "No Translation"
                  }”`
                )}
              </div>
            </div>
            {data?.quote && (
              <div className="md:w-1/3 pb-8 md:pb-4 lg:pb-2">
                <p className="font-sans uppercase text-base pb-4">
                  Original Text
                </p>
                <div
                  className={
                    data.alignRight
                      ? "text-right italic text-3xl"
                      : "text-left italic text-3xl"
                  }>
                  <PortableText value={data?.quote} />
                </div>
              </div>
            )}
          </div>
          {data?.contributor && (
            <div className="font-sans text-base pb-4">
              <p className="underline uppercase">Contributor</p>
              <p>{data?.contributor}</p>
            </div>
          )}
          {data?.organization && (
            <div className="font-sans uppercase text-base pb-4">
              <p className="underline">Organization</p>
              <p>{data.organization}</p>
            </div>
          )}
          {data?.context && (
            <div className="font-sans text-base pb-4">
              <p className="uppercase underline">Context</p>
              <PortableText className="normal-case" value={data.context} />
            </div>
          )}
          {data?.credits && (
            <div className="font-sans uppercase text-base pb-4">
              <p>Credits</p>
              <PortableText
                className="normal-case text-xs"
                value={data.credits}
              />
            </div>
          )}
        </div>
      </div>
    </DiscWrapper>
  );
};

const colorString = (color) => {
  switch (color) {
    case "desert tan":
      return "absolute w-disc md:w-discdesktop h-full bg-deserttan/[0.6] md:bg-deserttan/[0.8] rounded-[15px] rounded-br-none rounded-bl-none";
    case "old penny":
      return "absolute w-disc md:w-discdesktop h-full bg-oldpenny/[0.6] md:bg-oldpenny/[0.8] rounded-[15px] rounded-br-none rounded-bl-none";
    case "new penny":
      return "absolute w-disc md:w-discdesktop h-full bg-newpenny/[0.6] md:bg-newpenny/[0.8] rounded-[15px] rounded-br-none rounded-bl-none";
    case "pewter":
      return "absolute w-disc md:w-discdesktop h-full bg-pewter/[0.6] md:bg-pewter/[0.8] rounded-[15px] rounded-br-none rounded-bl-none";
    case "moss green":
      return "absolute w-disc md:w-discdesktop h-full bg-mossgreen/[0.6] md:bg-mossgreen/[0.8] rounded-[15px] rounded-br-none rounded-bl-none";
    case "clear":
      return "absolute w-disc md:w-discdesktop h-full bg-clear/[0.6] md: bg-clear/[0.8] rounded-[15px] rounded-br-none rounded-bl-none";
    case "olive drab":
      return "absolute w-disc md:w-discdesktop h-full bg-olivedrab/[0.6] md:bg-olivedrab/[0.8] rounded-[15px] rounded-br-none rounded-bl-none";
  }
};

const DiscWrapper = ({
  color,
  children,
  isDiscOpen,
  setIsDiscOpen,
  isSmall,
  isData,
}) => {
  const discRef = useRef(null);
  const discbackgroundRef = useRef(null);
  const variants = isSmall
    ? {
        visible: {
          y: "calc(-100% + 64px)",
          transition: {
            duration: 0.5,
          },
        },
        hidden: {
          y: "0%",
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        },
      }
    : {
        visible: {
          y: "-100%",
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        },
        hidden: {
          y: "-50px",
          transition: {
            duration: 0.5,
          },
        },
      };

  const blur = {
    hidden: {
      backdropFilter: "blur(0px)",
      zIndex: 0,
      transition: { duration: 1 },
    },
    show: {
      backdropFilter: "blur(3px)",
      zIndex: 30,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <motion.div
      ref={discbackgroundRef}
      className="w-full h-full absolute top-0 left-0 overflow-hidden">
      <motion.div
        className="w-full h-full absolute"
        variants={blur}
        initial={"hidden"}
        animate={isDiscOpen ? "show" : "hidden"}
        onClick={() => {
          setIsDiscOpen(false);
        }}></motion.div>
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          ref={discRef}
          className="absolute w-full h-full md:h-discdesktop top-[100%] left-0  md:bg-transparent rounded-[15px] flex justify-center z-40"
          variants={variants}
          initial={"initial"}
          animate={isDiscOpen && isData ? "visible" : "hidden"}
          onClick={() => {
            !isSmall && !isDiscOpen && isData ? setIsDiscOpen(true) : null;
          }}>
          <div className="relative w-disc md:w-discdesktop">
            <div className="absolute h-full rounded-[15px] top-0 left-0 z-[-1] bg-white/[0.85] w-disc md:w-discdesktop"></div>
            <div className={colorString(color)}>{children}</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DiscModal;
