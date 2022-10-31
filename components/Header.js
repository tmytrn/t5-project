import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import LoaderContext from "./LoaderContext";
import Hamburger from "../svg/Hamburger";
import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Twitter from "../svg/Twitter";
import { useState } from "react";
const Header = ({ page, data }) => {
  const { loaderDidRun } = useContext(LoaderContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="w-full fixed left-0 top-0 bg-saddle text-iceberg py-5">
      <div className="flex flex-row justify-between items-center px-5">
        <div>
          A Mur<span class="italic">mur</span>ation{" "}
        </div>
        <div
          className="flex items-center h-[26px]"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <div className="flex font-sans items-center uppercase border-solid border-iceberg border-[1px] rounded-full px-2 bg-iceberg text-saddle">
              close
            </div>
          ) : (
            <div className="flex items-center">
              <Hamburger />
            </div>
          )}
        </div>
      </div>
      {isNavOpen ? (
        <div className="w-full flex flex-col justify-center items-center pt-8">
          <div className="w-full uppercase text-center font-sans border-t-[1px] border-b-[1px] border-iceberg border-solid">
            About
          </div>
          <div className="w-full flex flex-row justify-between py-8 px-12">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
          <div className="inline-block text-center">
            <Link href="/">
              <a className="inline-block text-center font-sans uppercase border-solid border-iceberg border-[1px] rounded-full px-3 text-base">
                Back To Homepage
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between align-top px-5">
          <h1 className="uppercase font-sans text-6xl">Welcome.</h1>
          <div className="uppercase font-sans text-lg md:text-xl ">
            Choose a time to start <br />
            your journey
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
