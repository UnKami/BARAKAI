import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, Rocket, Home, Sword, BookOpen, Coins } from 'lucide-react';

interface ExecutiveSummaryProps {
  onBack: () => void;
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ onBack }) => {
  const [openSection, setOpenSection] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "00",
      category: "LANDSCAPE",
      title: "The Market Landscape",
      content: (
        <div className="space-y-6">
          <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
            BARAKAI targets the intersection of the two most dominant pillars of the modern entertainment economy.
          </p>
          
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="mt-1.5"><div className="w-2 h-2 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" /></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="text-white font-bold">The Global Gaming Market:</span> A financial titan generating $187.7 Billion in annual revenue—surpassing the global film and music industries combined—with a massive, captive audience of 3.4 Billion active players worldwide.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1.5"><div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" /></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="text-white font-bold">The Anime, Manga, & Webtoon Ecosystem:</span> A cultural powerhouse now valued at over $55 Billion, experiencing explosive growth driven by the "vertical scroll" revolution of Webtoons (growing at 30%+ CAGR).
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1.5"><div className="w-2 h-2 bg-fuchsia-400 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" /></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="text-white font-bold">The Cultural Symbiosis:</span> These sectors are inseparable, with 90% of anime fans identifying as gamers. Modern anime is deeply rooted in RPG tropes like "leveling up," creating a massive opportunity to capture this unified audience with a single, integrated product.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h4 className="text-fuchsia-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Gaming Industry</h4>
              <p className="text-3xl font-display font-black text-white tracking-tighter">$187.7B</p>
              <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-widest leading-tight">Annual Revenue. Larger than film & music combined.</p>
            </div>
            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h4 className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Anime/Webtoon</h4>
              <p className="text-3xl font-display font-black text-white tracking-tighter">$55B+</p>
              <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-widest leading-tight">30% CAGR growth in digital vertical-scroll sectors.</p>
            </div>
          </div>

          <div className="relative h-40 bg-purple-900/10 rounded-xl flex items-center justify-center overflow-hidden border border-purple-500/20 mt-4">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute w-40 h-40 bg-fuchsia-500/10 blur-[50px] rounded-full"
            />
            <div className="flex items-center gap-10 relative z-10">
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full border-2 border-fuchsia-500 flex items-center justify-center text-fuchsia-400 font-display font-bold text-lg bg-fuchsia-500/5">G</div>
                 <span className="text-[10px] mt-2 uppercase font-bold tracking-widest text-gray-400">Gaming</span>
              </div>
              <motion.div 
                animate={{ width: [30, 80, 30], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-1 bg-gradient-to-r from-fuchsia-500 via-white to-purple-500 shadow-[0_0_15px_rgba(217,70,239,0.5)]"
              />
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-400 font-display font-bold text-lg bg-purple-500/5">A</div>
                 <span className="text-[10px] mt-2 uppercase font-bold tracking-widest text-gray-400">Anime</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "01",
      category: "OPPORTUNITY",
      title: "The Missing Bridge",
      content: (
        <div className="space-y-6">
          <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
            The Market Opportunity:
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Despite this cultural symbiosis, the current market remains deeply fragmented. Current markets treat these sectors as parallel lines—forcing fans to divide gaming and reading with zero meaningful interoperability.
          </p>
          
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="mt-1.5"><div className="w-2 h-2 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" /></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="text-white font-bold">The Gap:</span> Fans consume these media separately, despite desiring a unified experience where their actions in one world impact the other
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1.5"><div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" /></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="text-white font-bold">The Solution:</span> BARAKAI is the first ecosystem to bridge these two multi-billion dollar markets. It delivers a product where high-stakes RPG gameplay and narrative consumption are not separate activities, but a single, reinforcing loop.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex justify-between text-[10px] uppercase text-gray-500 px-2 font-mono font-bold tracking-widest">
              <span>Standard Market</span>
              <span>Barakai Bridge</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 className="h-full bg-gradient-to-r from-fuchsia-600 via-fuchsia-400 to-purple-600"
                 transition={{ duration: 2, ease: "easeOut" }}
               />
            </div>
            <div className="grid grid-cols-3 text-center pt-2">
               <div className="text-[10px] text-fuchsia-400 font-black uppercase tracking-widest">Play</div>
               <div className="text-[10px] text-white font-black uppercase tracking-[0.3em] underline underline-offset-4 decoration-fuchsia-500">Bridge</div>
               <div className="text-[10px] text-purple-400 font-black uppercase tracking-widest">Read</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "02",
      category: "VISION",
      title: "The Product Vision",
      content: (
        <div className="space-y-6">
          <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
            The Product Vision:
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            BARAKAI is not just a game; it is an Infinite IP Factory powered by a proprietary Procedural Narrative Engine.
          </p>
          
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="mt-1.5"><div className="w-2 h-2 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" /></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="text-white font-bold">The Innovation:</span> Upon entry, the engine assigns every user a bespoke, AI-generated world complete with its own distinct history, tone, and Main Character.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1.5"><div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" /></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="text-white font-bold">The Output:</span> This creates a unique "Narrative Seed" for every player. The AI architects a deep, complex origin story specific to that user's world. Through gameplay progression, the player reveals this hidden, high-value intellectual property. This turns every user into the owner of a unique, readable IP that was custom-built for them by the AI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
             {[1, 2, 3, 4].map(i => (
               <div key={i} className="aspect-square bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors relative overflow-hidden group">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 rounded border-t-2 border-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.3)] relative z-10 flex items-center justify-center"
                  >
                    {/* Synchronized Nebula Particles inside the rotating box */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       {/* Core Glow */}
                       <motion.div 
                         animate={{ 
                           scale: [1, 1.1, 1],
                           opacity: [0.4, 0.7, 0.4]
                         }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="w-3 h-3 bg-fuchsia-500/40 blur-[4px] rounded-full"
                       />
                       
                       {/* Orbing Particles - More quantity, synced with rotation but with own offsets */}
                       {[...Array(6)].map((_, pIdx) => (
                         <motion.div
                           key={pIdx}
                           animate={{ 
                             x: [Math.sin(pIdx) * 6, Math.sin(pIdx + Math.PI) * 6, Math.sin(pIdx) * 6],
                             y: [Math.cos(pIdx) * 6, Math.cos(pIdx + Math.PI) * 6, Math.cos(pIdx) * 6],
                             opacity: [0.2, 0.6, 0.2]
                           }}
                           transition={{ 
                             duration: 2 + pIdx * 0.5, 
                             repeat: Infinity, 
                             ease: "easeInOut" 
                           }}
                           className={`absolute w-1 h-1 rounded-full blur-[0.5px] ${pIdx % 2 === 0 ? 'bg-white' : 'bg-purple-400'}`}
                         />
                       ))}
                    </div>
                  </motion.div>
                  <span className="text-[9px] uppercase text-gray-500 font-mono font-bold tracking-widest relative z-10">SEED_0x{Math.random().toString(16).slice(2, 6).toUpperCase()}</span>
               </div>
             ))}
          </div>
        </div>
      )
    },
    {
      id: "03",
      category: "ECOSYSTEM",
      title: "The Flywheel",
      content: (
        <div className="space-y-10">
          <div className="space-y-4">
            <h4 className="text-white text-lg md:text-2xl font-display font-black tracking-tight uppercase border-l-4 border-fuchsia-500 pl-5">The Gameplay Ecosystem</h4>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              The product drives engagement through a synchronized 4-step cycle that allows players to manage a complex PC simulation while consuming their rewards on mobile.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step I */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 hover:border-fuchsia-500/30 transition-all">
              <h5 className="text-fuchsia-400 font-display font-black text-base tracking-widest uppercase">I. PREPARE (Base Management & AI Autonomy)</h5>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Platform:</span> PC Client (Core Simulation) & Mobile App (Companion/Reader).</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Role:</span> The Master (Player) oversees a Floating Island Base populated by autonomous AI Agents.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Action:</span> Main and Secondary characters operate as fully independent AI Agents. They autonomously utilize training facilities and enter expedition gates to gather resources, driving the growth of the base through their own initiative.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Mobile Synergy:</span> While the heavy strategic gameplay occurs on PC, the mobile app is primarily designed for consuming the Manga. It also serves as a command center for light management, allowing players to check in on their agents' progress from anywhere.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Goal:</span> The agents grow and evolve through their own experiences, driven by a single shared objective: to raise their home—your Base—to glory.</span>
                </li>
              </ul>
            </div>

            {/* Step II */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 hover:border-purple-500/30 transition-all">
              <h5 className="text-purple-400 font-display font-black text-base tracking-widest uppercase">II. CONQUER (PC Client - The Action)</h5>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Role:</span> The Grand Strategist.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Action:</span> Players take their trained MC into the Infinite Tower, a climbable challenge unique to their world's narrative.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Mechanic:</span> The gameplay features an RTS-style combat system where agents face off against enemies autonomously. The player guides them from above, utilizing specialized Master Tools to influence the battle and ensure victory.</span>
                </li>
              </ul>
            </div>

            {/* Step III */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 hover:border-fuchsia-500/30 transition-all">
              <h5 className="text-fuchsia-400 font-display font-black text-base tracking-widest uppercase">III. REVEAL (The Infinite IP Engine)</h5>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Innovation:</span> Seed-Based Narrative Consistency.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Process:</span> The AI acts as an autonomous author, constructing a cohesive narrative arc derived strictly from the user's unique "World Seed." It ensures that every plot twist and character revelation remains consistent with the established history and lore of that specific universe, creating a professional-grade story structure rather than random events.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Result:</span> Clearing a floor generates a new Manga Chapter, gradually unraveling the Main Character's past and true strength. This creates a strong loop that ties gameplay progression directly to story progression.</span>
                </li>
              </ul>
            </div>

            {/* Step IV */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 hover:border-purple-500/30 transition-all">
              <h5 className="text-purple-400 font-display font-black text-base tracking-widest uppercase">IV. MONETIZE (The Economy - The Value)</h5>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">The Liquidity:</span> The ecosystem turns the Master-Agent bond into tangible value enabled by blockchain technology.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">Trade:</span> Buy and sell specialized gear and Agents on the open market.</span>
                </li>
                <li className="flex gap-3 text-gray-300 leading-relaxed text-xs md:text-sm">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">Publish:</span> List the unique Manga in the public library. Earn royalties when other players pay to read your hero's story.</span>
                </li>
                <li className="flex gap-3 text-gray-300 text-xs md:text-sm leading-relaxed">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">Rent:</span> Lease upgraded Base facilities or high-level Agents to other players, generating passive income from their progression.</span>
                </li>
                <li className="flex gap-3 text-gray-300 text-xs md:text-sm leading-relaxed">
                  <div className="mt-1.5 shrink-0"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /></div>
                  <span><span className="text-white font-bold">Exit:</span> Bundle the Character, the Base, and the Manga into a single "Liquid IP Asset" for a high-value exit.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative py-16 flex items-center justify-center overflow-hidden bg-[#0c0617] rounded-3xl border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.05)_0%,_transparent_70%)]" />
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 border-2 border-dashed border-white/5 rounded-full relative flex items-center justify-center"
            >
              {[
                { label: 'PREPARE', icon: <Home className="w-5 h-5" />, angle: 0, color: 'fuchsia' },
                { label: 'CONQUER', icon: <Sword className="w-5 h-5" />, angle: 90, color: 'purple' },
                { label: 'REVEAL', icon: <BookOpen className="w-5 h-5" />, angle: 180, color: 'fuchsia' },
                { label: 'MONETIZE', icon: <Coins className="w-5 h-5" />, angle: 270, color: 'purple' }
              ].map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * 128;
                const y = Math.sin(rad) * 128;
                
                return (
                  <motion.div 
                    key={node.label}
                    style={{ x, y }}
                    className="absolute"
                  >
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className={`w-24 h-24 rounded-2xl bg-[#05020a] border-2 border-${node.color}-500/30 flex flex-col items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform`}
                    >
                      <div className={`text-${node.color}-400`}>{node.icon}</div>
                      <span className="text-[9px] font-black tracking-widest text-white uppercase">{node.label}</span>
                    </motion.div>
                  </motion.div>
                );
              })}

              <div className="absolute inset-4 border border-fuchsia-500/5 rounded-full" />
              <div className="absolute inset-10 border border-purple-500/5 rounded-full" />
            </motion.div>

            <div className="absolute flex flex-col items-center gap-1.5">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-fuchsia-600/20 to-purple-600/20 flex items-center justify-center border border-white/10 backdrop-blur-xl"
              >
                <Rocket className="w-8 h-8 text-white/30" />
              </motion.div>
              <span className="text-[8px] font-mono text-fuchsia-500/40 font-black tracking-[0.4em] uppercase">SYSTEM_CORE</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#05020a] text-white font-sans selection:bg-fuchsia-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#05020a]/90 backdrop-blur-xl border-b border-white/5 py-4 px-10 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="p-2.5 hover:bg-white/10 rounded-xl transition-all group flex items-center gap-3"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden md:inline font-display text-[10px] font-bold tracking-widest">BACK</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
          <span className="text-fuchsia-500 font-display font-black text-xs tracking-[0.3em] uppercase">BARAKAI DOSSIER</span>
        </div>
        <div className="w-9" />
      </nav>

      <div className="pt-32 pb-40 px-6 max-w-4xl mx-auto relative z-10">
        
        <header className="mb-16 border-l-[5px] border-fuchsia-600 pl-8">
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-3 uppercase leading-none">
            EXECUTIVE<br />SUMMARY
          </h1>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
            CONFIDENTIAL BRIEFING <span className="w-1.5 h-1.5 bg-fuchsia-600 rounded-full" /> V 2.5
          </p>
        </header>

        {/* Using motion.div with layout group to handle height transitions without page jumping */}
        <motion.div layout className="space-y-6">
          {sections.map((section, index) => {
            const isOpen = openSection === index;
            
            return (
              <motion.div 
                layout
                key={section.id}
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-[#0c0617] border-fuchsia-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-[#08040d] border-white/5 hover:border-white/10'}`}
              >
                <button 
                  onClick={() => setOpenSection(isOpen ? null : index)}
                  className="w-full text-left p-8 md:p-10 flex justify-between items-center gap-5 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3 mb-1">
                       <span className="text-fuchsia-500 font-mono text-[9px] font-black tracking-[0.3em] uppercase">SECTION {section.id} // {section.category}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-wide uppercase group-hover:text-fuchsia-100 transition-colors">{section.title}</h3>
                  </div>
                  <div className={`transition-all duration-300 p-2.5 rounded-full border ${isOpen ? 'rotate-180 bg-fuchsia-600 border-fuchsia-500 text-white shadow-[0_0_15px_rgba(217,70,239,0.5)]' : 'text-gray-700 border-white/10 group-hover:text-white'}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 md:px-10 pb-12 space-y-8 border-t border-white/5 pt-8">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-24 text-center space-y-10">
           <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-fuchsia-600" />
              <p className="text-white font-display text-lg md:text-2xl tracking-tight uppercase leading-tight font-black">
                BARAKAI is an <span className="text-fuchsia-400">Infinite IP Factory</span> where the AI builds the world, your gameplay reveals the story, and owning the asset powers the economy.
              </p>
           </div>
           
           <button 
             onClick={onBack}
             className="group relative px-12 py-6 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-display font-black text-base uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(192,38,211,0.3)] transition-all active:scale-[0.97] clip-path-polygon flex items-center mx-auto"
           >
             <span className="flex items-center justify-center gap-5">
               INITIALIZE FULL PITCH <ArrowLeft className="w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />
             </span>
           </button>
           
           <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em] pt-6">
             BARAKAI CORP © 2024 • STRICTLY CONFIDENTIAL • CLEARANCE LEVEL 5
           </p>
        </div>

      </div>

      <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none opacity-5">
        <span className="font-display text-[10rem] font-black text-white select-none tracking-tighter">BARAKAI</span>
      </div>
    </div>
  );
};

export default ExecutiveSummary;