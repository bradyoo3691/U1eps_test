
import React, { useState, useEffect } from 'react';
import { Page, Product, BlogPost, SiteConfig } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import DeliverySection from './components/DeliverySection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import AdminDashboard from './components/AdminDashboard';

const DEFAULT_CONFIG: SiteConfig = {
  brandName: 'U1 eps',
  heroTitle: '편안함은 기본, 단단함은 기준',
  heroSub1: '앉는 순간 느껴지는 국내 생산의 차이',
  heroSub2: '의자는 매일 쓰니까, 제대로 만들었습니다',
  pointColor: '#FF6B00'
};

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '모던 플라스틱 체어 A1',
    price: 45000,
    description: '인체공학적 설계로 장시간 착용에도 편안함을 제공합니다.',
    image: 'https://picsum.photos/seed/chair1/600/600',
    colors: ['#FFFFFF', '#000000', '#FF6B00', '#C0C0C0'],
    category: '식탁 의자'
  },
  {
    id: '2',
    name: '스태킹 카페 체어 B2',
    price: 38000,
    description: '공간 활용이 용이한 적재형 의자입니다.',
    image: 'https://picsum.photos/seed/chair2/600/600',
    colors: ['#FFFFFF', '#000000', '#E5E7EB'],
    category: '카페 의자'
  },
  {
    id: '3',
    name: '미니멀 오피스 체어 C3',
    price: 52000,
    description: '심플한 디자인으로 사무 공간에 최적화되었습니다.',
    image: 'https://picsum.photos/seed/chair3/600/600',
    colors: ['#3B82F6', '#1F2937', '#000000'],
    category: '사무용'
  },
  {
    id: '4',
    name: '프리미엄 라운지 체어 D4',
    price: 89000,
    description: '고급스러운 텍스처와 견고함을 자랑합니다.',
    image: 'https://picsum.photos/seed/chair4/600/600',
    colors: ['#000000', '#FF6B00'],
    category: '라운지'
  }
];

const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '2024년 인테리어 트렌드: 미니멀리즘과 가구',
    excerpt: '공간을 비우고 가치를 채우는 방법에 대해 알아봅니다.',
    date: '2024.03.20',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: '2',
    title: 'U1 eps 생산 공정 공개: 단단함의 비밀',
    excerpt: '국내 생산을 고집하는 이유와 품질 관리 프로세스.',
    date: '2024.03.15',
    image: 'https://picsum.photos/seed/blog2/800/400'
  }
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_CONFIG);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);

  // Sync scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    if (currentPage === Page.ADMIN) {
      return (
        <AdminDashboard 
          config={config} 
          setConfig={setConfig}
          products={products}
          setProducts={setProducts}
          posts={posts}
          setPosts={setPosts}
          onClose={() => setCurrentPage(Page.HOME)}
        />
      );
    }

    return (
      <main className="min-h-screen pt-16">
        {currentPage === Page.HOME && (
          <>
            <Hero config={config} onShopClick={() => setCurrentPage(Page.PRODUCT)} />
            <ProductGrid products={products.slice(0, 4)} title="신제품 라인업" onMoreClick={() => setCurrentPage(Page.PRODUCT)} />
            <DeliverySection />
            <BlogSection posts={posts} onMoreClick={() => setCurrentPage(Page.BLOG)} />
          </>
        )}
        {currentPage === Page.PRODUCT && (
          <div className="py-20 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center">전체 제품</h1>
            <ProductGrid products={products} hideMore />
          </div>
        )}
        {currentPage === Page.DELIVERY && (
          <div className="py-20 px-6 max-w-7xl mx-auto">
            <DeliverySection />
          </div>
        )}
        {currentPage === Page.CONTACT && (
          <div className="py-20 px-6 max-w-7xl mx-auto">
            <ContactSection />
          </div>
        )}
        {currentPage === Page.BLOG && (
          <div className="py-20 px-6 max-w-7xl mx-auto">
             <BlogSection posts={posts} />
          </div>
        )}
      </main>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        brandName={config.brandName} 
      />
      
      {renderContent()}

      {currentPage !== Page.ADMIN && <Footer brandName={config.brandName} onNavigate={setCurrentPage} />}
      
      {/* Floating Admin Button */}
      {currentPage !== Page.ADMIN && (
        <button 
          onClick={() => setCurrentPage(Page.ADMIN)}
          className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-zinc-800 transition-all z-40 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          <span className="hidden md:inline text-sm font-medium">관리자</span>
        </button>
      )}
    </div>
  );
};

export default App;
