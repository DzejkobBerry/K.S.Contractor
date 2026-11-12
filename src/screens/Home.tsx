"use client";
import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { Stats } from '../components/Stats';
import { Process } from '../components/Process';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/Testimonials';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { ArrowRight, HardHat, ShieldCheck, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const excellenceLabel = language === 'pl' ? 'Realizacje' : 'Projects';
  const collaborateLabel = language === 'pl' ? 'Współpraca' : 'Work with us';
  const ctaTitlePrefix = language === 'pl' ? 'Gotowy na ' : 'Ready for a ';
  const ctaTitleEmphasis = language === 'pl' ? 'Remont?' : 'Renovation?';
  const ctaParagraph =
    language === 'pl'
      ? 'Dołącz do grona zadowolonych inwestorów i przekonaj się, jak wygląda realizacja na najwyższym poziomie w Radomiu i całej Polsce.'
      : 'Join our satisfied clients and experience high-quality project delivery in Radom and throughout Poland.';
  const qualityLabel = language === 'pl' ? 'Gwarancja jakości' : 'Quality guarantee';
  const safeDeliveryLabel = language === 'pl' ? 'Bezpieczna realizacja' : 'Safe project delivery';

  const galleryImages = [
    "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/1_23_11zon.webp",
    "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/2_22_11zon.webp",
    "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/4_20_11zon.webp",
    "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/3_21_11zon.webp",
    "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/5_19_11zon.webp",
    "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/15_9_11zon.webp"
  ];

  return (
    <main className="bg-black">
      <Hero />
      <Stats />
      <About />
      <div className="section-divider" />
      <Services />
      <Process />
      <div className="section-divider" />
      <WhyUs />
      
      <section id="gallery" className="py-24 md:py-40 px-4 sm:px-6 bg-black">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
                {excellenceLabel}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8]">
                {t.gallery.title}
              </h2>
            </div>
            <Link href="/gallery" className="group flex items-center gap-4 sm:gap-6 text-gold font-bold hover:text-white transition-all text-lg sm:text-2xl uppercase tracking-widest">
              {t.nav.gallery} <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 group relative"
              >
                <img
                  src={img}
                  alt={language === 'pl' ? `Realizacja ${i + 1}` : `Project ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex items-end p-12">
                  <p className="text-white/80 font-black uppercase tracking-[0.22em] text-xs">
                    {language === 'pl' ? 'Kliknij, aby powiększyć' : 'Click to enlarge'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      
      <section className="relative overflow-hidden bg-black px-4 py-24 sm:px-6 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.045] blur-[150px]" />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/[0.09] via-white/[0.025] to-transparent md:rounded-[3rem]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom_right,black,transparent_72%)]" />
          <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-gold/15"
          >
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_24px_rgba(212,165,44,0.8)]" />
          </motion.div>
          <div className="pointer-events-none absolute -bottom-44 -left-32 h-96 w-96 rounded-full border border-white/[0.04]" />

          <div className="relative grid lg:grid-cols-12">
            <div className="flex flex-col justify-center border-b border-white/10 p-7 sm:p-10 md:p-14 lg:col-span-7 lg:min-h-[620px] lg:border-b-0 lg:border-r lg:p-16 xl:p-20">
              <div className="mb-10 flex items-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.2 }}
                  className="h-px bg-gold"
                />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">{collaborateLabel}</span>
              </div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : 0.18 }}
              >
                <h2 className="mb-8 text-5xl font-black uppercase italic leading-[0.86] tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="block">{ctaTitlePrefix}</span>
                  <span className="text-gold-gradient">{ctaTitleEmphasis}</span>
                </h2>
                <p className="mb-10 max-w-2xl font-serif text-lg italic leading-relaxed text-muted sm:text-xl md:text-2xl">
                  {ctaParagraph}
                </p>
              </motion.div>

              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-5 rounded-full bg-gold px-7 py-5 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_0_0_rgba(212,165,44,0)] transition-shadow duration-500 hover:shadow-[0_0_55px_rgba(212,165,44,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:px-9 sm:text-base"
                  >
                    {t.hero.ctaContact}
                    <ArrowRight size={23} className="transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transform-none" />
                  </Link>
                </motion.div>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                  <Sparkles size={16} className="text-gold" />
                  <span>{language === 'pl' ? 'Radom • Cała Polska' : 'Radom • Throughout Poland'}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {[
                { icon: HardHat, label: qualityLabel, number: '01', detail: language === 'pl' ? 'Rzetelne wykonanie i dbałość o każdy detal.' : 'Reliable workmanship with attention to every detail.' },
                { icon: ShieldCheck, label: safeDeliveryLabel, number: '02', detail: language === 'pl' ? 'Porządek i bezpieczeństwo na każdym etapie prac.' : 'A tidy and safe worksite at every stage of the project.' },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.number}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.28 + index * 0.12 }}
                    whileHover={shouldReduceMotion ? undefined : { backgroundColor: 'rgba(212, 165, 44, 0.07)' }}
                    className="group/benefit relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-black/45 p-7 sm:p-9 lg:min-h-0 lg:p-12"
                  >
                    <div className="pointer-events-none absolute right-5 top-2 font-mono text-7xl font-black tracking-tighter text-white/[0.035] transition-colors duration-500 group-hover/benefit:text-gold/[0.08] sm:text-8xl">
                      {benefit.number}
                    </div>
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.07] text-gold transition-all duration-500 group-hover/benefit:rotate-[-6deg] group-hover/benefit:border-gold/50 group-hover/benefit:bg-gold group-hover/benefit:text-black motion-reduce:transform-none">
                      <Icon size={29} strokeWidth={1.7} />
                    </div>
                    <div className="relative z-10 mt-12">
                      <h3 className="mb-3 text-2xl font-bold leading-tight text-white transition-colors duration-500 group-hover/benefit:text-gold sm:text-3xl">
                        {benefit.label}
                      </h3>
                      <p className="max-w-sm font-serif text-base italic leading-relaxed text-muted sm:text-lg">{benefit.detail}</p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700 group-hover/benefit:scale-x-100" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
export default Home;
