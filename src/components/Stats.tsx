import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Users, ShieldCheck, Award } from 'lucide-react';

export const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '150+', label: t.stats.projects, icon: Target },
    { value: '100%', label: t.stats.clients, icon: Users },
    { value: '12', label: t.stats.experience, icon: ShieldCheck },
    { value: '15', label: t.stats.team, icon: Award },
  ];

  return (
    <section id="stats" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-12 text-center group hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
              </div>
              <h3 className="text-6xl md:text-7xl font-display font-black text-gold-gradient mb-4 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted font-mono font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
