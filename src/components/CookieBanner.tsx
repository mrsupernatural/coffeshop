import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-[#E8D5B0] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🍪</span>
              <h3 className="font-semibold text-[#2C1810]">Çerez Bildirimi</h3>
            </div>
            <p className="text-sm text-[#5C3D2E] leading-relaxed">
              Size en iyi deneyimi sunmak için çerezleri kullanıyoruz. Sitemizi kullanarak çerez politikamızı kabul etmiş olursunuz.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#E8D5B0] text-[#5C3D2E] hover:bg-[#F5E6D3] transition-colors font-medium text-sm cursor-pointer"
            >
              Reddet
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#5C3D2E] text-white hover:bg-[#2C1810] transition-colors font-medium text-sm cursor-pointer"
            >
              Kabul Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
