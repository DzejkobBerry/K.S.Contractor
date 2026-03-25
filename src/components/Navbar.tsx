"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, language, setLanguage } = useLanguage();
  const pathnameRaw = usePathname();
  const pathname = pathnameRaw ?? '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Track active section for hash links
      if (pathname === '/') {
        const sections = ['home', 'about', 'services', 'testimonials'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname && pathname !== '/') {
      setActiveSection(pathname.substring(1));
    } else if (!window.location.hash) {
      setActiveSection('home');
    }
  }, [pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/#home', id: 'home' },
    { name: t.nav.about, path: '/#about', id: 'about' },
    { name: t.nav.services, path: '/#services', id: 'services' },
    { name: t.nav.testimonials, path: '/#testimonials', id: 'testimonials' },
    { name: t.nav.gallery, path: '/gallery', id: 'gallery' },
    { name: t.nav.contact, path: '/contact', id: 'contact' },
  ];

  const isActive = (link: typeof navLinks[0]) => {
    if (link.path.startsWith('/#')) {
      return activeSection === link.id && pathname === '/';
    }
    return pathname === link.path;
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center text-navy font-bold text-xl">
            KS
          </div>
          <span className="text-xl font-display font-bold tracking-tight group-hover:text-gold transition-colors">
            K.S. <span className="text-gold">Contractor</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                'text-sm font-medium uppercase tracking-widest hover:text-gold transition-all relative py-2',
                isActive(link) ? 'text-gold' : 'text-light/80'
              )}
            >
              {link.name}
              {isActive(link) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l border-white/10 pl-6">
            <button
              onClick={() => setLanguage('pl')}
              className={cn(
                'text-xs font-bold px-2 py-1 rounded transition-all',
                language === 'pl' ? 'bg-gold text-navy' : 'text-muted hover:text-light'
              )}
            >
              PL
            </button>
            <button
              onClick={() => setLanguage('nl')}
              className={cn(
                'text-xs font-bold px-2 py-1 rounded transition-all',
                language === 'nl' ? 'bg-gold text-navy' : 'text-muted hover:text-light'
              )}
            >
              NL
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-navy border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium transition-colors flex items-center justify-between',
                  isActive(link) ? 'text-gold' : 'text-light/90'
                )}
              >
                {link.name}
                {isActive(link) && <div className="w-2 h-2 rounded-full bg-gold" />}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => { setLanguage('pl'); setIsOpen(false); }}
                className={cn('flex-1 py-3 rounded-lg font-bold', language === 'pl' ? 'bg-gold text-navy' : 'bg-white/5')}
              >
                Polski
              </button>
              <button
                onClick={() => { setLanguage('nl'); setIsOpen(false); }}
                className={cn('flex-1 py-3 rounded-lg font-bold', language === 'nl' ? 'bg-gold text-navy' : 'bg-white/5')}
              >
                Nederlands
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
