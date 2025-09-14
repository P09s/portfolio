import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null); // Changed from 0 to null
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: "silentvoice",
      title: "SilentVoice",
      subtitle: "AI-Powered Sign Language Translator",
      category: "AI/ML",
      description: "Revolutionary AI pipeline that converts sign language gestures into real-time text and speech, breaking communication barriers for the deaf community.",
      longDescription: "SilentVoice represents a breakthrough in accessibility technology, utilizing advanced computer vision and machine learning algorithms to recognize and translate sign language in real-time. The system processes video input through a sophisticated neural network trained on thousands of sign language gestures, achieving 95% accuracy in translation.",
      tech: ["React", "TensorFlow.js", "OpenCV", "Flask", "WebRTC", "Python"],
      features: [
        "Real-time gesture recognition with 95% accuracy",
        "Multi-language sign language support",
        "Text-to-speech conversion",
        "Mobile-responsive web application",
        "Offline capability for basic gestures"
      ],
      metrics: {
        users: "10K+",
        accuracy: "95%",
        languages: "3",
        recognition: "Real-time"
      },
      status: "Live",
      image: "/api/placeholder/600/400",
      demo: "#",
      repo: "#",
      color: "from-green-400 to-cyan-500",
      icon: "🤟",
      tags: ["AI", "Accessibility", "Computer Vision", "Social Impact"]
    },
    {
      id: "orbcura",
      title: "Orbcura",
      subtitle: "Complete Accessibility Suite",
      category: "Mobile App",
      description: "Comprehensive mobile application designed to empower visually and auditorily impaired users with intuitive navigation and communication tools.",
      longDescription: "Orbcura is a groundbreaking accessibility suite that combines multiple assistive technologies into a single, intuitive mobile application. The app uses advanced AI to provide real-time object recognition, text-to-speech, speech-to-text, and navigation assistance, creating an inclusive digital experience.",
      tech: ["Flutter", "Dart", "Firebase", "Google ML Kit", "TensorFlow Lite", "ARCore"],
      features: [
        "AI-powered object and text recognition",
        "Voice-guided navigation system",
        "Real-time audio descriptions",
        "Customizable UI for different accessibility needs",
        "Offline mode for core functionalities"
      ],
      metrics: {
        downloads: "5K+",
        rating: "4.8/5",
        features: "15+",
        platforms: "2"
      },
      status: "Beta",
      image: "/api/placeholder/600/400",
      demo: "#",
      repo: "#",
      color: "from-purple-400 to-pink-500",
      icon: "👁️",
      tags: ["Mobile", "Accessibility", "AI", "Flutter", "Social Impact"]
    },
    {
      id: "neurospace",
      title: "NeuroSpace",
      subtitle: "VR Brain Training Platform",
      category: "AR/VR",
      description: "Immersive virtual reality platform that gamifies cognitive training and brain exercises using cutting-edge neuroscience research.",
      longDescription: "NeuroSpace leverages the power of virtual reality to create engaging brain training experiences. The platform combines neuroscience research with gamification to help users improve memory, focus, and cognitive abilities through immersive 3D environments.",
      tech: ["Unity", "C#", "Oculus SDK", "SteamVR", "Firebase", "WebGL"],
      features: [
        "15+ scientifically-backed brain games",
        "Progress tracking with detailed analytics",
        "Multiplayer cognitive challenges",
        "Adaptive difficulty based on performance",
        "Cross-platform VR support"
      ],
      metrics: {
        users: "2K+",
        games: "15+",
        retention: "85%",
        improvement: "40%"
      },
      status: "Development",
      image: "/api/placeholder/600/400",
      demo: "#",
      repo: "#",
      color: "from-blue-400 to-indigo-500",
      icon: "🧠",
      tags: ["VR", "Unity", "Neuroscience", "Gaming", "Health"]
    },
    {
      id: "quantumdash",
      title: "QuantumDash",
      subtitle: "Real-time Analytics Platform",
      category: "Web App",
      description: "Advanced dashboard application providing real-time analytics and insights for large-scale data processing with quantum-inspired algorithms.",
      longDescription: "QuantumDash is a next-generation analytics platform that processes massive datasets in real-time using quantum-inspired algorithms. The application provides intuitive visualizations and predictive analytics for enterprise-level decision making.",
      tech: ["Next.js", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      features: [
        "Real-time data processing (1M+ records/sec)",
        "Interactive data visualizations",
        "Predictive analytics with ML models",
        "Custom dashboard builder",
        "Enterprise security standards"
      ],
      metrics: {
        processing: "1M/sec",
        uptime: "99.9%",
        clients: "50+",
        data: "10TB+"
      },
      status: "Production",
      image: "/api/placeholder/600/400",
      demo: "#",
      repo: "#",
      color: "from-yellow-400 to-orange-500",
      icon: "📊",
      tags: ["Web", "Analytics", "Big Data", "Real-time", "Enterprise"]
    }
  ];

  const categories = ["All", "AI/ML", "Mobile App", "AR/VR", "Web App"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen px-8 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 particle-field pointer-events-none"></div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-black gradient-text mb-6">
          PROJECTS
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Innovative solutions that push the boundaries of technology and create meaningful impact
        </p>
        <div className="w-40 h-1 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-green-400/20 to-purple-400/20 border-2 border-green-400/50 neon-text-primary'
                : 'glass border border-white/20 text-gray-400 hover:text-white hover:border-white/40'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setActiveProject(index)}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer group relative"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-300 border border-green-500/50' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/50' :
                      project.status === 'Production' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50' :
                      'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                    }`}
                  >
                    {project.status}
                  </motion.span>
                </div>

                {/* Project Image/Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                      transition={{ duration: 1 }}
                      className="text-8xl opacity-50"
                    >
                      {project.icon}
                    </motion.span>
                  </div>
                  
                  {/* Scan lines effect */}
                  <div className="absolute inset-0 scan-lines opacity-30"></div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredCard === index ? 1 : 0 }}
                      className="flex gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-green-500/20 border border-green-500/50 rounded-full text-green-300 hover:bg-green-500/30 transition-colors"
                      >
                        👁️ View
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 hover:bg-purple-500/30 transition-colors"
                      >
                        💻 Code
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{project.icon}</span>
                    <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold neon-text-primary mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-green-300 font-semibold mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-800/50 border border-gray-600 rounded text-gray-300 hover:text-white hover:border-gray-400 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-gray-800/50 border border-gray-600 rounded text-gray-400">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold neon-text-secondary">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10`}></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Project Detail Modal */}
        <AnimatePresence>
          {activeProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/20"
              >
                <div className="p-8">
                  {/* Close button */}
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-red-400 transition-colors"
                  >
                    ✕
                  </button>

                  {/* Project detail content */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{projects[activeProject]?.icon}</span>
                      <div>
                        <h3 className="text-3xl font-bold gradient-text">
                          {projects[activeProject]?.title}
                        </h3>
                        <p className="text-xl text-green-300">
                          {projects[activeProject]?.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {projects[activeProject]?.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold neon-text-primary mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {projects[activeProject]?.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <span className="text-green-400 mt-1">→</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Full tech stack */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold neon-text-accent mb-4">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject]?.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:text-white hover:border-gray-400 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* All metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(projects[activeProject]?.metrics || {}).map(([key, value], i) => (
                        <div key={i} className="text-center glass p-4 rounded-xl">
                          <div className="text-2xl font-bold neon-text-secondary">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-20"
        >
          <div className="glass glass-instant p-8 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            
            <h3 className="text-3xl font-bold gradient-text mb-4 relative z-10">
              Ready to Collaborate?
            </h3>
            <p className="text-xl text-gray-300 mb-6 relative z-10">
              Let's build something extraordinary together. I'm always excited to work on 
              innovative projects that push technological boundaries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.6)" }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neon"
              >
                🚀 Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 128, 0.6)" }}
                className="px-8 py-4 rounded-full bg-black/40 backdrop-blur-lg border-2 border-pink-400/50 text-pink-300 font-bold hover:border-pink-400 transition-all duration-300"
              >
                💼 View All Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}