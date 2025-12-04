
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '서비스 소개', path: '/' },
    { name: '회사소개', path: '/about' },
    { name: '제품소개', path: '/products' },
    { name: '제조시설', path: '/facility' },
    { name: '문의하기', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-text-primary">Peroxfarmakorea</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-all duration-200 hover:text-primary relative py-1 ${
                  isActive(link.path) 
                    ? 'text-primary font-bold' 
                    : 'text-text-secondary font-medium'
                }`}
              >
                {link.name}
                {/* Active Underline Indicator */}
                <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-primary rounded-full transform transition-transform duration-200 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </Link>
            ))}
            {/* Shop Button */}
            <Link
              to="/shop"
              className="flex items-center justify-center rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-secondary/90 hover:shadow-lg"
            >
              쇼핑몰
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base px-3 py-2 rounded-lg transition-colors ${
                     isActive(link.path) 
                        ? 'text-primary bg-primary/10 font-bold' 
                        : 'text-text-secondary font-medium hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <Link
                to="/shop"
                className="text-base font-bold px-3 py-2 text-secondary hover:bg-secondary/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                쇼핑몰
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 pt-16 pb-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                 <div className="h-6 w-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Peroxfarmakorea</h3>
              </div>
              <p className="text-sm leading-relaxed">
                주소: 서울특별시 강남구 테헤란로 123, 45층<br/>
                고객센터: 1588-1234<br/>
                이메일: contact@peroxfarmakorea.com
              </p>
            </div>
            
             <div className="col-span-1 md:col-span-1">
              <h4 className="font-bold text-white mb-4">고객지원</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link to="/contact" className="hover:text-primary transition-colors">문의하기</Link></li>
                <li><Link to="/admin" className="hover:text-primary transition-colors">관리자</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">이용약관</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">개인정보처리방침</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h4 className="font-bold text-white mb-4">소셜 미디어</h4>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-primary hover:text-white hover:shadow-md transition-all">
                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-primary hover:text-white hover:shadow-md transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.163 1.802h2.326a.75.75 0 01.75.75v2.326a.75.75 0 01-.75.75h-2.326a.75.75 0 01-.75-.75V4.552a.75.75 0 01.75-.75zM12 6.848c-2.836 0-5.152 2.316-5.152 5.152s2.316 5.152 5.152 5.152 5.152-2.316 5.152-5.152S14.836 6.848 12 6.848zm0 8.482c-1.836 0-3.33-1.494-3.33-3.33s1.494-3.33 3.33-3.33 3.33 1.494 3.33 3.33-1.494 3.33-3.33 3.33z" fillRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Peroxfarmakorea. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
