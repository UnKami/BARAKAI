import React from 'react';

// Custom X (formerly Twitter) Logo SVG
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface FooterProps {
  onReadWhitepaper?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onReadWhitepaper }) => {
  return (
    <footer className="relative z-10 border-t border-purple-900/30 bg-[#020105] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-3xl font-display font-bold text-white tracking-widest">BARAKAI</h3>
          <p className="text-gray-500 text-sm font-medium">© 2025 Barakai Project. The Infinite IP Factory.</p>
        </div>

        <div className="flex gap-8">
          <a 
            href="https://x.com/barakai_ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group text-gray-500 hover:text-white transition-colors"
            aria-label="Follow us on X"
          >
            <XLogo className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>
      
      <div className="mt-12 pt-8 border-t border-purple-900/10 text-center">
        <div className="flex justify-center space-x-6 text-xs text-gray-600 uppercase tracking-widest">
            {/* <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a> */}
            <button 
              onClick={onReadWhitepaper}
              className="hover:text-purple-400 transition-colors uppercase"
            >
              Whitepaper
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;