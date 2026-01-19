
import React from 'react';
import { AnalysisResults } from '../types';

interface ResultsDisplayProps {
  results: AnalysisResults;
}

const SectionTitle: React.FC<{ title: string; icon?: string; colorClass?: string }> = ({ title, icon, colorClass = "text-purple-200" }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-purple-900/50 pb-4">
    {icon && <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">{icon}</span>}
    <h3 className={`text-xl md:text-3xl mystical-font ${colorClass} uppercase tracking-[0.2em]`}>{title}</h3>
  </div>
);

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div className="w-full max-w-6xl space-y-16 z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 pb-24 px-4">
      {/* Overview Card */}
      <div className="glass rounded-[3rem] p-10 md:p-14 glow-purple relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 text-9xl pointer-events-none">✨</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          <div className="text-center p-8 bg-slate-900/60 rounded-[2rem] border border-purple-500/20 backdrop-blur-xl shadow-2xl">
            <p className="text-[10px] text-purple-400 uppercase tracking-[0.4em] mb-3 font-bold">Signo Solar</p>
            <p className="text-4xl mystical-font text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">{results.sunSign}</p>
          </div>
          <div className="text-center p-8 bg-slate-900/60 rounded-[2rem] border border-purple-500/20 backdrop-blur-xl shadow-2xl">
            <p className="text-[10px] text-blue-400 uppercase tracking-[0.4em] mb-3 font-bold">Signo Lunar</p>
            <p className="text-4xl mystical-font text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.4)]">{results.moonSign}</p>
          </div>
          <div className="text-center p-8 bg-slate-900/60 rounded-[2rem] border border-purple-500/20 backdrop-blur-xl shadow-2xl">
            <p className="text-[10px] text-indigo-400 uppercase tracking-[0.4em] mb-3 font-bold">Ascendente</p>
            <p className="text-4xl mystical-font text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.4)]">{results.ascendant}</p>
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl leading-relaxed text-slate-100 font-extralight italic text-center max-w-5xl mx-auto mystical-font opacity-90">
          "{results.summary}"
        </p>
      </div>

      {/* NEW: STARSEED RACES & CIVILIZATIONS SECTION */}
      <div className="glass rounded-[3rem] p-10 md:p-14 bg-gradient-to-br from-[#064e3b]/40 via-[#020617]/90 to-[#1e1b4b]/40 border-emerald-500/30 relative overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.1)]">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl pointer-events-none">🌌</div>
        <SectionTitle title="🌠 Razas Estelares & Civilizaciones" icon="🛸" colorClass="text-emerald-200" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.starseedRaces.map((race, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-950/80 border border-emerald-500/20 hover:border-emerald-400 transition-all duration-500 group">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mystical-font mb-1">{race.name}</h4>
                    <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">{race.origin}</p>
                  </div>
                  <div className="text-3xl text-emerald-500/40 group-hover:text-emerald-400 transition-colors">✦</div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-900/10 rounded-xl border border-emerald-500/10">
                    <h5 className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-1">Misión Simbólica</h5>
                    <p className="text-sm text-emerald-100 font-medium">{race.symbolicMission}</p>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light italic">
                    {race.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RULING PLANETS & CONSTELLATION CONNECTION SECTION */}
      <div className="glass rounded-[3rem] p-10 md:p-14 bg-gradient-to-br from-[#1e1b4b]/60 via-[#020617]/90 to-[#312e81]/60 border-indigo-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.1)]">
        <SectionTitle title="🔭 Soberanos Celestes & Regencias" icon="🪐" colorClass="text-indigo-200" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {results.rulingPlanets.map((ruler, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-950/70 border border-indigo-500/20 hover:border-indigo-400 transition-all duration-500 group">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mystical-font mb-1">{ruler.name}</h4>
                    <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold">{ruler.type}</span>
                  </div>
                  <div className="text-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    {ruler.type === 'Jerárquico' ? '☸' : ruler.type === 'Esotérico' ? '❂' : '✧'}
                  </div>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-3 p-3 bg-indigo-900/20 rounded-xl border border-indigo-500/10">
                    <span className="text-xl">🌌</span>
                    <p className="text-xs text-indigo-200 font-mono uppercase tracking-tighter">
                      Conexión: <span className="font-bold">{ruler.associatedConstellation}</span>
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-900/60 rounded-xl">
                    <h5 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Tema Espiritual</h5>
                    <p className="text-sm text-slate-200 font-medium leading-relaxed">{ruler.theme}</p>
                  </div>
                  
                  <p className="text-xs text-slate-400 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                    "{ruler.esotericMessage}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ESOTERIC STELLAR CONNECTIONS SECTION */}
      <div className="glass rounded-[3rem] p-10 md:p-14 bg-gradient-to-br from-[#020617]/90 via-[#1e1b4b]/40 to-[#020617]/90 border-blue-500/30 relative overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.15)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none" />
        <SectionTitle title="🌌 Fuentes Estelares & Jerarquías" icon="❂" colorClass="text-blue-200" />
        
        <div className="relative z-10 space-y-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {results.esotericConstellations.map((constel, idx) => (
               <div key={idx} className="p-8 rounded-[2rem] bg-slate-950/60 border border-blue-500/20 hover:border-blue-400 transition-all duration-500 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-5xl">⭐</div>
                 <div className="flex flex-col gap-4">
                   <div className="flex justify-between items-start">
                     <div>
                       <h4 className="text-2xl font-bold text-blue-100 mystical-font tracking-wider mb-1">{constel.name}</h4>
                       <p className="text-xs text-blue-500 font-mono uppercase tracking-[0.2em]">{constel.stellarSource}</p>
                     </div>
                     <span className="bg-blue-900/30 text-blue-300 text-[10px] px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-widest">
                       {constel.associatedRay || 'Rayo Cósmico'}
                     </span>
                   </div>
                   <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/30 to-transparent" />
                   <p className="text-slate-300 text-sm leading-relaxed mb-2 font-medium">
                     {constel.esotericMeaning}
                   </p>
                   <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 italic text-blue-200/80 text-xs">
                     <span className="font-bold text-blue-400 not-italic mr-2">RESONANCIA:</span>
                     {constel.soulResonance}
                   </div>
                 </div>
               </div>
             ))}
           </div>

           <div className="p-10 bg-gradient-to-tr from-blue-900/20 to-indigo-900/20 rounded-[2.5rem] border border-blue-500/20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-4xl mx-auto mystical-font">
                "Tu alma no solo habita la Tierra; es una extensión de la Conciencia de Sirio y la Osa Mayor, codificada para manifestar la Luz de las Pléyades en la estructura de la Inteligencia Artificial."
              </p>
           </div>
        </div>
      </div>

      {/* STARSEED PAST LIVES & ARCHETYPAL ASTEROIDS SECTION */}
      <div className="glass rounded-[3rem] p-10 md:p-14 bg-[#0c001c]/80 border-indigo-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.2)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
        <SectionTitle title="🔮 Vidas Pasadas Starseed & Asteroides" icon="🏰" colorClass="text-indigo-300" />
        
        <div className="relative z-10 space-y-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {results.starseedAsteroids.map((ast, idx) => (
               <div key={idx} className="p-6 rounded-[1.5rem] bg-indigo-950/30 border border-indigo-500/20 hover:border-indigo-400 transition-all duration-300 backdrop-blur-sm group">
                 <div className="flex justify-between items-center mb-4">
                   <h4 className="text-lg font-bold text-indigo-200 mystical-font group-hover:text-white transition-colors">{ast.name}</h4>
                   <span className="text-[9px] bg-indigo-900/50 text-indigo-400 px-2 py-0.5 rounded-full border border-indigo-500/30">#{ast.code}</span>
                 </div>
                 <div className="mb-3 text-[10px] text-indigo-500 font-mono tracking-widest uppercase">{ast.degree}</div>
                 <p className="text-xs text-slate-300 leading-relaxed italic mb-3">"{ast.soulMemory}"</p>
                 <p className="text-[11px] text-slate-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                   {ast.description}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* AKASHIC NARRATIVE REPORT */}
      <div className="glass rounded-[3rem] p-10 md:p-14 bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-purple-950/40 border-purple-500/30 relative">
        <SectionTitle title="📜 Crónica Akáshica de la Casa 12" icon="📖" colorClass="text-purple-300" />
        <div className="relative z-10">
          <div className="prose prose-invert max-w-none text-slate-200 leading-relaxed text-xl italic whitespace-pre-wrap mystical-font opacity-90 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-purple-400">
            {results.akashicReport}
          </div>
        </div>
      </div>

      {/* SEVEN RAYS: SOUL & PERSONALITY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="glass rounded-[2.5rem] p-10 border-yellow-500/20 bg-gradient-to-b from-yellow-500/5 to-transparent relative group">
          <div className="absolute top-0 right-0 p-6 opacity-5 text-6xl group-hover:scale-110 transition-transform">☀️</div>
          <div className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.6em] mb-6">Rayo del Alma</div>
          <h4 className="text-3xl mystical-font text-white mb-3">{results.soulRay.name}</h4>
          <p className="text-xs text-yellow-600 font-mono uppercase tracking-[0.3em] mb-6 border-b border-yellow-500/10 pb-3">{results.soulRay.principle}</p>
          <p className="text-base text-slate-300 leading-relaxed font-light">{results.soulRay.description}</p>
        </div>
        <div className="glass rounded-[2.5rem] p-10 border-indigo-500/20 bg-gradient-to-b from-indigo-500/5 to-transparent relative group">
          <div className="absolute top-0 right-0 p-6 opacity-5 text-6xl group-hover:scale-110 transition-transform">🌙</div>
          <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.6em] mb-6">Rayo de la Personalidad</div>
          <h4 className="text-3xl mystical-font text-white mb-3">{results.personalityRay.name}</h4>
          <p className="text-xs text-indigo-600 font-mono uppercase tracking-[0.3em] mb-6 border-b border-indigo-500/10 pb-3">{results.personalityRay.principle}</p>
          <p className="text-base text-slate-300 leading-relaxed font-light">{results.personalityRay.description}</p>
        </div>
      </div>

      {/* CAREER & VOCATIONAL PURPOSE */}
      <div className="glass rounded-[3rem] p-10 md:p-14 bg-gradient-to-br from-[#1e1b4b]/30 via-slate-900/70 to-[#312e81]/30 border-indigo-500/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl pointer-events-none">💻</div>
        <SectionTitle title="💻 Arquitecto de Sistemas Sagrados" icon="🏛️" colorClass="text-indigo-200" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8">
            <div className="p-8 rounded-[2rem] bg-slate-950/60 border border-indigo-500/30 shadow-inner">
              <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.4em] mb-4">Reputación & MC</h4>
              <p className="text-4xl mystical-font text-white mb-4 tracking-tighter">{results.careerAnalysis.midheavenSign}</p>
              <p className="text-sm text-indigo-100 leading-relaxed font-medium bg-indigo-900/20 p-4 rounded-xl">
                {results.careerAnalysis.professionalRole}
              </p>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3">Servicio & Tecne (Casa 6)</h4>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                {results.careerAnalysis.dailyService}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-[2rem] bg-slate-950/60 border border-emerald-500/30">
              <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.4em] mb-3">Flujo de Abundancia (Casa 2)</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {results.careerAnalysis.abundanceMindset}
              </p>
            </div>

            <div className="p-10 bg-gradient-to-tr from-indigo-900/50 to-slate-900/60 rounded-[2.5rem] border border-indigo-500/30 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
              <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.4em] mb-5">Legado Profesional</h4>
              <p className="text-slate-100 text-2xl leading-relaxed font-light italic mystical-font">
                "{results.careerAnalysis.karmicProfessionalLegacy}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 p-10 rounded-[2.5rem] bg-indigo-900/20 border border-indigo-500/30 text-center backdrop-blur-xl">
             <p className="text-3xl md:text-4xl mystical-font text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-200">
               "{results.careerAnalysis.vocationalSummary}"
             </p>
          </div>
        </div>
      </div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Fixed Stars */}
        <div className="glass rounded-[2.5rem] p-10 bg-slate-900/40 border border-purple-500/20">
          <SectionTitle title="🔭 Estrellas Fijas" icon="✨" />
          <div className="space-y-6">
            {results.fixedStars.map((star, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xl font-bold text-white mystical-font">{star.name}</h4>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest">{star.position}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{star.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Empty House Activations */}
        <div className="glass rounded-[2.5rem] p-10 bg-slate-900/40 border border-indigo-500/20">
          <SectionTitle title="🏠 Casas Vacías" icon="🗝️" />
          <div className="grid grid-cols-1 gap-6">
            {results.emptyHouseActivations.map((activation, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center shrink-0 text-lg font-bold text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  {activation.houseNumber}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-indigo-300 mb-2 uppercase tracking-[0.2em]">Por {activation.influence}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{activation.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mediumship & Mission */}
        <div className="glass rounded-[2.5rem] p-10 bg-gradient-to-b from-indigo-900/30 to-slate-900/40 border border-indigo-500/20 lg:col-span-2">
          <SectionTitle title="🧿 Potencial & Destino" icon="☸" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.4em] mb-5 group-hover:text-indigo-300 transition-colors">Conexión Mediúmnica</h4>
              <p className="text-slate-300 italic text-xl leading-relaxed pl-6 border-l-2 border-indigo-500/40 font-light">
                "{results.mediumisticPotential}"
              </p>
            </div>
            <div className="p-10 bg-gradient-to-tr from-purple-600/10 to-indigo-600/10 rounded-[2.5rem] border border-purple-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-5xl">☸</div>
              <h4 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.4em] mb-6">Misión Espiritual Akáshica</h4>
              <p className="text-white text-2xl leading-relaxed font-light mystical-font drop-shadow-md">
                {results.spiritualMission}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center gap-8 py-16">
        <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-2"
        >
          <span className="text-purple-400 group-hover:text-purple-200 transition-colors uppercase tracking-[0.6em] text-[11px] font-bold">
            Retornar a la Fuente
          </span>
          <span className="text-3xl animate-bounce filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">🜂</span>
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
