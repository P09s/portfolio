import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";
import DockFooter from "./components/DockFooter";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Handle splash screen completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Track current section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Splash Screen */}
      <AnimatePresence>
        {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Background */}
      <Background />

      {/* Floating Navigation Indicator */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
          >
            <div className="glass-subtle p-3 rounded-full border border-white/10">
              <div className="space-y-3">
                {[
                  { id: 'hero', icon: '🏠', label: 'Home' },
                  { id: 'about', icon: '👨‍💻', label: 'About' },
                  { id: 'experience', icon: '🚀', label: 'Experience' },
                  { id: 'projects', icon: '💼', label: 'Projects' },
                  { id: 'contact', icon: '📧', label: 'Contact' }
                ].map((nav) => (
                  <motion.button
                    key={nav.id}
                    onClick={() => {
                      document.getElementById(nav.id)?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    whileHover={{ scale: 1.2, x: -5 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative group ${
                      currentSection === nav.id
                        ? 'bg-green-400/20 border-2 border-green-400/40 text-green-300'
                        : 'hover:bg-white/10 border border-white/20'
                    }`}
                  >
                    <span className="text-lg">{nav.icon}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute right-full mr-3 px-3 py-1 bg-black/80 border border-white/20 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {nav.label}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-300 to-green-500 z-50 origin-left"
        style={{
          scaleX: isLoading ? 0 : undefined
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Hero />
            </motion.div>

            {/* Content Sections with Staggered Animation */}
            <motion.div className="space-y-32">
              {[
                { component: About, delay: 0.3 },
                { component: Experience, delay: 0.4 },
                { component: Projects, delay: 0.5 },
                { component: Contact, delay: 0.6 }
              ].map(({ component: Component, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay }}
                >
                  <Component />
                </motion.div>
              ))}
            </motion.div>

            {/* Dock Footer */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <DockFooter />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Cursor Follower Effect */}
      <motion.div
        className="fixed w-6 h-6 bg-green-400/20 rounded-full pointer-events-none z-40 mix-blend-screen hidden lg:block"
        animate={{
          x: typeof window !== 'undefined' ? window.mouseX - 12 : 0,
          y: typeof window !== 'undefined' ? window.mouseY - 12 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Performance Monitor (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 glass-subtle p-2 rounded-lg text-xs text-gray-400 z-50">
          <div>Section: {currentSection}</div>
          <div>Loading: {isLoading ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
}

// Add mouse tracking for cursor follower
if (typeof window !== 'undefined') {
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    window.mouseX = mouseX;
    window.mouseY = mouseY;
  });
}