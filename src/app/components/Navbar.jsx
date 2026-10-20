"use client";

import React, { useState, useEffect } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Efek transparan/blur pas layar di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled
          ? "bg-[#09090B]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-extrabold text-4xl tracking-tighter text-white transition-colors">
            A<span className="text-[#FF1E27]">P</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center px-6 py-2 rounded-full">
          <ul className="flex items-center gap-8 text-xs font-semibold tracking-widest text-zinc-400">
            <li>
              <Link
                href="#home"
                className="hover:text-white transition-colors duration-200"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-white transition-colors duration-200"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#project"
                className="hover:text-white transition-colors duration-200"
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                href="#certificates"
                className="hover:text-white transition-colors duration-200"
              >
                CERTIFICATE
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-white transition-colors duration-200"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <Link
            href="#contact"
            className="px-5 py-2.5 flex gap-2 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#FF1E27] hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,30,39,0.5)] transition-all duration-300 border border-red-500/30"
          >
            <MdOutlineAdminPanelSettings className="text-[1rem]" /> log in as admin

          </Link>
        </div>
      </div>
    </header>
  );
}