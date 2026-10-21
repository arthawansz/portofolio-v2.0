import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";
import potraitImg from "../assets/potrait.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#09090B] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* DARK RED RADIAL BACKGROUND GLOW */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(110,8,8,0.6) 0%, rgba(60,4,4,0.3) 40%, transparent 72%)",
        }}
      />

      {/* LEFT VERTICAL SOCIAL SIDEBAR */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-30 text-zinc-400">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#FF1E27] hover:scale-125 transition duration-300 ease-in-out p-1"
          aria-label="Instagram"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#FF1E27] hover:scale-125 transition duration-300 ease-in-out p-1"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/arthawansz"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#FF1E27] hover:scale-125 transition duration-300 ease-in-out p-1"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-center px-4">

        {/* GIANT BACKGROUND NAME (behind portrait) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-0">
          {/* First name — white top fading out */}
          <h1
            className="font-black leading-none tracking-tighter"
            style={{
              fontSize: "14vw",
              background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.05) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.04em",
            }}
          >
            ARTHAWAN
          </h1>
          {/* Last name — dark red fading */}
          <h1
            className="font-black leading-none tracking-tighter"
            style={{
              fontSize: "14vw",
              background: "linear-gradient(180deg, rgba(180,20,20,0.55) 0%, rgba(80,5,5,0.08) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.04em",
            }}
          >
            PRATAMA
          </h1>
        </div>

        {/* PORTRAIT IMAGE (foreground, z-20) */}
        <div className="relative z-20 h-[80vh] md:h-[88vh] flex items-end justify-center pointer-events-none">
          <Image  
            src={potraitImg}
            alt="Arthawan Pratama"
            className="max-h-full object-contain"
            style={{
              filter:
                "drop-shadow(0 30px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(100,8,8,0.45))",
            }}
          />
        </div>

      </div>
    </section>
  );
}
