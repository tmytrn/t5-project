import React, { useState } from "react";
import LoaderContext from "./LoaderContext";
import InstructionsContext from "./InstructionsContext";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";

const MyLayout = ({ page, children }) => {
  const [loaderDidRun, setLoaderDidRun] = useState(false);
  const [lastBayVisited, setLastBayVisited] = useState(0);
  const [mapInstructionsDidRun, setMapInstructionsDidRun] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        loaderDidRun: loaderDidRun,
        lastBayVisited: lastBayVisited,
        setLastBayVisited: setLastBayVisited,
      }}>
      <Header page={page} />
      <InstructionsContext.Provider
        value={{
          mapInstructionsDidRun: mapInstructionsDidRun,
          setMapInstructionsDidRun: setMapInstructionsDidRun,
        }}>
        {children}
      </InstructionsContext.Provider>
    </LoaderContext.Provider>
  );
};

export default MyLayout;
