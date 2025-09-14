import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState('profile');

  const skills = [
    { name: "React & Next.js", level: 95, color: "from-cyan-400 to-blue-500", icon: "⚛️" },
    { name: "AI & Machine Learning", level: 90, color: "from-green-400 to-emerald-500", icon: "🤖" },
    { name: "AR/VR Development", level: 85, color: "from-purple-400 to-pink-500", icon: "🥽" },
    { name: "Full-Stack Development", level: 92, color: "from-orange-400 to-red-500", icon: "🔥" },
    { name: "UI/UX Design", level: 88, color: "from-pink-400 to-rose-500", icon: "🎨" },
    { name: "Cloud & DevOps", level: 82, color: "from-indigo-400 to-purple-500", icon: "☁️" }
  ];

  const achievements = [
    { title: "GDSC President", desc: "Leading 1000+ developers", year: "2025", icon: "👑" },
    { title: "National Hackathon Winner", desc: "Multiple championship titles", year: "2024", icon: "🏆" },
    { title: "AI Innovation Award", desc: "Breakthrough in neural interfaces", year: "2024", icon: "🧠" },
    { title: "Open Source Contributor", desc: "500+ contributions", year: "2023", icon: "💻" }
  ];

  const tabVariants = {
    inactive: { y: 10, opacity: 0.6 },
    active: { y: 0, opacity: 1 }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-radial from-green-500/10 to-transparent rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-xl"
        />
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-black gradient-text mb-4">
          ABOUT ME
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
      </motion.div>

      {/* Tab Navigation - Fixed positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 glass-hover p-2 rounded-full max-w-4xl mx-auto"
      >
        {[
          { id: 'profile', label: 'Profile', icon: '👨‍💻' },
          { id: 'skills', label: 'Skills', icon: '⚡' },
          { id: 'achievements', label: 'Achievements', icon: '🏆' }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variants={tabVariants}
            animate={activeTab === tab.id ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-green-400/20 to-purple-400/20 border-2 border-green-400/50 neon-text-primary'
                : 'text-gray-400 hover:text-white border-2 border-transparent hover:border-white/20'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Content Area */}
      <div className="max-w-7xl w-full">
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Bio */}
            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 relative overflow-hidden"
              >
                <div className="holographic absolute inset-0 opacity-50"></div>
                <h3 className="text-3xl font-bold neon-text-primary mb-6 flex items-center gap-3">
                  <span className="text-4xl">🚀</span> Who Am I?
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed relative z-10">
                  <p>
                    I'm a <span className="gradient-text font-semibold">visionary developer</span> who 
                    bridges the gap between <span className="neon-text-primary">imagination</span> and 
                    <span className="neon-text-secondary"> reality</span>. My mission is to craft 
                    digital experiences that don't just serve users—they <em>inspire</em> them.
                  </p>
                  <p>
                    With expertise spanning <span className="neon-text-accent">AI/ML</span>, 
                    <span className="text-purple-400"> AR/VR</span>, and 
                    <span className="text-pink-400"> full-stack development</span>, I architect 
                    solutions that push the boundaries of what's possible in the digital realm.
                  </p>
                  <p>
                    Currently leading <span className="font-bold neon-text-primary">1000+ developers</span> as 
                    GDSC President while building the future, one revolutionary project at a time.
                  </p>
                </div>
              </motion.div>

              {/* Philosophy Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold neon-text-accent mb-3 flex items-center gap-2">
                  <span>💭</span> Philosophy
                </h4>
                <p className="text-gray-300 italic">
                  "Technology should be indistinguishable from magic, and every line of code 
                  should bring us closer to that impossibly beautiful future."
                </p>
              </motion.div>
            </div>

            {/* Right: Interactive Stats */}
            <div className="space-y-6">
              {[
                { label: "Years of Experience", value: "3+", suffix: "", color: "neon-text-primary" },
                { label: "Projects Completed", value: "50", suffix: "+", color: "neon-text-secondary" },
                { label: "Community Impact", value: "1K", suffix: "+ devs", color: "neon-text-accent" },
                { label: "Lines of Code", value: "100K", suffix: "+", color: "text-pink-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">
                        {stat.label}
                      </div>
                      <div className={`text-3xl font-black ${stat.color} group-hover:scale-110 transition-transform`}>
                        {stat.value}<span className="text-lg">{stat.suffix}</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity"
                    >
                      ⚡
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:neon-text-primary transition-all">
                      {skill.name}
                    </h3>
                    <div className="text-sm text-gray-400">{skill.level}% Proficiency</div>
                  </div>
                </div>
                
                {/* Skill Bar */}
                <div className="relative">
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="absolute -top-8 right-0 text-sm font-bold neon-text-primary"
                  >
                    {skill.level}%
                  </motion.div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass glass-instant p-8 rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl"
                  >
                    {achievement.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold neon-text-primary group-hover:text-white transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="text-sm px-3 py-1 bg-green-400/20 text-green-300 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement.desc}
                    </p>
                  </div>
                </div>
                
                {/* Achievement Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Removed the "Ready for the Next Challenge" section completely */}
    </section>
  );
}