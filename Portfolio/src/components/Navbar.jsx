import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ dark, setDark }) {
  const nav = ["About","Work","Projects","Contact"];
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed w-full z-50 top-4"
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <div className="glass rounded-full px-6 py-3 flex items-center gap-4 shadow-2xl border">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-400 flex items-center justify-center text-sm font-bold">P</div>
          <div>
            <div className="text-sm font-semibold">Parag</div>
            <div className="text-xs text-white/60">Developer</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n)=> <a key={n} href={`#${n.toLowerCase()}`} className="text-sm hover:text-white/90 transition">{n}</a>)}
          <button
            onClick={()=> setDark(!dark)}
            className="ml-4 w-10 h-10 rounded-full glass flex items-center justify-center"
            aria-label="toggle-dark"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
