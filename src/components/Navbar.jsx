"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [navbar, setNavbar] = useState(false);

  const handleThemeToggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header>
      <div className="flex justify-between items-center shadow-lg p-4">
        <div className="flex gap-3">
          <div className="hover:zoom-out 2xl font-popins text-2xl ">
            Audumber 
          </div>
          <div className="text-red-700 hover:zoom-out 2xl font-popins text-2xl ">
            Shirodkar
          </div>
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}
          </button>
        </div>
        <div className={`flex gap-4 ml-8 pr-2 ${navbar ? 'flex-col' : 'hidden'} md:flex`}>
          <Link
            className={`hover:zoom-out block lg:inline ${currentTheme === "dark" ? "font-popins  hover:text-orange-700" : "font-popins"} hover:text-orange-700 `}
            href="/contact" target="_blank" rel="noopener noreferrer"
          >
            Contact
          </Link>
          <Link
            className={`hover:zoom-out block lg:inline ${currentTheme === "dark" ? "font-popins hover:text-orange-700" : "font-popins"} hover:text-orange-700 `}
            href="/about" target="_blank" rel="noopener noreferrer"
          >
            About
          </Link>
          <Link
            className={`hover:zoom-out block lg:inline ${currentTheme === "dark" ? "font-popins  hover:text-orange-700" : "font-popins"} hover:text-orange-700 `}
            href="/projects" target="_blank" rel="noopener noreferrer"
          >
            Projects
          </Link>
          <button
            className="bg-slate-100 p-2 rounded-xl"
            onClick={handleThemeToggle}
          >
            {currentTheme === "dark" ? (
              <RiSunLine size={15} color="black" />
            ) : (
              <RiMoonFill size={15} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
