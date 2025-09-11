import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from 'lucide-react';

export default function Contact(){
  return (
    <section id="contact" className="py-28 pb-60">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="glass p-6 rounded-xl">
            <div className="text-sm text-white/70">Say hi</div>
            <div className="mt-4">
              <div className="bg-white/6 p-3 rounded-2xl text-white/90">Hey Parag — I’d love to collaborate.</div>
              <div className="mt-3 text-xs text-white/50">This preview mimics messages — send a real email via the form.</div>
            </div>
          </div>
          <div className="text-white/70">
            <div className="font-semibold">Email</div>
            <div>sharmaparag2004@gmail.com</div>
            <div className="mt-4">
              <div className="font-semibold mb-1.5">Social</div>
              <div className="flex space-x-4">
      <a href="https://github.com/p09s" aria-label="GitHub profile">
        <Github size={25} className="text-gray-600 hover:text-white" />
      </a>
      <a href="https://linkedin.com/in/p09s" aria-label="LinkedIn profile">
        <Linkedin size={25} className="text-gray-600 hover:text-white" />
      </a>
    </div>
            </div>
          </div>
        </div>

        <form className="glass p-6 rounded-xl space-y-4">
          <input className="w-full p-3 rounded-lg bg-white/6" placeholder="Your name"/>
          <input className="w-full p-3 rounded-lg bg-white/6" placeholder="Your email"/>
          <textarea className="w-full p-3 rounded-lg bg-white/6" rows="5" placeholder="Message"/>
          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
}
