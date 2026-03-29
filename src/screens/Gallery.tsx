"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const projects = [
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/1_23_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/2_22_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/4_20_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/3_21_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/5_19_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/15_9_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/6_18_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/13_11_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/10_14_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/11_13_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/20_4_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/16_8_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/17_7_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/21_3_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/22_2_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/12_12_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/14_10_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/19_5_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/7_17_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/8_16_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/9_15_11zon.webp" },
    { url: "https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KS-contractor.nl/18_6_11zon.webp" },
  ];

  const clickHint = language === 'pl' ? 'Kliknij, aby powiększyć' : 'Tik om te vergroten';

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">
              Portfolio
            </span>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight mb-10 sm:mb-12"
          >
            {t.gallery.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto text-xl font-serif italic leading-relaxed"
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedIndex(i)}
              className="relative group rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-black">
                <img
                  src={project.url}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={project.url}
                  alt={`Gallery image ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-end p-8 pointer-events-none">
                <p className="text-white/90 font-black uppercase tracking-[0.22em] text-xs">
                  {clickHint}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-gold transition-colors z-[110]"
            >
              <X size={40} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold transition-colors z-[110]"
            >
              <ChevronLeft size={60} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold transition-colors z-[110]"
            >
              <ChevronRight size={60} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full max-h-[82vh] aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(212,165,44,0.1)] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[selectedIndex].url}
                alt=""
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-35"
                referrerPolicy="no-referrer"
              />
              <img
                src={projects[selectedIndex].url}
                alt={`Gallery image ${selectedIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-2 block">
                  {language === 'pl' ? 'Zdjęcie' : 'Foto'} {String(selectedIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Gallery;
