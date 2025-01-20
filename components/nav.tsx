"use client";

import Link from "next/link";
import { ModeToggle } from "./togel";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

function Nav() {
  const links = ["Home", "skills", "Tools", "project", "about", "Contact"];
  const [nav, setNav] = useState(true);

  return (
    <nav
      className={`flex justify-between p-4 bg-black border border-input align-center align-baseline`}
    >
      <h1 className="text-white text-2xl font-bold">SR</h1>

      <ul
        className={` list-none flex justify-around text-white gap-5 text-lg align-baseline ${
          nav ? "navbar" : "activenavbar"
        }`}
      >
        {links.map((val, i) => {
          return (
            <li key={i}>
              <Link
                href={`#${val}`}
                className="hover:border-b-2 border-orange-400"
              >
                {val}
              </Link>
            </li>
          );
        })}
      </ul>

      <span className=" flex gap-5 items-center ">
        {" "}
        <ModeToggle />{" "}
        <span
          className="sm:hidden relative z-30"
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? <AlignJustify /> : <X />}
        </span>
      </span>
    </nav>
  );
}

export default Nav;
