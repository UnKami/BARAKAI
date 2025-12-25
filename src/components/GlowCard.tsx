import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  noPadding?: boolean;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = '', intensity = 'medium', noPadding = false }) => {
  const glowMap = {
    low: 'shadow-[0_0_15px_-3px_rgba(139,92,246,0.2)]',
    medium: 'shadow-[0_0_25px_-5px_rgba(168,85,247,0.3)]',
    high: 'shadow-[0_0_40px_-10px_rgba(217,70,239,0.4)]',
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Futuristic Border Corners */}
      {/* <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fuchsia-500 rounded-tl-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500 rounded-tr-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-violet-500 rounded-bl-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fuchsia-500 rounded-br-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-20"></div> */}

      {/* Main Content Container */}
      <div className={`
        relative z-10 
        bg-[#110a1f]/80 backdrop-blur-md 
        border border-purple-500/20 
        
        ${noPadding ? 'p-0 overflow-hidden' : 'p-6'}
        transition-all duration-300
        ${glowMap[intensity]}
      `}>
        {children}
      </div>
    </div>
  );
};

export default GlowCard;