import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useTheme } from '../context/ThemeContext';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  onCartClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onLogoClick }) => {
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8D5B0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-[#5C3D2E] hover:bg-[#F5E6D3] transition-colors cursor-pointer"
              aria-label="Menü"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <button
              onClick={onLogoClick}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span className="text-2xl sm:text-3xl">☕</span>
              <div className="flex flex-col">
                <span className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-[#2C1810] group-hover:text-[#5C3D2E] transition-colors">
                  Artisan Coffee
                </span>
                <span className="text-[10px] sm:text-xs text-[#8B5E3C] tracking-widest uppercase hidden sm:block">
                  Premium Selection
                </span>
              </div>
            </button>

            {/* Nav - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[#5C3D2E] hover:text-[#2C1810] font-medium transition-colors">
                Ana Sayfa
              </a>
              <a href="#products" className="text-[#5C3D2E] hover:text-[#2C1810] font-medium transition-colors">
                Ürünler
              </a>
              <a href="#brewing" className="text-[#5C3D2E] hover:text-[#2C1810] font-medium transition-colors">
                Hazırlama Rehberi
              </a>
              <a href="#faq" className="text-[#5C3D2E] hover:text-[#2C1810] font-medium transition-colors">
                SSS
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-3 rounded-full bg-[#F5E6D3] hover:bg-[#E8D5B0] transition-all duration-300 cursor-pointer"
                aria-label={theme === 'dark' ? 'Açık moda geç' : 'Koyu moda geç'}
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#C8A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#5C3D2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Wishlist Button */}
              <button
                className="relative p-2 sm:p-3 rounded-full bg-[#F5E6D3] hover:bg-[#E8D5B0] transition-all duration-300 group cursor-pointer"
                aria-label="Favoriler"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#5C3D2E] group-hover:text-red-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full font-bold animate-fade-in">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative p-2 sm:p-3 rounded-full bg-[#F5E6D3] hover:bg-[#E8D5B0] transition-all duration-300 group cursor-pointer"
                aria-label="Sepet"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#5C3D2E] group-hover:text-[#2C1810]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C8A96E] text-white text-xs w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full font-bold animate-fade-in">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
