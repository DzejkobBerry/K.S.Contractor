import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { 
  LayoutGrid, 
  Layers, 
  Image as ImageIcon, 
  Paintbrush, 
  Box, 
  Trees, 
  Hammer, 
  ShieldAlert, 
  Maximize,
  ArrowRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { id: 'tiles', icon: LayoutGrid },
    { id: 'flooring', icon: Layers },
    { id: 'wallpaper', icon: ImageIcon },
    { id: 'painting', icon: Paintbrush },
    { id: 'drywall', icon: Box },
    { id: 'garden', icon: Trees },
    { id: 'demolition', icon: Hammer },
    { id: 'concrete', icon: ShieldAlert },
    { id: 'concreteFloor', icon: Maximize },
  ];

  return (
    <section id="services" className="py-40 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">{t.servicesSection.label}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8]">
              {t.services.title}
            </h2>
          </div>
          <div className="text-muted text-xl font-serif italic max-w-md lg:text-right">
            "{t.servicesSection.description}"
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass-card p-12 rounded-[3rem] h-full transition-all duration-700 hover:border-gold/40 hover:shadow-[0_0_50px_rgba(212,165,44,0.1)] flex flex-col relative overflow-hidden">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-10 flex items-start justify-between">
                    <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-700 group-hover:rotate-[10deg]">
                      <service.icon size={36} />
                    </div>
                    <span className="text-white/10 font-mono text-4xl font-black">0{i + 1}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-gold transition-colors">
                    {t.services.items[service.id as keyof typeof t.services.items]}
                  </h3>
                  
                  <p className="text-muted font-serif italic text-lg leading-relaxed mb-10 flex-grow">
                    {t.services.descriptions[service.id as keyof typeof t.services.descriptions]}
                  </p>

                  <div className="flex items-center gap-3 text-gold text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-500">
                    {t.servicesSection.learnMore} <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
