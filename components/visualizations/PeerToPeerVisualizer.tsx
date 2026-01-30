
import React, { useState } from 'react';

const PeerToPeerVisualizer: React.FC = () => {
  const [activePeer, setActivePeer] = useState<number | null>(null);

  const peers = [0, 1, 2, 3, 4];

  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* Background Grid Lines (Abstract) */}
      <svg className="absolute w-full h-full opacity-10">
        <circle cx="50%" cy="50%" r="100" fill="none" stroke="currentColor" className="text-indigo-600" />
        <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="currentColor" />
        <line x1="90%" y1="10%" x2="10%" y2="90%" stroke="currentColor" />
      </svg>

      {peers.map((id, idx) => {
        const angle = (idx / peers.length) * 2 * Math.PI;
        const x = Math.cos(angle) * 110;
        const y = Math.sin(angle) * 110;

        return (
          <div 
            key={id}
            className="absolute flex items-center justify-center"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <button 
              onClick={() => {
                setActivePeer(idx);
                setTimeout(() => setActivePeer(null), 1200);
              }}
              className={`
                w-14 h-14 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300
                ${activePeer === idx 
                  ? 'bg-blue-600 border-blue-400 text-white scale-125 z-20' 
                  : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300'}
              `}
            >
              <div className="text-lg">👤</div>
              <div className="text-[8px] font-bold">PEER {id}</div>
            </button>

            {/* Broadcast waves when active */}
            {activePeer === idx && (
              <div className="absolute w-24 h-24 border-2 border-blue-400 rounded-full animate-ping opacity-50"></div>
            )}
            
            {/* Direct peer links to all others (simulated with pulses) */}
            {activePeer === idx && peers.map((targetId) => {
              if (targetId === id) return null;
              const tAngle = (targetId / peers.length) * 2 * Math.PI;
              const tx = Math.cos(tAngle) * 110 - x;
              const ty = Math.sin(tAngle) * 110 - y;
              
              return (
                <div 
                  key={`link-${targetId}`}
                  className="absolute bg-blue-400/50 w-1 h-1 rounded-full animate-[fly_0.8s_ease-out_forwards]"
                  style={{ 
                    '--tx': `${tx}px`, 
                    '--ty': `${ty}px` 
                  } as React.CSSProperties}
                />
              );
            })}
          </div>
        );
      })}

      <p className="absolute bottom-4 text-slate-400 text-[10px] font-bold uppercase tracking-wider text-center w-full">
        Ogni nodo è sia client che server.<br/>Clicca un peer per trasmettere dati.
      </p>

      <style>{`
        @keyframes fly {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default PeerToPeerVisualizer;
