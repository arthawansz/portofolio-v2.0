import React from "react";
import { FaExternalLinkAlt, FaGithub, FaCodeBranch } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "CODEARENA (ON DEVELOPMENT)",
    category: "Fullstack Platform / Online Judge",
    description:
      "Platform interactive online course + Online Judge dengan fitur Elo ranking system, matchmaking duel koding 1v1, dan real-time execution engine.",
    tags: ["Next.js", "Node.js", "Tailwind CSS", "Docker", "WebSockets"],
    github: "https://github.com/arthawansz",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "SISMIOP V2",
    category: "Enterprise Web App",
    description:
      "Sistem Informasi Manajemen Objek Pajak v2.0 yang dibangun untuk optimalisasi pengelolaan data dan otomatisasi workflow perpajakan.",
    tags: ["JavaScript", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/arthawansz/sismiop-v2",
    demo: "#",
    featured: false,
  },
  {
    id: 3,
    title: "PORTFOLIO V2.0 (MONZY V2)",
    category: "Personal Portfolio",
    description:
      "Portofolio personal berkonsep dark/red cyberpunk dengan typography masking, glassmorphism UI, dan performa tinggi.",
    tags: ["Next.js 15", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/arthawansz/portofolio-v2.0",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="project" className="relative bg-[#09090B] text-white py-28 px-6 md:px-12 z-30">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-800 pb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF1E27] uppercase">
              [ 02 . SELECTED WORKS ]
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-2 uppercase">
              FEATURED <span className="text-[#FF1E27]">PROJECTS</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0">
            Kumpulan proyek pilihan yang berfokus pada arsitektur bersih, performa, dan pengalaman pengguna yang intuitif.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-zinc-900/60 border ${
                item.featured ? "border-[#FF1E27]/50" : "border-zinc-800"
              } rounded-3xl p-8 flex flex-col justify-between hover:border-[#FF1E27] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,30,39,0.15)]`}
            >
              {/* BADGE FEATURED */}
              {item.featured && (
                <span className="absolute -top-3 right-6 bg-[#FF1E27] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-red-400/30">
                  FLAGSHIP PROJECT
                </span>
              )}

              <div>
                {/* CATEGORY */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF1E27] mb-3">
                  <FaCodeBranch />
                  <span>{item.category}</span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-[#FF1E27] transition-colors mb-4">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold bg-zinc-800/80 text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION LINKS */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-base" /> Source Code
                  </a>
                  {item.demo !== "#" && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-[#FF1E27] hover:underline transition-all ml-auto"
                    >
                      Live Demo <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}