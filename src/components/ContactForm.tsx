import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2, X } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2">
              {t.contact.form.name}
            </label>
            <input
              required
              type="text"
              placeholder="John Doe"
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white placeholder:text-white/10"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2">
              {t.contact.form.phone}
            </label>
            <input
              required
              type="tel"
              placeholder="+31 000 000 000"
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white placeholder:text-white/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2">
              {t.contact.form.email}
            </label>
            <input
              required
              type="email"
              placeholder="john@example.com"
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white placeholder:text-white/10"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2">
              {t.contact.form.subject}
            </label>
            <select
              required
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white appearance-none cursor-pointer"
            >
              <option value="" disabled selected className="bg-navy">Select a service</option>
              <option value="renovation" className="bg-navy">{t.services.items.tiles}</option>
              <option value="flooring" className="bg-navy">{t.services.items.flooring}</option>
              <option value="painting" className="bg-navy">{t.services.items.painting}</option>
              <option value="other" className="bg-navy">Other / Mix</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2">
            {t.contact.form.message}
          </label>
          <textarea
            required
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white resize-none placeholder:text-white/10"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full group relative overflow-hidden gold-gradient text-navy font-black py-5 rounded-2xl flex items-center justify-center gap-4 hover:shadow-[0_0_40px_rgba(212,165,44,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center gap-4 text-xl uppercase tracking-widest">
            {isLoading ? 'Sending...' : t.contact.form.send} 
            {!isLoading && <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          </span>
        </button>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-md w-full p-12 rounded-[3rem] border-gold/30 text-center relative"
            >
              <button 
                onClick={() => setIsSubmitted(false)}
                className="absolute top-6 right-6 text-white/20 hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-8 shadow-[0_0_40px_rgba(212,165,44,0.1)]">
                <CheckCircle2 size={48} />
              </div>

              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white mb-4">
                {t.contact.form.successTitle}
              </h2>
              <p className="text-muted text-lg font-serif italic mb-10 leading-relaxed">
                {t.contact.form.successSubtitle}
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold uppercase tracking-widest hover:bg-gold hover:text-navy hover:border-gold transition-all"
              >
                {t.contact.form.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
