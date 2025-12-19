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
              스토어
            </Link>
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
        <nav className="flex flex-col p-8 gap-6">
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
            스토어 바로가기
          </Link>
        </nav>
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
              <p className="text-sm leading-relaxed">
                과학적 데이터와 AI 기술을 결합하여<br/>당신만을 위한 정밀 건강 관리를 제공합니다.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">서비스</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about">회사소개</Link></li>
                <li><Link to="/products">제품소개</Link></li>
                <li><Link to="/facility">시설안내</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">고객센터</h4>
              <div className="text-sm space-y-2">
                <p className="text-lg font-bold text-white">1588-1234</p>
                <p>평일 09:00 ~ 18:00 (주말 공휴일 휴무)</p>
                <p>contact@incarebio.co.kr</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">주소</h4>
              <p className="text-sm leading-relaxed">
                서울특별시 강남구 테헤란로 123<br/>인케어바이오 빌딩 7층
              </p>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2024 IncareBio. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/terms">이용약관</Link>
              <Link to="/privacy" className="font-bold text-white">개인정보처리방침</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;