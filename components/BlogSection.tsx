
import React from 'react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
  onMoreClick?: () => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts, onMoreClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black tracking-tight">디자인 인사이트</h2>
            <p className="text-zinc-500 mt-2">U1 eps가 제안하는 공간의 철학</p>
          </div>
          {onMoreClick && (
            <button 
              onClick={onMoreClick}
              className="text-zinc-500 hover:text-[#FF6B00] font-bold text-sm"
            >
              더 많은 소식 보기 →
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 aspect-video bg-zinc-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest">{post.date}</span>
                <h3 className="text-2xl font-bold group-hover:text-[#FF6B00] transition-colors">{post.title}</h3>
                <p className="text-zinc-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
