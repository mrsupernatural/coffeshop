import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2C1810] via-[#5C3D2E] to-[#8B5E3C]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C8A96E] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#E8D5B0] blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <span className="text-4xl mb-4 block">✉️</span>
        <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
          Kahve Dünyasından Haberdar Olun
        </h2>
        <p className="text-[#E8D5B0] text-base sm:text-lg max-w-xl mx-auto mb-8">
          Yeni ürünler, özel indirimler ve kahve hazırlama ipuçları için bültenimize abone olun.
        </p>

        {isSubscribed ? (
          <div className="animate-fade-in bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
            <span className="text-3xl mb-2 block">🎉</span>
            <p className="text-white font-medium">
              Teşekkürler! Bültenimize başarıyla abone oldunuz.
            </p>
            <p className="text-[#E8D5B0] text-sm mt-1">
              İlk özel teklifiniz çok yakında e-posta adresinize gelecek.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              required
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="bg-[#C8A96E] hover:bg-[#E8D5B0] text-[#2C1810] px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl cursor-pointer whitespace-nowrap"
            >
              Abone Ol
            </button>
          </form>
        )}

        <p className="text-[#E8D5B0]/50 text-xs mt-4">
          İstediğiniz zaman aboneliğinizi iptal edebilirsiniz. Spam göndermiyoruz.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
