  "use client";

import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "DONATE PLATFORM",
    category: "Fullstack Platform",
    description: "Platform donasi umat dengan fitur unggulan pengelolaan donasi, laporan real-time, dan dashboard admin.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/arthawansz",
    demo: "#",
    bgColor: "#1a1a1a",
    accentColor: "#444",
  },
  {
    id: 2,
    title: "E-COMMERCE SYSTEM",
    category: "Enterprise Web App",
    description: "Sistem e-commerce lengkap dengan manajemen order, pembayaran, dan laporan penjualan terintegrasi.",
    tags: ["Next.js", "Node.js", "Tailwind CSS", "MySQL"],
    github: "https://github.com/arthawansz",
    demo: "#",
    bgColor: "#1c1c1c",
    accentColor: "#444",
  },
  {
    id: 3,
    title: "TASK MANAGEMENT",
    category: "Productivity App",
    description: "Aplikasi manajemen tugas dengan fitur dashboard, role management, dan tracking progress tim secara real-time.",
    tags: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/arthawansz",
    demo: "#",
    bgColor: "#1e2a4a",
    accentColor: "#3b5bdb",
  },
  {
    id: 4,
    title: "SCHOOL WEBSITE",
    category: "Institutional Website",
    description: "Website resmi sekolah dengan sistem informasi akademik, berita, dan profil sekolah yang dinamis.",
    tags: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    github: "https://github.com/arthawansz",
    demo: "#",
    bgColor: "#1a1a1a",
    accentColor: "#b8860b",
  },
];

function ProjectCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-none overflow-hidden group cursor-pointer"
      style={{
        backgroundColor: item.bgColor,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* MOCK SCREENSHOT AREA */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "220px", background: item.bgColor }}
      >
        {/* Simulated UI preview */}
        <div className="absolute inset-0 p-4 opacity-40">
          <div className="w-full h-4 bg-white/10 rounded mb-2"></div>
          <div className="w-3/4 h-3 bg-white/8 rounded mb-3"></div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-white/10 rounded flex flex-col items-center justify-center gap-1">
                <div className="w-4 h-4 bg-white/20 rounded"></div>
                <div className="w-6 h-1.5 bg-white/15 rounded"></div>
              </div>
            ))}
          </div>
          <div className="w-full h-2 bg-white/8 rounded mb-1"></div>
          <div className="w-5/6 h-2 bg-white/8 rounded mb-1"></div>
          <div className="w-4/6 h-2 bg-white/8 rounded"></div>
        </div>

        {/* Accent left border */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ backgroundColor: item.accentColor }}
        ></div>

        {/* Number badge */}
        <div className="absolute top-3 right-3 text-[10px] font-mono text-white/30">
          0{item.id}
        </div>

        {/* Category tag */}
        <div className="absolute top-3 left-4 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          {item.category.toUpperCase()}
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-[#FF1E27]/10 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>

      {/* CARD BOTTOM: Title + Actions */}
      <div className="p-5 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <h3
          className="text-xl font-black uppercase tracking-tight text-white leading-tight transition-colors duration-300"
          style={{ color: hovered ? "#FF1E27" : "white" }}
        >
          {item.title}
        </h3>

        {/* VIEW CASE + GITHUB */}
        <div className="flex items-center gap-4">
          <a
            href={item.demo}
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white hover:text-[#FF1E27] transition-colors duration-200"
          >
            VIEW CASE <FaExternalLinkAlt className="text-[9px]" />
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="project" className="relative bg-[#09090B] text-white py-28 px-6 md:px-12 z-30">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-zinc-800 pb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF1E27] uppercase">
              [ 02 . SELECTED WORKS ]
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-2 uppercase">
              FEATURED <span className="text-[#FF1E27]">PROJECTS</span>
            </h2>
          </div>
        </div>

        {/* 2-COLUMN PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}