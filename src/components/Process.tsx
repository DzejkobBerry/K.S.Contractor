import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Search, FileText, Hammer, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { id: 'step1', icon: Search },
    { id: 'step2', icon: FileText },
    { id: 'step3', icon: Hammer },
    { id: 'step4', icon: CheckCircle2 },
  ];

  return (
    <section className="py-24 md:py-40 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase tracking-tighter select-none pointer-events-none whitespace-nowrap">
        Workflow
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Execution</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
            {t.process.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted font-serif italic max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/5 border border-gold/30 flex items-center justify-center mb-8 sm:mb-10 group-hover:bg-gold transition-colors duration-500 shadow-[0_0_30px_rgba(212,165,44,0.1)]">
                  <step.icon size={32} className="text-gold group-hover:text-navy transition-colors duration-500" />
                </div>
                
                <span className="text-gold font-mono text-sm mb-4">0{i + 1}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tighter">
                  {(t.process as any)[step.id].title}
                </h3>
                <p className="text-muted font-serif italic text-base sm:text-lg leading-relaxed">
                  {(t.process as any)[step.id].desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
