import React, { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
  const { products, shopConfig, t } = useProducts();
  const [showPopup, setShowPopup] = useState(false);

  const hasShopInfo = shopConfig.companyName.trim() !== '';

  useEffect(() => {
    if (!hasShopInfo) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasShopInfo]);

  const displayTitle = shopConfig.companyName || t.shop.title;
  const displayDesc = shopConfig.description || t.shop.desc;

  return (
    <div className="w-full bg-background-light min-h-screen relative">
      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300">
          <div className="bg-black/80 text-white px-8 py-4 rounded-lg shadow-xl animate-bounce">
            <span className="text-lg font-bold">{t.shop.preparing}</span>
          </div>
        </div>
      )}

      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-text-primary mb-4 break-keep">{displayTitle}</h1>
          <p className="text-base md:text-lg text-text-secondary whitespace-pre-line break-keep leading-relaxed">
            {displayDesc}
          </p>
          {shopConfig.url && (
             <div className="mt-6">
                <a href={shopConfig.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-colors w-full sm:w-auto justify-center">
                    {t.shop.btn}
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
             </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all flex flex-col h-full">
              <div className="aspect-square bg-gray-50 relative group">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-2">
                    <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">{product.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2 break-keep">{product.title}</h3>
                <p className="text-sm text-text-secondary mb-6 line-clamp-2 flex-1 break-keep">{product.desc}</p>
                
                <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-text-secondary line-through">{t.shop.oldPrice}</span>
                        <span className="text-xl font-bold text-text-primary">{t.shop.price}</span>
                    </div>
                    <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">shopping_cart</span>
                        {t.shop.buyBtn}
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-20 bg-primary/5 rounded-2xl p-6 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 break-keep">{t.shop.bulkTitle}</h2>
            <p className="text-sm md:text-base text-text-secondary mb-8 break-keep">{t.shop.bulkDesc}</p>
            <Link to="/contact" className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors w-full sm:w-auto">
                {t.shop.bulkBtn}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;