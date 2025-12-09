import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';
import GlowCard from './GlowCard';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'barakaiai') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#05020a] flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <GlowCard intensity="high" className="border-purple-500/30">
          <div className="text-center space-y-8 py-8 px-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center border border-purple-500/50 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Lock className="w-8 h-8 text-fuchsia-400" />
              </div>
              <h1 className="text-3xl font-display font-bold text-white tracking-widest mb-2">
                SYSTEM LOCKED
              </h1>
              <p className="text-gray-400 text-sm tracking-wider uppercase">
                Restricted Access Area
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="ENTER ACCESS CODE"
                  className={`w-full bg-[#0a0510] border ${error ? 'border-red-500 animate-pulse' : 'border-purple-500/30 focus:border-fuchsia-500'} rounded-md py-4 px-6 text-center text-white font-mono tracking-[0.3em] outline-none transition-all placeholder:text-gray-700`}
                  autoFocus
                />
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-red-400 text-xs font-bold tracking-widest uppercase"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>Access Denied</span>
                </motion.div>
              )}

              <button
                type="submit"
                className="group w-full py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold font-display uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(192,38,211,0.3)] hover:shadow-[0_0_30px_rgba(192,38,211,0.5)] clip-path-polygon flex items-center justify-center gap-2"
              >
                <span>Initialize</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </GlowCard>
      </motion.div>
    </div>
  );
};

export default LockScreen;
