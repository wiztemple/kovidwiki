import Link from "next/link";
import SlantedArrowIcon from "../icons/SlantedArrowIcon";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="grid sm:grid-cols-3 sm:px-20 px-5 w-full">
        <div>
          <Link href="/" className="block">
            Tracker
          </Link>
          <h1 className="text-4xl text-[#343A45] font-bold sm:pt-10 pt-5">
            Need help with <br /> anything?
          </h1>
          <p className="pt-3 text-[#343A45]">
            Lets hear about it,{" "}
            <a href="/" className="text-[#0D75FF]">
              wiztemple7@gmail.com
            </a>
          </p>
        </div>
        <div>&nbsp;</div>
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div>
            <span className="block text-[#343A45] text-sm pb-8 font-normal">
              About
            </span>
            <Link
              href="/"
              className="block text-lg text-[#343A45] font-medium py-0.5 hover:text-slate-600"
            >
              API
            </Link>
            <Link
              href="/"
              className="block text-lg text-[#343A45] font-medium py-0.5 hover:text-slate-600"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="block text-lg text-[#343A45] font-medium py-0.5 hover:text-slate-600"
            >
              About
            </Link>
          </div>
          <div>
            <span className="block text-[#343A45] text-sm pb-8 font-normal">
              Contact
            </span>
            <Link
              href="/"
              className="block text-lg text-[#343A45] font-medium py-0.5 hover:text-slate-600"
            >
              info@coronatracker.com
            </Link>
            <Link
              href="/"
              className="flex items-center gap-x-4 text-lg text-[#343A45] font-medium py-0.5 hover:text-slate-600"
            >
              Instagram
              <SlantedArrowIcon />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-x-4 text-lg text-[#343A45] font-medium py-0.5 hover:text-slate-600"
            >
              Pinterest
              <SlantedArrowIcon />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-x-4 text-lg text-[#343A45] font-medium py-0.5 hover:text-slate-600"
            >
              X/Twitter
              <SlantedArrowIcon />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-x-4 text-lg text-[#343A45] font-medium py-0.5 hover:text-slate-600"
            >
              Facebook
              <SlantedArrowIcon />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center sm:pt-20 pt-5 font-medium text-[#343A45]">
        Copyright © 2024 Wiztemple. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
