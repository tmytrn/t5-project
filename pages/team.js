import React, { useState, useRef } from "react";
import Head from "next/head";
import MyLayout from "components/Layout";
import { getTeamPage } from "data";
import { PortableText } from "@portabletext/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import ModalClose from "svg/ModalClose";

const Team = ({ team }) => {
  // console.log("teamData: ", team[0]);
  const data = team[0];
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

  // console.log("teamData: ", team[0]);

  return (
    <>
      <Head>
        <title>The Team | a murmuration</title>
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
      <main className="w-100 bg-white/[0.85] pt-[56px] text-saddle ">
        <div className="bg-mossgreen/[0.6]">
          <div className="absolute w-full top-[90px] flex justify-between">
            <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
            <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
          </div>
          <section className="w-100 flex flex-col md:px-12 lg:px-48">
            <div className="flex flex-col p-4 md:px-0 md:py-8">
              <h1 className="text-[110px] md:text-[110px] w-full md:w-1/3 leading-[110px]">
                <span className="block">the</span>
                team
              </h1>
            </div>
            <div className="w-100 h-auto relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={data.heroImage}
                alt={data.heroImageAlt}></Image>
            </div>
            <div className="flex flex-row p-4 md:12 justify-center">
              <div className="font-montreal w-full md:w-1/2 text-base md:text-md">
                <PortableText value={data.aboutText} />
              </div>
            </div>
          </section>
          <section className="flex flex-col text-left bg-white/[0.85]">
            <div className="bg-clear/[0.6]">
              <h1 className="text-6xl w-full md:w-1/3 leading-none p-4 md:p-12 md:pb-0 lg:px-48">
                team
                <br />
                credits
              </h1>
              <div className="flex flex-col w-full ml-auto pb-12 font-montreal md:px-12 lg:px-48">
                {data.credits.map((credit, key) => (
                  <div
                    key={key}
                    className="border-b-[1px] border-solid border-white px-4 md:px-8">
                    <div className="w-full md:w-2/3 ml-auto pt-4 pb-8">
                      <div className="text-base leading-[30px] pb-2">
                        {credit.role ? credit.role : "Title of role"}
                      </div>
                      <div className="text-[32px] leading-[40px] pb-4">
                        {credit.link ? (
                          <Link
                            href={credit.link}
                            className="hover:cursor-pointer hover:underline">
                            {credit.name} <span className="text-md">↗</span>
                          </Link>
                        ) : (
                          <div>{credit.name}</div>
                        )}
                      </div>
                      <div>
                        {credit.bio ? (
                          <PortableText value={credit.bio} />
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-b-[1px] border-solid border-white px-4 md:px-8">
                  <div className="w-full md:w-2/3 ml-auto pt-4 pb-8">
                    <div className="text-base leading-[30px] pb-2">
                      Additional Credits
                    </div>
                    <PortableText value={data.additionalCredits} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col bg-white/[0.85]">
            <div className="flex flex-col p-4 md:px-12 lg:px-48 pb-12 bg-clear/[0.6]">
              <h1 className="text-6xl md:text-5xl  w-full md:w-1/3 ">
                gallery
              </h1>
              <div className="w-full grid grid-cols-3 gap-2 auto-cols-fr">
                {data.gallery.map((image, key) => (
                  <div
                    className="block relative aspect-square"
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
                      className="aspect-square object-cover"
                      alt={`Team Image ${key}`}
                    />
                  </div>
                ))}
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
                <div className="block relative w-full h-full p-1">
                  <figure
                    className={
                      "w-full h-full bg-contain bg-no-repeat bg-center "
                    }
                    style={imgStyle(image)}
                    key={key}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const team = await getTeamPage();
  const page = "team";
  return {
    props: { team, page },
    revalidate: 60,
  };
}

Team.Layout = MyLayout;
export default Team;
