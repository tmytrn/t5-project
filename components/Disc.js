import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { slugify } from "util/utiliities";
import DropdownArrow from "svg/DropdownArrow";

const Disc = ({ data, setIsDiscOpen, isDiscOpen, isSmall }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  console.log("DISK DATA: ", data);
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
      isData={data ? true : false}
    >
      <div className="px-8 md:px-24 text-saddle ">
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
            animate={isDiscOpen ? "visible" : "hidden"}
          >
            <a className="font-sans">CLOSE</a>
            <a className="text-center flex justify-center pb-[12px] ">
              <DropdownArrow />
            </a>
          </motion.div>
        ) : null}
        <div className="h-discscroll overflow-y-scroll pb-8 hide-scrollbar">
          <div className="font-sans text-[22px] uppercase text-center pb-8">
            {data?.country}
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-2/3">
              <div className="flex w-[302px] mb-4 font-sans text-center border-[1px] border-solid border-saddle ">
                <a
                  className={
                    isEnglish
                      ? "w-1/2 hover:cursor-pointer transition-all bg-saddle text-clear"
                      : "w-1/2 hover:cursor-pointer transition-all bg-transparent text-saddle"
                  }
                  onClick={() => {
                    setIsEnglish(true);
                  }}
                >
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
                  }}
                >
                  ESPAÑOL
                </a>
              </div>
              <div className="text-5xl pb-8 leading-[52px] ">
                {isEnglish
                  ? `“${data?.translation}”`
                  : `“${
                      data?.spanishTranslation
                        ? data.spanishTranslation
                        : "No Translation"
                    }”`}
              </div>
            </div>
            {data?.translation && (
              <div className="md:w-1/3">
                <p className="font-sans uppercase text-md pb-4">
                  Original Text
                </p>
                <div className="italic text-5xl">{data?.quote}</div>
              </div>
            )}
          </div>
          {data?.contributor && (
            <div className="font-sans uppercase text-md pb-4">
              <p>Contributor</p>
              <p>{data?.contributor}</p>
            </div>
          )}
          {data?.organization && (
            <div className="font-sans uppercase text-md pb-4">
              <p>Organization</p>
              <p>{data.organization}</p>
            </div>
          )}
          {data?.context && (
            <div className="font-sans uppercase text-md pb-4">
              <p>Context</p>
              <p className="normal-case">{data.context}</p>
            </div>
          )}
          {data?.credits && (
            <div className="font-sans uppercase text-md pb-4">
              <p>Credits</p>
              <p className="normal-case text-xs">{data.credits}</p>
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
      return "absolute w-disc md:w-discdesktop h-disc bg-clear/[0.6] md: bg-clear/[0.8]rounded-[15px] border-solid border-saddle border-[1px]";
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
  const variants = isSmall
    ? {
        visible: {
          y: "0%",
          transition: {
            duration: 0.5,
          },
        },
        hidden: {
          y: "100%",
          transition: {
            duration: 0.5,
          },
        },
      }
    : {
        visible: {
          y: "40%",
          transition: {
            duration: 0.5,
          },
        },
        hidden: {
          y: "90%",
          transition: {
            duration: 0.5,
          },
        },
      };
  return (
    <motion.div
      className="absolute z-50 w-full h-disc top-[80px] left-0 bg-white/[0.85] md:bg-transparent rounded-[15px] flex justify-center"
      variants={variants}
      initial={"hidden"}
      animate={isDiscOpen && isData ? "visible" : "hidden"}
      onClick={() => {
        !isSmall && !isDiscOpen && isData ? setIsDiscOpen(true) : null;
      }}
    >
      <div className={colorString(color)}>{children}</div>
    </motion.div>
  );
};

export default Disc;
