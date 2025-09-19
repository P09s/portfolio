import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  Brain, 
  Eye, 
  Waves, 
  ExternalLink, 
  Github, 
  Play, 
  Code, 
  Award, 
  Zap,
  X,
  Rocket,
  Briefcase
} from "lucide-react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null); // Changed from 0 to null
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: "linkfluence",
      title: "LinkFluence",
      subtitle: "Creator-Brand Collaboration Platform",
      category: "Web App",
      description: "A MERN stack platform bridging the gap between small content creators and brands, providing seamless collaboration opportunities with unique features beyond traditional marketplaces.",
      longDescription: "LinkFluence is an innovative platform built with the MERN stack that connects small content creators with emerging brands. Unlike traditional freelance platforms, LinkFluence focuses specifically on content creation partnerships, offering specialized tools for campaign management, content approval workflows, and performance analytics. The platform features smart matching algorithms, integrated payment systems, and comprehensive portfolio showcases.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Stripe API", "Cloudinary", "Socket.io"],
      features: [
        "Smart creator-brand matching algorithm",
        "Integrated campaign management system",
        "Real-time collaboration tools",
        "Portfolio showcase with media management",
        "Secure payment gateway integration",
        "Performance analytics dashboard"
      ],
      metrics: {
        status: "Development",
        duration: "5+ months",
        features: "25+",
        tech: "MERN"
      },
      status: "Development",
      image: "/api/placeholder/600/400",
      demo: "#",
      repo: "#",
      color: "from-blue-400 to-purple-500",
      icon: () => <img src="/proj1.png" alt="Logo" className="w-12 h-12" />,
      tags: ["MERN", "Full-Stack", "Platform", "Business", "React"]
    },
    {
      id: "silentvoice",
      title: "Silent Voice",
      subtitle: "AI Sign Language Translator",
      category: "AI/ML",
      description: "An innovative app that empowers individuals with hearing loss by converting sign language into voice using AI and computer vision, making communication seamless.",
      longDescription: "Silent Voice is a groundbreaking application that leverages artificial intelligence and computer vision to bridge communication gaps for the auditorily impaired community. The project won 3rd place at Ideathon Taiwan 2025, demonstrating its innovative approach to accessibility technology. The system uses advanced machine learning models to recognize sign language gestures and convert them into speech in real-time.",
      tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "AI/ML", "Flutter"],
      features: [
        "Real-time sign language recognition",
        "AI-powered gesture-to-voice conversion",
        "Multi-platform compatibility",
        "Offline capability for basic gestures",
        "Customizable voice synthesis",
        "User-friendly interface design"
      ],
      metrics: {
        award: "3rd Place",
        competition: "Taiwan 2025",
        accuracy: "High",
        impact: "Social"
      },
      status: "Beta",
      image: "/api/placeholder/600/400",
      demo: "https://www.linkedin.com/posts/p09s_ai-hackathonwin-teamwork-activity-7287884921702883328-V_8s",
      repo: "#",
      color: "from-green-400 to-cyan-500",
      icon: () => <img src="/proj2.png" alt="Logo" className="w-12 h-12" />,
      tags: ["AI", "Computer Vision", "Accessibility", "Award Winner", "Social Impact"]
    },
    {
      id: "orbcura",
      title: "Orbcura",
      subtitle: "Accessibility Mobile App",
      category: "Mobile App",
      description: "A comprehensive mobile app designed to empower visually impaired individuals by simplifying everyday routines through smart technology and UPI payments.",
      longDescription: "Orbcura is a revolutionary mobile application that enhances accessibility for visually impaired individuals. The app received an FY2024 INNO-vation Generation Award Division Nomination, recognizing its innovative approach to assistive technology. It combines multiple accessibility features including UPI payments, real-time image detection, and voice navigation to create a comprehensive solution for daily tasks.",
      tech: ["Flutter", "Dart", "Firebase", "UPI API", "Computer Vision", "ML Kit"],
      features: [
        "UPI payment integration for easy transactions",
        "Real-time image detection and description",
        "Voice-guided navigation system",
        "Text-to-speech functionality",
        "Customizable accessibility settings",
        "Offline mode for core features"
      ],
      metrics: {
        nomination: "INNO-vation",
        year: "2024",
        platform: "Mobile",
        focus: "Accessibility"
      },
      status: "Developed",
      image: "/api/placeholder/600/400",
      demo: "#",
      repo: "https://github.com/Developer-Student-Clubs-MMDU/Orbcura.git",
      color: "from-purple-400 to-pink-500",
      icon: () => <img src="/proj3.png" alt="Logo" className="w-12 h-12" />,
      tags: ["Mobile", "Flutter", "Accessibility", "UPI", "Award Nominated"]
    },
    {
      id: "aquawatch",
      title: "Aqua Watch",
      subtitle: "Flood Management System",
      category: "Mobile App",
      description: "A pioneering mobile application revolutionizing flood management in India through real-time alerts, community reporting, and proactive flood mitigation measures.",
      longDescription: "Aqua Watch is a comprehensive flood management solution built with Flutter that addresses one of India's most pressing natural disaster challenges. The application leverages real-time data, community engagement, and predictive analytics to help communities prepare for and respond to flooding events. It features crowd-sourced reporting, emergency alerts, and resource coordination tools.",
      tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Weather API", "Push Notifications"],
      features: [
        "Real-time flood alerts and warnings",
        "Community-based flood reporting system",
        "Interactive flood risk mapping",
        "Emergency contact integration",
        "Resource coordination for relief efforts",
        "Historical flood data analysis"
      ],
      metrics: {
        focus: "India",
        type: "Disaster Management",
        community: "Crowd-sourced",
        impact: "National"
      },
      status: "Developed",
      image: "/api/placeholder/600/400",
      demo: "#",
      repo: "https://github.com/sushant102004/Aqua-Watch-App.git",
      color: "from-cyan-400 to-blue-500",
      icon: () => <img src="/proj4.png" alt="Logo" className="w-12 h-12" />,
      tags: ["Flutter", "Disaster Management", "Community", "Real-time", "Social Impact"]
    }
  ];

  const categories = ["All", "Web App", "AI/ML", "Mobile App"];
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
                      project.status === 'Developed' ? 'bg-green-500/20 text-green-300 border border-green-500/50' :
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
                    <motion.div
                      animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                      transition={{ duration: 1 }}
                      className="text-white/50"
                    >
                      <project.icon size={80} strokeWidth={1.5} />
                    </motion.div>
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
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.demo !== "#") window.open(project.demo, '_blank');
                        }}
                        className="p-3 bg-green-500/20 border border-green-500/50 rounded-full text-green-300 hover:bg-green-500/30 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        View
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.repo !== "#") window.open(project.repo, '_blank');
                        }}
                        className="p-3 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 hover:bg-purple-500/30 transition-colors flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon size={24} className="text-white" />
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
                    <X size={20} />
                  </button>

                  {/* Project detail content */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <project.icon size={48} className="text-white" />
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
                            <Zap size={16} className="text-green-400 mt-1 flex-shrink-0" />
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

                    {/* Action buttons */}
                    <div className="flex gap-4 justify-center mt-6">
                      {projects[activeProject]?.demo !== "#" && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() => window.open(projects[activeProject]?.demo, '_blank')}
                          className="btn-neon flex items-center gap-2"
                        >
                          <Rocket size={20} />
                          View Demo
                        </motion.button>
                      )}
                      {projects[activeProject]?.repo !== "#" && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() => window.open(projects[activeProject]?.repo, '_blank')}
                          className="px-6 py-3 rounded-full bg-black/40 backdrop-blur-lg border-2 border-purple-400/50 text-purple-300 font-bold hover:border-purple-400 transition-all duration-300 flex items-center gap-2"
                        >
                          <Code size={20} />
                          View Code
                        </motion.button>
                      )}
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
                className="btn-neon flex items-center gap-2 justify-center"
              >
                <Rocket size={20} />
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 128, 0.6)" }}
                className="px-8 py-4 rounded-full bg-black/40 backdrop-blur-lg border-2 border-pink-400/50 text-pink-300 font-bold hover:border-pink-400 transition-all duration-300 flex items-center gap-2 justify-center"
                onClick={() => window.open('https://github.com/p09s', '_blank')}
              >
                <Briefcase size={20} />
                View All Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}