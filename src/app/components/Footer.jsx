"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp, FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [time, setTime] = useState("");

  // Update Jam Lokal WIB secara real-time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(now.toLocaleTimeString("id-ID", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#09090B] text-white pt-24 pb-12 px-6 md:px-12 z-30 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION HEADER */}
        <div className="mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF1E27] uppercase">
            [ 04 . GET IN TOUCH ]
          </span>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mt-4">
            {"LET'S CREATE"} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1E27] via-red-500 to-white">
              SOMETHING GREAT.
            </span>
          </h2>
        </div>

        {/* BOTTOM METADATA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-zinc-800/80 items-end">
          
          {/* SOCIALS */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-4">
              SOCIALS
            </p>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-zinc-300">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#FF1E27] transition-colors flex items-center gap-2">
                  <FaInstagram className="text-sm" /> INSTAGRAM
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FF1E27] transition-colors flex items-center gap-2">
                  <FaLinkedinIn className="text-sm" /> LINKEDIN
                </a>
              </li>
              <li>
                <a href="https://github.com/arthawansz" target="_blank" rel="noreferrer" className="hover:text-[#FF1E27] transition-colors flex items-center gap-2">
                  <FaGithub className="text-sm" /> GITHUB
                </a>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-[#FF1E27] transition-colors flex items-center gap-2">
                  <FaWhatsapp className="text-sm" /> WHATSAPP
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div className="md:col-span-5">
            <p className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-4">
              CONTACT DETAILS
            </p>
            <div className="space-y-2">
              <a
                href="mailto:arthaganteng111@gmail.com"
                className="text-lg md:text-xl font-bold hover:text-[#FF1E27] transition-colors underline decoration-zinc-700 decoration-1"
              >
                arthaganteng111@gmail.com
              </a>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                BANDUNG, WEST JAVA, INDONESIA
              </p>
              <p className="text-[11px] font-mono text-[#FF1E27] font-bold uppercase tracking-wider pt-2">
                AVAILABLE FOR FREELANCE & FULL-TIME ROLES
              </p>
            </div>
          </div>

          {/* LOCAL TIME & SCROLL TO TOP */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between h-full gap-6">
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase md:text-right mb-1">
                LOCAL TIME
              </p>
              <p className="text-3xl md:text-4xl font-mono font-black text-white tracking-widest">
                {time || "00:00:00"} <span className="text-xs text-[#FF1E27]">WIB</span>
              </p>
            </div>

            {/* SCROLL TO TOP BUTTON */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-14 h-14 bg-[#FF1E27] text-white rounded-full flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,30,39,0.5)] border border-red-400/30"
            >
              <FaArrowUp className="text-xl" />
            </button>
          </div>

        </div>

        {/* COPYRIGHT FOOTER NOTE */}
        <div className="mt-20 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-zinc-600 gap-4">
          <p>© 2026 ARTHAWAN PRATAMA. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH NEXT.JS 15 & TAILWIND CSS</p>
        </div>

      </div>
    </footer>
  );
}