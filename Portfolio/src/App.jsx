import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DockFooter from "./components/DockFooter";

export default function App(){
  const [dark, setDark] = useState(true);
  useEffect(()=> {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar dark={dark} setDark={setDark}/>
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <DockFooter />
    </div>
  );
}
