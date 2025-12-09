import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

interface HeroProps {
  onReadWhitepaper: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReadWhitepaper }) => {
  const scrollToFoundation = () => {
    const element = document.getElementById('foundation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      
      {/* Central Visual Element - The Flywheel Concept */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[140vw] h-[140vw] md:w-[800px] md:h-[800px] border-[1px] border-purple-500/10 rounded-full flex items-center justify-center opacity-30"
        >
           <div className="w-[98%] h-[98%] border-t border-b border-fuchsia-500/20 rounded-full" />
        </motion.div>
        
        {/* Middle Ring */}
         <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[100vw] h-[100vw] md:w-[600px] md:h-[600px] border-[1px] border-dashed border-fuchsia-500/20 rounded-full opacity-40"
        />

        {/* Inner Ring Glow */}
        <div className="absolute w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
            BARAKAI
          </h1>
          <p className="text-xl md:text-2xl text-fuchsia-300 font-display tracking-[0.2em] mt-2 uppercase">
            The Infinite IP Factory
          </p>
        </motion.div>

        <motion.p 
          className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Build a base. Train your memory-wiped hero. Conquer the Tower. 
          Write your own Manga history and monetize your unique IP asset.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button 
            onClick={scrollToFoundation}
            className="group relative px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold font-display uppercase tracking-wider clip-path-polygon transition-all duration-300 shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Enter The Simulation
            </span>
          </button>
          
          <button 
            onClick={onReadWhitepaper}
            className="px-8 py-4 border border-purple-500/50 hover:border-fuchsia-400 text-purple-200 font-display uppercase tracking-wider hover:bg-purple-900/20 transition-all duration-300 backdrop-blur-sm"
          >
            Read Whitepaper
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-400 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToFoundation}
      >
        <ChevronDown className="w-8 h-8 opacity-70" />
      </motion.div>

    </section>
  );
};

export default Hero;
