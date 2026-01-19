
import React, { useState } from 'react';
import StarryBackground from './components/StarryBackground';
import AstroForm from './components/AstroForm';
import ResultsDisplay from './components/ResultsDisplay';
import { UserData, AnalysisResults } from './types';
import { analyzeEsotericChart } from './services/geminiService';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (data: UserData) => {
    setLoading(true);
    setError(null);
    setResults(null);
    try {
      const analysis = await analyzeEsotericChart(data);
      setResults(analysis);
      // Smooth scroll to results
      setTimeout(() => {
        const resultsEl = document.getElementById('results-view');
        resultsEl?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      console.error(err);
      setError("Las corrientes astrales están turbulentas. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 py-12 md:py-24 space-y-16">
      <StarryBackground />
      
      {/* Header */}
      <header className="z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl mystical-font text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-indigo-300 to-purple-500 drop-shadow-lg mb-4">
          Astrología Akáshica
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide uppercase">
          Portal a los Registros del Alma y los Siete Rayos
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-500 self-center" />
          <span className="text-xs text-purple-400 tracking-[0.3em] font-semibold animate-pulse-gold">⚝ ☸ ☽</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-500 self-center" />
        </div>
      </header>

      {/* Main Form */}
      <AstroForm onAnalyze={handleAnalyze} isLoading={loading} />

      {/* Error Message */}
      {error && (
        <div className="z-10 p-4 rounded-lg bg-red-900/20 border border-red-900/50 text-red-400 text-sm animate-bounce">
          {error}
        </div>
      )}

      {/* Results View */}
      {results && (
        <div id="results-view" className="w-full flex justify-center mt-12">
          <ResultsDisplay results={results} />
        </div>
      )}

      {/* Footer Decoration */}
      <footer className="z-10 opacity-30 pointer-events-none mt-auto pt-24 text-center w-full">
        <p className="text-[10px] tracking-[0.5em] uppercase text-purple-400">
          Inspirado en la Jerarquía de Shamballa y la Sabiduría Perenne
        </p>
      </footer>
    </div>
  );
};

export default App;
