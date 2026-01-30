
import React, { useState } from 'react';

const LayeredVisualizer: React.FC = () => {
  const [replacedIndex, setReplacedIndex] = useState<number | null>(null);

  const layers = [
    { name: 'UI / Presentazione', color: 'bg-indigo-500' },
    { name: 'Business Logic', color: 'bg-blue-500' },
    { name: 'Data Access', color: 'bg-violet-500' },
    { name: 'Database', color: 'bg-slate-700' },
  ];

  return (
    <div className="flex flex-col items-center gap-4 w-full py-8">
      <div className="space-y-3 w-64">
        {layers.map((layer, idx) => (
          <div 
            key={idx}
            onClick={() => setReplacedIndex(idx === replacedIndex ? null : idx)}
            className={`
              relative p-4 rounded-xl text-white font-bold text-center cursor-pointer transition-all duration-300
              hover:scale-105 active:scale-95 shadow-lg
              ${replacedIndex === idx ? 'bg-emerald-500 ring-4 ring-emerald-200' : layer.color}
            `}
          >
            {layer.name}
            {replacedIndex === idx && (
              <span className="absolute -top-2 -right-2 bg-emerald-200 text-emerald-800 text-[10px] px-2 py-1 rounded-full border border-emerald-400">
                SOSTITUITO
              </span>
            )}
            
            {/* Animated Data Particle */}
            <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white/50 rounded-full animate-[ping_2s_infinite]"></div>
          </div>
        ))}
      </div>
      <p className="text-slate-400 text-[10px] mt-4 font-bold uppercase tracking-wider">
        Clicca uno strato per simularne la sostituzione modulare
      </p>
    </div>
  );
};

export default LayeredVisualizer;
