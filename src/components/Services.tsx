import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowUpRight,
  Box,
  Droplets,
  Image as ImageIcon,
  Layers,
  LayoutGrid,
  Paintbrush,
  Trees,
  type LucideIcon,
} from 'lucide-react';

type ServiceId =
  | 'tiles'
  | 'concreteFloor'
  | 'flooring'
  | 'wallpaper'
  | 'painting'
  | 'drywall'
  | 'garden';

type Service = {
  id: ServiceId;
  icon: LucideIcon;
  layout: string;
  featured?: boolean;
};

const services: Service[] = [
  { id: 'tiles', icon: LayoutGrid, layout: 'lg:col-span-6', featured: true },
  { id: 'concreteFloor', icon: Droplets, layout: 'lg:col-span-6', featured: true },
  { id: 'flooring', icon: Layers, layout: 'lg:col-span-4' },
  { id: 'wallpaper', icon: ImageIcon, layout: 'lg:col-span-4' },
  { id: 'painting', icon: Paintbrush, layout: 'lg:col-span-4' },
  { id: 'drywall', icon: Box, layout: 'lg:col-span-6' },
  { id: 'garden', icon: Trees, layout: 'lg:col-span-6' },
];

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const serviceLabel = language === 'pl' ? 'Zakres usługi' : 'Service details';

  return (
    <section id="services" className="relative overflow-hidden bg-black px-4 py-24 sm:px-6 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gold/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-10 md:mb-20 lg:mb-24 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
                className="h-px bg-gold"
              />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                {t.servicesSection.label}
              </span>
            </div>
            <h2 className="text-5xl font-black uppercase italic leading-[0.8] tracking-tighter md:text-7xl">
              {t.services.title}
            </h2>
          </div>
          <div className="max-w-md font-serif text-lg italic leading-relaxed text-muted sm:text-xl lg:text-right">
            “{t.servicesSection.description}”
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 36, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.32), ease: [0.16, 1, 0.3, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                className={`group relative min-h-[330px] overflow-hidden rounded-[2rem] border p-6 sm:p-8 lg:p-10 ${service.layout} ${
                  service.featured
                    ? 'border-gold/25 bg-gradient-to-br from-gold/[0.09] via-white/[0.025] to-transparent'
                    : 'border-white/10 bg-white/[0.025]'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(212,165,44,0.18),transparent_35%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-gold/20"
                  animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 18 + index * 2, repeat: Infinity, ease: 'linear' }}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700 group-hover:scale-x-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-10 flex items-start justify-between">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { rotate: -8, scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                      className={`flex items-center justify-center rounded-2xl border text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-black ${
                        service.featured ? 'h-20 w-20 border-gold/25 bg-gold/[0.08]' : 'h-16 w-16 border-white/10 bg-white/[0.03]'
                      }`}
                    >
                      <Icon size={service.featured ? 36 : 30} strokeWidth={1.6} />
                    </motion.div>
                    <span className="font-mono text-4xl font-black tracking-tighter text-white/[0.08] transition-colors duration-500 group-hover:text-gold/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className={`mb-5 font-bold leading-tight text-white transition-colors duration-500 group-hover:text-gold ${service.featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
                    {t.services.items[service.id]}
                  </h3>

                  <p className="mb-8 max-w-2xl flex-grow font-serif text-base italic leading-relaxed text-muted sm:text-lg">
                    {t.services.descriptions[service.id]}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/35 transition-colors duration-500 group-hover:text-gold/70">
                      {serviceLabel}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors duration-500 group-hover:border-gold/40 group-hover:text-gold"
                      whileHover={shouldReduceMotion ? undefined : { rotate: 45, scale: 1.1 }}
                    >
                      <ArrowUpRight size={17} />
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
