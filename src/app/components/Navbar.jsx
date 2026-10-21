"use client";

import React, { useState, useEffect } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar meluncur muncul kalau scroll udah lebih dari 120px
      if (window.scrollY > 120) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["HOME", "ABOUT", "PROJECT", "CERTIFICATE", "CONTACT"];

  return (
    <>  
      <header className="absolute top-0 left-0 right-0 z-40 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-extrabold text-4xl tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
              A<span className="text-[#FF1E27]">P</span>
            </span>
          </Link>

          {/* MENU LINKS */}
          <nav className="hidden md:flex items-center px-6 py-2">
            <ul className="flex items-center gap-8 text-xs font-bold tracking-widest text-zinc-400">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* BUTTON ADMIN */}
          <div>
            <Link
              href="#contact"
              className="px-5 py-2.5 flex items-center gap-2 rounded-xs text-xs font-bold uppercase tracking-wider text-white border-2 border-white/10 hover:border-[#FF1E27] hover:bg-[#FF1E27] hover:shadow-[0_0_20px_rgba(255,30,39,0.5)] transition-all duration-300"
            >
              <MdOutlineAdminPanelSettings className="text-[1.1rem]" /> LOG IN AS ADMIN
            </Link>
          </div>
        </div>
      </header>

      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-3.5 bg-[#09090B]/80 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out ${
          showStickyNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO AP */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-extrabold text-3xl tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
              A<span className="text-[#FF1E27]">P</span>
            </span>
          </Link>

          {/* MENU LINKS */}
          <nav className="hidden md:flex items-center px-6 py-2">
            <ul className="flex items-center gap-8 text-xs font-bold tracking-widest text-zinc-300">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#FF1E27] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* BUTTON ADMIN */}
          <div>
            <Link
              href="#contact"
              className="px-5 py-2.5 flex items-center gap-2 rounded-xs text-xs font-bold uppercase tracking-wider text-white border-2 border-white/10 hover:border-[#FF1E27] hover:bg-[#FF1E27] hover:shadow-[0_0_20px_rgba(255,30,39,0.5)] transition-all duration-300"
            >
              <MdOutlineAdminPanelSettings className="text-[1rem]" /> LOG IN AS ADMIN
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}