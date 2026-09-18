import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C1810] text-[#E8D5B0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="font-['Playfair_Display'] text-xl font-bold text-white">
                Artisan Coffee
              </span>
            </div>
            <p className="text-sm text-[#E8D5B0]/70 leading-relaxed">
              Dünyanın en seçkin kahve bölgelerinden özenle toplanan çekirdeklerle,
              her fincanda benzersiz bir deneyim sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#C8A96E] transition-colors">Ana Sayfa</a></li>
              <li><a href="#products" className="hover:text-[#C8A96E] transition-colors">Ürünler</a></li>
              <li><a href="#" className="hover:text-[#C8A96E] transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-[#C8A96E] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Destek</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#C8A96E] transition-colors">SSS</a></li>
              <li><a href="#" className="hover:text-[#C8A96E] transition-colors">Kargo Bilgileri</a></li>
              <li><a href="#" className="hover:text-[#C8A96E] transition-colors">İade Politikası</a></li>
              <li><a href="#" className="hover:text-[#C8A96E] transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span> İstanbul, Türkiye
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span> info@artisancoffee.com
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> +90 212 555 0000
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-[#5C3D2E] flex items-center justify-center hover:bg-[#C8A96E] transition-colors">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#5C3D2E] flex items-center justify-center hover:bg-[#C8A96E] transition-colors">
                <span className="text-sm">📷</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#5C3D2E] flex items-center justify-center hover:bg-[#C8A96E] transition-colors">
                <span className="text-sm">📘</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#5C3D2E] mt-10 pt-6 text-center text-sm text-[#E8D5B0]/50">
          <p>© 2026 Artisan Coffee. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
