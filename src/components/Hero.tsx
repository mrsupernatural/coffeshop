import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2C1810] via-[#5C3D2E] to-[#8B5E3C]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#C8A96E] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#C8A96E] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-[#E8D5B0] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <span className="inline-block text-[#C8A96E] text-sm sm:text-base font-medium tracking-widest uppercase mb-4 animate-fade-in">
            ✦ Premium Kahve Deneyimi ✦
          </span>
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in">
            Her Fincanda
            <br />
            <span className="text-[#C8A96E]">Bir Hikaye</span>
          </h1>
          <p className="text-[#E8D5B0] text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in">
            Dünyanın en seçkin kahve bölgelerinden özenle toplanan çekirdekler,
            ustalarımızın ellerinde benzersiz birer lezzete dönüşüyor.
            Siz de bu yolculuğa katılın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <a
              href="#products"
              className="bg-[#C8A96E] hover:bg-[#E8D5B0] text-[#2C1810] px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Koleksiyonu Keşfet
            </a>
            <a
              href="#products"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Daha Fazla Bilgi
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#C8A96E]">12+</p>
              <p className="text-xs sm:text-sm text-[#E8D5B0]">Ülke</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#C8A96E]">500+</p>
              <p className="text-xs sm:text-sm text-[#E8D5B0]">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#C8A96E]">4.8</p>
              <p className="text-xs sm:text-sm text-[#E8D5B0]">Ortalama Puan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 48C480 42.7 600 45.3 720 50.7C840 56 960 64 1080 64C1200 64 1320 56 1380 52L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FDF8F3"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
