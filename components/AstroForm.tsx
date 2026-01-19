
import React, { useState } from 'react';
import { UserData } from '../types';

interface AstroFormProps {
  onAnalyze: (data: UserData) => void;
  isLoading: boolean;
}

const AstroForm: React.FC<AstroFormProps> = ({ onAnalyze, isLoading }) => {
  const [formData, setFormData] = useState<UserData>({
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    chartImage: '',
    currentJob: '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, chartImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.birthDate && formData.birthTime && formData.birthPlace) {
      onAnalyze(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 w-full max-w-lg z-10 space-y-6 glow-purple">
      <h2 className="text-2xl text-center text-purple-200 mystical-font">Inicia tu Viaje Akáshico</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Fecha</label>
            <input
              type="date"
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Hora</label>
            <input
              type="time"
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
              value={formData.birthTime}
              onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Lugar de Nacimiento</label>
          <input
            type="text"
            placeholder="Ej: Madrid, España"
            required
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
            value={formData.birthPlace}
            onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Ocupación / Sendero Actual (Opcional)</label>
          <input
            type="text"
            placeholder="Ej: Programador de IA Esotérica"
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm placeholder:text-slate-600"
            value={formData.currentJob}
            onChange={(e) => setFormData({ ...formData, currentJob: e.target.value })}
          />
        </div>

        <div className="pt-2">
          <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest text-center">Subir Gráfico Astral (Opcional)</label>
          <div className="relative group cursor-pointer border-2 border-dashed border-slate-700 rounded-xl p-4 hover:border-purple-500 transition-colors text-center">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
            {formData.chartImage ? (
              <div className="space-y-2">
                <img src={formData.chartImage} alt="Chart Preview" className="h-24 mx-auto rounded border border-purple-500/50 object-contain" />
                <p className="text-[10px] text-purple-400">Imagen de la carta cargada 🌌</p>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="text-2xl opacity-50">🖼️</div>
                <p className="text-xs text-slate-500">Arrastra tu gráfico de Astro.com aquí</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right text-white rounded-lg font-bold transition-all transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-xs shadow-lg shadow-purple-500/20"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Desencriptando Registros...
          </span>
        ) : "Realizar Análisis Profundo"}
      </button>
    </form>
  );
};

export default AstroForm;
