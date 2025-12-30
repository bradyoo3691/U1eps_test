
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  title?: string;
  hideMore?: boolean;
  onMoreClick?: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, hideMore, onMoreClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black tracking-tight">{title}</h2>
            {!hideMore && (
              <button 
                onClick={onMoreClick}
                className="text-zinc-500 hover:text-[#FF6B00] font-bold text-sm underline underline-offset-4"
              >
                전체보기
              </button>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-zinc-100 rounded-2xl mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold group-hover:text-[#FF6B00] transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1.5 mb-2">
                  {product.colors.map((color, i) => (
                    <div 
                      key={i}
                      className="w-4 h-4 rounded-full border border-zinc-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                <p className="text-lg font-black text-zinc-900">
                  {product.price.toLocaleString()}원
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
