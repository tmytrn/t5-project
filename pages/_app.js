import "../styles/globals.scss";
import "../styles/fonts.scss";
import React, { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout page={pageProps.page}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
