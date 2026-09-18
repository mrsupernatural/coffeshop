import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute top-0 left-0 w-72 h-full bg-white shadow-2xl animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E8D5B0]">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <span className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810]">
              Artisan Coffee
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F5E6D3] flex items-center justify-center text-[#5C3D2E] hover:bg-[#E8D5B0] transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-5 space-y-1">
          <a
            href="#"
            onClick={handleLinkClick}
            className="block px-4 py-3 rounded-xl text-[#5C3D2E] hover:bg-[#F5E6D3] font-medium transition-colors"
          >
            🏠 Ana Sayfa
          </a>
          <a
            href="#products"
            onClick={handleLinkClick}
            className="block px-4 py-3 rounded-xl text-[#5C3D2E] hover:bg-[#F5E6D3] font-medium transition-colors"
          >
            ☕ Ürünler
          </a>
          <a
            href="#brewing"
            onClick={handleLinkClick}
            className="block px-4 py-3 rounded-xl text-[#5C3D2E] hover:bg-[#F5E6D3] font-medium transition-colors"
          >
            📖 Hazırlama Rehberi
          </a>
          <a
            href="#faq"
            onClick={handleLinkClick}
            className="block px-4 py-3 rounded-xl text-[#5C3D2E] hover:bg-[#F5E6D3] font-medium transition-colors"
          >
            ❓ SSS
          </a>
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#E8D5B0] bg-[#FDF8F3]">
          <p className="text-xs text-[#8B5E3C] text-center">
            © 2026 Artisan Coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
