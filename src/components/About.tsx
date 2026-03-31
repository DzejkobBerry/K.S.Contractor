import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, MapPin, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const sectionLabel = language === 'pl' ? 'O firmie' : 'Over ons';
  const vipLabel = language === 'pl' ? 'Dostępność dla Stałych Klientów' : 'Beschikbaarheid voor vaste klanten';
  const safetyLabel = language === 'pl' ? 'Standard bezpieczeństwa' : 'Veiligheidsnorm';
  const locationLabel = language === 'pl' ? 'Lokalizacja' : 'Locatie';
  const establishedLabel = language === 'pl' ? 'Założona' : 'Opgericht';
  const guaranteedLabel = language === 'pl' ? 'Satysfakcja Gwarantowana' : 'Tevredenheid gegarandeerd';

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
    <section id="about" className="py-24 md:py-40 px-4 sm:px-6 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[3/4] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/10 bg-[#000000] flex items-center justify-center"
                >
                  <img
                    src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/logo-K.S.webp"
                    alt="Portfolio Project 1"
                    className="w-full h-full object-contain p-2 sm:p-4 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="glass-card p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-gold/20">
                  <p className="text-4xl font-display font-black text-gold mb-2 tracking-tighter">24/7</p>
                  <p className="text-[10px] text-muted uppercase tracking-[0.3em] font-bold">{vipLabel}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-card p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-gold/20 text-center">
                  <p className="text-5xl font-display font-black text-gold mb-2 tracking-tighter">VCA</p>
                  <p className="text-[10px] text-muted uppercase tracking-[0.3em] font-bold">{safetyLabel}</p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[3/4] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/10"
                >
                  <img
                    src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/Pracownik-K.S.webp"
                    alt="Portfolio Project 2"
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-12 glass-dark p-9 rounded-full border-gold/40 z-20 shadow-[0_0_60px_rgba(212,165,44,0.2)] flex-col items-center justify-center text-center w-52 h-52"
            >
              <CheckCircle2 size={40} className="text-gold mb-3" />
              <p className="text-[10px] text-gold uppercase tracking-[0.25em] font-bold">{guaranteedLabel}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">
                {sectionLabel}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl mb-12 leading-[0.85] tracking-tighter uppercase italic font-black">
              {renderContractorCasing(t.about.title)}
            </h2>
            
            <div className="space-y-10">
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light leading-tight tracking-tight">
                {t.about.p1}
              </p>
              <div className="space-y-6 text-muted text-base sm:text-lg md:text-xl font-serif italic leading-relaxed border-l-2 border-gold/20 pl-6 sm:pl-8">
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14 sm:mt-20">
              <div className="group">
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted mb-1 font-bold">{locationLabel}</p>
                    <p className="text-xl font-bold text-white">Rotterdam, NL</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted mb-1 font-bold">{establishedLabel}</p>
                    <p className="text-xl font-bold text-white">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
