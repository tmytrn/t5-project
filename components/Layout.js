import React, { useState } from "react";
import LoaderContext from "./LoaderContext";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";

const MyLayout = ({ page, children }) => {
  const [loaderDidRun, setLoaderDidRun] = useState(false);
  const [showPost, setShowPost] = useState(false);

  return (
    <LoaderContext.Provider value={{ loaderDidRun: loaderDidRun }}>
      <AnimatePresence>
        <Header page={page} />
        {children}
      </AnimatePresence>
    </LoaderContext.Provider>
  );
};

export default MyLayout;
