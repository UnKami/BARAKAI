import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import FeatureSection from './FeatureSection';
import Footer from './Footer';
import { SECTIONS } from '../constants';

interface LandingPageProps {
  onReadWhitepaper: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onReadWhitepaper }) => {
  return (
    <>
      <Navbar />

      <main className="relative z-10">
        
        <Hero onReadWhitepaper={onReadWhitepaper} />

        {/* Feature Sections */}
        <div className="space-y-12 pb-32">
          {SECTIONS.map((section, index) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              {/* Connector Line visual between sections */}
              {index > 0 && (
                <div className="w-px h-24 mx-auto bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
              )}
              <FeatureSection 
                data={section} 
                isReversed={index % 2 !== 0} 
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="relative py-10 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/20 to-transparent pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-7xl mx-auto bg-[#110a1f] border border-purple-500/30 p-12 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)]"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Start Your Legend
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
              The Tower is infinite, your story is unique. Join the Ecosystem where your gameplay creates permanent value.
            </p>

            {/* <div className="inline-flex flex-col  lg:w-[84%] items-center justify-center px-12 py-6 border border-dashed border-purple-500/30 bg-purple-900/10 rounded-lg backdrop-blur-sm"> */}
            <div className="inline-flex flex-col items-center justify-center px-12 py-6 border border-dashed border-purple-500/30 bg-purple-900/10 rounded-lg backdrop-blur-sm">
              <span className="text-fuchsia-400 font-display font-bold tracking-[0.2em] text-lg uppercase animate-pulse">
                Game Trailer Coming Soon
              </span>
              {/* <iframe 
                src="https://www.youtube.com/embed/K_ADkZf788U" 
                title="Game Trailer"
                className="w-full lg:h-[500px] mt-4 rounded-lg"
                allowFullScreen
              /> */}
              <span className="text-purple-500/60 text-xs font-mono tracking-widest mt-2 uppercase">
                [ Transmission Pending ]
              </span>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer onReadWhitepaper={onReadWhitepaper} />
    </>
  );
};

export default LandingPage;