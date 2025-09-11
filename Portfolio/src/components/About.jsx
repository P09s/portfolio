import React from "react";
import { motion } from "framer-motion";

export default function About(){
  return (
    <section id="about" className="py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="tilt-container">
          <div className="glass rounded-2xl p-8">
            <img src="/profile.png" alt="me" className="w-52 h-52 rounded-xl object-cover shadow-xl mx-auto"/>
            <h3 className="mt-6 text-2xl font-semibold text-center">Hello! I'm Parag</h3>
            <p className="mt-4 text-center text-white/80">I make futuristic apps combining ML, AR/VR and delightful UI — with accessibility and performance at heart.</p>
          </div>
        </motion.div>

        <motion.div initial={{x:30,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:0.8}}>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Winner in national & international hackathons, building products like SilentVoice and Orbcura. Passionate about usable AI and immersive interfaces.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-4 rounded-lg">
              <div className="text-sm text-white/70">Experience</div>
              <div className="font-semibold">3+ years</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-sm text-white/70">Focus</div>
              <div className="font-semibold">React • ML • AR</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
