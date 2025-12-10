import React, { useState } from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import LockScreen from './components/LockScreen';
import LandingPage from './components/LandingPage';
import Whitepaper from './components/Whitepaper';

type View = 'landing' | 'whitepaper';

const App: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [currentView, setCurrentView] = useState<View>('landing');

  if (isLocked) {
    return (
      <div className="relative min-h-screen bg-[#05020a] text-white overflow-hidden font-sans">
        <BackgroundParticles />
        <LockScreen onUnlock={() => setIsLocked(false)} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#05020a] text-white overflow-x-hidden selection:bg-fuchsia-500/30">
      
      {/* Global Background Effects */}
      <BackgroundParticles />
      
      {currentView === 'landing' ? (
        <LandingPage onReadWhitepaper={() => setCurrentView('whitepaper')} />
      ) : (
        <Whitepaper onBack={() => setCurrentView('landing')} />
      )}

    </div>
  );
};

export default App;
