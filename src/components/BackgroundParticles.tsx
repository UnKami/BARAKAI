import React from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles: React.FC = () => {
  // Generate random positions for stars
  const stars = Array.from({ length: 250 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#0a0510] to-[#000000]" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
      
      {/* Moving Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
            delay: star.delay
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;