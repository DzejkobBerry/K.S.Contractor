import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
  ];

  return (
    <section id="faq" className="py-40 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 block">{t.faq.label}</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2.5rem] overflow-hidden border-white/5"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-10 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-2xl md:text-3xl font-bold text-white tracking-tight pr-8">
                  {faq.q}
                </span>
                <div className={cn(
                  "w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gold transition-all duration-500",
                  activeIndex === i ? "rotate-180 bg-gold text-navy" : ""
                )}>
                  <ChevronDown size={28} />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-10 pb-10 text-xl text-muted font-serif italic leading-relaxed border-t border-white/5 pt-10">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
