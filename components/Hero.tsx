
import React from 'react';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
  onShopClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ config, onShopClick }) => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full">
        <div className="z-10 animate-fade-in-up">
          <h2 className="text-xl md:text-2xl font-light text-zinc-400 mb-4 tracking-tight">
            Premium Plastic Furniture
          </h2>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
            {config.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 mb-2 font-medium">
            {config.heroSub1}
          </p>
          <p className="text-lg md:text-2xl font-bold mb-10">
            <span className="text-[#FF6B00]">{config.heroSub2}</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onShopClick}
              className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#FF6B00] transition-all transform hover:-translate-y-1 shadow-lg shadow-black/10"
            >
              제품 보러가기
            </button>
            <button className="px-8 py-4 bg-zinc-100 text-black rounded-full font-bold hover:bg-zinc-200 transition-all">
              기업 솔루션 문의
            </button>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[600px] flex justify-center items-center">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-zinc-100 rounded-full blur-2xl"></div>
          
          <img 
            src="https://picsum.photos/seed/u1eps/800/800" 
            alt="U1 eps Chair" 
            className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
