import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import LoaderContext from "./LoaderContext";
import Hamburger from "../svg/Hamburger";
import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Twitter from "../svg/Twitter";
import { useState } from "react";
import React from "react";

const Header = ({ page, data }) => {
  const { loaderDidRun } = useContext(LoaderContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="w-full fixed left-0 top-0 text-saddle z-50 h-[56px]">
      {isNavOpen ? (
        <div className="w-full flex flex-col justify-center items-center sunset">
          <div className="w-full flex flex-row md:flex-row justify-between items-center p-4 nav-gradient z-20">
            <p className="font-serif text-left text-base">A Murmuration</p>
            <a
              className="flex justify-center items-center "
              onClick={() => {
                setIsNavOpen(false);
              }}
            >
              <Hamburger />
            </a>
          </div>
          <div className="w-full uppercase text-center font-sans border-t-[1px] border-b-[1px] border-iceberg border-solid">
            About
          </div>
          <div className="inline-block text-center">
            <Link href="/">
              <a className="inline-block text-center font-sans uppercase border-solid border-iceberg border-[1px] rounded-full px-3 text-base">
                Back To Homepage
              </a>
            </Link>
          </div>
        </div>
      ) : page == "home" ? (
        <>
          <div className="flex flex-col md:flex-row justify-between align-top p-5 sunset">
            <p className="font-sans text-center"> WELCOME TO</p>
            <h1 className=" font-serif text-6xl text-opacity-90 tracking-tightest text-center">
              A Mur<i>mur</i>ation,
            </h1>
            <div className="uppercase font-sans text-base md:text-xl text-center tracking-tight">
              HOW WE COME, GO, AND SHAPE THE LAND.
            </div>
          </div>
          <div className=" font-sans text-base md:text-xl text-center tracking-tight py-5">
            Start your journey here{" "}
            <span className="block">by choosing an era below.</span>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="absolute w-full flex flex-row md:flex-row justify-between items-center p-4 nav-gradient z-20">
            <Link href="/">
              <a className="font-serif text-left text-base">
                A Mur<i>mur</i>ation
              </a>
            </Link>

            <a
              className="flex justify-center items-center "
              onClick={() => {
                setIsNavOpen(true);
              }}
            >
              <Hamburger />
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
