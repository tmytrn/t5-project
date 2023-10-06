import React from "react";
import Head from "next/head";
import { PortableText } from "@portabletext/react";
import MyLayout from "components/Layout";
import { getLandAcknowledgementPage } from "data";
const LandAcknowledgement = ({ data }) => {
  return (
    <>
      <Head>
        <title>About | a murmuration</title>
        <meta
          property="og:image"
          content="https://www.amurmuration.art/images/og-image.jpg"
        />
        <meta property="og:title" content="A Murmuration" />
        <meta property="og:image:width" content="2577" />
        <meta property="og:image:height" content="1350" />
        <meta
          name="description"
          content="An artwork at the Chicago O’Hare Airport by Jina Valentine"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main className="w-full bg-deserttan pt-[56px] text-saddle ">
        <section className="w-full flex flex-col  md:px-4 lg:px-48 md:py-12">
          <div className="flex flex-col md:flex-row p-4 md:px-0">
            <h1 className="text-4xl md:text-4xl  w-full md:w-1/3 ">
              land acknowledgement
            </h1>
            <div className="font-montreal w-full md:w-2/3 text-base md:px-2">
              <PortableText value={data[0].landAcknowledgement} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const data = await getLandAcknowledgementPage();

  return {
    props: { data },
    revalidate: 60,
  };
}
LandAcknowledgement.Layout = MyLayout;
export default LandAcknowledgement;
