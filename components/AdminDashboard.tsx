
import React, { useState } from 'react';
import { SiteConfig, Product, BlogPost } from '../types';

interface AdminDashboardProps {
  config: SiteConfig;
  setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  posts: BlogPost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  config, setConfig, products, setProducts, posts, setPosts, onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'products' | 'stats'>('content');

  const updateConfig = (key: keyof SiteConfig, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-8 flex flex-col fixed h-full">
        <h2 className="text-2xl font-black mb-12 flex items-center gap-2">
          D-ADMIN <span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>
        </h2>
        
        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTab === 'content' ? 'bg-[#FF6B00]' : 'hover:bg-zinc-900'}`}
          >
            사이트 콘텐츠
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTab === 'products' ? 'bg-[#FF6B00]' : 'hover:bg-zinc-900'}`}
          >
            제품 관리
          </button>
          <button 
             onClick={() => setActiveTab('stats')}
             className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTab === 'stats' ? 'bg-[#FF6B00]' : 'hover:bg-zinc-900'}`}
          >
            방문 통계
          </button>
        </nav>

        <button 
          onClick={onClose}
          className="mt-auto px-4 py-3 bg-zinc-800 rounded-xl hover:bg-white hover:text-black transition-all font-bold"
        >
          사이트로 돌아가기
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12">
        <div className="max-w-4xl">
          <header className="mb-12 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black">
                {activeTab === 'content' && '기본 설정 편집'}
                {activeTab === 'products' && '제품 데이터 관리'}
                {activeTab === 'stats' && '주간 사이트 성과'}
              </h1>
              <p className="text-zinc-500 mt-2">이곳에서 변경한 사항은 실시간으로 홈페이지에 반영됩니다.</p>
            </div>
            {activeTab === 'products' && (
              <button className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-[#FF6B00] transition-all">
                제품 추가하기 +
              </button>
            )}
          </header>

          {activeTab === 'content' && (
            <div className="bg-white p-10 rounded-[2rem] shadow-sm space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400">브랜드 네임</label>
                <input 
                  type="text" 
                  value={config.brandName} 
                  onChange={(e) => updateConfig('brandName', e.target.value)}
                  className="w-full p-4 bg-zinc-50 rounded-xl border-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">메인 히어로 제목</label>
                  <textarea 
                    value={config.heroTitle} 
                    onChange={(e) => updateConfig('heroTitle', e.target.value)}
                    className="w-full p-4 bg-zinc-50 rounded-xl border-none focus:ring-2 focus:ring-[#FF6B00] min-h-[100px]"
                  />
                </div>
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest text-zinc-400">히어로 강조 문구</label>
                   <textarea 
                    value={config.heroSub2} 
                    onChange={(e) => updateConfig('heroSub2', e.target.value)}
                    className="w-full p-4 bg-zinc-50 rounded-xl border-none focus:ring-2 focus:ring-[#FF6B00] min-h-[100px]"
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-100 flex justify-end">
                <button className="px-10 py-4 bg-black text-white rounded-full font-bold">저장하기</button>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="grid gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between group">
                  <div className="flex items-center gap-6">
                    <img src={product.image} className="w-16 h-16 rounded-xl object-cover" alt="" />
                    <div>
                      <h4 className="font-bold">{product.name}</h4>
                      <p className="text-sm text-zinc-500">{product.price.toLocaleString()}원 · {product.category}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-3 bg-zinc-50 rounded-full hover:bg-zinc-100">수정</button>
                    <button 
                      onClick={() => removeProduct(product.id)}
                      className="p-3 bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'stats' && (
             <div className="space-y-8">
               <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">일간 방문자</span>
                    <h5 className="text-3xl font-black mt-2">1,284</h5>
                    <p className="text-green-500 text-xs mt-1">↑ 12% vs yesterday</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">문의 전환율</span>
                    <h5 className="text-3xl font-black mt-2">4.2%</h5>
                    <p className="text-green-500 text-xs mt-1">↑ 0.5% vs yesterday</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">가구 상세 페이지 뷰</span>
                    <h5 className="text-3xl font-black mt-2">8,590</h5>
                    <p className="text-zinc-500 text-xs mt-1">Stable</p>
                  </div>
               </div>

               <div className="bg-white p-10 rounded-[2.5rem] shadow-sm h-64 flex items-end justify-between gap-2 overflow-hidden">
                 {/* Visual Bar Mock */}
                 {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                   <div key={i} className="flex-1 bg-zinc-100 rounded-t-xl hover:bg-[#FF6B00] transition-all relative group" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-black text-white px-2 py-1 rounded">
                        {h * 10}
                      </div>
                   </div>
                 ))}
               </div>
             </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
