import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Mail, ExternalLink } from 'lucide-react';

const iconMap = {
  github: Github,
  portfolio: Globe,
  linkedin: Linkedin,
  mail: Mail,
};

const icons = [
  { 
    id: "github", 
    label: "GitHub", 
    href: "https://github.com/P09s",
    color: "hover:text-purple-400"
  },
  { 
    id: "portfolio", 
    label: "Portfolio", 
    href: "https://g.dev/parag_09",
    color: "hover:text-blue-400"
  },
  { 
    id: "linkedin", 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/p09s/",
    color: "hover:text-cyan-400"
  },
  { 
    id: "mail", 
    label: "Email", 
    href: "mailto:sharmaparag2004@gmail.com",
    color: "hover:text-green-400"
  },
];

export default function DockFooter() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="glass px-6 py-4 rounded-full flex items-center gap-6 shadow-2xl border border-white/10 backdrop-blur-lg"
      >
        {icons.map((icon, index) => (
          <DockIcon key={icon.id} icon={icon} index={index} />
        ))}
        
        {/* Dock indicator */}
        
      </motion.div>
    </div>
  );
}

function DockIcon({ icon, index }) {
  const IconComponent = iconMap[icon.id];

  return (
    <motion.a
      href={icon.href}
      target={icon.href.startsWith('mailto:') ? '_self' : '_blank'}
      rel={icon.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
      aria-label={icon.label}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1 + 2,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 0.95, 
        y: -12,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <motion.div
        className={`w-12 h-12 rounded-xl bg-gray-800/80 border border-gray-600/50 backdrop-blur-sm flex items-center justify-center text-gray-300 transition-all duration-300 group-hover:border-white/50 ${icon.color} group-hover:bg-gray-700/80`}
      >
        {IconComponent && (
          <IconComponent size={20} className="transition-transform group-hover:scale-110" />
        )}
        
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            boxShadow: '0 0 20px rgba(255,255,255,0.2)',
          }}
        />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 border border-white/20 rounded-lg text-sm text-white whitespace-nowrap pointer-events-none"
      >
        {icon.label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
      </motion.div>

      {/* External link indicator */}
      {!icon.href.startsWith('mailto:') && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center"
        >
          <ExternalLink size={8} className="text-black" />
        </motion.div>
      )}
    </motion.a>
  );
}