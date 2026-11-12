import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, LoaderCircle, MapPin, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const sectionLabel = language === 'pl' ? 'O firmie' : 'About us';
  const vipLabel = language === 'pl' ? 'Dla stałych klientów' : 'For regular clients';
  const safetyLabel = language === 'pl' ? 'Kompleksowa obsługa' : 'Complete service';
  const locationLabel = language === 'pl' ? 'Lokalizacja' : 'Location';
  const establishedLabel = language === 'pl' ? 'Założona' : 'Established';
  const guaranteedLabel = language === 'pl' ? 'Satysfakcja gwarantowana' : 'Satisfaction guaranteed';

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
                  className="aspect-[3/4] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/10 bg-[#000000] p-8 flex items-center justify-center"
                >
                  <img
                    src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/logo-K.S.webp"
                    alt={language === 'pl' ? 'Logo K.S. Contractor' : 'K.S. Contractor logo'}
                    className="max-w-full max-h-full object-contain transition-all duration-700"
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
                  <p className="text-5xl font-display font-black text-gold mb-2 tracking-tighter">
                    360°
                  </p>
                  <p className="text-[10px] text-muted uppercase tracking-[0.3em] font-bold">{safetyLabel}</p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[3/4] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/10"
                >
                  <img
                    src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/Pracownik-K.S.webp"
                    alt={language === 'pl' ? 'Wykonawca K.S. Contractor podczas pracy' : 'K.S. Contractor at work'}
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
              className="hidden md:flex absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 glass-dark p-7 rounded-full border-gold/40 z-20 shadow-[0_0_60px_rgba(212,165,44,0.2)] flex-col items-center justify-center text-center w-48 h-48"
            >
              {/* Obracająca się poświata i pierścień postępu */}
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360, opacity: [0.3, 0.8, 0.3] }}
                transition={{ rotate: { duration: 8, repeat: Infinity, ease: 'linear' }, opacity: { duration: 2.6, repeat: Infinity } }}
                className="absolute inset-2 rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,rgba(212,165,44,0.45)_70deg,transparent_140deg)] blur-sm"
              />
              <div className="absolute inset-[3px] rounded-full bg-black/90" />
              <motion.div
                aria-hidden="true"
                animate={{ scale: [0.75, 0.75, 1.25, 1.55], opacity: [0, 0, 0.5, 0] }}
                transition={{ duration: 5.2, times: [0, 0.45, 0.58, 0.78] }}
                className="absolute h-20 w-20 rounded-full border border-gold/70"
              />

              {/* Iskry pojawiające się po zakończeniu ładowania */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <motion.span
                  key={angle}
                  aria-hidden="true"
                  animate={{
                    opacity: [0, 0, 1, 0],
                    scale: [0, 0, 1, 0],
                    x: [0, 0, Math.cos((angle * Math.PI) / 180) * 56],
                    y: [0, 0, Math.sin((angle * Math.PI) / 180) * 56],
                  }}
                  transition={{ duration: 5.2, times: [0, 0.48, 0.58, 0.75] }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,165,44,0.9)]"
                />
              ))}

              <div className="relative z-10 mb-3 flex h-16 w-16 items-center justify-center">
                <motion.div
                  animate={{ opacity: [1, 1, 0], scale: [1, 1, 0.75] }}
                  transition={{ duration: 2.65, times: [0, 0.82, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 1080] }}
                    transition={{ duration: 2.4, ease: 'linear' }}
                  >
                    <LoaderCircle size={46} strokeWidth={1.5} className="text-gold drop-shadow-[0_0_8px_rgba(212,165,44,0.65)]" />
                  </motion.div>
                </motion.div>
                <motion.div
                  animate={{ opacity: [0, 0, 1, 1], scale: [0.35, 0.35, 1.3, 1], rotate: [-25, -25, 6, 0] }}
                  transition={{ duration: 3.4, times: [0, 0.68, 0.85, 1], ease: 'easeOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <CheckCircle2 size={48} strokeWidth={1.8} className="text-gold drop-shadow-[0_0_12px_rgba(212,165,44,0.8)]" />
                </motion.div>
              </div>

              <motion.div
                animate={{ opacity: [1, 1, 0] }}
                transition={{ duration: 2.7, times: [0, 0.82, 1] }}
                className="relative z-10 h-1 w-20 overflow-hidden rounded-full bg-white/10"
              >
                <motion.div
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 2.3, ease: 'easeInOut' }}
                  className="h-full rounded-full bg-gold shadow-[0_0_8px_rgba(212,165,44,0.8)]"
                />
              </motion.div>

              <motion.p
                animate={{ opacity: [0, 0, 1, 1], y: [10, 10, -2, 0], filter: ['blur(4px)', 'blur(4px)', 'blur(0px)', 'blur(0px)'] }}
                transition={{ duration: 3.6, times: [0, 0.65, 0.84, 1] }}
                className="relative z-10 mt-3 text-[10px] text-gold uppercase tracking-[0.25em] font-bold"
              >
                {guaranteedLabel}
              </motion.p>
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
                    <p className="text-xl font-bold text-white">
                      Radom, PL
                    </p>
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
