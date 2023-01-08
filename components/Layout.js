import React, { useState } from "react";
import LoaderContext from "./LoaderContext";
import InstructionsContext from "./InstructionsContext";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";

const MyLayout = ({ page, children }) => {
  const [loaderDidRun, setLoaderDidRun] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [mapInstructionsDidRun, setMapInstructionsDidRun] = useState(false);

  return (
    <LoaderContext.Provider value={{ loaderDidRun: loaderDidRun }}>
      <Header page={page} />
      <InstructionsContext.Provider
        value={{
          mapInstructionsDidRun: mapInstructionsDidRun,
          setMapInstructionsDidRun: setMapInstructionsDidRun,
        }}
      >
        {children}
      </InstructionsContext.Provider>
    </LoaderContext.Provider>
  );
};

export default MyLayout;
