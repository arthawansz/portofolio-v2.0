import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import potraitImg from "../assets/potrait.png";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full bg-[#09090B] flex items-center justify-center overflow-hidden pt-20">
      
      {/* 1. BACKGROUND GLOW RED NEON */}
      <div className="absolute w-[500px] h-[500px] bg-[#FF1E27]/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 2. LEFT VERTICAL SOCIAL SIDEBAR */}
      <div className="absolute left-6 bottom-10 hidden md:flex flex-col items-center gap-6 z-30 text-zinc-400">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-[#FF1E27] transition-colors p-1"
          aria-label="Instagram"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-[#FF1E27] transition-colors p-1"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a 
          href="https://github.com/arthawansz" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-[#FF1E27] transition-colors p-1"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-16 bg-zinc-700 mt-2"></div>
      </div>

      {/* 3. CENTERED HERO CONTENT (TYPOGRAPHY MASK + PORTRAIT) */}
      <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-center px-4">
        
        {/* GIANT BACKGROUND TEXT (MASKING EFFECT) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none">
          <h1 className="text-[11vw] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 leading-none">
            ARTHAWAN
          </h1>
          <h1 className="text-[11vw] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 leading-none">
            PRATAMA
          </h1>
        </div>

        {/* FOREGROUND CUTOUT PORTRAIT IMAGE */}
        <div className="relative z-20 h-[75vh] md:h-[85vh] flex items-end justify-center pointer-events-none">
          <img
            src={potraitImg.src}
            alt="Arthawan Pratama"
            className="max-h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>

      {/* 4. BOTTOM CURVED TRANSITION BORDER */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#F4F4F5] rounded-t-[40px] md:rounded-t-[80px] z-30"></div>

    </section>
  );
}