import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const hoursTitle = language === 'pl' ? 'Godziny otwarcia' : 'Openingstijden';
  const monFriLabel = language === 'pl' ? 'Pon - Pt:' : 'Ma - Vr:';
  const satLabel = language === 'pl' ? 'Sob:' : 'Za:';
  const sunLabel = language === 'pl' ? 'Niedz:' : 'Zo:';
  const sunValue = language === 'pl' ? 'Opcjonalnie' : 'Optioneel';
  const safetyCertified = language === 'pl' ? 'Certyfikat bezpieczeństwa' : 'Veiligheid gecertificeerd';
  const rights = language === 'pl' ? 'Wszelkie prawa zastrzeżone.' : 'Alle rechten voorbehouden.';
  const madeBy = language === 'pl' ? 'Strona wykonana przez' : 'Website door';
  const privacy = language === 'pl' ? 'Polityka prywatności' : 'Privacybeleid';
  const terms = language === 'pl' ? 'Warunki korzystania' : 'Algemene voorwaarden';

  const renderContractorCasing = (text: string) => {
    const key = 'Contractor';
    const index = text.indexOf(key);
    if (index === -1) return text;
    const before = text.slice(0, index);
    const after = text.slice(index + key.length);
    return (
      <>
        {before}
        <span className="normal-case">{key}</span>
        {after}
      </>
    );
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center text-navy font-bold">
                KS
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                K.S. <span className="text-gold">Contractor</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              {t.about.p1}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">{t.nav.services}</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>{t.services.items.tiles}</li>
              <li>{t.services.items.flooring}</li>
              <li>{t.services.items.painting}</li>
              <li>{t.services.items.drywall}</li>
              <li>{t.services.items.garden}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">{hoursTitle}</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex justify-between">
                <span>{monFriLabel}</span>
                <span className="text-white">07:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>{satLabel}</span>
                <span className="text-white">07:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>{sunLabel}</span>
                <span className="text-gold">{sunValue}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">{t.nav.contact}</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <a href="tel:+31687874004" className="hover:text-gold transition-colors">+31 6 87874004</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <a href="mailto:info@ks-contractor.nl" className="hover:text-gold transition-colors">info@ks-contractor.nl</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold font-bold">VCA</span>
                <span>{safetyCertified}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-muted/60">
          <p>© 2026 {renderContractorCasing('K.S. Contractor')}. {rights}</p>
          <p>{madeBy} <a href="https://bloompixel.studio" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">bloompixel.studio</a></p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">{privacy}</a>
            <a href="#" className="hover:text-gold transition-colors">{terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
