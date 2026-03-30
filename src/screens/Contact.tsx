"use client";
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  const getInTouchLabel = language === 'pl' ? 'Skontaktuj się' : 'Neem contact op';
  const quoteTitlePrefix = language === 'pl' ? 'Poproś o wycenę ' : 'Vraag een ';
  const quoteTitleEmphasis = language === 'pl' ? 'Premium' : 'Premium';
  const quoteTitleSuffix = language === 'pl' ? '' : ' offerte';
  const hqLabel = language === 'pl' ? 'Nasza siedziba w Rotterdamie' : 'Ons hoofdkantoor in Rotterdam';
  const certTitle = language === 'pl' ? 'Certyfikaty VCA & GPI' : 'VCA & GPI gecertificeerd';
  const certDesc =
    language === 'pl'
      ? 'Gwarantujemy profesjonalne standardy bezpieczeństwa na wszystkich placach budowy w Holandii.'
      : 'Professionele veiligheidsnormen gegarandeerd op alle bouwplaatsen in Nederland.';

  return (
    <div id="contact" className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">
                {getInTouchLabel}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-8">
              {t.contact.title}
            </h1>
            <p className="text-muted text-xl font-serif italic mb-16 max-w-md leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-12">
              <div className="group flex gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500 shrink-0">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">{t.contact.details.location}</h3>
                  <div className="space-y-2 text-muted text-lg">
                    <p className="font-bold text-white text-xl">{t.contact.details.area}</p>
                    <p>{t.contact.details.largeProjects}</p>
                    <p>{t.contact.details.smallProjects}</p>
                  </div>
                </div>
              </div>

              <div className="group flex gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500 shrink-0">
                  <Clock size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">{t.contact.details.hours}</h3>
                  <div className="space-y-2 text-muted text-lg">
                    <p>{t.contact.details.weekdays}</p>
                    <p>{t.contact.details.saturday}</p>
                    <p>{t.contact.details.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="group flex gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500 shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">{certTitle}</h3>
                  <p className="text-muted text-lg leading-relaxed">{certDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-10 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] border-gold/20 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black uppercase italic tracking-tighter mb-12 text-white">
                {quoteTitlePrefix}<span className="text-gold">{quoteTitleEmphasis}</span>{quoteTitleSuffix}
              </h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 px-8 py-4 bg-navy border border-gold/30 rounded-full z-20 shadow-[0_0_40px_rgba(212,165,44,0.2)]">
            <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
            <span className="text-gold font-bold uppercase tracking-widest text-sm">{hqLabel}</span>
          </div>
          
          <div className="rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden h-[360px] sm:h-[500px] border border-gold/20 relative group">
            <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157606.3533471465!2d4.341457106720525!3d51.92807123184617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335e5d199201%3A0xaf0d35a716c89720!2sRotterdam%2C%20Netherlands!5e0!3m2!1sen!2spl!4v1711354821000!5m2!1sen!2spl"
              allowFullScreen
              className="relative z-0 grayscale invert contrast-[1.2] brightness-[0.8] group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-1000"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
