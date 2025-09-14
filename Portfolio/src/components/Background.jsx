import { useRef, useEffect, useCallback } from "react";

export default function Background() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  const animate = useCallback((canvas, ctx, particles, time) => {
    // Clear canvas efficiently
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles with optimizations
    ctx.save();
    particles.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });
    ctx.restore();

    // Connect particles with reduced calculations
    if (time % 3 === 0) { // Only every 3rd frame
      connectParticles(ctx, particles);
    }
  }, []);

  const connectParticles = useCallback((ctx, particles) => {
    ctx.save();
    for (let i = 0; i < particles.length; i += 2) { // Skip every other particle for performance
      for (let j = i + 2; j < particles.length; j += 2) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) { // Reduced connection distance
          const alpha = Math.pow(1 - distance / 80, 2) * 0.06;
          
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`;
          ctx.lineWidth = 0.3;
          ctx.stroke();
        }
      }
    }
    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { 
      alpha: false,
      willReadFrequently: false 
    });

    let particles = [];
    const numParticles = 40; // Reduced particle count
    let time = 0;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    }

    // Optimized Particle class
    class Particle {
      constructor() {
        this.reset();
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.baseOpacity = Math.random() * 0.3 + 0.1;
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.radius = Math.random() * 1.5 + 0.8; // Increased particles: 0.8-2.3px
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Efficient boundary checking
        if (this.x < 0 || this.x > window.innerWidth) {
          this.x = this.x < 0 ? window.innerWidth : 0;
        }
        if (this.y < 0 || this.y > window.innerHeight) {
          this.y = this.y < 0 ? window.innerHeight : 0;
        }

        this.life = (this.life + 0.3) % this.maxLife;
      }

      draw(ctx) {
        const pulseOpacity = this.baseOpacity * (0.5 + Math.sin(this.life * 0.04) * 0.3);
        
        // Single draw call for efficiency
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        );
        gradient.addColorStop(0, `rgba(0, 255, 136, ${pulseOpacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${Math.min(pulseOpacity + 0.2, 0.6)})`;
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animationLoop() {
      time++;
      animate(canvas, ctx, particles, time);
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    }

    // Throttled resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        particles.forEach(particle => particle.reset());
      }, 100);
    };

    // Initialize
    resizeCanvas();
    init();
    animationLoop();
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, [animate, connectParticles]);

  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: '#000000' }}
      />
      {/* Simplified overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </div>
  );
}