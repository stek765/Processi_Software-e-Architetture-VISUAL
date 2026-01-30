
import React, { useState } from 'react';

const IntegratedVisualizer: React.FC = () => {
  const [assembled, setAssembled] = useState(false);

  return (
    <div className="relative w-full h-64 flex flex-col items-center justify-center">
      <div className="flex gap-4 items-center mb-8">
        {/* Component 1 */}
        <div 
          className={`w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-700 ${
            assembled ? 'translate-x-[4.5rem] rotate-45 opacity-0' : 'translate-x-0 rotate-0'
          }`}
        >
          AUTH
        </div>
        {/* Slot */}
        <div className="w-48 h-24 border-4 border-dashed border-slate-300 rounded-xl flex items-center justify-center relative bg-white/50">
          {assembled ? (
            <div className="flex flex-col items-center animate-pulse">
               <div className="text-indigo-600 font-bold text-lg mb-1">SISTEMA PRONTO</div>
               <div className="text-[10px] text-indigo-400">CONFIGURATO & ATTIVO</div>
            </div>
          ) : (
            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Assembla Qui</div>
          )}
          
          {/* Internal Assembled State */}
          {assembled && (
            <div className="absolute inset-0 flex items-center justify-around px-2">
               <div className="w-10 h-10 bg-blue-600 rounded shadow-md animate-bounce" style={{animationDelay: '0s'}}></div>
               <div className="w-10 h-10 bg-indigo-600 rounded shadow-md animate-bounce" style={{animationDelay: '0.2s'}}></div>
               <div className="w-10 h-10 bg-violet-600 rounded shadow-md animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          )}
        </div>
        {/* Component 2 */}
        <div 
          className={`w-16 h-16 bg-violet-500 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-700 ${
            assembled ? '-translate-x-[4.5rem] -rotate-45 opacity-0' : 'translate-x-0 rotate-0'
          }`}
        >
          DB
        </div>
      </div>

      <button 
        onClick={() => setAssembled(!assembled)}
        className="px-6 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
      >
        {assembled ? 'Smonta Sistema' : 'Configura & Collega'}
      </button>
    </div>
  );
};

export default IntegratedVisualizer;
