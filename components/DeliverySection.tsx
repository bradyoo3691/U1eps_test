
import React from 'react';

const DeliverySection: React.FC = () => {
  const steps = [
    {
      icon: '📦',
      title: '정밀 검수 및 패키징',
      desc: '출고 전 3단계 품질 검수를 거쳐 전용 에어캡 박스로 안전하게 포장합니다.'
    },
    {
      icon: '🚚',
      title: '신속한 국내 배송',
      desc: '국내 자체 생산 라인업으로 결제 완료 후 평균 2일 내 발송됩니다.'
    },
    {
      icon: '✨',
      title: '전담 기사 방문 조립',
      desc: '대량 주문 시 전문 인력이 직접 방문하여 최적의 공간 배치를 도와드립니다.'
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 rounded-[3rem] mx-6 mb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight">포장 및 배송 안내</h2>
          <p className="text-zinc-500">U1 eps는 제품이 고객님께 닿는 마지막 순간까지 책임집니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform inline-block">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-black rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">배송비 안내</h4>
            <p className="text-zinc-400">전국 기본 배송비 5,000원 (10만원 이상 구매 시 무료)</p>
          </div>
          <button className="px-8 py-3 bg-[#FF6B00] text-white rounded-full font-bold hover:bg-white hover:text-[#FF6B00] transition-all">
            고객센터 연결
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
