
import React, { useState } from 'react';

const IncrementalVisualizer: React.FC = () => {
  const [increments, setIncrements] = useState<number[]>([1]);

  const addIncrement = () => {
    if (increments.length < 4) {
      setIncrements(prev => [...prev, prev.length + 1]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-4">
      <div className="flex items-end gap-2 h-48 mb-8">
        {increments.map((inc, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-center group animate-[slideIn_0.5s_ease-out]"
          >
            <div className={`
              w-20 rounded-t-xl transition-all duration-500 flex flex-col items-center justify-center gap-2 border-2 border-slate-700
              ${idx === increments.length - 1 ? 'bg-indigo-600 border-indigo-400 h-full' : 'bg-slate-800 h-[60%] opacity-50'}
            `}>
               <span className="text-white font-bold">V {inc}.0</span>
               <div className="flex gap-1">
                 <div className="w-2 h-2 bg-white/20 rounded-full" />
                 <div className="w-2 h-2 bg-white/20 rounded-full" />
               </div>
            </div>
            <span className="text-[10px] font-bold text-slate-500 mt-2">INC {inc}</span>
          </div>
        ))}
        {/* Placeholder for next */}
        {increments.length < 4 && (
          <div className="w-20 h-full border-2 border-dashed border-slate-800 rounded-t-xl flex items-center justify-center text-slate-700">
             +
          </div>
        )}
      </div>

      <button
        onClick={addIncrement}
        disabled={increments.length >= 4}
        className={`px-8 py-3 rounded-2xl font-bold transition-all ${increments.length >= 4 ? 'bg-slate-800 text-slate-600' : 'bg-indigo-600 text-white hover:scale-105 active:scale-95 shadow-lg'}`}
      >
        Rilascia Nuovo Incremento
      </button>

      <style>{`
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default IncrementalVisualizer;
