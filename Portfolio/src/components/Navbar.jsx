import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ dark, setDark }) {
  const links = ["About", "Work", "Projects", "Contact"];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 12 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto mx-4 md:mx-0 glass px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl border border-white/6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center text-sm font-bold shadow-md">P</div>
          <div className="hidden md:block">
            <div className="text-sm font-semibold">Parag Sharma</div>
            <div className="text-xs text-white/60">Creative Developer</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 ml-6">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm hover:text-white/90 transition">
              {l}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button onClick={() => setDark(d => !d)} className="w-10 h-10 rounded-full glass flex items-center justify-center">
            {/* toggle icon */}
            <span>{ dark ? "🌙" : "☀️" }</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
