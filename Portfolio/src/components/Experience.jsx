import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      year: "2024",
      period: "Present",
      role: "President",
      company: "Google Developer Student Club",
      type: "Leadership",
      location: "MM University, India",
      description: "Leading a team of 30+ developers and organizing events for 1,000+ members to grow the tech community. Spearheading initiatives in AI, mobile development, and emerging technologies.",
      achievements: [
        "Led a team of 30+ developers",
        "Organized events for 1,000+ members",
        "Facilitated Google Cloud GenAI Study Jams'24 - Taught 150+ students",
        "Facilitated Google's Android Workshop'23 - Taught 100+ students"
      ],
      skills: ["Leadership", "Community Management", "Event Planning", "Teaching", "Public Speaking"],
      icon: "👑",
      color: "from-yellow-400 to-orange-500",
      glowColor: "shadow-yellow-500/50"
    },
    {
      year: "2024",
      period: "May - Jun 2024",
      role: "Salesforce Intern",
      company: "TriColor Initiatives Pvt. Ltd.",
      type: "Internship",
      location: "India",
      description: "Developed expertise in Salesforce CRM and earned certification as a Salesforce AI Associate. Gained hands-on experience with enterprise-level CRM solutions and AI integrations.",
      achievements: [
        "Developed expertise in Salesforce CRM",
        "Certified as Salesforce AI Associate",
        "Worked with enterprise CRM solutions",
        "Gained experience in AI-powered business tools"
      ],
      skills: ["Salesforce CRM", "Salesforce AI", "Enterprise Solutions", "CRM Configuration"],
      icon: "☁️",
      color: "from-blue-400 to-cyan-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      year: "2023",
      period: "Jun - Jul 2023",
      role: "Intern Trainee",
      company: "Community Of Metaverse",
      type: "Internship",
      location: "India",
      description: "Created AR projects and AR filters under the guidance of AICTE and Meta. Gained hands-on experience with augmented reality development and immersive technologies.",
      achievements: [
        "Created multiple AR projects and filters",
        "Worked under AICTE and Meta guidance",
        "Top performer in COM program",
        "Gained expertise in AR development"
      ],
      skills: ["AR Development", "Meta Tools", "Computer Vision", "3D Graphics", "Filter Creation"],
      icon: "🥽",
      color: "from-purple-400 to-pink-500",
      glowColor: "shadow-purple-500/50"
    },
    {
      year: "2022-2024",
      period: "Multiple Projects",
      role: "Project Lead & Developer",
      company: "Personal & Team Projects",
      type: "Development",
      location: "Various",
      description: "Led development of innovative mobile applications focusing on accessibility and social impact. Built solutions using Flutter, AI/ML, and computer vision technologies.",
      achievements: [
        "Led Silent Voice - AI sign language translator (3rd Ideathon Taiwan 2025 Winner)",
        "Developed Orbcura - accessibility app for visually impaired",
        "Built Aqua Watch - flood management system for India",
        "Won multiple national and international hackathons"
      ],
      skills: ["Flutter", "AI/ML", "Computer Vision", "Team Leadership", "Mobile Development", "Python"],
      icon: "🚀",
      color: "from-green-400 to-emerald-500",
      glowColor: "shadow-green-500/50"
    }
  ];

  return (
    <section id="experience" className="min-h-screen px-8 py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 particle-field pointer-events-none"></div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-black gradient-text mb-6">
          EXPERIENCE
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A journey through innovation, leadership, and cutting-edge technology development
        </p>
        <div className="w-40 h-1 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Interactive Timeline */}
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-purple-400 to-pink-400 rounded-full">
          {/* Animated pulse */}
          <motion.div
            animate={{ y: [0, "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-2 h-8 bg-gradient-to-b from-white via-cyan-400 to-transparent rounded-full -ml-0.5 shadow-lg shadow-cyan-400/50"
          />
        </div>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-16 gap-8`}
            >
              {/* Timeline Node */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                onClick={() => setActiveIndex(index)}
                className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full cursor-pointer z-20 flex items-center justify-center text-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? `bg-gradient-to-r ${exp.color} ${exp.glowColor} shadow-2xl`
                    : 'bg-gray-800 border-2 border-gray-600 hover:border-white'
                }`}
              >
                <span className={activeIndex === index ? 'animate-pulse' : ''}>
                  {exp.icon}
                </span>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              >
                <div className={`glass p-8 rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                  activeIndex === index 
                    ? 'border-green-400/50 shadow-2xl shadow-green-400/20' 
                    : 'border-white/10 hover:border-white/30'
                }`}>
                  {/* Holographic sweep effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Year Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${exp.color} text-black`}
                  >
                    {exp.year} • {exp.period}
                  </motion.div>

                  {/* Role & Company */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold neon-text-primary mb-2 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {exp.type}
                      </span>
                      <span className="text-sm text-gray-400">📍 {exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold neon-text-secondary mb-3 flex items-center gap-2">
                      <span>⚡</span> Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors"
                        >
                          <span className="text-green-400 mt-1">→</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Tags */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-sm text-gray-300 hover:text-white hover:border-green-400/50 transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Animated Corner Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-400/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-tr-full"></div>
                </div>
              </motion.div>

              {/* Side Stats (for desktop) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className={`hidden md:block flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}
              >
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 text-center"
                  >
                    <div className="text-3xl mb-2">{exp.icon}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Impact Level</div>
                    <div className="flex gap-1 justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-green-400' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 text-center"
                  >
                    <div className="text-2xl font-bold neon-text-primary">{exp.achievements.length}</div>
                    <div className="text-sm text-gray-400">Achievements</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 text-center"
                  >
                    <div className="text-2xl font-bold neon-text-accent">{exp.skills.length}</div>
                    <div className="text-sm text-gray-400">Skills Used</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary - REMOVED THE PINK LINE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 relative overflow-hidden group">
            <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"></div>
            
            <h3 className="text-3xl font-bold gradient-text mb-4 relative z-10">
              Ready for the Next Challenge
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto relative z-10">
              With a proven track record of innovation, leadership, and technical excellence, 
              I'm excited to tackle the next frontier in technology and create solutions that 
              shape the future.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-6 inline-block"
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neon"
              >
                Let's Build the Future Together
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}