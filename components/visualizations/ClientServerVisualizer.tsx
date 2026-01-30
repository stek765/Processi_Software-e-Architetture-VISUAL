
import React, { useState } from 'react';

const ClientServerVisualizer: React.FC = () => {
  const [requestCount, setRequestCount] = useState(0);
  const [animatingClient, setAnimatingClient] = useState<number | null>(null);

  const handleRequest = (idx: number) => {
    setAnimatingClient(idx);
    setTimeout(() => {
      setRequestCount(prev => prev + 1);
      setAnimatingClient(null);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-around h-64 gap-8">
      {/* Clients side */}
      <div className="flex flex-col gap-4">
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="flex items-center gap-4">
            <button 
              onClick={() => handleRequest(idx)}
              className={`w-12 h-12 rounded-lg bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm hover:border-indigo-400 transition-all ${animatingClient === idx ? 'scale-90 bg-indigo-50' : ''}`}
            >
              📱
            </button>
            <div className="relative w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              {animatingClient === idx && (
                <div className="absolute h-full bg-indigo-500 w-1/4 animate-[slide_1.5s_linear]" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Network Cloud / Server */}
      <div className="relative group">
        <div className={`w-32 h-32 bg-slate-800 rounded-3xl flex flex-col items-center justify-center text-white shadow-xl transition-transform duration-300 ${animatingClient !== null ? 'scale-105 ring-4 ring-indigo-500/30' : ''}`}>
          <div className="text-3xl mb-1">🖥️</div>
          <div className="font-bold text-xs uppercase opacity-80">SERVER</div>
          <div className="mt-2 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-mono">
            REQ: {requestCount}
          </div>
        </div>
        
        {/* Glow effect */}
        {animatingClient !== null && (
          <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-3xl animate-pulse"></div>
        )}
      </div>

      <style>{`
        @keyframes slide {
          0% { left: 0%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ClientServerVisualizer;
