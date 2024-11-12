"use client";

import { menuItems } from "../../model/menu";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

export default function NavMobile(
  { isOpen, onClose }:
  { isOpen: boolean, onClose: () => void }
) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0 no-doc-scroll' : 'translate-x-full'
      }`}
    >
      <div
        onClick={() => onClose()}
        className="absolute right-7 top-4 p-3 h-[40px] cursor-pointer z-30 text-gray-400 md:hidden hover:text-blue-primary"
      >
        <FaTimes size={30} />
      </div>

      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen z-20 bg-white">
          {menuItems.map(({ name, href }) => (
            <li
              key={name}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-blue-primary"
            >
              <Link onClick={() => onClose()} href={href}>
                {name}
              </Link>
            </li>
          ))}
          <li
            key={'Contact Us'}
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-blue-primary"
          >
            <Link onClick={() => onClose()} href={'/contact'}>
              {'Contact Us'}
            </Link>
          </li>
        </ul>
    </div>
  );
}
