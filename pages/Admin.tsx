import React, { useState, useEffect } from 'react';
import { useProducts, Product } from '../context/ProductContext';

const Admin: React.FC = () => {
  const { 
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
    deleteInquiry
  } = useProducts();
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');

  // Tab state
  const [activeTab, setActiveTab] = useState<'products' | 'terms' | 'privacy' | 'shop' | 'about' | 'contact' | 'settings'>('about');

  // Policy edit state
  const [tempTerms, setTempTerms] = useState('');
  const [tempPrivacy, setTempPrivacy] = useState('');

  // Shop config edit state
  const [tempShopConfig, setTempShopConfig] = useState({
    url: '',
    companyName: '',
    description: ''
  });

  // About config edit state
  const [tempAboutConfig, setTempAboutConfig] = useState({
    introText: '',
    mainImageUrl: ''
  });

  // Products config edit state
  const [tempProductsConfig, setTempProductsConfig] = useState({
    introText: '',
    mainImageUrl: ''
  });

  // Contact config edit state
  const [tempContactConfig, setTempContactConfig] = useState({
    pageTitle: '',
    pageSubtitle: '',
    formTitle: ''
  });
  
  // Admin creds edit state
  const [tempCreds, setTempCreds] = useState({
    id: '',
    pw: ''
  });

  useEffect(() => {
    setTempTerms(termsContent);
    setTempPrivacy(privacyContent);
  }, [termsContent, privacyContent]);

  useEffect(() => {
    setTempShopConfig(shopConfig);
  }, [shopConfig]);

  useEffect(() => {
    setTempAboutConfig(aboutConfig);
  }, [aboutConfig]);

  useEffect(() => {
    setTempProductsConfig(productsConfig);
  }, [productsConfig]);

  useEffect(() => {
    setTempContactConfig(contactConfig);
  }, [contactConfig]);
  
  useEffect(() => {
    setTempCreds(adminCredentials);
  }, [adminCredentials]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === adminCredentials.id && loginPw === adminCredentials.pw) {
      setIsAuthenticated(true);
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct({ ...product });
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct);
      setEditingProduct(null);
      alert('제품 정보가 수정되었습니다.');
    }
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    }
  };

  const handleSaveTerms = () => {
    setTermsContent(tempTerms);
    alert('이용약관이 저장되었습니다.');
  };

  const handleSavePrivacy = () => {
    setPrivacyContent(tempPrivacy);
    alert('개인정보처리방침이 저장되었습니다.');
  };

  const handleSaveShopConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateShopConfig(tempShopConfig);
    alert('쇼핑몰 정보가 저장되었습니다.');
  };

  const handleShopConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTempShopConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveAboutConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateAboutConfig(tempAboutConfig);
    alert('회사소개 정보가 저장되었습니다.');
  };

  const handleAboutConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTempAboutConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProductsConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateProductsConfig(tempProductsConfig);
    alert('제품소개 페이지 정보가 저장되었습니다.');
  };

  const handleProductsConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTempProductsConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveContactConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateContactConfig(tempContactConfig);
    alert('문의하기 정보가 저장되었습니다.');
  };

  const handleContactConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTempContactConfig(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSaveCreds = (e: React.FormEvent) => {
    e.preventDefault();
    updateAdminCredentials(tempCreds);
    alert('관리자 계정 정보가 수정되었습니다. 다시 로그인해주세요.');
    setIsAuthenticated(false);
  };
  
  const handleCredsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempCreds(prev => ({ ...prev, [name]: value }));
  };

  const handleDeleteInquiry = (id: number) => {
    if (confirm('정말로 이 문의 내역을 삭제하시겠습니까?')) {
      deleteInquiry(id);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h2 className="text-2xl font-black text-text-primary">관리자 접속</h2>
            <p className="mt-2 text-sm text-text-secondary">관리자 계정으로 로그인해주세요.</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-1">아이디</label>
                <input
                  type="text"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-1">비밀번호</label>
                <input
                  type="password"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  value={loginPw}
                  onChange={(e) => setLoginPw(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-md"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-text-primary">관리자 페이지</h1>
            <button 
                onClick={() => setIsAuthenticated(false)}
                className="text-sm text-text-secondary hover:text-primary underline"
            >
                로그아웃
            </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'about' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            회사소개 관리
          </button>
          <button
            onClick={() => { setActiveTab('products'); setEditingProduct(null); }}
            className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'products' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            제품 관리
          </button>
          <button
            onClick={() => setActiveTab('shop')}
            className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'shop' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            쇼핑몰 관리
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'contact' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            문의하기 관리
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'terms' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            이용약관
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'privacy' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            개인정보처리방침
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'settings' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            설정
          </button>
        </div>
        
        {/* About Management Tab */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-text-primary">회사소개 정보 수정</h2>
            <form onSubmit={handleSaveAboutConfig} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">소개글</label>
                <textarea
                  name="introText"
                  value={tempAboutConfig.introText}
                  onChange={handleAboutConfigChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
                <p className="text-xs text-text-secondary mt-1">줄바꿈을 포함하여 입력할 수 있습니다.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">메인 이미지 URL</label>
                <input
                  name="mainImageUrl"
                  value={tempAboutConfig.mainImageUrl}
                  onChange={handleAboutConfigChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
                {tempAboutConfig.mainImageUrl && (
                    <div className="mt-2">
                        <p className="text-xs text-text-secondary mb-1">이미지 미리보기:</p>
                        <img src={tempAboutConfig.mainImageUrl} alt="Preview" className="h-40 w-full object-cover rounded-md border border-gray-200" />
                    </div>
                )}
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Management Tab */}
        {activeTab === 'products' && (
          <div className="space-y-8">
            {/* Products Page Config */}
            {!editingProduct && (
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-xl font-bold mb-6 text-text-primary">제품소개 페이지 설정</h2>
                <form onSubmit={handleSaveProductsConfig} className="space-y-6">
                   <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">소개글</label>
                    <textarea
                      name="introText"
                      value={tempProductsConfig.introText}
                      onChange={handleProductsConfigChange}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                     <p className="text-xs text-text-secondary mt-1">줄바꿈을 포함하여 입력할 수 있습니다.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">메인 이미지 URL</label>
                    <input
                      name="mainImageUrl"
                      value={tempProductsConfig.mainImageUrl}
                      onChange={handleProductsConfigChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                    {tempProductsConfig.mainImageUrl && (
                        <div className="mt-2">
                            <p className="text-xs text-text-secondary mb-1">이미지 미리보기:</p>
                            <img src={tempProductsConfig.mainImageUrl} alt="Preview" className="h-40 w-full object-cover rounded-md border border-gray-200" />
                        </div>
                    )}
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      설정 저장
                    </button>
                  </div>
                </form>
              </div>
            )}

            {editingProduct ? (
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-xl font-bold mb-6 text-text-primary">제품 상세 정보 수정</h2>
                <form onSubmit={handleSaveProduct} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">제품명</label>
                    <input
                      name="title"
                      value={editingProduct.title}
                      onChange={handleProductChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">태그</label>
                    <input
                      name="tag"
                      value={editingProduct.tag}
                      onChange={handleProductChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">설명</label>
                    <textarea
                      name="desc"
                      value={editingProduct.desc}
                      onChange={handleProductChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">이미지 URL</label>
                    <input
                      name="img"
                      value={editingProduct.img}
                      onChange={handleProductChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                    {editingProduct.img && (
                        <div className="mt-2">
                            <p className="text-xs text-text-secondary mb-1">이미지 미리보기:</p>
                            <img src={editingProduct.img} alt="Preview" className="h-20 w-20 object-cover rounded-md border border-gray-200" />
                        </div>
                    )}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      저장
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingProduct(null)}
                      className="bg-white border border-gray-300 text-text-primary font-bold py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      취소
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="grid gap-6">
                <h3 className="text-lg font-bold text-text-primary">제품 목록</h3>
                {products.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row gap-6 items-center">
                    <img src={product.img} alt={product.title} className="w-24 h-24 object-cover rounded-lg bg-gray-100 border border-gray-100" />
                    <div className="flex-1 text-center md:text-left">
                      <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full mb-2">{product.tag}</span>
                      <h3 className="text-lg font-bold text-text-primary">{product.title}</h3>
                      <p className="text-sm text-text-secondary mt-1">{product.desc}</p>
                    </div>
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-white border border-primary text-primary font-bold py-2 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors shadow-sm whitespace-nowrap"
                    >
                      수정
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Shop Management Tab */}
        {activeTab === 'shop' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-text-primary">쇼핑몰 정보 수정</h2>
            <form onSubmit={handleSaveShopConfig} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">회사명</label>
                <input
                  name="companyName"
                  value={tempShopConfig.companyName}
                  onChange={handleShopConfigChange}
                  placeholder="예: Peroxfarma Store"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">쇼핑몰 URL</label>
                <input
                  name="url"
                  value={tempShopConfig.url}
                  onChange={handleShopConfigChange}
                  placeholder="예: https://smartstore.naver.com/peroxfarma"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">설명</label>
                <textarea
                  name="description"
                  value={tempShopConfig.description}
                  onChange={handleShopConfigChange}
                  rows={4}
                  placeholder="쇼핑몰 메인 화면에 표시될 설명 문구를 입력하세요."
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Contact Management Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-xl font-bold mb-6 text-text-primary">문의하기 페이지 설정</h2>
              <form onSubmit={handleSaveContactConfig} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">페이지 제목</label>
                    <input
                      name="pageTitle"
                      value={tempContactConfig.pageTitle}
                      onChange={handleContactConfigChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">서브 제목</label>
                    <input
                      name="pageSubtitle"
                      value={tempContactConfig.pageSubtitle}
                      onChange={handleContactConfigChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">문의 폼 제목</label>
                    <input
                      name="formTitle"
                      value={tempContactConfig.formTitle}
                      onChange={handleContactConfigChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    저장
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-xl font-bold mb-6 text-text-primary">접수된 문의 내역 ({inquiries.length})</h2>
              {inquiries.length === 0 ? (
                <div className="text-center text-text-secondary py-8">
                  접수된 문의가 없습니다.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-4 px-4 font-bold text-text-primary w-24">날짜</th>
                        <th className="py-4 px-4 font-bold text-text-primary w-32">이름</th>
                        <th className="py-4 px-4 font-bold text-text-primary w-48">이메일</th>
                        <th className="py-4 px-4 font-bold text-text-primary">내용</th>
                        <th className="py-4 px-4 font-bold text-text-primary w-20">관리</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.map(inquiry => (
                        <tr key={inquiry.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 text-sm text-text-secondary whitespace-nowrap">
                            {new Date(inquiry.date).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-4 text-sm font-medium text-text-primary">
                            {inquiry.name}
                          </td>
                          <td className="py-4 px-4 text-sm text-text-secondary">
                            {inquiry.email}
                          </td>
                          <td className="py-4 px-4 text-sm text-text-secondary">
                            {inquiry.message}
                          </td>
                          <td className="py-4 px-4">
                            <button 
                              onClick={() => handleDeleteInquiry(inquiry.id)}
                              className="text-red-500 hover:text-red-700 text-sm font-bold"
                            >
                              삭제
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Terms Management Tab */}
        {activeTab === 'terms' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-text-primary">이용약관 수정</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">내용</label>
                <textarea
                  value={tempTerms}
                  onChange={(e) => setTempTerms(e.target.value)}
                  rows={20}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors font-mono text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSaveTerms}
                  className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Management Tab */}
        {activeTab === 'privacy' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-text-primary">개인정보처리방침 수정</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">내용</label>
                <textarea
                  value={tempPrivacy}
                  onChange={(e) => setTempPrivacy(e.target.value)}
                  rows={20}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors font-mono text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSavePrivacy}
                  className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-text-primary">관리자 계정 설정</h2>
            <form onSubmit={handleSaveCreds} className="space-y-6 max-w-md">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">관리자 아이디</label>
                <input
                  name="id"
                  value={tempCreds.id}
                  onChange={handleCredsChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">관리자 비밀번호</label>
                <input
                  name="pw"
                  type="password"
                  value={tempCreds.pw}
                  onChange={handleCredsChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                >
                  변경사항 저장
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;