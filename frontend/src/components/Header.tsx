"use client";

import Link from "next/link";

const Header = () => {
  return (
 <header className="w-full sticky top-0 z-50 bg-[#899D76] text-xl bg-cover bg-center py-4 px-6 flex justify-between items-center">

      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        {/* <Image src="/logo.svg" alt=" Logo" width={140} height={40} /> */}
        <Link href="/">
        <h1 className="text-white">BICC</h1>
        </Link>
      </div>

      {/* Center: Nav Menu */}
      <nav className="hidden md:flex text-white font-bold gap-2 px-6 py-2 space-x-6 items-center">
        <h1>BRIDGEWAY INTERNATIONAL CAREER COUNSELLING PVT. LTD. </h1>
      </nav>

      {/* Right: Language & Button */}
      <div className="hidden md:flex items-center text-white font-medium gap-2  space-x-4">
        <Link
          href="/about"
          className="text-white font-normal hover:text-[#198f72  text-white font-medium gap-2 ]"
        >
          About
        </Link>
        <Link
          href="/abroad"
          className=" font-normal text-white   gap-2 "
        >
          Study Abroad
        </Link>
        <Link
          href="/contact"
          className=" font-normal text-white  gap-2 "
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
