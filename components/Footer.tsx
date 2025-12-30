
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  brandName: string;
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ brandName, onNavigate }) => {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tighter flex items-center gap-1">
              {brandName} <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full"></span>
            </h2>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-8">
              국내 자체 공정으로 생산되는 프리미엄 플라스틱 체어 전문 브랜드.<br/>
              편안함의 본질을 연구하고 견고함의 기준을 제시합니다.
            </p>
            <div className="flex gap-4">
               {/* Icons placeholder */}
               <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">In</div>
               <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">Fb</div>
               <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">Ka</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><button onClick={() => onNavigate(Page.HOME)} className="hover:text-[#FF6B00] transition-colors">홈</button></li>
              <li><button onClick={() => onNavigate(Page.PRODUCT)} className="hover:text-[#FF6B00] transition-colors">제품소개</button></li>
              <li><button onClick={() => onNavigate(Page.DELIVERY)} className="hover:text-[#FF6B00] transition-colors">배송안내</button></li>
              <li><button onClick={() => onNavigate(Page.CONTACT)} className="hover:text-[#FF6B00] transition-colors">고객문의</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><p>이용약관</p></li>
              <li><p>개인정보처리방침</p></li>
              <li><p>기업 제휴 문의</p></li>
              <li><p>대량 구매 안내</p></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © 2024 U1 eps (Ding Studio). All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-zinc-500 text-sm font-medium">
            <p>사업자등록번호: 123-45-67890</p>
            <p>대표: 김유원</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
