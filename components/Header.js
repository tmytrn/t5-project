import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import LoaderContext from "./LoaderContext";
import Hamburger from "../svg/Hamburger";
import Close from "../svg/Close";
import { useState } from "react";
import React from "react";

const Header = ({ page, data }) => {
  const { loaderDidRun } = useContext(LoaderContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="w-full fixed left-0 top-0 text-saddle z-[99] h-[56px] md:h-auto">
      {isNavOpen ? (
        <div className="w-full h-screen flex flex-col justify-start items-center">
          <div className="w-full flex flex-row md:flex-row justify-between items-center p-4 z-20 sunset">
            <p className="font-serif text-left text-base">
              a mur<i>mur</i>ation
            </p>
            <a
              className="flex justify-center items-center w-[24px] h-[24px]"
              onClick={() => {
                setIsNavOpen(false);
              }}>
              {isNavOpen ? <Close /> : <Hamburger />}
            </a>
          </div>
          <div className="block w-full h-screen md:absolute md:w-[450px] top-[56px] right-0 sunset">
            <div className="w-full mt-12 uppercase text-center font-sans border-t-[1px] py-6 border-white border-solid color-saddle border-b-[1px]">
              About
            </div>
            {/* <div className="w-full uppercase text-center font-sans border-t-[1px] py-6 border-white  border-solid color-saddle">
              Photo Gallery
            </div>
            <div className="w-full uppercase text-center font-sans border-t-[1px] py-6 border-white  border-solid color-saddle">
              Behind the Scenes
            </div>
            <div className="w-full uppercase text-center font-sans border-t-[1px] border-b-[1px] py-6 border-white  border-solid color-saddle">
              News + Press
            </div> */}
          </div>
        </div>
      ) : page == "home" ? (
        <>
          <div className="flex flex-col justify-between align-top p-5 sunset h-auto md:h-[124px]">
            <h1 className=" font-serif text-4xl md:text-6xl text-opacity-90 tracking-tightest text-center leading-[60px]">
              a mur<i>mur</i>ation,
            </h1>
            <div className=" font-sans text-base md:text-md text-center tracking-tight">
              Start your journey here{" "}
              <span className="block md:inline-block">
                by choosing an era below.
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute w-full flex flex-row justify-between items-center p-4 nav-gradient z-20">
            <Link href="/">
              <a className="font-serif text-left text-base">
                a mur<i>mur</i>ation
              </a>
            </Link>

            <a
              className="flex justify-center items-center "
              onClick={() => {
                setIsNavOpen(true);
              }}>
              {isNavOpen ? <Close /> : <Hamburger />}
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
