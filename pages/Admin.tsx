
import React, { useState, useEffect } from 'react';
import { 
  useProducts, 
  Product, 
  HomeConfig, 
  FacilityConfig, 
  AboutConfig, 
  ProductsConfig, 
  ContactConfig 
} from '../context/ProductContext';

const Admin: React.FC = () => {
  const { 
    lang, setLang, t,
    products, updateProduct, 
    homeConfig, updateHomeConfig,
    facilityConfig, updateFacilityConfig,
    aboutConfig, updateAboutConfig,
    productsConfig, updateProductsConfig,
    contactConfig, updateContactConfig,
    termsContent, setTermsContent, 
    privacyContent, setPrivacyContent,
    adminCredentials, updateAdminCredentials,
    inquiries, deleteInquiry
  } = useProducts();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'products' | 'facility' | 'contact' | 'terms' | 'settings'>('home');
  const [policySubTab, setPolicySubTab] = useState<'tos' | 'privacy'>('tos');

  // Temp States for Forms
  const [tempHomeConfig, setTempHomeConfig] = useState<HomeConfig>(homeConfig);
  const [tempAboutConfig, setTempAboutConfig] = useState<AboutConfig>(aboutConfig);
  const [tempProductsConfig, setTempProductsConfig] = useState<ProductsConfig>(productsConfig);
  const [tempFacilityConfig, setTempFacilityConfig] = useState<FacilityConfig>(facilityConfig);
  const [tempContactConfig, setTempContactConfig] = useState<ContactConfig>(contactConfig);
  const [tempTerms, setTempTerms] = useState(termsContent);
  const [tempPrivacy, setTempPrivacy] = useState(privacyContent);
  const [tempCreds, setTempCreds] = useState(adminCredentials);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    setTempHomeConfig(homeConfig);
    setTempAboutConfig(aboutConfig);
    setTempProductsConfig(productsConfig);
    setTempFacilityConfig(facilityConfig);
    setTempContactConfig(contactConfig);
    setTempTerms(termsContent);
    setTempPrivacy(privacyContent);
    setTempCreds(adminCredentials);
  }, [homeConfig, aboutConfig, productsConfig, facilityConfig, contactConfig, termsContent, privacyContent, adminCredentials, lang]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === adminCredentials.id && loginPw === adminCredentials.pw) {
      setIsAuthenticated(true);
    } else {
      alert(lang === 'KO' ? '로그인 정보가 올바르지 않습니다.' : 'Invalid credentials.');
    }
  };

  const saveConfig = (type: string, data: any, updateFn: (d: any) => void) => {
    updateFn(data);
    alert(`${type} ${lang === 'KO' ? '저장 완료' : 'Saved successfully'}`);
  };

  const handleProductEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const saveProduct = () => {
    if (editingProduct) {
      updateProduct(editingProduct);
      setEditingProduct(null);
      alert(lang === 'KO' ? '제품 정보 저장 완료' : 'Product saved successfully');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy px-4">
        <div className="w-full max-w-md space-y-8 rounded-[40px] bg-white p-12 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-4xl">admin_panel_settings</span>
            </div>
          </div>
          <h2 className="text-3xl font-black text-navy text-center">{t.admin.loginTitle}</h2>
          <form className="mt-8 space-y-5" onSubmit={handleLogin}>
            <input type="text" placeholder="ID" className="w-full rounded-2xl border border-slate-100 bg-slate-50 p-5 outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
            <input type="password" placeholder="PW" className="w-full rounded-2xl border border-slate-100 bg-slate-50 p-5 outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" value={loginPw} onChange={(e) => setLoginPw(e.target.value)} />
            <button type="submit" className="w-full rounded-2xl bg-primary py-5 text-white font-black hover:brightness-110 shadow-lg shadow-primary/20 transition-all">Login</button>
          </form>
        </div>
      </div>
    );
  }

  const SidebarItem = ({ id, label, icon }: { id: typeof activeTab; label: string; icon: string }) => (
    <button 
      onClick={() => setActiveTab(id)} 
      className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-black transition-all duration-300 ${
        activeTab === id ? 'bg-white text-navy shadow-xl' : 'text-white/50 hover:bg-white/5 hover:text-white'
      }`}
    >
      <span className="material-symbols-outlined text-2xl">{icon}</span>
      {label}
    </button>
  );

  const FormField = ({ label, value, onChange, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; type?: 'text' | 'textarea' }) => (
    <div className="space-y-4">
      <label className="text-sm font-black text-navy/50 uppercase tracking-widest px-1">{label}</label>
      {type === 'textarea' ? (
        <textarea 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          className="w-full p-6 border border-slate-100 bg-slate-50 rounded-3xl outline-none focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all font-medium text-navy leading-relaxed" 
          rows={12} 
        />
      ) : (
        <input 
          type="text" 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          className="w-full p-6 border border-slate-100 bg-slate-50 rounded-3xl outline-none focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all font-bold text-navy" 
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background-light flex flex-col md:flex-row">
      <aside className="w-full md:w-80 bg-navy p-8 flex flex-col gap-10 sticky top-16 h-auto md:h-[calc(100vh-4rem)] shadow-2xl z-50 overflow-y-auto scrollbar-hide">
        <div className="flex items-center gap-4 px-2 text-white font-black text-2xl">
           <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
             <span className="material-symbols-outlined">health_and_safety</span>
           </div>
           {t.admin.sidebarTitle}
        </div>
        
        <div className="flex bg-white/5 rounded-2xl p-1.5 border border-white/10">
          <button onClick={() => setLang('KO')} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${lang === 'KO' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}>KO</button>
          <button onClick={() => setLang('EN')} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${lang === 'EN' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}>EN</button>
        </div>

        <nav className="flex flex-col gap-2">
          <SidebarItem id="home" label={t.admin.tabs.home} icon="home" />
          <SidebarItem id="about" label={t.admin.tabs.about} icon="info" />
          <SidebarItem id="products" label={t.admin.tabs.products} icon="inventory_2" />
          <SidebarItem id="facility" label={t.admin.tabs.facility} icon="factory" />
          <SidebarItem id="contact" label={t.admin.tabs.contact} icon="chat_bubble" />
          <SidebarItem id="terms" label={t.admin.tabs.terms} icon="gavel" />
          <SidebarItem id="settings" label={t.admin.tabs.settings} icon="manage_accounts" />
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10">
          <button onClick={() => setIsAuthenticated(false)} className="w-full flex items-center gap-4 px-5 py-4 text-secondary font-black hover:bg-secondary/10 rounded-2xl transition-all">
            <span className="material-symbols-outlined">logout</span> {t.admin.signOut}
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-16 overflow-y-auto">
        <div className="bg-white rounded-[48px] shadow-2xl p-10 md:p-16 border border-slate-100 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-black text-navy capitalize">{t.admin.tabs[activeTab]}</h1>
            <span className="px-4 py-2 bg-primary/10 text-primary font-black rounded-full text-xs uppercase tracking-widest">{t.admin.langLabel}: {lang}</span>
          </div>

          {activeTab === 'home' && (
            <div className="space-y-10">
               <FormField label={t.admin.labels.heroBadge} value={tempHomeConfig.heroBadge} onChange={(v) => setTempHomeConfig({...tempHomeConfig, heroBadge: v})} />
               <FormField label={t.admin.labels.heroTitle} value={tempHomeConfig.heroTitle} onChange={(v) => setTempHomeConfig({...tempHomeConfig, heroTitle: v})} type="textarea" />
               <FormField label={t.admin.labels.heroDesc} value={tempHomeConfig.heroDesc} onChange={(v) => setTempHomeConfig({...tempHomeConfig, heroDesc: v})} type="textarea" />
               <FormField label={t.admin.labels.heroImageUrl} value={tempHomeConfig.heroImageUrl} onChange={(v) => setTempHomeConfig({...tempHomeConfig, heroImageUrl: v})} />
               <FormField label={t.admin.labels.heroStartUrl} value={tempHomeConfig.heroStartUrl} onChange={(v) => setTempHomeConfig({...tempHomeConfig, heroStartUrl: v})} />
               <FormField label={t.admin.labels.serviceTitle} value={tempHomeConfig.serviceTitle} onChange={(v) => setTempHomeConfig({...tempHomeConfig, serviceTitle: v})} />
               <FormField label={t.admin.labels.serviceSubtitle} value={tempHomeConfig.serviceSubtitle} onChange={(v) => setTempHomeConfig({...tempHomeConfig, serviceSubtitle: v})} />
               <button onClick={() => saveConfig(t.admin.tabs.home, tempHomeConfig, updateHomeConfig)} className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                 {t.admin.saveBtn}
               </button>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-10">
               <FormField label={t.admin.labels.introText} value={tempAboutConfig.introText} onChange={(v) => setTempAboutConfig({...tempAboutConfig, introText: v})} type="textarea" />
               <FormField label={t.admin.labels.mainImageUrl} value={tempAboutConfig.mainImageUrl} onChange={(v) => setTempAboutConfig({...tempAboutConfig, mainImageUrl: v})} />
               <button onClick={() => saveConfig(t.admin.tabs.about, tempAboutConfig, updateAboutConfig)} className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                 {t.admin.saveBtn}
               </button>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-12">
               <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 space-y-8">
                 <h3 className="font-black text-navy text-xl">Header Settings</h3>
                 <FormField label={t.admin.labels.introText} value={tempProductsConfig.introText} onChange={(v) => setTempProductsConfig({...tempProductsConfig, introText: v})} type="textarea" />
                 <FormField label={t.admin.labels.mainImageUrl} value={tempProductsConfig.mainImageUrl} onChange={(v) => setTempProductsConfig({...tempProductsConfig, mainImageUrl: v})} />
                 <button onClick={() => saveConfig(t.admin.tabs.products, tempProductsConfig, updateProductsConfig)} className="bg-navy text-white px-10 py-4 rounded-xl font-black shadow-lg">
                   Save Header
                 </button>
               </div>

               <div className="space-y-6">
                 <h3 className="font-black text-navy text-xl">Product Items</h3>
                 <div className="grid grid-cols-1 gap-4">
                    {products.map(p => (
                      <div key={p.id} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
                         <div className="flex items-center gap-6">
                            <img src={p.img} className="w-16 h-16 rounded-xl object-cover" />
                            <div>
                              <p className="font-black text-navy">{p.title}</p>
                              <p className="text-xs text-slate-400 font-bold">{p.tag}</p>
                            </div>
                         </div>
                         <button onClick={() => handleProductEdit(p)} className="p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all">
                           <span className="material-symbols-outlined">edit</span>
                         </button>
                      </div>
                    ))}
                 </div>
               </div>

               {editingProduct && (
                 <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => setEditingProduct(null)}></div>
                    <div className="relative bg-white w-full max-w-2xl rounded-[40px] p-10 md:p-12 shadow-2xl space-y-8">
                       <h3 className="text-2xl font-black text-navy">Edit Product</h3>
                       <div className="space-y-6">
                         <FormField label={t.admin.labels.productTag} value={editingProduct.tag} onChange={(v) => setEditingProduct({...editingProduct, tag: v})} />
                         <FormField label={t.admin.labels.productTitle} value={editingProduct.title} onChange={(v) => setEditingProduct({...editingProduct, title: v})} />
                         <FormField label={t.admin.labels.productDesc} value={editingProduct.desc} onChange={(v) => setEditingProduct({...editingProduct, desc: v})} type="textarea" />
                         <FormField label={t.admin.labels.productImg} value={editingProduct.img} onChange={(v) => setEditingProduct({...editingProduct, img: v})} />
                       </div>
                       <div className="flex gap-4">
                         <button onClick={saveProduct} className="flex-1 bg-primary text-white py-5 rounded-2xl font-black shadow-lg">Save Changes</button>
                         <button onClick={() => setEditingProduct(null)} className="px-8 bg-slate-100 text-slate-400 py-5 rounded-2xl font-black">Cancel</button>
                       </div>
                    </div>
                 </div>
               )}
            </div>
          )}

          {activeTab === 'facility' && (
            <div className="space-y-10">
               <FormField label={t.admin.labels.heroTitle} value={tempFacilityConfig.heroTitle} onChange={(v) => setTempFacilityConfig({...tempFacilityConfig, heroTitle: v})} />
               <FormField label={t.admin.labels.heroImageUrl} value={tempFacilityConfig.heroImageUrl} onChange={(v) => setTempFacilityConfig({...tempFacilityConfig, heroImageUrl: v})} />
               <FormField label={t.admin.labels.certTitle} value={tempFacilityConfig.certificationTitle} onChange={(v) => setTempFacilityConfig({...tempFacilityConfig, certificationTitle: v})} />
               <FormField label={t.admin.labels.certDesc} value={tempFacilityConfig.certificationDesc} onChange={(v) => setTempFacilityConfig({...tempFacilityConfig, certificationDesc: v})} type="textarea" />
               <FormField label={t.admin.labels.certImageUrl} value={tempFacilityConfig.certificationImageUrl} onChange={(v) => setTempFacilityConfig({...tempFacilityConfig, certificationImageUrl: v})} />
               <button onClick={() => saveConfig(t.admin.tabs.facility, tempFacilityConfig, updateFacilityConfig)} className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                 {t.admin.saveBtn}
               </button>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="overflow-hidden rounded-[32px] border border-slate-100 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-navy font-black text-xs uppercase tracking-widest border-b border-slate-100">
                    <th className="px-8 py-6">{t.admin.labels.inquiryDate}</th>
                    <th className="px-8 py-6">{t.admin.langLabel}</th>
                    <th className="px-8 py-6">{t.admin.labels.inquirySender}</th>
                    <th className="px-8 py-6">{t.admin.labels.inquiryMsg}</th>
                    <th className="px-8 py-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {inquiries.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-8 py-6 text-slate-400 font-bold text-sm whitespace-nowrap">{new Date(item.date).toLocaleDateString()}</td>
                      <td className="px-8 py-6"><span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black">{item.lang}</span></td>
                      <td className="px-8 py-6 font-black text-navy">{item.name}</td>
                      <td className="px-8 py-6 text-slate-500 text-sm line-clamp-1 group-hover:line-clamp-none transition-all">{item.message}</td>
                      <td className="px-8 py-6 text-center">
                        <button onClick={() => deleteInquiry(item.id)} className="text-secondary opacity-40 hover:opacity-100 hover:scale-125 transition-all"><span className="material-symbols-outlined">delete</span></button>
                      </td>
                    </tr>
                  ))}
                  {inquiries.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-8 py-20 text-center text-slate-300 font-bold italic">No inquiries found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-8">
              <div className="flex gap-4 p-1.5 bg-slate-50 border border-slate-100 rounded-2xl w-fit">
                <button 
                  onClick={() => setPolicySubTab('tos')} 
                  className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all ${policySubTab === 'tos' ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {t.admin.labels.tos}
                </button>
                <button 
                  onClick={() => setPolicySubTab('privacy')} 
                  className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all ${policySubTab === 'privacy' ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {t.admin.labels.privacy}
                </button>
              </div>

              {policySubTab === 'tos' ? (
                <div className="space-y-6 animate-fade-in-up">
                  <FormField 
                    label={t.admin.labels.tos} 
                    value={tempTerms} 
                    onChange={setTempTerms} 
                    type="textarea" 
                  />
                  <button onClick={() => saveConfig(t.admin.labels.tos, tempTerms, setTermsContent)} className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all">
                    {t.admin.saveBtn}
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in-up">
                  <FormField 
                    label={t.admin.labels.privacy} 
                    value={tempPrivacy} 
                    onChange={setTempPrivacy} 
                    type="textarea" 
                  />
                  <button onClick={() => saveConfig(t.admin.labels.privacy, tempPrivacy, setPrivacyContent)} className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all">
                    {t.admin.saveBtn}
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
             <div className="space-y-10">
                <FormField label="Admin ID" value={tempCreds.id} onChange={(v) => setTempCreds({...tempCreds, id: v})} />
                <FormField label="Admin PW" value={tempCreds.pw} onChange={(v) => setTempCreds({...tempCreds, pw: v})} />
                <button onClick={() => saveConfig('Settings', tempCreds, updateAdminCredentials)} className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all">
                  {t.admin.saveBtn}
                </button>
             </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
