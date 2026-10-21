import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { FaDownload, FaCode, FaServer, FaUserCheck } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#F4F4F5] text-zinc-900 py-24 px-6 md:px-12 -mt-12 z-40  md:rounded-t-[80px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER & BIO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* LEFT COLUMN: TITLE & META DATA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#FF1E27] uppercase">
                [ 01 . PROFILE ]
              </span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-2 leading-none uppercase">
                ABOUT <br />
                <span className="text-[#FF1E27]">ME</span>
              </h2>
            </div>

            {/* QUICK INFO DETAILS */}
            <div className="mt-10 space-y-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
              <div>
                <p className="text-zinc-400 text-[10px]">Name</p>
                <p className="text-zinc-900 font-extrabold text-sm">
                  ARTHAWAN PRATAMA
                </p>
              </div>
              <div>
                <p className="text-zinc-400 text-[10px]">From</p>
                <p className="text-zinc-900 font-extrabold text-sm">
                  MAKASSAR, WEST SULAWESI
                </p>
              </div>
              <div>
                <p className="text-zinc-400 text-[10px]">Specialization</p>
                <p className="text-zinc-900 font-extrabold text-sm">
                  FULL-STACK DEVELOPER
                </p>
              </div>
              <div>
                <p className="text-zinc-400 text-[10px]">Status</p>
                <p className="text-zinc-900 font-extrabold text-sm">
                  STUDENT / DEVELOPER
                </p>
              </div>

              {/* DOWNLOAD CV BUTTON */}
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-zinc-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#FF1E27] transition-all duration-300 shadow-md group"
                >
                  Download CV
                  <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PARAGRAPH DESCRIPTION & SKILLS */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <p className="text-lg md:text-2xl font-medium leading-relaxed text-zinc-800">
              I build scalable web applications from front to back — crafting
              clean interfaces with{" "}
              <span className="font-bold text-zinc-950 underline decoration-[#FF1E27] decoration-2">
                React & Next.js
              </span>{" "}
              and powering them with robust JavaScript backends.
            </p>
            <p className="mt-6 text-zinc-600 leading-relaxed text-sm md:text-base">
              Currently pursuing Software Engineering at Telkom University.
              Passionate about system fundamentals, fullstack architecture,
              competitive coding platforms, and crafting high-performance
              digital experiences.
            </p>

            {/* TECH STACK & SKILLS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {/* CARD 1: SOFTWARE ENGINEER */}
              <div className="sm:col-span-2 bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <FaCode className="text-[#FF1E27] text-xl" />
                  <h3 className="font-bold text-sm tracking-wider uppercase text-zinc-900">
                    Software Engineer
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4 text-3xl text-zinc-700">
                  <SiJavascript
                    className="hover:text-[#F7DF1E] transition-colors"
                    title="JavaScript"
                  />
                  <SiReact
                    className="hover:text-[#61DAFB] transition-colors"
                    title="React"
                  />
                  <SiNextdotjs
                    className="hover:text-black transition-colors"
                    title="Next.js"
                  />
                  <SiTailwindcss
                    className="hover:text-[#38BDF8] transition-colors"
                    title="Tailwind CSS"
                  />
                  <SiNodedotjs
                    className="hover:text-[#339933] transition-colors"
                    title="Node.js"
                  />
                </div>
              </div>

              {/* CARD 2: TOOLS & SERVER */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <FaServer className="text-[#FF1E27] text-xl" />
                  <h3 className="font-bold text-sm tracking-wider uppercase text-zinc-900">
                    Tools & Server
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4 text-3xl text-zinc-700">
                  <SiGit
                    className="hover:text-[#F05032] transition-colors"
                    title="Git"
                  />
                  <SiGithub
                    className="hover:text-black transition-colors"
                    title="GitHub"
                  />
                  <SiDocker
                    className="hover:text-[#2496ED] transition-colors"
                    title="Docker"
                  />
                  <SiVercel
                    className="hover:text-black transition-colors"
                    title="Vercel"
                  />
                  <SiFigma
                    className="hover:text-[#F24E1E] transition-colors"
                    title="Figma"
                  />
                </div>
              </div>

              {/* CARD 3: SOFT SKILLS */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserCheck className="text-[#FF1E27] text-xl" />
                  <h3 className="font-bold text-sm tracking-wider uppercase text-zinc-900">
                    Core Abilities
                  </h3>
                </div>
                <ul className="text-xs font-semibold text-zinc-600 space-y-2 uppercase tracking-wide">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27]"></span>
                    Clean Code & Fundamental Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27]"></span>
                    Problem Solving & Logic Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27]"></span>
                    Fast Learner & Adaptability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
