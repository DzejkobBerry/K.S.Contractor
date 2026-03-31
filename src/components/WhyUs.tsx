import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, Zap, Award, ShieldCheck } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const renderContractorCasing = (text: string) => {
    const key = 'Contractor';
    const index = text.indexOf(key);
    if (index === -1) return text;
    const before = text.slice(0, index);
    const after = text.slice(index + key.length);
    return (
      <>
        {before}
        <span className="normal-case">{key}</span>
        {after}
      </>
    );
  };

  return (
    <section id="why-us" className="py-40 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 block">{t.whyUs.label}</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8]">
            {renderContractorCasing(t.whyUs.title)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 glass-card p-4 sm:p-8 md:p-12 rounded-[3.5rem] border-gold/20 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 sm:p-8 md:p-12 text-gold/5">
              <ShieldCheck size={100} className="sm:w-[120px] sm:h-[120px] md:w-[200px] md:h-[200px]" />
            </div>
            <div className="relative z-10">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gold flex items-center justify-center text-navy mb-6 sm:mb-12 shadow-[0_0_40px_rgba(212,165,44,0.3)]">
                <ShieldCheck size={32} className="sm:w-[40px] sm:h-[40px]" />
              </div>
              <h3 className="text-xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-8 uppercase tracking-tight sm:tracking-tighter">{t.whyUs.certifications}</h3>
              <p className="text-sm sm:text-lg md:text-2xl text-muted font-serif italic leading-relaxed max-w-2xl">
                {t.whyUs.certificationsDesc}
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4 glass-card p-12 rounded-[3.5rem] border-white/5 flex flex-col justify-between group bg-gradient-to-br from-white/[0.05] to-transparent">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-12 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
              <Clock size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">{t.whyUs.flexibility}</h3>
              <p className="text-lg text-muted font-serif italic leading-relaxed">
                {t.whyUs.speedDesc}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 glass-card p-12 rounded-[3.5rem] border-white/5 flex flex-col justify-between group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-12 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
              <Zap size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">{t.whyUs.speed}</h3>
              <p className="text-lg text-muted font-serif italic leading-relaxed">
                {t.whyUs.speedDesc}
              </p>
            </div>
          </div>

          <div className="md:col-span-8 glass-card p-12 rounded-[3.5rem] border-gold/20 flex flex-col justify-between group bg-gold/5">
            <div className="flex justify-between items-start mb-12">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                <Award size={40} />
              </div>
              <span className="text-white/10 font-mono text-6xl font-black">04</span>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white mb-8 uppercase tracking-tighter">{t.whyUs.quality}</h3>
              <p className="text-2xl text-muted font-serif italic leading-relaxed max-w-2xl">
                {t.whyUs.qualityDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
