
import React, { useState, useEffect } from 'react';

const MVCVisualizer: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState<'VtoC' | 'CtoM' | 'MtoV' | null>(null);

  const triggerFlow = () => {
    if (activeSignal) return;
    
    // View -> Controller
    setActiveSignal('VtoC');
    setTimeout(() => {
      // Controller -> Model
      setActiveSignal('CtoM');
      setTimeout(() => {
        // Model -> View (Update)
        setActiveSignal('MtoV');
        setTimeout(() => setActiveSignal(null), 1000);
      }, 1000);
    }, 1000);
  };

  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* View */}
      <div className="absolute top-0 w-32 h-24 bg-blue-500 rounded-2xl border-4 border-blue-400 flex flex-col items-center justify-center text-white shadow-lg">
        <span className="text-2xl">🖥️</span>
        <span className="font-bold text-sm">VIEW</span>
      </div>

      {/* Controller */}
      <div className="absolute bottom-0 left-0 w-32 h-24 bg-indigo-600 rounded-2xl border-4 border-indigo-400 flex flex-col items-center justify-center text-white shadow-lg">
        <span className="text-2xl">⚙️</span>
        <span className="font-bold text-sm">CONTROLLER</span>
      </div>

      {/* Model */}
      <div className="absolute bottom-0 right-0 w-32 h-24 bg-emerald-500 rounded-2xl border-4 border-emerald-400 flex flex-col items-center justify-center text-white shadow-lg">
        <span className="text-2xl">📊</span>
        <span className="font-bold text-sm">MODEL</span>
      </div>

      {/* Connection Lines (Pipes) */}
      <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 400 300">
        {/* V to C */}
        <path d="M 150 100 Q 100 150 100 220" fill="none" stroke="#475569" strokeWidth="3" strokeDasharray="5,5" />
        {/* C to M */}
        <path d="M 180 250 L 250 250" fill="none" stroke="#475569" strokeWidth="3" strokeDasharray="5,5" />
        {/* M to V */}
        <path d="M 300 220 Q 300 150 250 100" fill="none" stroke="#475569" strokeWidth="3" strokeDasharray="5,5" />
        
        {/* Animated Particles */}
        {activeSignal === 'VtoC' && (
          <circle r="6" fill="#60a5fa">
            <animateMotion dur="1s" repeatCount="1" path="M 150 100 Q 100 150 100 220" />
          </circle>
        )}
        {activeSignal === 'CtoM' && (
          <circle r="6" fill="#818cf8">
            <animateMotion dur="1s" repeatCount="1" path="M 180 250 L 250 250" />
          </circle>
        )}
        {activeSignal === 'MtoV' && (
          <circle r="6" fill="#34d399">
            <animateMotion dur="1s" repeatCount="1" path="M 300 220 Q 300 150 250 100" />
          </circle>
        )}
      </svg>

      <button 
        onClick={triggerFlow}
        className="z-10 bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
      >
        Simula Interazione
      </button>
    </div>
  );
};

export default MVCVisualizer;
