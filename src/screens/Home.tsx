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
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { ArrowRight, Hammer, Ruler, HardHat, Construction, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  const { t, language } = useLanguage();

  const excellenceLabel = language === 'pl' ? 'Realizacje' : 'Realisaties';
  const collaborateLabel = language === 'pl' ? 'Współpraca' : 'Samenwerken';
  const ctaTitlePrefix = language === 'pl' ? 'Gotowy na ' : 'Klaar om te ';
  const ctaTitleEmphasis = language === 'pl' ? 'Remont?' : 'Bouwen?';
  const ctaParagraph =
    language === 'pl'
      ? 'Dołącz do grona zadowolonych inwestorów i przekonaj się, jak wygląda realizacja na najwyższym poziomie w sercu Holandii.'
      : 'Sluit je aan bij tevreden investeerders en ervaar vakmanschap op topniveau in het hart van Nederland.';
  const vcaLabel = language === 'pl' ? 'Certyfikat VCA' : 'VCA gecertificeerd';
  const gpiLabel = language === 'pl' ? 'Bezpieczeństwo GPI' : 'GPI veiligheid';

  const galleryImages = [
    "https://picsum.photos/seed/project1/1000/1200",
    "https://picsum.photos/seed/project2/1000/1200",
    "https://picsum.photos/seed/project3/1000/1200",
    "https://picsum.photos/seed/project4/1000/1200",
    "https://picsum.photos/seed/project5/1000/1200",
    "https://picsum.photos/seed/project6/1000/1200"
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
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                  <div>
                    <p className="text-gold font-mono text-sm mb-2">Rotterdam Project</p>
                    <h4 className="text-3xl font-bold text-white uppercase tracking-tighter italic">Luxury Interior</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      
      <section className="py-24 md:py-40 px-4 sm:px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            alt="Background Pattern"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glass-card p-10 sm:p-16 md:p-32 rounded-[2.5rem] sm:rounded-[4rem] border-gold/30 text-center relative overflow-hidden group">
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-20 left-20 text-gold/10 hidden lg:block"
            >
              <Hammer size={120} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-20 right-20 text-gold/10 hidden lg:block"
            >
              <Ruler size={120} />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/5 pointer-events-none"
            >
              <Construction size={400} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-px w-12 bg-gold/50" />
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">{collaborateLabel}</span>
                <div className="h-px w-12 bg-gold/50" />
              </div>

              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-tight mb-8 sm:mb-12">
                {ctaTitlePrefix}<span className="text-gold-gradient">{ctaTitleEmphasis}</span>
              </h2>
              <p className="text-lg sm:text-2xl md:text-3xl text-muted font-serif italic max-w-3xl mx-auto mb-10 sm:mb-20 leading-relaxed">
                {ctaParagraph}
              </p>
              
              <div className="flex flex-col items-center gap-8">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-6 px-10 sm:px-16 py-6 sm:py-8 bg-gold text-navy font-black rounded-full text-lg sm:text-2xl uppercase tracking-widest hover:scale-105 transition-all hover:shadow-[0_0_80px_rgba(212,165,44,0.5)] active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    {t.hero.ctaContact} <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-8 text-gold/60">
                  <div className="flex items-center gap-2">
                    <HardHat size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">{vcaLabel}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gold/30" />
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">{gpiLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
