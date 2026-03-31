import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();

  const reviews = {
    pl: [
      { name: 'Marek Wiśniewski', text: 'Pełen profesjonalizm. Remont łazienki wykonany perfekcyjnie i w terminie. Polecam!', rating: 5, role: 'Właściciel Apartamentu' },
      { name: 'Anna Kowalska', text: 'Bardzo rzetelna firma. Panowie kładli u nas panele i malowali ściany. Wszystko wygląda świetnie.', rating: 5, role: 'Inwestor Prywatny' },
      { name: 'Janusz Nowak', text: 'Szybka wycena i jeszcze szybsza realizacja. Bardzo elastyczne godziny pracy.', rating: 5, role: 'Manager Projektu' },
      { name: 'Katarzyna Dąbrowska', text: 'Niesamowita dbałość o detale. Wykończenie wnętrz przerosło moje oczekiwania.', rating: 5, role: 'Projektantka Wnętrz' },
      { name: 'Robert Zieliński', text: 'Solidna ekipa, czysto i sprawnie. Najlepszy wykonawca w Rotterdamie.', rating: 5, role: 'Deweloper' },
      { name: 'Magdalena Lis', text: 'Bardzo pomocni przy wyborze materiałów. Efekt końcowy jest po prostu bajeczny.', rating: 5, role: 'Właścicielka Domu' },
    ],
    nl: [
      { name: 'Pieter de Vries', text: 'Zeer professioneel. De badkamerrenovatie is perfect en op tijd uitgevoerd. Aanbevolen!', rating: 5, role: 'Appartement Eigenaar' },
      { name: 'Sanne Bakker', text: 'Zeer betrouwbaar bedrijf. Ze hebben bij ons laminaat gelegd en de muren geschilderd. Alles ziet er geweldig uit.', rating: 5, role: 'Particuliere Belegger' },
      { name: 'Jan Jansen', text: 'Snelle offerte en nog snellere uitvoering. Zeer flexibele werktijden.', rating: 5, role: 'Project Manager' },
      { name: 'Karin de Boer', text: 'Ongelooflijke aandacht voor detail. De interieurafwerking overtrof mijn verwachtingen.', rating: 5, role: 'Interieurontwerper' },
      { name: 'Robert de Jong', text: 'Solide team, schoon en efficiënt. De beste aannemer in Rotterdam.', rating: 5, role: 'Ontwikkelaar' },
      { name: 'Magdalena de Wit', text: 'Zeer behulpzaam bij de materiaalkeuze. Het eindresultaat is simpelweg fantastisch.', rating: 5, role: 'Huiseigenaar' },
    ]
  };

  const currentReviews = reviews[language];

  return (
    <section id="testimonials" className="py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 block">{t.testimonials.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight pr-6 sm:pr-8">
              {t.testimonials.heading} <span className="text-gold-gradient">{t.testimonials.headingHighlight}</span>
            </h2>
          </div>
          <div className="text-muted text-xl font-serif italic max-w-md">
            "{t.testimonials.quote}"
          </div>
        </div>
      </div>

      {/* Infinite Slider */}
      <div className="relative flex overflow-hidden group/slider">
        <div 
          className="flex gap-12 whitespace-nowrap py-10 animate-marquee pause-on-hover"
        >
          {[...currentReviews, ...currentReviews].map((review, index) => (
            <div
              key={index}
              className="glass-card p-12 rounded-[3.5rem] relative group hover:border-gold/30 transition-all duration-700 w-[450px] shrink-0 whitespace-normal"
            >
              <Quote className="absolute top-12 right-12 text-gold/5 group-hover:text-gold/10 transition-colors" size={80} />
              
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-2xl text-white font-serif italic leading-relaxed mb-12 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center text-navy font-black text-xl shadow-[0_0_30px_rgba(212,165,44,0.2)]">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-xl uppercase tracking-tighter">{review.name}</p>
                  <p className="text-gold font-mono text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
