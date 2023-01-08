import React from "react";
import { motion } from "framer-motion";
import { slugify } from "util/utiliities";
import DropdownArrow from "svg/DropdownArrow";

const Disc = ({ data, setIsDiscOpen, isDiscOpen }) => {
  console.log("DISK DATA: ", data);
  if (!data) return null;

  return (
    <DiscWrapper color={data.color.name} isDiscOpen={isDiscOpen}>
      <div className="px-8 text-saddle ">
        <div className="flex flex-col justify-center text-center pt-[15px]">
          <a
            onClick={() => setIsDiscOpen(false)}
            className="hover:cursor-pointer text-center flex justify-center pb-[10px] "
          >
            <DropdownArrow />
          </a>
        </div>
        <div className="h-discscroll overflow-y-auto pb-8 hide-scrollbar">
          <div className="font-sans text-[22px] uppercase text-center">
            {data?.country}
          </div>
          <div className="text-5xl pb-8 ">
            {/* <span className="opening-mark overflow-x-visible">“</span> */}
            {data?.translation}
            {/* <span className="closing-mark">”</span> */}
          </div>
          {data.translation && (
            <div>
              <p className="font-sans uppercase text-md pb-4">Original Text</p>
              <div className="italic text-5xl">{data?.quote}</div>
            </div>
          )}
          {data.contributor && (
            <div className="font-sans uppercase text-md pb-4">
              <p>Contributor</p>
              <p>{data?.contributor}</p>
            </div>
          )}
          {data.organization && (
            <div className="font-sans uppercase text-md pb-4">
              <p>Organization</p>
              <p>{data.organization}</p>
            </div>
          )}
          {data.context && (
            <div className="font-sans uppercase text-md pb-4">
              <p>Context</p>
              <p className="normal-case">{data.context}</p>
            </div>
          )}
          {data.credits && (
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

const variants = {
  visible: {
    y: 0,
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
};

const DiscWrapper = ({ color, children, isDiscOpen }) => {
  switch (color) {
    case "desert tan":
      return (
        <motion.div
          className="absolute z-50 w-disc h-disc mx-[5px] top-[80px] left-0 bg-white/[0.85] rounded-[15px]"
          initial={"hidden"}
          variants={variants}
          animate={isDiscOpen ? "visible" : "hidden"}
        >
          <div className="absolute w-full h-full bg-deserttan/[0.6] rounded-[15px] border-solid border-saddle border-[1px]">
            {children}
          </div>
        </motion.div>
      );
    case "moss green":
      return (
        <motion.div
          className="absolute z-50 w-disc h-disc mx-[5px] top-[80px] left-0 bg-white/[0.85] rounded-[15px]"
          initial={"hidden"}
          variants={variants}
          animate={isDiscOpen ? "visible" : "hidden"}
        >
          {" "}
          <div className="absolute w-full h-full bg-mossgreen/[0.6] rounded-[15px] border-solid border-saddle border-[1px]">
            {children}
          </div>
        </motion.div>
      );
    case "olive drab":
      return (
        <motion.div
          className="absolute z-50 w-disc h-disc mx-[5px] top-[80px] left-0 bg-white/[0.85] rounded-[15px]"
          initial={"hidden"}
          variants={variants}
          animate={isDiscOpen ? "visible" : "hidden"}
        >
          {" "}
          <div className="absolute w-full h-full bg-olivedrab/[0.6] rounded-[15px] border-solid border-saddle border-[1px]">
            {children}
          </div>
        </motion.div>
      );
    case "pewter":
      return (
        <motion.div
          className="absolute z-50 w-disc h-disc mx-[5px] top-[80px] left-0 bg-white/[0.85] rounded-[15px]"
          initial={"hidden"}
          variants={variants}
          animate={isDiscOpen ? "visible" : "hidden"}
        >
          {" "}
          <div className="absolute w-full h-full bg-pwewter/[0.6] rounded-[15px] border-solid border-saddle border-[1px]">
            {children}
          </div>
        </motion.div>
      );
    case "clear":
      return (
        <motion.div
          className="absolute z-50 w-disc h-disc mx-[5px] top-[80px] left-0 bg-white/[0.85] rounded-[15px]"
          variants={variants}
          animate={isDiscOpen ? "visible" : "hidden"}
        >
          {" "}
          <div className="absolute w-full h-full bg-clear/[0.6] rounded-[15px] border-solid border-saddle border-[1px]">
            {children}
          </div>
        </motion.div>
      );
    case "old penny":
      return (
        <motion.div
          className="absolute z-50 w-disc h-disc mx-[5px] top-[80px] left-0 bg-white/[0.85] rounded-[15px]"
          variants={variants}
          animate={isDiscOpen ? "visible" : "hidden"}
        >
          {" "}
          <div className="absolute w-full h-full bg-oldpenny/[0.6] rounded-[15px] border-solid border-saddle border-[1px]">
            {children}
          </div>
        </motion.div>
      );
    case "new penny":
      return (
        <motion.div
          className="absolute z-50 w-disc h-disc mx-[5px] top-[80px] left-0 bg-white/[0.85] rounded-[15px]"
          initial={"hidden"}
          variants={variants}
          animate={isDiscOpen ? "visible" : "hidden"}
        >
          {" "}
          <div className="absolute w-full h-full bg-newpenny/[0.6] rounded-[15px] border-solid border-saddle border-[1px]">
            {children}
          </div>
        </motion.div>
      );
    case "dark earth":
      return (
        <motion.div
          className="absolute z-50 w-disc h-disc mx-[5px] top-[80px] left-0 bg-white/[0.85] rounded-[15px]"
          initial={"hidden"}
          variants={variants}
          animate={isDiscOpen ? "visible" : "hidden"}
        >
          {" "}
          <div className="absolute w-full h-full bg-darkearth/[0.6] rounded-[15px] border-solid border-saddle border-[1px]">
            {children}
          </div>
        </motion.div>
      );
  }
};

export default Disc;
