
import React, { useState, useEffect } from 'react';

const AgileVisualizer: React.FC = () => {
  const [sprintStage, setSprintStage] = useState(0); // 0: Plan, 1: Build, 2: Test, 3: Review
  const [releases, setReleases] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSprintStage((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (sprintStage === 3) {
      setReleases(prev => [...prev, Date.now()].slice(-5));
    }
  }, [sprintStage]);

  const stages = [
    { label: 'PLAN', color: 'bg-blue-400' },
    { label: 'BUILD', color: 'bg-indigo-400' },
    { label: 'TEST', color: 'bg-violet-400' },
    { label: 'REVIEW', color: 'bg-emerald-400' },
  ];

  return (
    <div className="w-full flex flex-col items-center h-80 justify-center">
      <div className="relative w-64 h-64 border-8 border-slate-200 rounded-full flex items-center justify-center">
        {/* Moving Indicator */}
        <div 
          className="absolute w-full h-full rounded-full transition-transform duration-1000"
          style={{ transform: `rotate(${sprintStage * 90}deg)` }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg z-10"></div>
        </div>

        {/* Labels */}
        <div className="absolute top-2 font-bold text-xs text-slate-500">PIANIFICA</div>
        <div className="absolute right-2 font-bold text-xs text-slate-500">SVILUPPA</div>
        <div className="absolute bottom-2 font-bold text-xs text-slate-500">TESTA</div>
        <div className="absolute left-2 font-bold text-xs text-slate-500">REVISIONA</div>

        <div className="text-center">
          <div className={`text-xl font-black ${stages[sprintStage].color.replace('bg-', 'text-')} transition-colors duration-500`}>
            {stages[sprintStage].label}
          </div>
          <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Sprint in corso</div>
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        <span className="text-xs font-bold text-slate-400 mr-2">LOG RILASCI:</span>
        {releases.map((id) => (
          <div key={id} className="w-3 h-6 bg-emerald-500 rounded-sm animate-[bounce_1s_ease-in-out]"></div>
        ))}
      </div>
    </div>
  );
};

export default AgileVisualizer;
