import React from "react";
import Head from "next/head";
import MyLayout from "components/Layout";
import { getTeamPage } from "data";
import { PortableText } from "@portabletext/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
const Team = ({ team }) => {
  // console.log("teamData: ", team[0]);
  const data = team[0];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("teamData: ", team[0]);

  return (
    <>
      <Head>
        <title>The Team | a murmuration</title>
        <meta
          name="description"
          content="Here we come, go and shape the land."
        />
        <link rel="icon" href="/favicon.ico" />
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
      <main className="w-100 bg-white/[0.85] pt-[56px] overflow-scroll text-saddle">
        <div className="bg-mossgreen/[0.6]">
          <div className="absolute w-full top-[90px] flex justify-between">
            <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
            <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
          </div>
          <section className="w-100 flex flex-col">
            <div className="flex flex-col p-8 md:p-12">
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
            <div className="flex flex-row p-8 md:12 justify-center">
              <div className="font-montreal w-full md:w-1/2 text-md">
                <PortableText value={data.aboutText} />
              </div>
            </div>
          </section>
          <section className="flex flex-col text-left bg-white/[0.85]">
            <div className="bg-clear/[0.6]">
              <h1 className="text-6xl w-full md:w-1/3 leading-none p-8 md:p-12 md:pb-0">
                team
                <br />
                credits
              </h1>
              <div className="flex flex-col w-full ml-auto pb-12 font-montreal">
                {data.credits.map((credit, key) => (
                  <div
                    key={key}
                    className="border-b-[1px] border-solid border-white px-8">
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
                <div className="border-b-[1px] border-solid border-white px-8">
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
