import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Database,
  Cloud,
  Cpu,
  Palette,
  Award,
  Trophy,
  Globe,
  Users,
  BookOpen,
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("profile");
  const [activeReady, setActiveReady] = useState(false);

  const skills = [
    { name: "React.js + Tailwind.css", level: 95 },
    { name: "AI & Machine Learning", level: 90 },
    { name: "AR & Game Development", level: 85 },
    { name: "Full-Stack Development", level: 92 },
    { name: "UI/UX Design", level: 88 },
    { name: "Salesforce CRM", level: 82 },
  ];

  const achievements = [
    {
      title: "Ideathon Taiwan 2025 Winner",
      desc: "Global recognition for SilentVoice – bridging communication for the hearing impaired.",
      year: "2025",
      icon: <Globe className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Hack4Change@Charcha – Top 5",
      desc: "Selected among 6000+ teams nationally for innovative AI-powered business solutions.",
      year: "2024",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "INNO-vation Award Nominee",
      desc: "Nominated for FY2024 INNO-vation Generation Award for Orbcura – accessibility app.",
      year: "2024",
      icon: <Award className="w-8 h-8 text-pink-400" />,
    },
    {
      title: "GDSC MMDU President",
      desc: "Led a core team of 30+ and organized events for 1000+ developers across campus.",
      year: "2024",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Salesforce AI Associate",
      desc: "Certified by Salesforce; developed expertise in Salesforce CRM and AI solutions.",
      year: "2024",
      icon: <Cloud className="w-8 h-8 text-indigo-400" />,
    },
    {
      title: "Google Cloud & Android Facilitator",
      desc: "Trained 250+ students in GenAI and Android fundamentals through workshops.",
      year: "2023",
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    },
  ];

  const tabVariants = {
    inactive: { y: 10, opacity: 0.6 },
    active: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>

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

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 glass-hover p-2 rounded-full max-w-4xl mx-auto"
      >
        {[
          { id: "profile", label: "Profile", icon: "👨‍💻" },
          { id: "skills", label: "Skills", icon: "⚡" },
          { id: "achievements", label: "Achievements", icon: "🏆" },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            initial="inactive"
            variants={tabVariants}
            animate={activeTab === tab.id ? "active" : "inactive"}
            transition={{ duration: 0.35, type: "spring", stiffness: 300, damping: 24 }}
            onClick={() => {
              if (tab.id !== activeTab) {
                setActiveReady(false);
                setActiveTab(tab.id);
              }
            }}
            onAnimationComplete={() => {
              if (activeTab === tab.id) setActiveReady(true);
            }}
            className="px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base relative overflow-hidden"
            aria-pressed={activeTab === tab.id && activeReady}
          >
            {activeTab === tab.id && activeReady && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-purple-400/20 rounded-full border-2 border-green-400/50"
              />
            )}
            <span
              className={`relative z-10 mr-2 ${
                activeTab === tab.id && activeReady ? "neon-text-primary" : "text-gray-400"
              }`}
            >
              {tab.icon}
            </span>
            <span
              className={`relative z-10 hidden sm:inline ${
                activeTab === tab.id && activeReady ? "neon-text-primary" : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Content Area */}
      <div className="max-w-7xl w-full">
        <AnimatePresence mode="wait">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left: Bio + Philosophy */}
              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-8 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 relative overflow-hidden"
                >
                  <h3 className="text-3xl font-bold neon-text-primary mb-6 flex items-center gap-3">
                    <span className="text-4xl">🚀</span> Who Am I?
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed relative z-10">
                    <p>
                      Hey, I’m <span className="gradient-text font-semibold">Parag</span> — a developer who loves building{" "}
                      <span className="neon-text-primary">fun</span>,{" "}
                      <span className="neon-text-secondary">useful</span>, and impactful experiences.
                    </p>
                    <p>
                      I work on{" "}
                      <span className="neon-text-accent">AI/ML</span>, explore{" "}
                      <span className="text-purple-400">AR/VR</span>, build{" "}
                      <span className="text-pink-400 font-semibold">web & mobile apps</span>, and craft full-stack solutions.
                    </p>
                    <p>
                      I previously led a{" "}
                      <span className="font-bold neon-text-primary">1000+ member community</span> as GDSC President,
                      organizing hackathons and events that connect people through code.
                    </p>
                  </div>
                </motion.div>

                {/* Philosophy Card (restored) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold neon-text-accent mb-3 flex items-center gap-2">
                    <span>💭</span> Philosophy
                  </h4>
                  <p className="text-gray-300 italic">
                    "Wake up to reality — in code, nothing ever goes exactly as planned."
                  </p>
                </motion.div>
              </div>

              {/* Right: Stats */}
              <div className="space-y-6">
                {[
                  { label: "Years of Experience", value: "3+", suffix: "", color: "neon-text-primary" },
                  { label: "Projects Completed", value: "15", suffix: "+", color: "neon-text-secondary" },
                  { label: "Community Impact", value: "1K", suffix: "+ devs", color: "neon-text-accent" },
                  { label: "Lines of Code", value: "100K", suffix: "+", color: "text-pink-400" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="glass p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide">
                          {stat.label}
                        </div>
                        <div className={`text-3xl font-black ${stat.color} group-hover:scale-110 transition-transform`}>
                          {stat.value}
                          <span className="text-lg">{stat.suffix}</span>
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
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-xl border border-white/10 hover:border-green-400/40 transition-all duration-300 flex flex-col items-start gap-4"
                >
                  <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      skill.level >= 90
                        ? "bg-green-500/20 text-green-300"
                        : skill.level >= 80
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-gray-500/20 text-gray-300"
                    }`}
                  >
                    {skill.level >= 90
                      ? "🚀 Project-Proven"
                      : skill.level >= 80
                      ? "✅ Hands-on"
                      : "🌱 Growing"}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="glass glass-instant p-8 rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.45 }}
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
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
