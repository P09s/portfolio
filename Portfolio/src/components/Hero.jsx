import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
      <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-[#0f0f10] via-black to-[#1a1a1a] text-white">
        {/* floating neon blobs */}
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[180px] opacity-30 animate-pulse" />
  
        {/* content */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg">
            PARAG SHARMA
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light">
            I'm cooking something crisp — React, AR, ML & VR.
          </p>
  
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-full glass hover:bg-white/10 transition text-white border border-white/20 shadow-lg"
            >
              🚀 Explore Works
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition shadow-xl"
            >
              💬 Let’s Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
  