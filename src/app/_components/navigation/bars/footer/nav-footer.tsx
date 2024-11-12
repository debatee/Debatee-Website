"use client";

import LinkButton from "@/app/_components/button/link-button";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="px-10 pb-14 pt-14 flex flex-col bg-blue-primary md:px-40 md:pt-20">
      <div className="flex flex-row items-center justify-between">
        <Image className="w-1/4 items-start md:max-w-40" src="/DebateeLogotype.svg" alt="/next.svg" width={187} height={33.88} />
        <LinkButton className="w-fit max-h-10 md:max-h-12" href="/">
          <div className="flex flex-row space-x-[5px] items-center">
            <FaApple className="scale-90 md:scale-100" size={20} />
            <p className="text-xs md:text-base">Download</p>
          </div>
        </LinkButton>
      </div>
      <div className="w-full flex justify-center pt-8 pb-6 md:pt-10 md:pb-8">
        <div className="h-0.5 bg-white w-full"></div>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex w-full justify-between md:w-1/6 ">
          <p>2024 Debatee</p>
          <Link href="/">privacy policy</Link>
        </div>
        <div className="flex w-full justify-end pt-2 md:w-1/6 md:pt-0">
          <Link href="https://www.instagram.com/debatee.id/" rel="noopener noreferrer" target="_blank" className="md:pr-10">
            <Image className="scale-75 md:scale-100" src="/Instagram.svg" alt="/next.svg" width={34} height={34} />
          </Link>
          <Link href="/" className="">
            <Image className="scale-75 md:scale-100" src="/Mail.svg" alt="/next.svg" width={44} height={34} />
          </Link>
        </div>
      </div>
    </div>
  );
}
