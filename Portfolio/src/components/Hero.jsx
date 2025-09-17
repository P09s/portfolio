import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    "CREATIVE DEVELOPER",
    "COMMUNITY LEADER",
    "ANI - TUBER", 
    "FULL-STACK DEVELOPER",
    "SALESFORCE AI ASSOCIATE"
  ];

  const glitchVariants = {
    initial: { x: 0 },
    glitch: { 
      x: [0, -2, 3, -1, 2, 0],
      transition: { 
        duration: 0.2,
        repeat: 2,
        repeatType: "mirror"
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden pt-20 md:pt-0">
      {/* Dynamic Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute w-[800px] h-[800px] bg-gradient-radial from-green-500/20 via-transparent to-transparent rounded-full blur-[100px] -z-10"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent rounded-full blur-[80px] -z-10"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          x: [-50, 50, -50],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
        className="absolute w-[400px] h-[400px] bg-gradient-radial from-pink-500/15 via-transparent to-transparent rounded-full blur-[60px] -z-10"
      />

      {/* Holographic Scanlines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-lines w-full h-full opacity-30"></div>
      </div>

      {/* Main Title with Advanced Effects */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.h1
          variants={glitchVariants}
          initial="initial"
          whileHover="glitch"
          className="text-7xl md:text-9xl font-black mb-4 relative cursor-pointer"
        >
          {/* Main text */}
          <span className="gradient-text tracking-wider">
            PARAG
          </span>
          <br />
          <span className="gradient-text tracking-wider">
            SHARMA
          </span>
          
          {/* Glitch overlay effect */}
          <motion.div
            className="absolute inset-0 text-7xl md:text-9xl font-black gradient-text opacity-0"
            animate={{
              opacity: [0, 0.7, 0],
              x: [0, 3, -2, 0],
              y: [0, -2, 1, 0]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut"
            }}
          >
            PARAG<br />SHARMA
          </motion.div>
        </motion.h1>

        {/* Dynamic Role Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-16 mb-8 overflow-hidden"
        >
          <motion.p
            key={currentRole}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold neon-text-primary tracking-widest"
          >
            {roles[currentRole]}
            <motion.span
              animate={{ opacity: isTyping ? [1, 0] : [0, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-1 text-neon-secondary"
            >
              |
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Description with Holographic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="max-w-4xl mx-auto mb-12 relative"
        >
          <div className="holographic absolute inset-0 rounded-xl"></div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10 p-6 glass rounded-xl">
            Think less <span className="neon-text-primary font-semibold">corporate jargon</span> more 
            <span className="neon-text-secondary font-semibold"> fantasy adventure</span>, 
            <span className="neon-text-accent font-semibold"> with GPUs</span>, and 
            <span className="gradient-text font-semibold"> as sidekicks</span> running at 120fps.
          </p>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(0, 255, 136, 0.6)",
              y: -5
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-full bg-black/40 backdrop-blur-lg border-2 border-green-400/50 text-green-300 font-bold text-lg overflow-hidden transition-all duration-300"
          >
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Scanning line effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
              animate={{ x: [-100, 200] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              EXPLORE PROJECTS
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5"
              >
                ⚡
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(255, 0, 128, 0.6)",
              y: -5
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-full bg-black/40 backdrop-blur-lg border-2 border-pink-400/50 text-pink-300 font-bold text-lg overflow-hidden transition-all duration-300"
          >
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-pink-400/50"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              LET'S CONNECT
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { number: "50+", label: "Projects Built", color: "neon-text-primary" },
            { number: "1000+", label: "Community Members", color: "neon-text-secondary" },
            { number: "15+", label: "Hackathon Wins", color: "neon-text-accent" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center glass px-6 py-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className={`text-3xl font-black ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Fixed Scroll Indicator - Moved to bottom right corner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="fixed bottom-8 right-8 z-30 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="glass px-4 py-2 rounded-full border border-white/20 hover:border-green-400/50 transition-all duration-300">
            <span className="text-xs uppercase tracking-widest">Explore</span>
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
          />
          <div className="w-px h-8 bg-gradient-to-b from-green-400 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}