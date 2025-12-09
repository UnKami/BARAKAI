import React, { useState, useEffect } from 'react';
import WalletModal from './WalletModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05020a]/90 backdrop-blur-md border-b border-purple-900/30 py-4 shadow-lg shadow-purple-900/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={scrollToTop}
          >
            <img 
              src="https://i.ibb.co/SDpP4BT0/image-2025-11-30-T222110-327-removebg-preview.png" 
              alt="Barakai Logo" 
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
            />
            <span className="text-2xl font-bold font-display text-white tracking-widest group-hover:text-fuchsia-300 transition-colors">BARAKAI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Foundation', 'Climb', 'Chronicle', 'Marketplace'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="relative text-xs font-bold text-gray-400 hover:text-white uppercase tracking-[0.2em] transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button 
            className="hidden md:block px-6 py-2 border border-purple-500/40 text-purple-300 text-xs font-bold uppercase tracking-widest hover:bg-fuchsia-600 hover:border-transparent hover:text-white transition-all rounded-sm clip-path-polygon"
            onClick={() => setIsWalletModalOpen(true)}
          >
            Connect Wallet
          </button>

        </div>
      </nav>
      
      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;