import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import LoaderContext from "./LoaderContext";
import Hamburger from "../svg/Hamburger";
import Close from "../svg/Close";
import { useState } from "react";
import React from "react";
import Logo from "../svg/Logo";

const Header = ({ page, data }) => {
  const { loaderDidRun } = useContext(LoaderContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="w-full fixed left-0 top-0 text-saddle z-[99] h-[56px] md:h-auto ">
      {isNavOpen ? (
        <div className="w-full flex flex-col justify-start items-center">
          <div className="w-full h-[56px] flex flex-row md:flex-row justify-between items-center p-4 md:px-12 z-20 nav-gradient">
            <Link href="/" legacyBehavior>
              <a className="block w-[192px]">
                <div className="w-[192px] md:pr-[11.5px]">
                  <Logo />
                </div>
              </a>
            </Link>
            {isNavOpen ? (
              <a
                className="py-4 px-2"
                onClick={() => {
                  setIsNavOpen(false);
                }}>
                <span className="w-[24px] h-[24px]">
                  <Close />
                </span>
              </a>
            ) : (
              <a
                className=" py-4 px-2"
                onClick={() => {
                  setIsNavOpen(true);
                }}>
                <span className="w-[24px] h-[24px]">
                  <Hamburger />
                </span>
              </a>
            )}
          </div>
          <div className="block w-full h-screen md:absolute md:w-[450px] top-[56px] right-0 sunset">
            <div className="w-full mt-12 uppercase text-center font-sans border-t-[1px] py-6 border-white border-solid color-saddle border-b-[1px]">
              <Link legacyBehavior={true} href="/">
                <a
                  onClick={() => {
                    setIsNavOpen(false);
                  }}>
                  Home
                </a>
              </Link>
            </div>
            <div className="w-full uppercase text-center font-sans py-6 border-white border-solid color-saddle border-b-[1px]">
              <Link legacyBehavior={true} href="/about">
                <a
                  onClick={() => {
                    setIsNavOpen(false);
                  }}>
                  About
                </a>
              </Link>
            </div>
            <div className="w-full uppercase text-center font-sans  py-6 border-white border-solid color-saddle border-b-[1px]">
              <Link legacyBehavior={true} href="/team">
                <a
                  onClick={() => {
                    setIsNavOpen(false);
                  }}>
                  Team
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : page == "home" ? (
        <>
          <div className="flex flex-col justify-between align-top p-5 bg-transparent h-auto md:h-[128px] md:px-12">
            <Logo />

            <div className="pt-2 font-sans text-base md:text-base text-center tracking-tight text-iceberg">
              Start your journey here{" "}
              <span className="block md:inline-block">
                by choosing an era below.
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute w-full h-[56px] flex flex-row justify-between items-center p-4 nav-gradient z-20 md:px-12">
          <Link href="/" legacyBehavior>
            <a className="block w-[192px]">
              <div className="w-[192px] md:pr-[11.5px]">
                <Logo />
              </div>
            </a>
          </Link>

          {isNavOpen ? (
            <a
              className="py-4 px-2"
              onClick={() => {
                setIsNavOpen(false);
              }}>
              <span className="w-[24px] h-[24px]">
                <Close />
              </span>
            </a>
          ) : (
            <a
              className="py-4 px-2"
              onClick={() => {
                setIsNavOpen(true);
              }}>
              <span className="w-[24px] h-[24px]">
                <Hamburger />
              </span>
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
