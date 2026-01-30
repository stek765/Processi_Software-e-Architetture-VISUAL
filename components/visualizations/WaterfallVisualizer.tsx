
import React, { useState, useEffect } from 'react';

const WaterfallVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    'Requisiti',
    'Design',
    'Sviluppo',
    'Test',
    'Deployment'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            style={{ marginLeft: `${idx * 40}px` }}
            className={`
              relative p-4 rounded-xl border-2 transition-all duration-700 flex items-center justify-between
              ${idx === activeStep 
                ? 'bg-indigo-600 border-indigo-400 text-white scale-105 shadow-[0_0_20px_rgba(79,70,229,0.5)] z-10' 
                : idx < activeStep 
                  ? 'bg-slate-800 border-slate-700 text-slate-500 opacity-50' 
                  : 'bg-slate-900 border-slate-800 text-slate-600'}
            `}
          >
            <span className="font-bold text-sm tracking-wide uppercase">{step}</span>
            {idx === activeStep && (
               <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-sm" />
            )}
            
            {/* Connection Arrow */}
            {idx < steps.length - 1 && (
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-slate-700 text-xl font-bold animate-bounce">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
      
      <p className="mt-12 text-slate-400 text-xs font-mono uppercase tracking-widest text-center">
        Processo Sequenziale: Impossibile tornare indietro
      </p>
    </div>
  );
};

export default WaterfallVisualizer;
