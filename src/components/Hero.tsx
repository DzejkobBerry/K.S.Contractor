import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-black py-16 sm:py-20 lg:py-0">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src="https://i.imgur.com/mALVbNO.jpeg"
          alt="Construction Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/10 blur-[120px] md:blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 blur-[120px] md:blur-[180px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 text-left pt-10 sm:pt-12 lg:pt-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-[4.5rem] leading-[0.9] lg:leading-[0.85] font-display font-black tracking-tighter uppercase italic mb-6 md:mb-8">
              <span className="block text-white mix-blend-difference">K.S.</span>
              <span className="text-gold-gradient block">Contractor</span>
            </h1>

            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs md:text-sm font-mono uppercase tracking-[0.3em]">
                Rotterdam • Premium Construction
              </span>
            </div>

            <div className="max-w-xl">
              <p className="text-lg md:text-2xl text-muted font-serif italic leading-relaxed mb-8 md:mb-12">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link
                  href="/contact"
                  className="group relative w-full sm:w-auto px-7 sm:px-8 md:px-12 py-4 md:py-6 bg-gold text-navy font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(212,165,44,0.4)] hover:scale-105 active:scale-95 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-base md:text-lg uppercase tracking-widest">
                    {t.hero.ctaContact} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-7 sm:px-8 md:px-12 py-4 md:py-6 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-base md:text-lg uppercase tracking-widest backdrop-blur-md text-center"
                >
                  {t.hero.ctaServices}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="lg:col-span-4 hidden lg:block mt-12"
          >
            <div className="glass-card p-10 rounded-[3rem] border-gold/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-gold/40">
                <ShieldCheck size={80} />
              </div>
              <p className="text-4xl font-display font-black text-gold mb-4 tracking-tighter">VCA & GPI</p>
              <p className="text-sm text-muted uppercase tracking-widest font-bold mb-8">Certified Safety Standard</p>
              <div className="h-px w-full bg-white/10 mb-8" />
              <p className="text-lg font-serif italic text-white/80">
                "We don't just build structures; we craft legacies with uncompromising safety and precision."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold/30 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};
