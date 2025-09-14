import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "sharmaparag2004@gmail.com",
      description: "For detailed discussions and project inquiries",
      color: "from-green-400 to-cyan-500",
      action: "mailto:sharmaparag2004@gmail.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "in/p09s",
      description: "Professional networking and career opportunities",
      color: "from-blue-400 to-indigo-500",
      action: "https://www.linkedin.com/in/p09s/"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/P09s",
      description: "Explore my code and contribute to projects",
      color: "from-purple-400 to-pink-500",
      action: "https://github.com/P09s"
    },
    {
      icon: "🌐",
      title: "Portfolio",
      value: "g.dev/parag_09",
      description: "Comprehensive showcase of my work",
      color: "from-orange-400 to-red-500",
      action: "https://g.dev/parag_09"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen px-8 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 particle-field pointer-events-none"></div>

      {/* Animated Background Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-green-500/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black gradient-text mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to build the future together? Let's connect and create something extraordinary.
          </p>
          <div className="w-40 h-1 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold neon-text-primary mb-6 flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                Let's Collaborate
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always excited to work on innovative projects, discuss new opportunities, 
                or simply connect with fellow developers and creators. Choose your preferred 
                method of communication below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="block glass p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {method.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white group-hover:neon-text-primary transition-all">
                        {method.title}
                      </h4>
                      <p className="text-green-300 font-mono text-sm mb-1">
                        {method.value}
                      </p>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {method.description}
                      </p>
                    </div>
                    
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-2xl text-gray-400 group-hover:text-green-400 transition-colors"
                    >
                      →
                    </motion.div>
                  </div>

                  {/* Hover glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10`}></div>
                </motion.a>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl font-bold neon-text-primary">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="glass p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl font-bold neon-text-secondary">100%</div>
                <div className="text-sm text-gray-400">Project Success</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="scan-lines absolute inset-0 opacity-20 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold neon-text-primary mb-6 flex items-center gap-3">
                <span className="text-3xl">💬</span>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "rgba(0, 255, 136, 0.5)" }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-black/50 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 outline-none focus:border-green-400/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "rgba(0, 255, 136, 0.5)" }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-black/50 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 outline-none focus:border-green-400/50 transition-all duration-300"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "rgba(0, 255, 136, 0.5)" }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-black/50 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 outline-none focus:border-green-400/50 transition-all duration-300"
                    placeholder="Project collaboration, job opportunity, etc."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, borderColor: "rgba(0, 255, 136, 0.5)" }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-4 bg-black/50 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 outline-none focus:border-green-400/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-400/20 to-purple-400/20 border-2 border-green-400/50 text-green-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/30'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending Message...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      🚀 Launch Message
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  )}

                  {/* Button scan effect */}
                  {!isSubmitting && (
                    <motion.div
                      animate={{ x: [-100, 400] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-500/20 border border-green-500/50 rounded-xl"
                  >
                    <div className="text-2xl mb-2">🎉</div>
                    <div className="text-green-300 font-semibold">Message sent successfully!</div>
                    <div className="text-sm text-gray-300">I'll get back to you within 24 hours.</div>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Floating Action Indicators */}
            <div className="absolute -top-4 -right-4 space-y-2">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-sm"
              >
                💡
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="glass p-8 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 max-w-2xl mx-auto relative overflow-hidden group">
            <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"></div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-6xl mb-4"
            >
              🌟
            </motion.div>
            
            <h3 className="text-2xl font-bold gradient-text mb-4 relative z-10">
              Let's Build the Future Together
            </h3>
            <p className="text-gray-300 relative z-10">
              Whether it's a groundbreaking AI project, an immersive VR experience, 
              or the next big thing in tech - I'm ready to make it happen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}