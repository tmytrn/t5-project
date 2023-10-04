import React, { useState, useRef } from "react";
import Head from "next/head";
import MyLayout from "components/Layout";
import { getAboutPage } from "data";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Slider from "react-slick";
import ModalClose from "svg/ModalClose";

const About = ({ about }) => {
  // console.log("aboutData: ", about[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "h-full mx-8 md:mx-0 z-50",
  };

  const [galleryState, setGalleryState] = useState(false);
  const sliderRef = useRef(null);
  const imgStyle = (imgSrc) => ({
    backgroundImage: `url(${imgSrc})`,
  });

  const data = about[0];
  return (
    <>
      <Head>
        <title>About | a murmuration</title>
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
        <div className="absolute w-full top-[90px] flex justify-between">
          <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
          <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
        </div>
        <section className="w-full flex flex-col">
          <div className="flex flex-col p-4 md:py-12 md:px-12 lg:px-48">
            <h1 className="text-[110px] md:text-[110px] w-full md:w-1/3">
              about
            </h1>
            <div className="font-montreal w-full md:w-3/5 lg:w-3/5 text-md font-medium mt-auto ml-auto">
              <PortableText value={data.heroText} />
            </div>
          </div>
          <div className="w-full h-auto relative md:px-12 lg:px-48">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={data.heroImage}
              alt={data.heroImageAlt}></Image>
            {/* <div className="text-center py-1">{data.heroImageAlt}</div> */}
          </div>
          <div className="flex flex-row p-4 lg:py-16 justify-center">
            <div className="font-montreal w-full md:w-3/4 text-base md:text-md">
              <PortableText value={data.aboutText} />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:px-12 lg:px-48">
          <div className="w-full h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={data.conceptImage}
              alt={data.conceptImageAlt}></Image>
            {/* <div className="text-center py-1">{data.conceptImageAlt}</div> */}
          </div>
          <div className="flex flex-col md:flex-row justify-between p-4 md:px-0">
            <h1 className="text-6xl md:text-5xl w-full md:w-1/3 leading-none pb-8 md:pb-0">
              concept
              <br />+<br />
              background
            </h1>
            <div className="font-montreal w-full md:w-2/3 text-base md:text-md">
              <PortableText value={data.conceptText} />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:px-12 lg:px-48">
          <div className="w-full h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={data.technicalImage}
              alt={data.technicalImageAlt}></Image>
          </div>
          <div className="flex flex-col md:flex-row p-4 md:px-0">
            <h1 className="text-6xl md:text-5xl  w-full md:w-1/3 ">
              technical
            </h1>
            <div className="font-montreal w-full md:w-2/3 text-base md:text-md">
              <PortableText value={data.technicalText} />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:px-12 lg:px-48">
          <div className="flex flex-col p-4 md:px-0">
            <h1 className="text-6xl md:text-4xl  w-full md:w-1/3 ">Gallery</h1>
            <div className="w-full columns-1 space-y-2 md:gap-2 md:columns-2 md:space-y-2">
              {data.gallery.map((image, key) => (
                <div
                  className="block relative"
                  key={key}
                  onClick={() => {
                    setGalleryState(true);
                    sliderRef.current.slickGoTo(key);
                  }}>
                  <Image
                    src={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt={`About Image ${key}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:px-12 lg:px-48">
          <div className="flex flex-col md:flex-row p-4 md:px-0">
            <h1 className="text-4xl md:text-4xl  w-full md:w-1/3 ">
              Land Acknowledgements
            </h1>
            <div className="font-montreal w-full md:w-2/3 text-sm">
              <PortableText value={data.landAcknowledgement} />
            </div>
          </div>
        </section>
        <div
          className={
            galleryState
              ? `block w-full h-full md:px-12 lg:px-48 fixed top-0 left-0 z-50 bg-gray-800/90`
              : `hidden w-full md:px-12 lg:px-48`
          }>
          <div
            className="absolute top-4 right-4 z-50 cursor-pointer stroke-gray-100"
            onClick={() => setGalleryState(false)}>
            <ModalClose />
          </div>
          <Slider ref={sliderRef} {...settings}>
            {data.gallery.map((image, key) => (
              <div className="block relative w-full h-full">
                <figure
                  className={"w-full h-full bg-contain bg-no-repeat bg-center"}
                  style={imgStyle(image)}
                  key={key}
                />
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const about = await getAboutPage();
  const page = "about";
  return {
    props: { about, page },
    revalidate: 60,
  };
}

About.Layout = MyLayout;
export default About;
