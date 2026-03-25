"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const projects = [
    { url: "https://picsum.photos/seed/interior1/1200/800", category: "Interior" },
    { url: "https://picsum.photos/seed/flooring1/1200/800", category: "Flooring" },
    { url: "https://picsum.photos/seed/bathroom1/1200/800", category: "Bathroom" },
    { url: "https://picsum.photos/seed/painting1/1200/800", category: "Painting" },
    { url: "https://picsum.photos/seed/construction1/1200/800", category: "Construction" },
    { url: "https://picsum.photos/seed/exterior1/1200/800", category: "Exterior" },
    { url: "https://picsum.photos/seed/tiles1/1200/800", category: "Tiles" },
    { url: "https://picsum.photos/seed/renovation1/1200/800", category: "Renovation" },
  ];

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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedIndex(i)}
              className="relative group rounded-[2rem] overflow-hidden border border-white/10 break-inside-avoid shadow-2xl cursor-pointer"
            >
              <img
                src={project.url}
                alt={project.category}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-2">Category</span>
                <h3 className="text-2xl font-black uppercase italic text-white tracking-tight">
                  {project.category}
                </h3>
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
              className="relative max-w-6xl w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(212,165,44,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[selectedIndex].url}
                alt={projects[selectedIndex].category}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-2 block">Project Details</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white tracking-tighter">
                  {projects[selectedIndex].category}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Gallery;
