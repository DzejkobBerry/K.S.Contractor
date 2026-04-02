"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2, X } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const namePlaceholder = language === 'pl' ? 'Jan Kowalski' : 'Jan Jansen';
  const servicePlaceholder = language === 'pl' ? 'Wybierz usługę' : 'Kies een dienst';
  const otherLabel = language === 'pl' ? 'Inne / Mix' : 'Overig / Mix';
  const messagePlaceholder =
    language === 'pl' ? 'Opisz krótko swój projekt...' : 'Vertel ons kort over je project...';
  const sendingLabel = language === 'pl' ? 'Wysyłanie...' : 'Verzenden...';
  const networkErrorLabel =
    language === 'pl' ? 'Nie udało się wysłać wiadomości. Spróbuj ponownie.' : 'Verzenden mislukt. Probeer het opnieuw.';
  const serverErrorLabel =
    language === 'pl' ? 'Wystąpił błąd po stronie serwera. Spróbuj ponownie później.' : 'Er is een serverfout opgetreden. Probeer het later opnieuw.';
  const requiredLabel = language === 'pl' ? 'Wymagane' : 'Verplicht';
  const invalidEmailLabel = language === 'pl' ? 'Niepoprawny e-mail' : 'Ongeldig e-mailadres';

  const getSubjectLabel = (v: string) => {
    if (v === 'renovation') return t.services.items.tiles;
    if (v === 'flooring') return t.services.items.flooring;
    if (v === 'painting') return t.services.items.painting;
    if (v === 'other') return otherLabel;
    return v;
  };

  const mapFieldError = (v: string) => {
    if (v === 'required') return requiredLabel;
    if (v === 'invalid_email') return invalidEmailLabel;
    return v;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);
    setFieldErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          subject: getSubjectLabel(form.subject),
          message: form.message,
        }),
      });

      const json = (await res.json().catch(() => null)) as
        | {
            ok?: boolean;
            success?: boolean;
            message?: string;
            error?: string;
            errors?: Record<string, string>;
          }
        | null;

      const isOk = Boolean(json && (json.ok === true || json.success === true));
      if (!res.ok || !json || !isOk) {
        if (json && typeof json === 'object' && 'errors' in json && json.errors) {
          const mapped: Record<string, string> = {};
          for (const [k, v] of Object.entries(json.errors)) mapped[k] = mapFieldError(v);
          setFieldErrors(mapped);
          setSubmitError(language === 'pl' ? 'Popraw błędy w formularzu.' : 'Corrigeer de fouten in het formulier.');
        } else {
          const msg = (json?.error ?? json?.message)?.toString().trim();
          if (msg) setSubmitError(msg);
          else setSubmitError(res.status >= 500 ? serverErrorLabel : networkErrorLabel);
        }
        return;
      }

      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
    } catch {
      setSubmitError(networkErrorLabel);
    } finally {
      setIsLoading(false);
    }
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
              placeholder={namePlaceholder}
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white placeholder:text-white/10"
            />
            <p className={`text-red-400 text-sm font-semibold ml-2 ${fieldErrors.name ? '' : 'opacity-0'}`}>
              {fieldErrors.name || '\u00A0'}
            </p>
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2">
              {t.contact.form.phone}
            </label>
            <input
              required
              type="tel"
              placeholder="+31 000 000 000"
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white placeholder:text-white/10"
            />
            <p className={`text-red-400 text-sm font-semibold ml-2 ${fieldErrors.phone ? '' : 'opacity-0'}`}>
              {fieldErrors.phone || '\u00A0'}
            </p>
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
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white placeholder:text-white/10"
            />
            {fieldErrors.email && (
              <p className="text-red-400 text-sm font-semibold ml-2">{fieldErrors.email}</p>
            )}
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2">
              {t.contact.form.subject}
            </label>
            <select
              required
              value={form.subject}
              onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-navy">{servicePlaceholder}</option>
              <option value="renovation" className="bg-navy">{t.services.items.tiles}</option>
              <option value="flooring" className="bg-navy">{t.services.items.flooring}</option>
              <option value="painting" className="bg-navy">{t.services.items.painting}</option>
              <option value="other" className="bg-navy">{otherLabel}</option>
            </select>
            {fieldErrors.subject && (
              <p className="text-red-400 text-sm font-semibold ml-2">{fieldErrors.subject}</p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-bold text-muted uppercase tracking-[0.2em] ml-2">
            {t.contact.form.message}
          </label>
          <textarea
            required
            rows={5}
            placeholder={messagePlaceholder}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold focus:bg-white/[0.05] transition-all text-white resize-none placeholder:text-white/10"
          />
          {fieldErrors.message && (
            <p className="text-red-400 text-sm font-semibold ml-2">{fieldErrors.message}</p>
          )}
        </div>

        {submitError && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-4 text-red-100 font-semibold">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full group relative overflow-hidden gold-gradient text-navy font-black py-5 rounded-2xl flex items-center justify-center gap-4 hover:shadow-[0_0_40px_rgba(212,165,44,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center gap-4 text-xl uppercase tracking-widest">
            {isLoading ? sendingLabel : t.contact.form.send} 
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
