"use client";

import { menuItems } from "../../model/menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export default function NavDesktop() {
  const [id, setId] = useState("#home");

  return (
    <div className="hidden md:flex flex-row space-x-[48px]">
      {menuItems.map((menu) => {
        const { name, href } = menu;

        return (
          <Link
            key={name}
            href={href}
            onClick={ () => {
              setId(href)
            }
            }
            className={clsx(
              "flex",
              {
                "font-bold": id == href,
                "font-semibold": id != href,
              }
            )}
          >
            <div className="flex flex-col items-center space-y-[4px]">
              <p>{name}</p>
              <div className={clsx(
                "h-[5px] w-full rounded-full",
                {
                  "bg-black": id == href,
                  "invisible": id != href,
                }
              )}/>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
