"use client";
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ContactForm } from '../components/ContactForm';
import { Clock, MapPin, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const getInTouchLabel = language === 'pl' ? 'Skontaktuj się' : 'Get in touch';
  const quoteTitlePrefix = language === 'pl' ? 'Poproś o wycenę' : 'Request a quote';
  const hqLabel = language === 'pl' ? 'Nasza siedziba w Radomiu' : 'Our office in Radom';
  const certTitle = language === 'pl' ? 'Standardy realizacji' : 'Project standards';
  const certDesc =
    language === 'pl'
      ? 'Zapewniamy bezpieczną, uporządkowaną i staranną realizację każdego zlecenia.'
      : 'We ensure safe, organised, and careful delivery of every project.';

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: shouldReduceMotion ? 0 : 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <main id="contact" className="relative min-h-screen overflow-hidden bg-black px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-gold/[0.055] blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 top-[48%] h-[420px] w-[420px] rounded-full bg-gold/[0.035] blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.header {...reveal()} className="mb-12 max-w-3xl sm:mb-16 lg:mb-20">
          <div className="mb-6 flex items-center gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
              className="h-px bg-gold"
            />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{getInTouchLabel}</span>
          </div>
          <h1 className="mb-7 text-4xl font-black uppercase italic leading-[0.9] tracking-tighter sm:text-5xl md:text-7xl">
            {t.contact.title}
          </h1>
          <p className="max-w-2xl font-serif text-lg italic leading-relaxed text-muted sm:text-xl md:text-2xl">
            {t.contact.subtitle}
          </p>
        </motion.header>

        <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <motion.article
              {...reveal(shouldReduceMotion ? 0 : 0.08)}
              className="group relative min-w-0 overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/[0.08] via-white/[0.025] to-transparent p-6 sm:col-span-2 sm:p-8 lg:col-span-1 lg:p-9"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-gold/15 transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:-rotate-6 group-hover:bg-gold group-hover:text-black motion-reduce:transform-none">
                  <MapPin size={27} />
                </div>
                <div className="min-w-0 break-words">
                  <h2 className="mb-4 text-xl font-bold leading-tight text-white sm:text-2xl">{t.contact.details.location}</h2>
                  <div className="space-y-2 font-serif text-base italic leading-relaxed text-muted sm:text-lg">
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold/80">{t.contact.details.area}</p>
                    <p>{t.contact.details.largeProjects}</p>
                    <p>{t.contact.details.smallProjects}</p>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              {...reveal(shouldReduceMotion ? 0 : 0.15)}
              className="group min-w-0 rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-9"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-gold transition-all duration-500 group-hover:-rotate-6 group-hover:border-gold/40 group-hover:bg-gold group-hover:text-black motion-reduce:transform-none">
                <Clock size={27} />
              </div>
              <h2 className="mb-4 text-xl font-bold leading-tight text-white sm:text-2xl">{t.contact.details.hours}</h2>
              <div className="space-y-2 break-words font-serif text-base italic leading-relaxed text-muted sm:text-lg">
                <p>{t.contact.details.weekdays}</p>
                <p>{t.contact.details.saturday}</p>
                <p>{t.contact.details.sunday}</p>
              </div>
            </motion.article>

            <motion.article
              {...reveal(shouldReduceMotion ? 0 : 0.22)}
              className="group min-w-0 rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-9"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-gold transition-all duration-500 group-hover:-rotate-6 group-hover:border-gold/40 group-hover:bg-gold group-hover:text-black motion-reduce:transform-none">
                <ShieldCheck size={27} />
              </div>
              <h2 className="mb-4 text-xl font-bold leading-tight text-white sm:text-2xl">{certTitle}</h2>
              <p className="break-words font-serif text-base italic leading-relaxed text-muted sm:text-lg">{certDesc}</p>
            </motion.article>
          </div>

          <motion.section
            {...reveal(shouldReduceMotion ? 0 : 0.12)}
            className="relative min-w-0 overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-white/[0.045] via-white/[0.018] to-gold/[0.035] p-5 sm:p-8 md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold/10" />
            <div className="pointer-events-none absolute right-8 top-8 h-2 w-2 rounded-full bg-gold shadow-[0_0_24px_rgba(212,165,44,0.8)]" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
                <h2 className="min-w-0 text-2xl font-black uppercase italic leading-tight tracking-tighter text-white sm:text-3xl lg:text-4xl">
                  {quoteTitlePrefix}
                </h2>
                <span className="hidden font-mono text-xs tracking-[0.24em] text-white/20 sm:block">01 / 01</span>
              </div>
              <ContactForm />
            </div>
          </motion.section>
        </div>

        <motion.section {...reveal()} className="relative mt-16 overflow-hidden rounded-[2rem] border border-gold/20 sm:mt-20 md:rounded-[2.5rem] lg:mt-24">
          <div className="absolute left-4 top-4 z-20 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-full border border-gold/30 bg-black/80 px-4 py-3 shadow-[0_0_35px_rgba(212,165,44,0.16)] backdrop-blur-xl sm:left-6 sm:top-6 sm:px-6">
            <div className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-gold" />
            <span className="min-w-0 break-words text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-gold sm:text-xs sm:tracking-widest">{hqLabel}</span>
          </div>
          <div className="group relative h-[320px] sm:h-[400px] lg:h-[480px]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/35 via-transparent to-black/15 transition-opacity duration-700 group-hover:opacity-40" />
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps?q=Radom%2C%20Polska&output=embed"
              allowFullScreen
              className="block h-full w-full grayscale-[0.65] brightness-[0.72] contrast-[1.08] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
            />
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;
