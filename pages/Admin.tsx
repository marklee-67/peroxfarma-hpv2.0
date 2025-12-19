import React, { useState, useEffect } from 'react';
import { useProducts, Product, HomeConfig, FacilityConfig } from '../context/ProductContext';

const Admin: React.FC = () => {
  const { 
    lang, setLang, products, updateProduct, 
    homeConfig, updateHomeConfig,
    facilityConfig, updateFacilityConfig,
    termsContent, setTermsContent, 
    privacyContent, setPrivacyContent,
    adminCredentials, updateAdminCredentials,
    inquiries, deleteInquiry
  } = useProducts();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [activeTab, setActiveTab] = useState<'home' | 'facility' | 'contact' | 'terms' | 'settings'>('home');

  const [tempHomeConfig, setTempHomeConfig] = useState<HomeConfig>(homeConfig);
  const [tempFacilityConfig, setTempFacilityConfig] = useState<FacilityConfig>(facilityConfig);
  const [tempTerms, setTempTerms] = useState(termsContent);
  const [tempPrivacy, setTempPrivacy] = useState(privacyContent);
  const [tempCreds, setTempCreds] = useState(adminCredentials);

  useEffect(() => {
    setTempHomeConfig(homeConfig);
    setTempFacilityConfig(facilityConfig);
    setTempTerms(termsContent);
    setTempPrivacy(privacyContent);
    setTempCreds(adminCredentials);
  }, [homeConfig, facilityConfig, termsContent, privacyContent, adminCredentials]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === adminCredentials.id && loginPw === adminCredentials.pw) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials.');
    }
  };

  const saveConfig = (type: string, data: any, updateFn: (d: any) => void) => {
    updateFn(data);
    alert(`[${lang}] ${type} saved successfully.`);
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
          <h2 className="text-3xl font-black text-navy text-center">CMS Login</h2>
          <form className="mt-8 space-y-5" onSubmit={handleLogin}>
            <input type="text" placeholder="ID" className="w-full rounded-2xl border border-slate-100 bg-slate-50 p-5 outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
            <input type="password" placeholder="PW" className="w-full rounded-2xl border border-slate-100 bg-slate-50 p-5 outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" value={loginPw} onChange={(e) => setLoginPw(e.target.value)} />
            <button type="submit" className="w-full rounded-2xl bg-primary py-5 text-white font-black hover:brightness-110 shadow-lg shadow-primary/20 transition-all">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light flex flex-col md:flex-row">
      <aside className="w-full md:w-80 bg-navy p-8 flex flex-col gap-10 sticky top-0 h-auto md:h-screen shadow-2xl z-50">
        <div className="flex items-center gap-4 px-2 text-white font-black text-2xl">
           <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
             <span className="material-symbols-outlined">health_and_safety</span>
           </div>
           Incare CMS
        </div>
        
        <div className="flex bg-white/5 rounded-2xl p-1.5 border border-white/10">
          <button onClick={() => setLang('KO')} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${lang === 'KO' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}>KO</button>
          <button onClick={() => setLang('EN')} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${lang === 'EN' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}>EN</button>
        </div>

        <nav className="flex flex-col gap-2 overflow-y-auto">
          {[
            { id: 'home', label: 'Home Page', icon: 'home' },
            { id: 'facility', label: 'Facility Info', icon: 'factory' },
            { id: 'contact', label: 'Inquiry Inbox', icon: 'chat_bubble' },
            { id: 'terms', label: 'Privacy & Terms', icon: 'gavel' },
            { id: 'settings', label: 'Account Settings', icon: 'manage_accounts' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-black transition-all duration-300 ${activeTab === tab.id ? 'bg-white text-navy shadow-xl' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}>
              <span className="material-symbols-outlined text-2xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10">
          <button onClick={() => setIsAuthenticated(false)} className="w-full flex items-center gap-4 px-5 py-4 text-secondary font-black hover:bg-secondary/10 rounded-2xl transition-all">
            <span className="material-symbols-outlined">logout</span> Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-16 overflow-y-auto h-screen scrollbar-hide">
        <div className="bg-white rounded-[48px] shadow-2xl p-10 md:p-16 border border-slate-100 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-black text-navy capitalize">{activeTab} Control Center</h1>
            <span className="px-4 py-2 bg-primary/10 text-primary font-black rounded-full text-xs uppercase tracking-widest">{lang} Edition</span>
          </div>

          {activeTab === 'home' && (
            <div className="space-y-10">
               <div className="space-y-4">
                 <label className="text-sm font-black text-navy/50 uppercase tracking-widest px-1">Hero Title</label>
                 <input type="text" value={tempHomeConfig.heroTitle} onChange={(e) => setTempHomeConfig({...tempHomeConfig, heroTitle: e.target.value})} className="w-full p-6 border border-slate-100 bg-slate-50 rounded-3xl outline-none focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all font-bold text-navy" />
               </div>
               <div className="space-y-4">
                 <label className="text-sm font-black text-navy/50 uppercase tracking-widest px-1">Hero Description</label>
                 <textarea value={tempHomeConfig.heroDesc} onChange={(e) => setTempHomeConfig({...tempHomeConfig, heroDesc: e.target.value})} className="w-full p-6 border border-slate-100 bg-slate-50 rounded-3xl outline-none focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all font-medium text-navy leading-relaxed" rows={4} />
               </div>
               <button onClick={() => saveConfig('Home', tempHomeConfig, updateHomeConfig)} className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">Publish Updates</button>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="overflow-hidden rounded-[32px] border border-slate-100 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-navy font-black text-xs uppercase tracking-widest border-b border-slate-100">
                    <th className="px-8 py-6">Date</th>
                    <th className="px-8 py-6">Lang</th>
                    <th className="px-8 py-6">Sender</th>
                    <th className="px-8 py-6">Message Preview</th>
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
              <div className="space-y-4">
                <label className="text-sm font-black text-navy/50 uppercase tracking-widest px-1">Policy Content</label>
                <textarea value={tempTerms} onChange={(e) => setTempTerms(e.target.value)} rows={15} className="w-full p-8 border border-slate-100 bg-slate-50 rounded-[40px] font-mono text-sm leading-relaxed outline-none focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all" />
              </div>
              <button onClick={() => setTermsContent(tempTerms)} className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all">Save Terms Policy</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;