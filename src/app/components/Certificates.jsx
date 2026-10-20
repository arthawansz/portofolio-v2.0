import React from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certsData = [
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2026",
    id: "DICODING-AI-01",
  },
  {
    title: "Android App Untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2026",
    id: "DICODING-ANDRO-02",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2026",
    id: "DICODING-JS-03",
  },
  {
    title: "Full-Stack Development Web",
    issuer: "Dicoding / Independent",
    year: "2026",
    id: "FS-DEV-04",
  },
  {
    title: "JavaScript Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    year: "2026",
    id: "CISCO-JS-05",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative bg-[#09090B] text-white py-28 px-6 md:px-12 z-30 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF1E27] uppercase">
            [ 03 . CREDENTIALS ]
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-2 uppercase">
            LICENSES & <span className="text-[#FF1E27]">CREDENTIALS</span>
          </h2>
        </div>

        {/* CERTIFICATES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certsData.map((cert, index) => (
            <div
              key={index}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 hover:border-[#FF1E27]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#FF1E27] font-bold">
                    {cert.id}
                  </span>
                  <FaCertificate className="text-zinc-600 group-hover:text-[#FF1E27] transition-colors text-xl" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-[#FF1E27] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-6">
                  {cert.issuer} ({cert.year})
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 font-semibold">
                <span>VERIFIED CERTIFICATE</span>
                <span className="text-white group-hover:text-[#FF1E27] transition-colors flex items-center gap-1">
                  View Credential <FaExternalLinkAlt className="text-[10px]" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}