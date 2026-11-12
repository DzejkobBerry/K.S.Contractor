"use client";
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageModal: React.FC = () => {
  const { showModal, setLanguage, t } = useLanguage();

  const FlagIcon = ({ code }: { code: 'pl' | 'en' }) => {
    if (code === 'pl') {
      return (
        <svg viewBox="0 0 24 16" className="h-5 w-8 rounded-sm" aria-hidden="true">
          <rect width="24" height="8" x="0" y="0" fill="#ffffff" />
          <rect width="24" height="8" x="0" y="8" fill="#dc143c" />
          <rect width="24" height="16" x="0" y="0" fill="none" stroke="rgba(255,255,255,0.18)" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 16" className="h-5 w-8 rounded-sm" aria-hidden="true">
        <rect width="24" height="16" x="0" y="0" fill="#012169" />
        <polygon points="0,0 3,0 24,13 24,16 21,16 0,3" fill="#ffffff" />
        <polygon points="24,0 21,0 0,13 0,16 3,16 24,3" fill="#ffffff" />
        <polygon points="0,0 1.5,0 24,14.5 24,16 22.5,16 0,1.5" fill="#C8102E" />
        <polygon points="24,0 22.5,0 0,14.5 0,16 1.5,16 24,1.5" fill="#C8102E" />
        <rect x="0" y="6" width="24" height="4" fill="#ffffff" />
        <rect x="10" y="0" width="4" height="16" fill="#ffffff" />
        <rect x="0" y="7" width="24" height="2" fill="#C8102E" />
        <rect x="11" y="0" width="2" height="16" fill="#C8102E" />
        <rect width="24" height="16" x="0" y="0" fill="none" stroke="rgba(255,255,255,0.18)" />
      </svg>
    );
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-xl p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="glass-card max-w-md w-full p-8 rounded-2xl text-center border-gold/20"
          >
            <h2 className="text-3xl mb-2 text-gold font-display">
              K.S. <span className="normal-case">Contractor</span>
            </h2>
            <p className="text-muted mb-8">{t.modal.choose}</p>
            
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => setLanguage('pl')}
                className="group relative overflow-hidden px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FlagIcon code="pl" />
                    <span className="font-medium">Polski</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>

              <button
                onClick={() => setLanguage('en')}
                className="group relative overflow-hidden px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FlagIcon code="en" />
                    <span className="font-medium">English</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
