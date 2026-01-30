
import React, { useState, useEffect } from 'react';

const CodeFixVisualizer: React.FC = () => {
  const [errors, setErrors] = useState<{id: number, x: number, y: number}[]>([]);
  const [isCoding, setIsCoding] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setErrors(prev => [...prev, {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10
        }]);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const fixError = (id: number) => {
    setErrors(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-64 h-64 bg-slate-950 border border-slate-800 rounded-2xl relative shadow-inner p-4">
        {/* Code representation */}
        <div className="space-y-2 opacity-30">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className={`h-2 bg-indigo-500 rounded-full w-${Math.floor(Math.random()*4+1)}/12 animate-pulse`} 
                 style={{ animationDelay: `${i*0.2}s` }} />
          ))}
        </div>

        {/* Chaos bugs */}
        {errors.map(error => (
          <button
            key={error.id}
            onClick={() => fixError(error.id)}
            style={{ left: `${error.x}%`, top: `${error.y}%` }}
            className="absolute w-8 h-8 flex items-center justify-center animate-bounce transition-transform active:scale-75"
          >
             <span className="text-xl">🐞</span>
          </button>
        ))}

        {errors.length > 5 && (
          <div className="absolute inset-0 flex items-center justify-center bg-rose-950/40 backdrop-blur-sm rounded-2xl animate-pulse">
            <span className="text-rose-400 font-black text-xs uppercase tracking-tighter text-center">Debito Tecnico Critico</span>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <div className="text-slate-300 font-bold mb-2">BUGS ATTIVI: {errors.length}</div>
        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Clicca i bug per "fixarli" (caoticamente)</p>
      </div>
    </div>
  );
};

export default CodeFixVisualizer;
