"use client";
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageModal: React.FC = () => {
  const { showModal, setLanguage, t } = useLanguage();

  const FlagIcon = ({ code }: { code: 'pl' | 'nl' }) => {
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
        <rect width="24" height="16" x="0" y="0" fill="#21468b" />
        <rect width="24" height="10.67" x="0" y="0" fill="#ffffff" />
        <rect width="24" height="5.33" x="0" y="0" fill="#ae1c28" />
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
            <h2 className="text-3xl mb-2 text-gold font-display">K.S. Contractor</h2>
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
                onClick={() => setLanguage('nl')}
                className="group relative overflow-hidden px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FlagIcon code="nl" />
                    <span className="font-medium">Nederlands</span>
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
