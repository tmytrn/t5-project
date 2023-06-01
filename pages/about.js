import React from "react";
import Head from "next/head";
import MyLayout from "components/Layout";
import { getAboutPage } from "data";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
const About = ({ about }) => {
  // console.log("aboutData: ", about[0]);
  const data = about[0];
  return (
    <>
      <Head>
        <title>About | a murmuration</title>
        <meta
          name="description"
          content="Here we come, go and shape the land."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-100 bg-deserttan pt-[56px] overflow-scroll text-saddle">
        <div className="absolute w-full top-[90px] flex justify-between">
          <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
          <span className="border-saddle border-solid border-t-[1px] md:border-t-2 w-4"></span>
        </div>
        <section className="w-100 flex flex-col">
          <div className="flex flex-col p-8 md:p-16">
            <h1 className="text-[110px] md:text-[110px] w-full md:w-1/3">
              about
            </h1>
            <div className="font-montreal w-full md:w-2/3 text-md font-medium mt-auto ml-auto">
              <PortableText value={data.heroText} />
            </div>
          </div>
          <div className="w-100 h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={data.heroImage}
              alt={data.heroImageAlt}></Image>
            <div className="text-center py-1">{data.heroImageAlt}</div>
          </div>
          <div className="flex flex-row p-8 md:p-16">
            <div className="font-montreal w-full text-md">
              <PortableText value={data.aboutText} />
            </div>
          </div>
        </section>
        <section className="w-100 flex flex-col">
          <div className="w-100 h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={data.conceptImage}
              alt={data.conceptImageAlt}></Image>
            <div className="text-center py-1">{data.conceptImageAlt}</div>
          </div>
          <div className="flex flex-col md:flex-row p-8 md:p-16">
            <h1 className="text-6xl w-full md:w-1/3 leading-none pb-8 md:pb-0">
              concept
              <br />+<br />
              background
            </h1>
            <div className="font-montreal w-full md:w-2/3 text-md">
              <PortableText value={data.conceptText} />
            </div>
          </div>
        </section>
        <section className="w-100 flex flex-col">
          <div className="w-100 h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={data.technicalImage}
              alt={data.technicalImageAlt}></Image>
            <div className="text-center py-1">{data.technicalImageAlt}</div>
          </div>
          <div className="flex flex-col md:flex-row p-8 md:p-16">
            <h1 className="text-6xl w-full md:w-1/3 ">technical</h1>
            <div className="font-montreal w-full md:w-2/3 text-md">
              <PortableText value={data.technicalText} />
            </div>
          </div>
        </section>
        <section className="flex flex-col font-montreal text-left bg-sunset">
          <div className="w-100 p-8 md:p-16">
            <div className="flex flex-col w-full md:w-2/3 ml-auto pb-12">
              <div className="pb-4">Further Readings</div>
              <PortableText value={data.furtherReadings} />
            </div>
            <div className="flex flex-col w-full md:w-2/3 ml-auto">
              <div className="pb-4">Research Links</div>
              <PortableText value={data.researchLinks} />
            </div>
          </div>
        </section>
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
