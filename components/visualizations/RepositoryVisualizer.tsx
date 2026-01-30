
import React, { useState } from 'react';

const RepositoryVisualizer: React.FC = () => {
  const [activeSubsystem, setActiveSubsystem] = useState<number | null>(null);

  const subsystems = ['Editor', 'Compilatore', 'Debugger', 'Analyzer'];

  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* Central Repository */}
      <div className="w-32 h-32 bg-indigo-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl z-10 border-4 border-indigo-400">
        <div className="font-black text-xl">REPO</div>
        <div className="text-[10px] opacity-80 uppercase font-bold tracking-tighter">Database Centrale</div>
        
        {/* Pulsing light when data flows */}
        {activeSubsystem !== null && (
          <div className="absolute w-full h-full bg-indigo-400/30 rounded-2xl animate-ping"></div>
        )}
      </div>

      {/* Satellite Subsystems */}
      <div className="absolute w-full h-full">
        {subsystems.map((name, idx) => {
          const angle = (idx / subsystems.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 120;
          const y = Math.sin(angle) * 120;

          return (
            <div key={idx} className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => {
                  setActiveSubsystem(idx);
                  setTimeout(() => setActiveSubsystem(null), 1000);
                }}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`
                  w-20 h-20 rounded-full flex items-center justify-center text-[10px] font-black uppercase text-center p-2
                  transition-all duration-300 border-2
                  ${activeSubsystem === idx 
                    ? 'bg-emerald-500 border-emerald-300 text-white scale-110' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 shadow-sm'}
                `}
              >
                {name}
              </button>
              
              {/* Connection Line with Data Particle */}
              {activeSubsystem === idx && (
                <div 
                  className="absolute origin-left h-1 bg-emerald-400 z-0" 
                  style={{ 
                    width: '120px', 
                    transform: `rotate(${angle * (180/Math.PI)}deg) translateX(0px)`,
                    left: '50%'
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-[move_1s_infinite]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes move {
          0% { transform: translateX(0); }
          100% { transform: translateX(120px); }
        }
      `}</style>
    </div>
  );
};

export default RepositoryVisualizer;
