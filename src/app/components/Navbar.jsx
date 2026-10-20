"use client";

import React, { useState, useEffect } from "react";
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
        {/* LOGO BRAND */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-extrabold text-2xl tracking-tighter text-white group-hover:text-[#FF1E27] transition-colors">
            MONZY<span className="text-[#FF1E27]">.V2</span>
          </span>
        </Link>

        {/* CENTER NAVIGATION PILL */}
        <nav className="hidden md:flex items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-lg">
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
                href="#contact"
                className="hover:text-white transition-colors duration-200"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT CTA BUTTON */}
        <div>
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#FF1E27] hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,30,39,0.5)] transition-all duration-300 border border-red-500/30"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}