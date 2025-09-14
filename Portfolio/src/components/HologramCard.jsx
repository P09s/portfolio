import { motion } from "framer-motion";

export default function HologramCard({ title, subtitle, desc, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(139,92,246,0.3)"
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      className="glass p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 cursor-pointer group relative overflow-hidden"
    >
      {/* Holographic sweep effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="text-4xl mb-4"
          >
            {icon}
          </motion.div>
        )}
        
        <h3 className="text-2xl font-bold neon-text-primary mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-purple-400 font-semibold mb-3 group-hover:text-purple-300 transition-colors">
            {subtitle}
          </p>
        )}
        
        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
          {desc}
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-2xl"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-2xl"></div>
    </motion.div>
  );
}