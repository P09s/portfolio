import React from "react";
import { motion } from "framer-motion";

const items = [
  { year: "2025", title: "GDSC President", desc: "Leading a 1000+ member community, events & hackathons." },
  { year: "2024", title: "Hackathon Winner", desc: "Multiple national & international prizes." }
];

export default function Work(){
  return (
    <section id="work" className="py-24">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>
      <div className="space-y-6">
        {items.map((it,i)=>(
          <motion.div key={i} initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:i*0.15}} className="glass rounded-xl p-6 flex gap-6 items-start">
            <div className="w-20 text-center">
              <div className="text-sm text-white/70">{it.year}</div>
            </div>
            <div>
              <div className="text-xl font-semibold">{it.title}</div>
              <div className="text-white/80 mt-2">{it.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
