
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-8 tracking-tight italic">GET IN TOUCH</h2>
            <p className="text-zinc-500 mb-12 text-lg">
              프로젝트 문의, 대량 주문, 혹은 가구에 대한 궁금한 점이 있으시다면 언제든 문의해주세요.<br/>
              전문 컨설턴트가 빠른 시일 내에 답변 드립니다.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="성함" 
                  className="w-full px-6 py-4 bg-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all"
                />
                <input 
                  type="text" 
                  placeholder="연락처" 
                  className="w-full px-6 py-4 bg-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all"
                />
              </div>
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="w-full px-6 py-4 bg-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all"
              />
              <textarea 
                rows={5} 
                placeholder="문의하실 내용을 입력해 주세요" 
                className="w-full px-6 py-4 bg-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all resize-none"
              ></textarea>
              <button className="w-full py-5 bg-[#FF6B00] text-white rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl shadow-orange-500/20">
                문의 보내기
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div className="h-[400px] w-full bg-zinc-100 rounded-3xl overflow-hidden shadow-inner relative">
              {/* Map Placeholder */}
              <img 
                src="https://picsum.photos/seed/map/800/800" 
                className="w-full h-full object-cover grayscale opacity-50"
                alt="Location Map"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <h4 className="font-bold">U1 eps Head Office</h4>
                  <p className="text-xs text-zinc-400">대한민국 경기도 김포시</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest text-zinc-400 mb-4">Email Us</h4>
                <p className="font-bold">contact@u1eps.com</p>
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest text-zinc-400 mb-4">Call Us</h4>
                <p className="font-bold">070-1234-5678</p>
              </div>
              <div className="col-span-2">
                <h4 className="font-black text-xs uppercase tracking-widest text-zinc-400 mb-4">Social</h4>
                <div className="flex gap-4">
                  <button className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-colors">
                    Insta
                  </button>
                  <button className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-colors">
                    Kakao
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
