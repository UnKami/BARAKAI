import React from 'react';
import { motion } from 'framer-motion';
import { SectionData } from '../types';
import GlowCard from './GlowCard';

interface FeatureSectionProps {
  data: SectionData;
  isReversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ data, isReversed = false }) => {
  return (
    <section className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[80vh]">
      
      {/* Background Number Watermark */}
      <div className="absolute top-0 md:top-10 left-4 md:left-0 text-[8rem] md:text-[14rem] font-bold font-display text-white opacity-[0.02] select-none pointer-events-none z-0 leading-none">
        0{data.stepNumber}
      </div>

      <div className={`relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 text-xs font-bold tracking-widest text-black bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-sm">
                PHASE 0{data.stepNumber}
              </span>
              <span className="text-purple-300 font-display tracking-widest text-sm uppercase">
                {data.subText}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight">
              {data.headline}
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

          <div className="grid gap-5">
            {data.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start p-4 rounded-lg bg-purple-900/10 border border-purple-500/10 hover:bg-purple-900/20 hover:border-purple-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mr-5 mt-1 p-3 rounded-lg bg-purple-500/10 text-fuchsia-300 shadow-[0_0_15px_rgba(192,38,211,0.1)]">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold font-display text-sm uppercase tracking-wide mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlowCard intensity="high" noPadding className="w-full aspect-[4/3] md:aspect-video transform hover:scale-[1.02] transition-transform duration-500">
            <div className="relative w-full h-full overflow-hidden rounded-md group">
               {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-transparent to-transparent opacity-60 z-10" />
              
              <img 
                src={data.visualSrc} 
                alt={data.visualAlt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
              />
              
              {/* UI Overlay Simulation */}
              <div className="absolute bottom-6 left-6 z-20 flex items-end space-x-2">
                 <div className="h-1.5 w-16 bg-fuchsia-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
                 <div className="h-1.5 w-6 bg-purple-700 rounded-full" />
                 <div className="h-1.5 w-6 bg-purple-900 rounded-full" />
              </div>
              
              {/* Corner Tech Decor */}
              <div className="absolute top-4 right-4 z-20">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-fuchsia-500/50 rounded-sm"></div>
                  <div className="w-2 h-2 bg-fuchsia-500/30 rounded-sm"></div>
                  <div className="w-2 h-2 bg-fuchsia-500/10 rounded-sm"></div>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureSection;