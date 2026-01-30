
import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Database, 
  Server, 
  Users, 
  GitBranch, 
  Workflow, 
  Box,
  ChevronRight,
  Info,
  CheckCircle,
  AlertCircle,
  PlayCircle,
  ArrowDownCircle,
  Zap,
  LayoutGrid,
  Settings2,
  Layout,
  Rocket
} from 'lucide-react';
import { CONCEPTS } from './data';
import { ArchitectureConcept } from './types';
import WaterfallVisualizer from './components/visualizations/WaterfallVisualizer';
import CodeFixVisualizer from './components/visualizations/CodeFixVisualizer';
import IncrementalVisualizer from './components/visualizations/IncrementalVisualizer';
import IntegratedVisualizer from './components/visualizations/IntegratedVisualizer';
import AgileVisualizer from './components/visualizations/AgileVisualizer';
import MVCVisualizer from './components/visualizations/MVCVisualizer';
import LayeredVisualizer from './components/visualizations/LayeredVisualizer';
import RepositoryVisualizer from './components/visualizations/RepositoryVisualizer';
import ClientServerVisualizer from './components/visualizations/ClientServerVisualizer';
import PeerToPeerVisualizer from './components/visualizations/PeerToPeerVisualizer';
import PipeFilterVisualizer from './components/visualizations/PipeFilterVisualizer';

const App: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<ArchitectureConcept>('waterfall');

  const currentConcept = useMemo(() => 
    CONCEPTS.find(c => c.id === activeConcept)!, 
    [activeConcept]
  );

  const getIcon = (id: ArchitectureConcept) => {
    switch (id) {
      case 'waterfall': return <ArrowDownCircle className="w-5 h-5" />;
      case 'codeFix': return <Zap className="w-5 h-5" />;
      case 'incremental': return <LayoutGrid className="w-5 h-5" />;
      case 'integrated': return <Settings2 className="w-5 h-5" />;
      case 'agile': return <Workflow className="w-5 h-5" />;
      case 'mvc': return <Layout className="w-5 h-5" />;
      case 'layered': return <Layers className="w-5 h-5" />;
      case 'repository': return <Database className="w-5 h-5" />;
      case 'clientServer': return <Server className="w-5 h-5" />;
      case 'peerToPeer': return <Users className="w-5 h-5" />;
      case 'pipeFilter': return <GitBranch className="w-5 h-5" />;
    }
  };

  const renderVisualizer = () => {
    switch (activeConcept) {
      case 'waterfall': return <WaterfallVisualizer />;
      case 'codeFix': return <CodeFixVisualizer />;
      case 'incremental': return <IncrementalVisualizer />;
      case 'integrated': return <IntegratedVisualizer />;
      case 'agile': return <AgileVisualizer />;
      case 'mvc': return <MVCVisualizer />;
      case 'layered': return <LayeredVisualizer />;
      case 'repository': return <RepositoryVisualizer />;
      case 'clientServer': return <ClientServerVisualizer />;
      case 'peerToPeer': return <PeerToPeerVisualizer />;
      case 'pipeFilter': return <PipeFilterVisualizer />;
    }
  };

  const processModels = CONCEPTS.filter(c => c.category === 'Processo');
  const architectureModels = CONCEPTS.filter(c => c.category === 'Architettura');

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-slate-900 text-white flex-shrink-0 flex flex-col sticky top-0 md:h-screen z-20 shadow-2xl overflow-hidden">
        <div className="p-6 bg-slate-800/50 border-b border-slate-700">
          <h1 className="text-xl font-bold flex items-center gap-2 text-indigo-400">
            <Workflow />
            <span>EngViz Studio</span>
          </h1>
          <p className="text-slate-400 text-xs mt-1">Interattivo • Moderno • Didattico</p>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 px-4">Modelli di Processo</h3>
            <div className="space-y-1">
              {processModels.map((concept) => (
                <button
                  key={concept.id}
                  onClick={() => setActiveConcept(concept.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                    activeConcept === concept.id 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 translate-x-1' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {getIcon(concept.id)}
                  <span className="text-sm font-medium">{concept.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 px-4">Architetture</h3>
            <div className="space-y-1">
              {architectureModels.map((concept) => (
                <button
                  key={concept.id}
                  onClick={() => setActiveConcept(concept.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                    activeConcept === concept.id 
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 translate-x-1' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {getIcon(concept.id)}
                  <span className="text-sm font-medium">{concept.title}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header Section */}
        <section className="p-8 md:p-12 border-b bg-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-slate-200 bg-slate-50 text-slate-500">
              {currentConcept.category}
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              {currentConcept.title}
            </h2>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-3xl">
              {currentConcept.description}
            </p>
          </div>
        </section>

        {/* Visualizer Stage */}
        <section className="p-6 md:p-12 flex flex-col items-center">
          <div className="w-full max-w-5xl bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[500px] flex flex-col border border-slate-800">
            <div className="p-6 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-indigo-400" /> Simulazione Dinamica
              </span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-8 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900">
              {renderVisualizer()}
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm transition-hover hover:shadow-md">
              <h4 className="flex items-center gap-2 text-emerald-700 font-bold mb-4">
                <CheckCircle className="w-6 h-6" /> Vantaggi
              </h4>
              <ul className="space-y-3">
                {currentConcept.pros.map((pro, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex gap-3">
                    <span className="text-emerald-500 font-bold">✓</span> {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm transition-hover hover:shadow-md">
              <h4 className="flex items-center gap-2 text-rose-700 font-bold mb-4">
                <AlertCircle className="w-6 h-6" /> Svantaggi
              </h4>
              <ul className="space-y-3">
                {currentConcept.cons.map((con, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex gap-3">
                    <span className="text-rose-400 font-bold">✕</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-indigo-600 p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-center lg:col-span-1 relative overflow-hidden">
             <Info className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
             <h4 className="flex items-center gap-3 text-indigo-100 font-bold mb-4 text-lg">
                <Info className="w-6 h-6" /> Quando utilizzarlo
             </h4>
             <p className="text-xl font-medium leading-relaxed italic text-indigo-50">
                "{currentConcept.whenToUse}"
             </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="p-6 md:p-12 bg-slate-100/50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto">
            <h4 className="flex items-center gap-3 text-slate-800 font-bold mb-8 text-2xl">
              <Rocket className="w-7 h-7 text-indigo-500" /> Esempi Reali
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentConcept.examples.map((example, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600 font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-slate-700 font-medium leading-tight">{example}</p>
                    <p className="text-slate-400 text-[10px] mt-1 uppercase font-bold tracking-widest">Caso d'uso reale</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="p-12 text-center text-slate-400 text-sm border-t bg-white">
          <p>© 2025 EngViz Studio • Creato per scopi didattici</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
