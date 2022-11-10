import { motion } from "framer-motion";
import { slugify } from "util/utiliities";
import DropdownArrow from "svg/DropdownArrow";

const Disc = ({ data, setIsDiscOpen }) => {
  console.log("DISK DATA: ", data);
  if (!data) return null;

  return (
    <DiscWrapper color={data.color.name}>
      <div className="px-8 text-saddle">
        <div className="flex flex-col justify-center text-center pt-[15px]">
          <a
            onClick={() => setIsDiscOpen(false)}
            className="hover:cursor-pointer text-center flex justify-center pb-[10px] "
          >
            <DropdownArrow />
          </a>
        </div>
        <div className="h-discscroll overflow-x-visible overflow-y-auto pb-8">
          <div className="font-sans text-[22px] uppercase text-center">
            {data?.country}
          </div>
          <div className="text-7xl pb-16 ">
            {/* <span className="opening-mark overflow-x-visible">“</span> */}
            {data?.quote}
            {/* <span className="closing-mark">”</span> */}
          </div>
          {data.translation && (
            <div>
              <p className="font-sans uppercase text-md">Original Text</p>
              <div className="italic text-5xl">{data?.translation}</div>
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

const DiscWrapper = ({ color, children }) => {
  switch (color) {
    case "desert tan":
      return (
        <motion.div className="w-disc h-disc fixed mx-[5px] top-[80px] left-0 bg-deserttan/[0.9] rounded-[15px] border-solid border-saddle border-[1px]">
          {children}
        </motion.div>
      );
    case "moss green":
      return (
        <motion.div className="w-disc h-disc fixed mx-[5px] top-[80px] left-0 bg-mossgreen/[0.9] rounded-[15px] border-solid border-saddle border-[1px]">
          {children}
        </motion.div>
      );
    case "olive drab":
      return (
        <motion.div className="w-disc h-disc fixed mx-[5px] top-[80px] left-0 bg-olivedrab/[0.9] rounded-[15px] border-solid border-saddle border-[1px]">
          {children}
        </motion.div>
      );
    case "pewter":
      return (
        <motion.div className="w-disc h-disc fixed mx-[5px] top-[80px] left-0 bg-pewter/[0.9] rounded-[15px] border-solid border-saddle border-[1px]">
          {children}
        </motion.div>
      );
    case "clear":
      return (
        <motion.div className="w-disc h-disc fixed mx-[5px] top-[80px] left-0 bg-clear/[0.9] rounded-[15px] border-solid border-saddle border-[1px]">
          {children}
        </motion.div>
      );
    case "old penny":
      return (
        <motion.div className="w-disc h-disc fixed mx-[5px] top-[80px] left-0 bg-oldpenny/[0.9] rounded-[15px] border-solid border-saddle border-[1px]">
          {children}
        </motion.div>
      );
    case "new penny":
      return (
        <motion.div className="w-disc h-disc fixed mx-[5px] top-[80px] left-0 bg-newpenny/[0.9] rounded-[15px] border-solid border-saddle border-[1px]">
          {children}
        </motion.div>
      );
    case "dark earth":
      return (
        <motion.div className="w-disc h-disc fixed mx-[5px] top-[80px] left-0 bg-darkearth/[0.9] rounded-[15px] border-solid border-saddle border-[1px]">
          {children}
        </motion.div>
      );
  }
};

export default Disc;
