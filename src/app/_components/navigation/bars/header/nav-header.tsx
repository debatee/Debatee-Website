"use client";

import NavDesktop from "../desktop/nav-desktop";
import NavMobile from "../mobile/nav-mobile";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function NavHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="sticky top-0 left-0 z-50 h-[80px] backdrop-blur-sm bg-white/40 text-black align-middle overflow-x-clip">
      <div className="absolute left-[32px] lg:left-[120px] top-0 bottom-0 grid place-items-center z-10">
        <Link className="flex items-center" href="/">
          <Image
            src="/DebateeLogo.png"
            alt="Debatee Logo"
            width={100}
            height={35}
            objectFit="contain"
          />
        </Link>
      </div>
      
      <div className="absolute left-0 right-0 top-0 bottom-0 grid place-items-center">
        <NavDesktop />
      </div>

      <div className="absolute right-[32px] lg:right-[120px] top-0 bottom-0 grid place-items-center">
        <div className="flex flex-row space-x-[16px] items-center">
          <Link
            href={'#contact'}
            className="font-semibold min-[0px]:max-md:hidden"
          >
            <p>Contact Us</p>
          </Link>

          <button className="flex items-center h-[40px] text-gray-400 md:hidden hover:text-blue-primary" onClick={handleDrawerToggle}>
            <FaBars size={30} />
          </button>
        </div>
      </div>

      <NavMobile
        isOpen={isDrawerOpen}
        onClose={handleDrawerToggle}
      />
    </div>
  );
}
