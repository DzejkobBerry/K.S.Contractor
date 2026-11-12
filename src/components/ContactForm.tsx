"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, ChevronDown, LoaderCircle, Send, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
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

  const namePlaceholder = language === 'pl' ? 'Jan Kowalski' : 'John Smith';
  const servicePlaceholder = language === 'pl' ? 'Wybierz usługę' : 'Select a service';
  const otherLabel = language === 'pl' ? 'Inne / Mix' : 'Other / Mixed services';
  const messagePlaceholder =
    language === 'pl' ? 'Opisz krótko swój projekt...' : 'Tell us briefly about your project...';
  const sendingLabel = language === 'pl' ? 'Wysyłanie...' : 'Sending...';
  const networkErrorLabel =
    language === 'pl' ? 'Nie udało się wysłać wiadomości. Spróbuj ponownie.' : 'The message could not be sent. Please try again.';
  const serverErrorLabel =
    language === 'pl' ? 'Wystąpił błąd po stronie serwera. Spróbuj ponownie później.' : 'A server error occurred. Please try again later.';
  const requiredLabel = language === 'pl' ? 'Wymagane' : 'Required';
  const invalidEmailLabel = language === 'pl' ? 'Niepoprawny e-mail' : 'Invalid email address';

  const getSubjectLabel = (v: string) => {
    if (v === 'renovation') return t.services.items.tiles;
    if (v === 'resin-flooring') return t.services.items.concreteFloor;
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

  const controlClass = (field: string) =>
    `min-h-14 w-full rounded-2xl border bg-black/25 px-5 py-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:bg-white/[0.04] focus:bg-white/[0.055] focus:ring-2 focus:ring-gold/15 ${
      fieldErrors[field]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-white/10 hover:border-white/20 focus:border-gold/70'
    }`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);
    setFieldErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept-Language': language },
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
          setSubmitError(language === 'pl' ? 'Popraw błędy w formularzu.' : 'Please correct the errors in the form.');
        } else {
          const msg = (json?.error ?? json?.message)?.toString().trim();
          if (res.status >= 500) setSubmitError(serverErrorLabel);
          else if (msg) setSubmitError(msg);
          else setSubmitError(networkErrorLabel);
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

  const ErrorSlot = ({ field }: { field: string }) => (
    <p className={`min-h-5 break-words px-1 text-xs font-semibold leading-5 text-red-400 ${fieldErrors[field] ? '' : 'invisible'}`}>
      {fieldErrors[field] || requiredLabel}
    </p>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="grid min-w-0 grid-cols-1 gap-x-5 gap-y-1 xl:grid-cols-2" noValidate={false}>
        <div className="min-w-0 space-y-2 pb-3">
          <label className="flex min-h-8 items-end px-1 text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-muted">
            {t.contact.form.name}
          </label>
          <input
            required
            type="text"
            placeholder={namePlaceholder}
            value={form.name}
            aria-invalid={Boolean(fieldErrors.name)}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className={controlClass('name')}
          />
          <ErrorSlot field="name" />
        </div>

        <div className="min-w-0 space-y-2 pb-3">
          <label className="flex min-h-8 items-end px-1 text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-muted">
            {t.contact.form.phone}
          </label>
          <input
            required
            type="tel"
            placeholder="+48 000 000 000"
            value={form.phone}
            aria-invalid={Boolean(fieldErrors.phone)}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            className={controlClass('phone')}
          />
          <ErrorSlot field="phone" />
        </div>

        <div className="min-w-0 space-y-2 pb-3">
          <label className="flex min-h-8 items-end px-1 text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-muted">
            {t.contact.form.email}
          </label>
          <input
            required
            type="email"
            placeholder="john@example.com"
            value={form.email}
            aria-invalid={Boolean(fieldErrors.email)}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className={controlClass('email')}
          />
          <ErrorSlot field="email" />
        </div>

        <div className="min-w-0 space-y-2 pb-3">
          <label className="flex min-h-8 items-end px-1 text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-muted">
            {t.contact.form.subject}
          </label>
          <div className="relative">
            <select
              required
              value={form.subject}
              aria-invalid={Boolean(fieldErrors.subject)}
              onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
              className={`${controlClass('subject')} cursor-pointer appearance-none pr-12 ${form.subject ? 'text-white' : 'text-white/35'}`}
            >
              <option value="" disabled className="bg-navy">{servicePlaceholder}</option>
              <option value="renovation" className="bg-navy text-white">{t.services.items.tiles}</option>
              <option value="resin-flooring" className="bg-navy text-white">{t.services.items.concreteFloor}</option>
              <option value="flooring" className="bg-navy text-white">{t.services.items.flooring}</option>
              <option value="painting" className="bg-navy text-white">{t.services.items.painting}</option>
              <option value="other" className="bg-navy text-white">{otherLabel}</option>
            </select>
            <ChevronDown size={19} aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold" />
          </div>
          <ErrorSlot field="subject" />
        </div>

        <div className="min-w-0 space-y-2 pb-3 xl:col-span-2">
          <label className="flex min-h-8 items-end px-1 text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-muted">
            {t.contact.form.message}
          </label>
          <textarea
            required
            rows={5}
            placeholder={messagePlaceholder}
            value={form.message}
            aria-invalid={Boolean(fieldErrors.message)}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className={`${controlClass('message')} min-h-36 resize-y`}
          />
          <ErrorSlot field="message" />
        </div>

        <AnimatePresence initial={false}>
          {submitError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="min-w-0 overflow-hidden xl:col-span-2"
            >
              <div className="mb-5 break-words rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm font-semibold leading-relaxed text-red-100">
                {submitError}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={shouldReduceMotion || isLoading ? undefined : { scale: 1.015 }}
          whileTap={shouldReduceMotion || isLoading ? undefined : { scale: 0.985 }}
          className="group relative mt-2 flex min-h-16 w-full items-center justify-center overflow-hidden rounded-2xl bg-gold px-5 py-4 text-black shadow-[0_0_0_rgba(212,165,44,0)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,165,44,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-4 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-55 xl:col-span-2"
        >
          <span className="relative z-10 flex min-w-0 items-center justify-center gap-3 text-center text-sm font-black uppercase leading-tight tracking-[0.14em] sm:text-base">
            {isLoading ? (
              <>
                {sendingLabel}
                <LoaderCircle size={21} className="shrink-0 animate-spin" />
              </>
            ) : (
              <>
                {t.contact.form.send}
                <Send size={21} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
              </>
            )}
          </span>
        </motion.button>
      </form>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/90 p-4 backdrop-blur-xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { scale: 0.92, y: 20 }}
              className="glass-card relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-[2rem] border-gold/30 p-6 text-center sm:p-10"
            >
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                aria-label={t.contact.form.close}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-gold/40 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-5 sm:top-5"
              >
                <X size={20} />
              </button>

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold shadow-[0_0_40px_rgba(212,165,44,0.12)] sm:h-24 sm:w-24 sm:mb-8">
                <CheckCircle2 size={44} />
              </div>

              <h2 id="contact-success-title" className="mb-4 pr-6 text-3xl font-black uppercase italic tracking-tighter text-white sm:pr-0 sm:text-4xl">
                {t.contact.form.successTitle}
              </h2>
              <p className="mb-8 font-serif text-base italic leading-relaxed text-muted sm:mb-10 sm:text-lg">
                {t.contact.form.successSubtitle}
              </p>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all hover:border-gold hover:bg-gold hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
