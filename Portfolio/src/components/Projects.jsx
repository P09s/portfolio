import React, { useRef } from "react";
import projects from "../data/projects";
import { motion, useMotionValue, useTransform } from "framer-motion";

function useTilt() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, v => (v / 60) * -6);
  const rotateY = useTransform(x, v => (v / 60) * 6);
  function onMove(e) {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
  }
  function onLeave() {
    x.set(0); y.set(0);
  }
  return { ref, rotateX, rotateY, onMove, onLeave };
}

export default function Projects(){
  return (
    <section id="projects" className="py-28">
      <h2 className="text-4xl font-bold mb-10">Projects — 3D Tilt Showcase</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx)=> <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}

function ProjectCard({ project }){
  const { ref, rotateX, rotateY, onMove, onLeave } = useTilt();

  return (
    <div className="tilt-container">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="glass rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <div className="text-sm bg-white/6 px-3 py-1 rounded-full">{project.tagline}</div>
          </div>
          <p className="mt-3 text-white/80">{project.description}</p>

          <div className="mt-6 flex items-center gap-4">
            <a href={project.demo} className="text-sm px-3 py-2 rounded-full glass">Demo</a>
            <a href={project.repo} className="text-sm px-3 py-2 rounded-full glass">Code</a>
            <div className="ml-auto text-xs text-white/60">React • ML</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
