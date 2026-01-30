
import React, { useState } from 'react';

const PipeFilterVisualizer: React.FC = () => {
  const [processing, setProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);

  const startProcess = () => {
    if (processing) return;
    setProcessing(true);
    setCurrentStep(0);
    
    const steps = [0, 1, 2, 3];
    steps.forEach((step, i) => {
      setTimeout(() => {
        setCurrentStep(step);
        if (i === steps.length - 1) {
          setTimeout(() => {
            setProcessing(false);
            setCurrentStep(-1);
          }, 1000);
        }
      }, i * 1200);
    });
  };

  const filters = [
    { name: 'PULIZIA', icon: '🧼' },
    { name: 'FILTRO', icon: '🔍' },
    { name: 'FORMAT', icon: '📄' }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-1 w-full max-w-lg mb-10 overflow-x-auto pb-4">
        {/* Input Data */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className={`w-10 h-10 border-2 border-slate-300 rounded-sm flex items-center justify-center text-xs font-bold transition-all ${currentStep === 0 ? 'bg-amber-400 border-amber-500 scale-110 shadow-lg' : 'bg-white'}`}>
             RAW
          </div>
          <span className="text-[8px] mt-1 font-bold">INPUT</span>
        </div>

        {/* Pipes and Filters */}
        {filters.map((f, i) => (
          <React.Fragment key={i}>
            <div className="w-16 h-1 bg-slate-200 relative">
               {currentStep === i && (
                 <div className="absolute inset-0 bg-blue-500 animate-[grow_1.2s_linear]" />
               )}
            </div>
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-xl transition-all duration-500 ${currentStep === i + 1 ? 'bg-indigo-600 border-indigo-400 shadow-xl rotate-12 scale-110' : 'bg-white border-slate-200'}`}>
                {f.icon}
              </div>
              <span className="text-[8px] mt-1 font-bold">{f.name}</span>
            </div>
          </React.Fragment>
        ))}

        {/* Output */}
        <div className="w-16 h-1 bg-slate-200 relative">
           {currentStep === 3 && (
             <div className="absolute inset-0 bg-emerald-500 animate-[grow_1.2s_linear]" />
           )}
        </div>
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className={`w-10 h-10 rounded-sm border-2 flex items-center justify-center text-xs font-bold transition-all ${currentStep === 3 ? 'bg-emerald-500 border-emerald-400 text-white scale-125' : 'bg-white border-slate-300'}`}>
             JSON
          </div>
          <span className="text-[8px] mt-1 font-bold">OUTPUT</span>
        </div>
      </div>

      <button 
        onClick={startProcess}
        disabled={processing}
        className={`px-8 py-3 rounded-xl font-bold transition-all ${processing ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'}`}
      >
        {processing ? 'Elaborazione in corso...' : 'Avvia Flusso Dati'}
      </button>

      <style>{`
        @keyframes grow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default PipeFilterVisualizer;
