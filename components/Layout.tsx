
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { lang, setLang, t } = useProducts();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.products, path: '/products' },
    { name: t.nav.facility, path: '/facility' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-sans">
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
              <span className="material-symbols-outlined text-2xl">health_and_safety</span>
            </div>
            <span className={`text-xl font-black tracking-tight ${scrolled || !isHome ? 'text-navy' : 'text-white'}`}>IncareBio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : (scrolled || !isHome ? 'text-slate-600' : 'text-white/80')
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/shop"
              className="rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110 shadow-md"
            >
              {t.nav.shop}
            </Link>

            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  scrolled || !isHome ? 'text-slate-600 hover:bg-slate-100' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <span className="material-symbols-outlined text-xl">language</span>
                <span className="text-sm font-bold">{lang}</span>
                <span className={`material-symbols-outlined text-sm transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in-up origin-top-right">
                  <button 
                    onClick={() => { setLang('KO'); setIsLangOpen(false); }}
                    className={`w-full px-4 py-2 text-left text-sm font-bold flex items-center justify-between ${lang === 'KO' ? 'text-primary bg-primary/5' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    한국어 {lang === 'KO' && <span className="material-symbols-outlined text-sm">check</span>}
                  </button>
                  <button 
                    onClick={() => { setLang('EN'); setIsLangOpen(false); }}
                    className={`w-full px-4 py-2 text-left text-sm font-bold flex items-center justify-between ${lang === 'EN' ? 'text-primary bg-primary/5' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    English {lang === 'EN' && <span className="material-symbols-outlined text-sm">check</span>}
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            className={`md:hidden p-2 ${scrolled || !isHome ? 'text-navy' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-navy/95 z-[200] transition-all duration-500 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="font-black text-xl text-white">IncareBio</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <nav className="flex flex-col p-8 gap-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-bold ${isActive(link.path) ? 'text-primary' : 'text-white/70'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/shop"
            className="mt-4 w-full py-4 bg-secondary text-white text-center font-bold rounded-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.shop}
          </Link>
        </nav>

        <div className="p-8 border-t border-white/10 flex items-center justify-between">
          <span className="text-white/50 text-sm font-bold">LANGUAGE</span>
          <div className="flex bg-white/5 rounded-lg p-1">
            <button 
              onClick={() => setLang('KO')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${lang === 'KO' ? 'bg-primary text-white shadow-lg' : 'text-white/40'}`}
            >
              KO
            </button>
            <button 
              onClick={() => setLang('EN')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${lang === 'EN' ? 'bg-primary text-white shadow-lg' : 'text-white/40'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow pt-0">
        {children}
      </main>

      <footer className="bg-navy-900 text-white/60 py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined text-2xl">health_and_safety</span>
                </div>
                <h3 className="text-xl font-bold text-white">IncareBio</h3>
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">{t.footer.services}</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about">{t.nav.about}</Link></li>
                <li><Link to="/products">{t.nav.products}</Link></li>
                <li><Link to="/facility">{t.nav.facility}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">{t.footer.support}</h4>
              <div className="text-sm space-y-2">
                <p className="text-lg font-bold text-white">1588-1234</p>
                <p>09:00 ~ 18:00</p>
                <p>info@incarebio.co.kr</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">{t.footer.address_title}</h4>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {t.footer.address}
              </p>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div className="flex items-center gap-4">
              <p>© 2024 IncareBio. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link to="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
              <Link to="/privacy" className="font-bold text-white hover:text-white transition-colors">{t.footer.privacy}</Link>
              <Link to="/admin" className="hover:text-white transition-colors">{t.footer.admin}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
