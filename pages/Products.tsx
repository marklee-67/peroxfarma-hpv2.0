import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Products: React.FC = () => {
  const { products, productsConfig } = useProducts();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[500px]">
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
          <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight">
            제품소개
          </h1>
          <p className="text-3xl text-white/90 max-w-5xl whitespace-pre-line leading-relaxed">
            {productsConfig.introText}
          </p>
        </ScrollAnimationWrapper>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                 <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full mb-3">
                   {product.tag}
                 </span>
                 <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">{product.title}</h3>
                 <p className="text-sm text-text-secondary">{product.desc}</p>
               </div>
             </ScrollAnimationWrapper>
           ))}
        </div>
      </section>

      {/* Banner */}
      <section className="py-20 px-4">
        <ScrollAnimationWrapper 
          className="mx-auto max-w-[1200px] bg-primary rounded-2xl p-12 text-center text-white relative overflow-hidden"
          animation="zoom-in"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">이제 당신의 건강을 챙길 시간입니다</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              지금 바로 무료 건강 상담을 시작하고, 나에게 꼭 맞는 맞춤 영양제를 찾아보세요.
            </p>
            <Link to="/contact" className="inline-flex h-12 px-8 items-center justify-center rounded-full bg-white text-primary font-bold shadow-lg hover:bg-gray-50 transition-colors transform hover:scale-105">
              상담 신청하기
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