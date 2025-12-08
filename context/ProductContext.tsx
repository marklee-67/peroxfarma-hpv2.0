import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export interface Product {
  id: number;
  tag: string;
  title: string;
  desc: string;
  img: string;
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
}

interface ProductContextType {
  products: Product[];
  updateProduct: (updatedProduct: Product) => void;
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
  // New features
  adminCredentials: AdminCredentials;
  updateAdminCredentials: (creds: AdminCredentials) => void;
  inquiries: Inquiry[];
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'date'>) => void;
  deleteInquiry: (id: number) => void;
}

const defaultProducts: Product[] = [
  {
    id: 1,
    tag: '#면역강화',
    title: '면역 기능 강화 라인',
    desc: '환절기, 지친 일상 속에서 건강을 지켜주는 필수 영양소 조합.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAUSGuNkcLKDXckEX1naMAEXe4sT4JO8wzkXf_looBH3fDhom7Z-d_cDi0SapXzr0BCqvFh9fw9WB3z1Sqn0yipbni3ElF7mUOMv-HqxG2wCe4SdI4_UKG1KlkdLGSbwurNcsFJp03gXTpbLrFcz2EzRh0EzZsrk10qf60zMqTz1Oas-t4VK00-xHdjgvbyg7kXpWm2bBa9BeJV23L3c9tv0mQUfS_mNmZLivxEB7etGHHD0lcZ98VlCWVqRzl0DyEzDh4XDmXp2s'
  },
  {
    id: 2,
    tag: '#활력충전',
    title: '에너지 및 활력 증진 라인',
    desc: '아침을 개운하게, 하루를 활기차게 만들어주는 비타민 B군 복합체.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXs8ku-3T1dgT3fNd73oryva7rqS3GBWJTicB6p5V5aoNqmRh7T_7CPsZrCpv5_PvKO76fGNQxOz2_dExusMAjx89QELwntudozeeNdTVdKuzmI1NQcl4Lmeht657sBUnsqaLE0rKrdbec28SQsjTCl1zXmfuFBaXFSsi16dgNAQwYUSNDmircEjoWie9G1Wb7XJ1uS9tgPg9pdIQv7Araj6trIJ6hq59D6r0QaumXRJdaxk-vVzGR2Oc5_gWxUPdF-I4BfdIdS8Y'
  },
  {
    id: 3,
    tag: '#장건강',
    title: '장 건강 개선 라인',
    desc: '편안한 속을 위한 프로바이오틱스와 프리바이오틱스의 시너지 효과.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClBO24JMTNnvAtlIqZvaC6b_DAhH7IAgRBCOfmSDkiNKVqN6Fz-lE0lTBhp3TQyiiKpFddjybtTDkDOX5vx9mdBLY5W0eT-9Aaddcj2NFE5F1BT9ZlrIDAXLkx9dRUvyQCVRLBojv2-Puoi-Zhm_ic02gavGIg3mIP7J2zeU2JjRLCxjHpJKZzFwRfC5zYI2WsLL_QEMgbZ_0r40SuvEfVgy3mSEtARmzVj5bjUoMy5H_Vd_VuiuprilEJFSef_osJdXtHo44ICtY'
  },
  {
    id: 4,
    tag: '#피부미용',
    title: '피부 건강 및 미용 라인',
    desc: '속부터 채워 빛나는 피부를 위한 콜라겐, 히알루론산, 비타민C.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4szGd1Uzh0vIc9guZUeGnPLd6jvxH2EP2iXOYO1_LBdbGos4cLU2ch3aHEThnbblqUJUKWWozRcsPQdna9dxJ2Bbja_mBE6iLMGignFEbb13w53iYxnMeQv3XTPzoYyILW4j7clcwXn-WDugnzR2SABsFXaTsn6GB1eeGRL_tcx37iiPSjFe3GiofNVRaOQWvRkJLWUgt8RVr0zns3Qm7gtSTUFMrla5w7K1TISSjvzH8OBwz2uMoF_Py-Q5swh3lV0Nti-JXhMg'
  }
];

const defaultTerms = `제1조 (목적)
본 약관은 Peroxfarma Korea(이하 "회사")가 제공하는 서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.

제2조 (용어의 정의)
1. "서비스"란 회사가 제공하는 모든 건강기능식품 구독 및 관련 제반 서비스를 의미합니다.
2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.

제3조 (약관의 효력 및 변경)
1. 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.
2. 회사는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위 내에서 본 약관을 개정할 수 있습니다.`;

const defaultPrivacy = `1. 개인정보의 수집 및 이용 목적
Peroxfarma Korea는 다음의 목적을 위해 개인정보를 수집 및 이용합니다.
- 서비스 제공 및 계약의 이행
- 회원 관리 및 본인 확인
- 고객 상담 및 불만 처리
- 마케팅 및 광고 활용

2. 수집하는 개인정보의 항목
- 필수항목: 이름, 이메일 주소, 비밀번호, 전화번호, 주소
- 선택항목: 생년월일, 성별

3. 개인정보의 보유 및 이용 기간
회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령에 따라 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관합니다.`;

const defaultShopConfig: ShopConfig = {
  url: '',
  companyName: '',
  description: ''
};

const defaultAboutConfig: AboutConfig = {
  introText: `개인 맞춤형 건강기능식품의 미래를 선도하는 Peroxfarma Korea입니다.\n인류의 건강 증진이라는 단 하나의 목표를 가지고 설립되었습니다.`,
  mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBLUyjmkyJn-APHbwtu0R53oayyYN9AMP3cQXabelXkoQ3z-QV3y4F5BCPJf9mEWtcwc2-cpPgZb37Hbw6rdFDGHfqoQ7chsgB8g6fQkV8MokoJyfJspBkRYUo6vR2yY4r_SWxzbJCmfdmqUTwe6Y6g3wsCX6aNiBTDFpmbU_O_m1Zi7bHkNeesfOExdIJUnpp6l4X_rjRBYR5F4bRPV0qNUvMPXGS7g4GRwmaLx9_EwAqcrloYw65zvYHSGtFTQMO-XFiQEaHB0A'
};

const defaultProductsConfig: ProductsConfig = {
  introText: `당신의 건강 목표 달성을 도와줄 다양한 제품들을 만나보세요.\n모든 제품은 엄격한 품질 관리를 거쳐 생산됩니다.`,
  mainImageUrl: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=2070&auto=format&fit=crop'
};

const defaultContactConfig: ContactConfig = {
  pageTitle: '무엇을 도와드릴까요?',
  pageSubtitle: '궁금한 점이 있으시면 언제든지 문의해주세요.',
  formTitle: '1:1 문의하기'
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('products');
      return saved ? JSON.parse(saved) : defaultProducts;
    } catch (e) {
      console.error('Failed to parse products from local storage', e);
      return defaultProducts;
    }
  });

  const [termsContent, setTermsContentState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('termsContent');
      return saved || defaultTerms;
    } catch (e) {
      return defaultTerms;
    }
  });

  const [privacyContent, setPrivacyContentState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('privacyContent');
      return saved || defaultPrivacy;
    } catch (e) {
      return defaultPrivacy;
    }
  });

  const [shopConfig, setShopConfig] = useState<ShopConfig>(() => {
    try {
      const saved = localStorage.getItem('shopConfig');
      return saved ? JSON.parse(saved) : defaultShopConfig;
    } catch (e) {
      return defaultShopConfig;
    }
  });

  const [aboutConfig, setAboutConfig] = useState<AboutConfig>(() => {
    try {
      const saved = localStorage.getItem('aboutConfig');
      return saved ? JSON.parse(saved) : defaultAboutConfig;
    } catch (e) {
      return defaultAboutConfig;
    }
  });

  const [productsConfig, setProductsConfig] = useState<ProductsConfig>(() => {
    try {
      const saved = localStorage.getItem('productsConfig');
      return saved ? JSON.parse(saved) : defaultProductsConfig;
    } catch (e) {
      return defaultProductsConfig;
    }
  });

  const [contactConfig, setContactConfig] = useState<ContactConfig>(() => {
    try {
      const saved = localStorage.getItem('contactConfig');
      return saved ? JSON.parse(saved) : defaultContactConfig;
    } catch (e) {
      return defaultContactConfig;
    }
  });

  // Admin Credentials State
  const [adminCredentials, setAdminCredentials] = useState<AdminCredentials>(() => {
    try {
      const saved = localStorage.getItem('adminCredentials');
      return saved ? JSON.parse(saved) : { id: 'admin', pw: '1212' };
    } catch (e) {
      return { id: 'admin', pw: '1212' };
    }
  });

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem('inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('termsContent', termsContent);
  }, [termsContent]);

  useEffect(() => {
    localStorage.setItem('privacyContent', privacyContent);
  }, [privacyContent]);

  useEffect(() => {
    localStorage.setItem('shopConfig', JSON.stringify(shopConfig));
  }, [shopConfig]);

  useEffect(() => {
    localStorage.setItem('aboutConfig', JSON.stringify(aboutConfig));
  }, [aboutConfig]);

  useEffect(() => {
    localStorage.setItem('productsConfig', JSON.stringify(productsConfig));
  }, [productsConfig]);

  useEffect(() => {
    localStorage.setItem('contactConfig', JSON.stringify(contactConfig));
  }, [contactConfig]);

  useEffect(() => {
    localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));
  }, [adminCredentials]);

  useEffect(() => {
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Methods
  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const setTermsContent = (content: string) => {
    setTermsContentState(content);
  };

  const setPrivacyContent = (content: string) => {
    setPrivacyContentState(content);
  };

  const updateShopConfig = (config: ShopConfig) => {
    setShopConfig(config);
  };

  const updateAboutConfig = (config: AboutConfig) => {
    setAboutConfig(config);
  };

  const updateProductsConfig = (config: ProductsConfig) => {
    setProductsConfig(config);
  };

  const updateContactConfig = (config: ContactConfig) => {
    setContactConfig(config);
  };

  const updateAdminCredentials = (creds: AdminCredentials) => {
    setAdminCredentials(creds);
  };

  const addInquiry = (data: Omit<Inquiry, 'id' | 'date'>) => {
    const newInquiry: Inquiry = {
      ...data,
      id: Date.now(),
      date: new Date().toISOString()
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const deleteInquiry = (id: number) => {
    setInquiries(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      updateProduct,
      termsContent,
      setTermsContent,
      privacyContent,
      setPrivacyContent,
      shopConfig,
      updateShopConfig,
      aboutConfig,
      updateAboutConfig,
      productsConfig,
      updateProductsConfig,
      contactConfig,
      updateContactConfig,
      adminCredentials,
      updateAdminCredentials,
      inquiries,
      addInquiry,
      deleteInquiry
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};