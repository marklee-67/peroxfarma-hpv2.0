import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Home: React.FC = () => {
  const { homeConfig, t } = useProducts();

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-navy flex items-center pt-20">
        {/* Decorative elements with new theme colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[90%] bg-primary/30 blur-[130px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[70%] bg-secondary/15 blur-[110px] rounded-full"></div>
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-primary-deep/10 blur-[90px] rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <ScrollAnimationWrapper animation="fade-in-up">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(133,171,213,0.8)]"></span>
                  <span className="text-xs font-black text-white tracking-[0.2em] uppercase">{homeConfig.heroBadge}</span>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-in-up" delay={0.1}>
                <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] tracking-tight whitespace-pre-line">
                  {homeConfig.heroTitle}
                </h1>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-in-up" delay={0.2}>
                <p className="text-lg md:text-2xl text-slate-300 max-w-xl leading-relaxed break-keep">
                  {homeConfig.heroDesc}
                </p>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper className="flex flex-wrap gap-5" animation="fade-in-up" delay={0.3}>
                <a 
                  href={homeConfig.heroStartUrl} 
                  className="h-16 px-12 flex items-center justify-center rounded-full bg-secondary text-white font-black text-xl hover:brightness-110 transition-all shadow-2xl shadow-secondary/30 transform hover:-translate-y-1"
                >
                  {t.home.startBtn}
                </a>
                <Link to="/facility" className="h-16 px-12 flex items-center justify-center rounded-full border-2 border-white/30 text-white font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                  {t.home.consultBtn}
                </Link>
              </ScrollAnimationWrapper>
            </div>

            <ScrollAnimationWrapper animation="zoom-in" delay={0.2} className="relative">
              <div className="relative aspect-square w-full max-w-[650px] mx-auto">
                {/* Visual frame with Primary-Deep color border */}
                <div className="w-full h-full overflow-hidden image-mask-blob border-[16px] border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative z-20 bg-navy-700/50 backdrop-blur-3xl">
                  <img 
                    src={homeConfig.heroImageUrl} 
                    alt="Data Driven Health" 
                    className="w-full h-full object-cover opacity-85 mix-blend-screen scale-110"
                  />
                </div>
                {/* Accent glow behind image */}
                <div className="absolute inset-0 bg-primary/20 blur-[60px] image-mask-blob z-10 scale-95"></div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Services Section with Sky Blue Accents */}
      <section className="py-40 bg-background-light">
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <ScrollAnimationWrapper animation="fade-in-up">
              <h4 className="text-primary-deep font-black uppercase tracking-[0.3em] mb-6 text-sm">{homeConfig.serviceSubtitle}</h4>
              <h2 className="text-3xl md:text-6xl font-black text-navy leading-tight whitespace-nowrap">
                {homeConfig.serviceTitle}
              </h2>
            </ScrollAnimationWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {homeConfig.services.map((item, idx) => (
              <ScrollAnimationWrapper 
                key={idx} 
                animation="fade-in-up" 
                delay={idx * 0.1}
                className="group p-12 rounded-[50px] bg-white hover:bg-primary hover:shadow-[0_30px_60px_rgba(133,171,213,0.3)] transition-all duration-500 border border-slate-100 hover:border-transparent"
              >
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-sm">
                  <span className="material-symbols-outlined text-5xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-navy mb-5 group-hover:text-white transition-colors duration-500">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed break-keep group-hover:text-white/80 transition-colors duration-500 text-lg">{item.desc}</p>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section using Secondary color for impact */}
      <section className="py-40">
        <div className="container mx-auto max-w-[1400px] px-4">
          <ScrollAnimationWrapper animation="zoom-in">
            <div className="relative overflow-hidden rounded-[80px] bg-navy-800 p-16 md:p-32 text-center shadow-2xl">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/20 blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-secondary/10 blur-[100px]"></div>
              </div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-tight whitespace-pre-line">
                  {t.home.ctaTitle}
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 mb-16 break-keep max-w-2xl mx-auto opacity-80">
                  {t.home.ctaDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Link to="/contact" className="h-20 px-16 flex items-center justify-center rounded-full bg-white text-navy font-black text-xl hover:bg-slate-100 transition-all shadow-xl">
                    {t.home.signupBtn}
                  </Link>
                  <Link to="/products" className="h-20 px-16 flex items-center justify-center rounded-full bg-secondary text-white font-black text-xl hover:brightness-110 transition-all shadow-xl shadow-secondary/30">
                    {t.home.shopBtn}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;