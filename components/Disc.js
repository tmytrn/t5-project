import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import DropdownArrow from "svg/DropdownArrow";
import { PortableText } from "@portabletext/react";

const Disc = ({ data, setIsDiscOpen, isDiscOpen, isSmall }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const opacity = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <DiscWrapper
      color={data ? data.color.name : "desert tan"}
      isDiscOpen={isDiscOpen}
      setIsDiscOpen={setIsDiscOpen}
      isSmall={isSmall}
      isData={data ? true : false}>
      <div className="px-4 md:px-24 text-saddle">
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
            <a className="text-center flex justify-center pb-[12px]  inline">
              <DropdownArrow />
            </a>
          </motion.div>
        ) : null}
        <div className="h-discscroll overflow-y-scroll overflow-x-hidden pb-36 md:pb-12 hide-scrollbar">
          <div className="font-sans text-base uppercase text-center pb-4">
            {data?.country}
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-2/3">
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
              <div className="text-4xl pb-8 md:pb-4 lg:pb-2 leading-[52px] ">
                {isEnglish
                  ? `“${data?.translation}”`
                  : `“${
                      data?.spanishTranslation
                        ? data.spanishTranslation
                        : "No Translation"
                    }”`}
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
            <div className="font-sans uppercase text-base pb-4">
              <p>Contributor</p>
              <p>{data?.contributor}</p>
            </div>
          )}
          {data?.organization && (
            <div className="font-sans uppercase text-base pb-4">
              <p>Organization</p>
              <p>{data.organization}</p>
            </div>
          )}
          {data?.context && (
            <div className="font-sans text-base pb-4">
              <p className="uppercase">Context</p>
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
      return "absolute w-disc md:w-discdesktop h-disc bg-deserttan/[0.6] md:bg-deserttan/[0.8] rounded-[15px] border-solid border-saddle border-[1px] ";
    case "old penny":
      return "absolute w-disc md:w-discdesktop h-disc bg-oldpenny/[0.6] md:bg-oldpenny/[0.8] rounded-[15px] border-solid border-saddle border-[1px]";
    case "new penny":
      return "absolute w-disc md:w-discdesktop h-disc bg-newpenny/[0.6] md:bg-newpenny/[0.8] rounded-[15px] border-solid border-saddle border-[1px]";
    case "pewter":
      return "absolute w-disc md:w-discdesktop h-disc bg-pewter/[0.6] md:bg-pewter/[0.8] rounded-[15px] border-solid border-saddle border-[1px]";
    case "moss green":
      return "absolute w-disc md:w-discdesktop h-disc bg-mossgreen/[0.6] md:bg-mossgreen/[0.8] rounded-[15px] border-solid border-saddle border-[1px]";
    case "clear":
      return "absolute w-disc md:w-discdesktop h-disc bg-clear/[0.6] md: bg-clear/[0.8] rounded-[15px] border-solid border-saddle border-[1px]";
    case "olive drab":
      return "absolute w-disc md:w-discdesktop h-disc bg-olivedrab/[0.6] md:bg-olivedrab/[0.8] rounded-[15px] border-solid border-saddle border-[1px]";
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
          y: "calc(-100% + 72px)",
          transition: {
            duration: 0.5,
          },
        },
        hidden: {
          y: "0%",
          transition: {
            duration: 0.5,
          },
        },
      }
    : {
        visible: {
          y: "-60%",
          transition: {
            duration: 0.5,
          },
        },
        hidden: {
          y: "-60px",
          transition: {
            duration: 0.5,
          },
        },
      };

  const blur = {
    hidden: {
      backdropFilter: "blur(0px)",
      zIndex: 0,
      transition: { duration: 1, delay: 1 },
    },
    show: {
      backdropFilter: "blur(3px)",
      zIndex: 30,
      transition: { duration: 1 },
    },
    exit: {
      zIndex: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      ref={discbackgroundRef}
      className="w-full h-screen relative"
      variants={blur}
      initial={"hidden"}
      animate={isDiscOpen && isData ? "show" : "hidden"}
      onClick={() => {
        setIsDiscOpen(false);
      }}>
      <motion.div
        ref={discRef}
        className="absolute w-full h-disc top-[100%] left-0  md:bg-transparent rounded-[15px] flex justify-center"
        variants={variants}
        initial={"initial"}
        animate={isDiscOpen && isData ? "visible" : "hidden"}
        onClick={() => {
          !isSmall && !isDiscOpen && isData ? setIsDiscOpen(true) : null;
        }}>
        <div className={colorString(color)}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default Disc;
