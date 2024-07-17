"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full sm:px-20 px-5 h-[68px] dark:bg-[#0B1023] dark:border-b dark:border-b-gray-800">
      <Link href="/">
        <Image src={"/logo.svg"} alt="logo" width={131} height={31} />
      </Link>
      <ThemeToggle />
    </header>
  )
}

export default Header;
