import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './AnimatedBackground.css';

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  return (
    <div className="animated-background">
      {/* Gradient Orbs */}
      <motion.div
        className="gradient-orb orb-1"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transform: isMobile ? 'none' : `translate(${mousePosition.x * 40}px, ${mousePosition.y * 30}px)`,
        }}
      />

      <motion.div
        className="gradient-orb orb-2"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transform: isMobile ? 'none' : `translate(${mousePosition.x * -30}px, ${mousePosition.y * -40}px)`,
        }}
      />

      <motion.div
        className="gradient-orb orb-3"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transform: isMobile ? 'none' : `translate(${mousePosition.x * 50}px, ${mousePosition.y * 35}px)`,
        }}
      />

      {/* Floating Particles */}
      <div className="particles">
        {Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
