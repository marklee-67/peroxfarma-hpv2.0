import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Products: React.FC = () => {
  const { products, productsConfig, t } = useProducts();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${productsConfig.mainImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <ScrollAnimationWrapper 
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
          animation="fade-in-up"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight">
            {t.products.heroTitle}
          </h1>
          <p className="text-lg md:text-3xl text-white/90 max-w-5xl whitespace-pre-line leading-relaxed">
            {productsConfig.introText}
          </p>
        </ScrollAnimationWrapper>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {products.map((product, idx) => (
             <ScrollAnimationWrapper 
               key={product.id} 
               className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full flex flex-col"
               animation="fade-in-up"
               delay={idx * 0.1}
             >
               <div className="aspect-square overflow-hidden bg-gray-50">
                 <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6 flex-1">
                 <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded-full mb-3">
                   {product.tag}
                 </span>
                 <h3 className="text-lg font-bold text-navy mb-2 leading-tight break-keep">{product.title}</h3>
                 <p className="text-sm text-slate-500 break-keep">{product.desc}</p>
               </div>
             </ScrollAnimationWrapper>
           ))}
        </div>
      </section>

      {/* Banner */}
      <section className="py-12 md:py-20 px-4">
        <ScrollAnimationWrapper 
          className="mx-auto max-w-[1200px] bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          animation="zoom-in"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 break-keep">{t.products.bannerTitle}</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto text-sm md:text-base break-keep">
              {t.products.bannerDesc}
            </p>
            <Link to="/contact" className="inline-flex h-12 px-8 items-center justify-center rounded-full bg-secondary text-white font-bold shadow-lg hover:brightness-110 transition-colors transform hover:scale-105 w-full sm:w-auto">
              {t.products.bannerBtn}
            </Link>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </ScrollAnimationWrapper>
      </section>
    </div>
  );
};

export default Products;