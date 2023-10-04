import "../styles/globals.scss";
import "../styles/fonts.scss";
import "../styles/BayA.scss";
import React, { useState, useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout page={pageProps.page}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VGWCCE4CMV"></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VGWCCE4CMV');`}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
