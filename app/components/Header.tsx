import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full sm:px-20 px-5 h-[68px]">
      <Link href="/">
        <Image src={"/logo.svg"} alt="logo" width={131} height={31} />
      </Link>
      <button>Sun</button>
    </header>
  )
}

export default Header;
