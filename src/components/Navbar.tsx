"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const { t, language, setLanguage } = useLanguage();
  const pathnameRaw = usePathname();
  const pathname = pathnameRaw ?? '/';

  const FlagIcon = ({ code, className }: { code: 'pl' | 'nl'; className?: string }) => {
    if (code === 'pl') {
      return (
        <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
          <rect width="24" height="8" x="0" y="0" fill="#ffffff" />
          <rect width="24" height="8" x="0" y="8" fill="#dc143c" />
          <rect width="24" height="16" x="0" y="0" fill="none" stroke="rgba(255,255,255,0.18)" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
        <rect width="24" height="16" x="0" y="0" fill="#21468b" />
        <rect width="24" height="10.67" x="0" y="0" fill="#ffffff" />
        <rect width="24" height="5.33" x="0" y="0" fill="#ae1c28" />
        <rect width="24" height="16" x="0" y="0" fill="none" stroke="rgba(255,255,255,0.18)" />
      </svg>
    );
  };

  const LanguageSwitch = ({ size }: { size: 'sm' | 'lg' }) => {
    const isSmall = size === 'sm';

    return (
      <div
        className={cn(
          'relative flex items-center rounded-full border border-white/10 bg-white/5 p-1 overflow-hidden',
          isSmall ? 'h-9 w-[104px]' : 'h-12 w-full'
        )}
      >
        <motion.div
          className="absolute left-1 top-1 bottom-1 w-1/2 rounded-full bg-gold"
          animate={{ x: language === 'pl' ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
        <button
          type="button"
          onClick={() => setLanguage('pl')}
          className={cn(
            'relative z-10 flex-1 rounded-full transition-colors flex items-center justify-center',
            language === 'pl' ? 'text-navy' : 'text-white/80 hover:text-white'
          )}
          aria-label="Polski"
        >
          <FlagIcon code="pl" className={cn(isSmall ? 'h-4 w-6' : 'h-5 w-8', 'rounded-sm')} />
        </button>
        <button
          type="button"
          onClick={() => setLanguage('nl')}
          className={cn(
            'relative z-10 flex-1 rounded-full transition-colors flex items-center justify-center',
            language === 'nl' ? 'text-navy' : 'text-white/80 hover:text-white'
          )}
          aria-label="Nederlands"
        >
          <FlagIcon code="nl" className={cn(isSmall ? 'h-4 w-6' : 'h-5 w-8', 'rounded-sm')} />
        </button>
      </div>
    );
  };

  useEffect(() => {
    // Setup portal root in body
    let portalElement = document.getElementById('navbar-portal');
    if (!portalElement) {
      portalElement = document.createElement('div');
      portalElement.id = 'navbar-portal';
      document.body.appendChild(portalElement);
    }
    setPortalRoot(portalElement);

    return () => {
      // Cleanup if empty
      if (portalElement?.children.length === 0) {
        portalElement?.remove();
      }
    };
  }, []);

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
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-4 px-4 sm:px-6 w-full',
        'pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]',
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent',
        isOpen ? 'hidden md:block' : 'block'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between min-w-0 relative z-10">
        <Link href="/" className="flex items-center gap-2 group min-w-0">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center text-navy font-bold text-xl">
            KS
          </div>
          <span className="min-w-0 text-base sm:text-xl font-display font-bold tracking-tight group-hover:text-gold transition-colors whitespace-nowrap truncate">
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
          
          <div className="flex items-center gap-3 ml-4 border-l border-white/10 pl-6">
            <Globe size={16} className="text-gold/70" />
            <LanguageSwitch size="sm" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-light relative z-[101]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t.common.closeMenu : t.common.openMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>

    {/* Mobile Menu Portal */}
    {portalRoot && ReactDOM.createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[40] md:hidden overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label={t.common.closeMenu}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[40] pointer-events-auto"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 35 }}
              className="fixed top-0 right-0 h-full w-[86vw] max-w-sm bg-navy border-l border-white/10 shadow-2xl overflow-y-auto overflow-x-hidden overscroll-contain z-[9999]"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center text-navy font-bold text-xl">
                    KS
                  </div>
                  <div className="leading-tight">
                    <p className="text-base font-display font-black tracking-tight">
                      K.S. <span className="text-gold">Contractor</span>
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted">{t.common.menu}</p>
                  </div>
                </div>
                <button type="button" className="text-light" onClick={() => setIsOpen(false)} aria-label={t.common.closeMenu}>
                  <X size={28} />
                </button>
              </div>

              <div className="px-6 py-8 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'rounded-2xl px-5 py-4 border transition-all flex items-center justify-between',
                      isActive(link)
                        ? 'border-gold/40 bg-gold/10 text-gold'
                        : 'border-white/10 bg-white/[0.02] text-white/90 hover:bg-white/[0.04]'
                    )}
                  >
                    <span className="min-w-0 text-sm sm:text-base font-black uppercase tracking-[0.22em] truncate">{link.name}</span>
                    <span className={cn('w-2 h-2 rounded-full', isActive(link) ? 'bg-gold' : 'bg-white/20')} />
                  </Link>
                ))}
              </div>

              <div className="mt-auto px-6 pb-8">
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe size={18} className="text-gold/80" />
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-white/80">Język</p>
                  </div>
                  <LanguageSwitch size="lg" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      ,
      portalRoot
    )}
  </>
  );
};
