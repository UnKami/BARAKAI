import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wallet } from 'lucide-react';
import GlowCard from './GlowCard';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-md"
          >
            <GlowCard intensity="high" className="border-purple-500/50">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center py-6 px-2">
                <div className="mx-auto w-16 h-16 bg-purple-900/20 rounded-full flex items-center justify-center mb-6 text-fuchsia-400 border border-purple-500/30 shadow-[0_0_15px_rgba(192,38,211,0.2)]">
                  <Wallet className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  System Notice
                </h3>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Wallet connection will be added in the future.
                  <br />
                  <span className="text-xs text-purple-400/80 font-mono mt-2 block uppercase tracking-widest">
                    [ Feature Locked // Phase 2 ]
                  </span>
                </p>
                
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold font-display uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(192,38,211,0.3)] hover:shadow-[0_0_30px_rgba(192,38,211,0.5)] clip-path-polygon"
                >
                  Close Panel
                </button>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WalletModal;