
import React, { useState } from 'react';

const RepositoryVisualizer: React.FC = () => {
  const [activeSubsystem, setActiveSubsystem] = useState<number | null>(null);

  const subsystems = ['Editor', 'Compilatore', 'Debugger', 'Analyzer'];

  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* Central Repository */}
      <div className="w-32 h-32 bg-indigo-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl z-10 border-4 border-indigo-400 relative overflow-hidden">
        <div className="font-black text-xl">REPO</div>
        <div className="text-[10px] opacity-80 uppercase font-bold tracking-tighter text-center px-2">Data Center</div>
        
        {/* Pulsing light when data flows */}
        {activeSubsystem !== null && (
          <div className="absolute inset-0 bg-indigo-400/40 animate-pulse"></div>
        )}
      </div>

      {/* Satellite Subsystems */}
      <div className="absolute w-full h-full pointer-events-none">
        {subsystems.map((name, idx) => {
          const angle = (idx / subsystems.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 140;
          const y = Math.sin(angle) * 140;

          return (
            <div key={idx} className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => {
                  setActiveSubsystem(idx);
                  setTimeout(() => setActiveSubsystem(null), 1000);
                }}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`
                  pointer-events-auto w-24 h-24 rounded-full flex items-center justify-center text-[10px] font-black uppercase text-center p-2
                  transition-all duration-300 border-2
                  ${activeSubsystem === idx 
                    ? 'bg-emerald-500 border-emerald-300 text-white scale-110 shadow-[0_0_20px_rgba(16,185,129,0.5)]' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-indigo-400 shadow-lg'}
                `}
              >
                {name}
              </button>
              
              {/* Connection Line */}
              <div 
                className={`absolute origin-left h-0.5 transition-colors duration-500 ${activeSubsystem === idx ? 'bg-emerald-400' : 'bg-slate-700/50'}`} 
                style={{ 
                  width: '140px', 
                  transform: `rotate(${angle * (180/Math.PI)}deg) translateX(0px)`,
                  left: '50%'
                }}
              >
                {/* Data Particle */}
                {activeSubsystem === idx && (
                  <div className="w-3 h-3 bg-white rounded-full absolute -top-1 animate-[move_1s_infinite] shadow-[0_0_10px_white]" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] text-center w-full">
        I sottosistemi interagiscono solo tramite il REPO centrale
      </div>

      <style>{`
        @keyframes move {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(140px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RepositoryVisualizer;
