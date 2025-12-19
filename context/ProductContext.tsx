import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { KO_DATA } from '../i18n/ko';
import { EN_DATA } from '../i18n/en';

export interface Product {
  id: number;
  tag: string;
  title: string;
  desc: string;
  img: string;
}

export interface HomeConfig {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  heroImageUrl: string;
  heroStartUrl: string;
  serviceSubtitle: string;
  serviceTitle: string;
  services: { icon: string; title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
}

export interface FacilityConfig {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  principles: { icon: string; title: string; desc: string }[];
  certificationTitle: string;
  certificationDesc: string;
  certificationImageUrl: string;
}

export interface ShopConfig {
  url: string;
  companyName: string;
  description: string;
}

export interface AboutConfig {
  introText: string;
  mainImageUrl: string;
}

export interface ProductsConfig {
  introText: string;
  mainImageUrl: string;
}

export interface ContactConfig {
  pageTitle: string;
  pageSubtitle: string;
  formTitle: string;
  heroImageUrl: string;
}

export interface AdminCredentials {
  id: string;
  pw: string;
}

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  lang: 'KO' | 'EN';
}

interface ProductContextType {
  lang: 'KO' | 'EN';
  setLang: (lang: 'KO' | 'EN') => void;
  t: typeof KO_DATA;
  products: Product[];
  updateProduct: (updatedProduct: Product) => void;
  homeConfig: HomeConfig;
  updateHomeConfig: (config: HomeConfig) => void;
  facilityConfig: FacilityConfig;
  updateFacilityConfig: (config: FacilityConfig) => void;
  termsContent: string;
  setTermsContent: (content: string) => void;
  privacyContent: string;
  setPrivacyContent: (content: string) => void;
  shopConfig: ShopConfig;
  updateShopConfig: (config: ShopConfig) => void;
  aboutConfig: AboutConfig;
  updateAboutConfig: (config: AboutConfig) => void;
  productsConfig: ProductsConfig;
  updateProductsConfig: (config: ProductsConfig) => void;
  contactConfig: ContactConfig;
  updateContactConfig: (config: ContactConfig) => void;
  adminCredentials: AdminCredentials;
  updateAdminCredentials: (creds: AdminCredentials) => void;
  inquiries: Inquiry[];
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'lang'>) => void;
  deleteInquiry: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getStoredItem = (key: string, defaultValue: any) => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
      return defaultValue;
    } catch (e) {
      return defaultValue;
    }
  };

  const [lang, setLangState] = useState<'KO' | 'EN'>(() => (localStorage.getItem('appLang') as any) || 'KO');
  const t = lang === 'KO' ? KO_DATA : EN_DATA;

  const getInitialHome = (l: 'KO' | 'EN') => {
    const curT = l === 'KO' ? KO_DATA : EN_DATA;
    return {
      ...curT.home,
      // Updated to a high-quality "Data-driven Health" image (Digital DNA sequence)
      heroImageUrl: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2064&auto=format&fit=crop',
      heroStartUrl: 'https://www.peroxfarma-hpv2-0-mbfy.vercel.app',
      services: [
        { icon: 'biotech', title: l === 'KO' ? 'DNA 분석 기술' : 'DNA Analysis', desc: l === 'KO' ? '유전체 분석을 통해 신체적 특징을 파악합니다.' : 'Identify physical characteristics through genomic analysis.' },
        { icon: 'clinical_notes', title: l === 'KO' ? '라이프스타일 트래킹' : 'Lifestyle Tracking', desc: l === 'KO' ? '식습관과 운동 데이터를 실시간 수집합니다.' : 'Collecting diet and exercise data in real-time.' },
        { icon: 'medication_liquid', title: l === 'KO' ? '맞춤형 영양 설계' : 'Custom Nutrition', desc: l === 'KO' ? '내 몸에 꼭 필요한 성분만을 조합합니다.' : 'Combines only the ingredients your body really needs.' }
      ]
    };
  };

  const getInitialFacility = (l: 'KO' | 'EN') => {
    return {
      heroTitle: l === 'KO' ? '최첨단 제조시설' : 'State-of-the-art Facility',
      heroSubtitle: l === 'KO' ? '엄격한 품질 관리 시스템' : 'Strict Quality Control System',
      heroImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGQKj5M3L-nPCNn_GKUV7yxZi9LjxuGkt-UZCWvyZQmDEsStLTTe2XQIksVsLdqAxVDNz5huWRKVjKS4x0E-SX6JOycGzlBQhK1rNKeCjEUsw1kdbvWZnprQVq3Nl9coS_-9ti6Ms-F_9136F4_d_t_RzmsJvcvoJhgISKnhoW3MmqKVcJaT71UST1tHrw_3KJ74KDd0qs-TFuzRxOWH3iuCwpjAEKMfpzKP89TUd2un-gEf624Z6oX4l7MFPUWH-vJJkVRo8aiI0',
      principles: [
        { icon: 'verified', title: l === 'KO' ? '안정성 보장' : 'Safety Guaranteed', desc: l === 'KO' ? '모든 제조 공정은 국제 안전 기준을 준수합니다.' : 'All manufacturing processes comply with international safety standards.' },
        { icon: 'psychology', title: l === 'KO' ? '기술 혁신' : 'Tech Innovation', desc: l === 'KO' ? '끊임없는 기술 개발로 정밀 제조를 실현합니다.' : 'Realizing precision manufacturing through constant development.' },
        { icon: 'high_quality', title: l === 'KO' ? '최상급 원료' : 'Premium Ingredients', desc: l === 'KO' ? '전 세계에서 엄선한 최상급 원료만을 사용합니다.' : 'Only top-grade ingredients carefully selected worldwide.' }
      ],
      certificationTitle: l === 'KO' ? '품질 및 안전 인증' : 'Quality & Safety Certifications',
      certificationDesc: l === 'KO' ? 'IncareBio는 GMP, HACCP, ISO 등 글로벌 표준 인증을 획득하여 소비자에게 가장 안전한 제품만을 제공할 것을 약속드립니다.' : 'IncareBio promises to provide only the safest products by obtaining global standard certifications such as GMP, HACCP, and ISO.',
      certificationImageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    };
  };

  const [products, setProducts] = useState<Product[]>(() => getStoredItem(`products_${lang}`, t.products.items));
  const [homeConfig, setHomeConfig] = useState<HomeConfig>(() => getStoredItem(`homeConfig_${lang}`, getInitialHome(lang)));
  const [facilityConfig, setFacilityConfig] = useState<FacilityConfig>(() => getStoredItem(`facilityConfig_${lang}`, getInitialFacility(lang)));
  const [termsContent, setTermsContentState] = useState<string>(() => localStorage.getItem(`termsContent_${lang}`) || (lang === 'KO' ? '이용약관 기본 내용입니다.' : 'Terms of service content.'));
  const [privacyContent, setPrivacyContentState] = useState<string>(() => localStorage.getItem(`privacyContent_${lang}`) || (lang === 'KO' ? '개인정보처리방침 기본 내용입니다.' : 'Privacy policy content.'));
  const [shopConfig, setShopConfig] = useState<ShopConfig>(() => getStoredItem(`shopConfig_${lang}`, { url: '', companyName: '', description: '' }));
  const [aboutConfig, setAboutConfig] = useState<AboutConfig>(() => getStoredItem(`aboutConfig_${lang}`, {
    introText: lang === 'KO' ? '과학적 데이터와 기술력을 바탕으로\n인류의 건강한 수명 연장을 실현합니다.' : 'Realizing healthy life extension for mankind\nbased on scientific data and technology.',
    mainImageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop'
  }));
  const [productsConfig, setProductsConfig] = useState<ProductsConfig>(() => getStoredItem(`productsConfig_${lang}`, {
    introText: lang === 'KO' ? '개인의 건강 데이터를 분석하여 최적화된 영양 솔루션을 제공합니다.' : 'We provide optimized nutritional solutions by analyzing individual health data.',
    mainImageUrl: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=2070&auto=format&fit=crop'
  }));
  const [contactConfig, setContactConfig] = useState<ContactConfig>(() => getStoredItem(`contactConfig_${lang}`, {
    pageTitle: t.contact.pageTitle,
    pageSubtitle: t.contact.pageSubtitle,
    formTitle: t.contact.formTitle,
    heroImageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop'
  }));

  const [adminCredentials, setAdminCredentials] = useState<AdminCredentials>(() => getStoredItem('adminCredentials', { id: 'admin', pw: '121212' }));
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => getStoredItem('inquiries', []));

  useEffect(() => {
    localStorage.setItem('appLang', lang);
  }, [lang]);

  useEffect(() => {
    const curT = lang === 'KO' ? KO_DATA : EN_DATA;
    
    setHomeConfig(getStoredItem(`homeConfig_${lang}`, getInitialHome(lang)));
    setFacilityConfig(getStoredItem(`facilityConfig_${lang}`, getInitialFacility(lang)));
    setProducts(getStoredItem(`products_${lang}`, curT.products.items));
    setShopConfig(getStoredItem(`shopConfig_${lang}`, { url: '', companyName: '', description: '' }));
    
    setAboutConfig(getStoredItem(`aboutConfig_${lang}`, {
      introText: lang === 'KO' ? '과학적 데이터와 기술력을 바탕으로\n인류의 건강한 수명 연장을 실현합니다.' : 'Realizing healthy life extension for mankind\nbased on scientific data and technology.',
      mainImageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop'
    }));

    setProductsConfig(getStoredItem(`productsConfig_${lang}`, {
      introText: lang === 'KO' ? '개인의 건강 데이터를 분석하여 최적화된 영양 솔루션을 제공합니다.' : 'We provide optimized nutritional solutions by analyzing individual health data.',
      mainImageUrl: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=2070&auto=format&fit=crop'
    }));

    setContactConfig(getStoredItem(`contactConfig_${lang}`, {
      pageTitle: curT.contact.pageTitle,
      pageSubtitle: curT.contact.pageSubtitle,
      formTitle: curT.contact.formTitle,
      heroImageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop'
    }));

    setTermsContentState(localStorage.getItem(`termsContent_${lang}`) || (lang === 'KO' ? '이용약관 기본 내용입니다.' : 'Terms of service content.'));
    setPrivacyContentState(localStorage.getItem(`privacyContent_${lang}`) || (lang === 'KO' ? '개인정보처리방침 기본 내용입니다.' : 'Privacy policy content.'));

  }, [lang]);

  const setLang = (newLang: 'KO' | 'EN') => setLangState(newLang);
  const updateProduct = (up: Product) => setProducts(p => {
    const updated = p.map(pi => pi.id === up.id ? up : pi);
    localStorage.setItem(`products_${lang}`, JSON.stringify(updated));
    return updated;
  });

  const updateHomeConfig = (config: HomeConfig) => { setHomeConfig(config); localStorage.setItem(`homeConfig_${lang}`, JSON.stringify(config)); };
  const updateFacilityConfig = (config: FacilityConfig) => { setFacilityConfig(config); localStorage.setItem(`facilityConfig_${lang}`, JSON.stringify(config)); };
  const updateAboutConfig = (config: AboutConfig) => { setAboutConfig(config); localStorage.setItem(`aboutConfig_${lang}`, JSON.stringify(config)); };
  const updateContactConfig = (config: ContactConfig) => { setContactConfig(config); localStorage.setItem(`contactConfig_${lang}`, JSON.stringify(config)); };

  const addInquiry = (d: Omit<Inquiry, 'id' | 'date' | 'lang'>) => {
    const newInquiry: Inquiry = { ...d, id: Date.now(), date: new Date().toISOString(), lang };
    setInquiries(prev => {
      const updated = [newInquiry, ...prev];
      localStorage.setItem('inquiries', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ProductContext.Provider value={{ 
      lang, setLang, t,
      products, updateProduct,
      homeConfig, updateHomeConfig,
      facilityConfig, updateFacilityConfig,
      termsContent, setTermsContent: (c) => { setTermsContentState(c); localStorage.setItem(`termsContent_${lang}`, c); },
      privacyContent, setPrivacyContent: (c) => { setPrivacyContentState(c); localStorage.setItem(`privacyContent_${lang}`, c); },
      shopConfig, updateShopConfig: (c) => { setShopConfig(c); localStorage.setItem(`shopConfig_${lang}`, JSON.stringify(c)); },
      aboutConfig, updateAboutConfig,
      productsConfig, updateProductsConfig: (c) => { setProductsConfig(c); localStorage.setItem(`productsConfig_${lang}`, JSON.stringify(c)); },
      contactConfig, updateContactConfig,
      adminCredentials, updateAdminCredentials: (c) => { setAdminCredentials(c); localStorage.setItem('adminCredentials', JSON.stringify(c)); },
      inquiries, addInquiry,
      deleteInquiry: (id) => setInquiries(p => {
        const updated = p.filter(i => i.id !== id);
        localStorage.setItem('inquiries', JSON.stringify(updated));
        return updated;
      })
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProducts must be used within a ProductProvider');
  return context;
};