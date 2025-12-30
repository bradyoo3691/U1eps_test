
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  brandName: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, brandName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', page: Page.HOME },
    { label: 'Products', page: Page.PRODUCT },
    { label: 'Delivery', page: Page.DELIVERY },
    { label: 'Contact', page: Page.CONTACT },
    { label: 'Blog', page: Page.BLOG },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => onNavigate(Page.HOME)}
          className="text-2xl font-black tracking-tighter text-black flex items-center gap-1"
        >
          {brandName} <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full"></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.page ? 'text-[#FF6B00]' : 'text-zinc-600 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                setIsMenuOpen(false);
              }}
              className="text-left text-lg font-semibold py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
