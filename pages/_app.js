import "../styles/globals.scss";
import "../styles/fonts.scss";
import React, { useState, useEffect } from "react";
import MyLayout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <MyLayout page={pageProps.page}>
      <Component {...pageProps} />
    </MyLayout>
  );
}

export default MyApp;
