import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '회사소개', path: '/about' },
    { name: '제품소개', path: '/products' },
    { name: '시설안내', path: '/facility' },
    { name: '문의하기', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-sans">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome ? 'bg-navy/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 z-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shrink-0 shadow-lg">
              <span className="material-symbols-outlined text-2xl">health_and_safety</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">NutriPersonal</span>
              <span className="text-xs text-gray-400 font-medium tracking-widest">HEALTH</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-200 hover:text-primary relative py-1 ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/shop"
              className="group relative flex items-center justify-center overflow-hidden rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-secondary shadow-lg"
            >
              <span className="relative z-10">스토어</span>
            </Link>
            <div className="hidden lg:flex flex-col items-end text-white text-xs">
              <span className="text-gray-400">고객센터</span>
              <span className="font-bold text-sm">1588-1234</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[60] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Nav Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-navy shadow-2xl z-[70] transform transition-transform duration-300 md:hidden flex flex-col border-l border-white/10 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="font-bold text-lg text-white">메뉴</span>
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
            >
                <span className="material-symbols-outlined text-2xl">close</span>
            </button>
        </div>

        <div className="flex flex-col gap-2 p-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg px-4 py-3 rounded-xl transition-colors ${
                 isActive(link.path) 
                    ? 'text-primary bg-primary/10 font-bold' 
                    : 'text-gray-300 font-medium hover:bg-white/5'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-4"></div>
          <Link
            to="/shop"
            className="text-lg font-bold px-4 py-3 text-white bg-secondary hover:bg-white hover:text-secondary rounded-xl transition-colors text-center shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            스토어 바로가기
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full overflow-x-hidden">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-navy text-gray-400 pt-20 pb-10 border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shrink-0">
                   <span className="material-symbols-outlined text-2xl">health_and_safety</span>
                 </div>
                <h3 className="text-xl font-bold text-white">NutriPersonal</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                과학적인 접근을 통한 개인 맞춤형 건강 솔루션. NutriPersonal이 당신의 건강한 미래를 설계합니다.
              </p>
            </div>
            
             <div className="col-span-1 md:col-span-1">
              <h4 className="font-bold text-white mb-6 text-lg">회사소개</h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link to="/about" className="hover:text-primary transition-colors">회사소개</Link></li>
                <li><Link to="/facility" className="hover:text-primary transition-colors">시설안내</Link></li>
                <li><Link to="/products" className="hover:text-primary transition-colors">제품소개</Link></li>
              </ul>
            </div>

             <div className="col-span-1 md:col-span-1">
              <h4 className="font-bold text-white mb-6 text-lg">고객지원</h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link to="/contact" className="hover:text-primary transition-colors">문의하기</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">이용약관</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">개인정보처리방침</Link></li>
                <li><Link to="/admin" className="hover:text-primary transition-colors">관리자</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h4 className="font-bold text-white mb-6 text-lg">연락처</h4>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-start gap-3">
                   <span className="material-symbols-outlined text-primary">location_on</span>
                   <span>서울특별시 강남구 테헤란로 123</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-primary">call</span>
                   <span>1588-1234</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-primary">mail</span>
                   <span>contact@nutripersonal.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 NutriPersonal Health. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;