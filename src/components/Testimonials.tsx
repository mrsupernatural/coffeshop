import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ayşe K.',
    role: 'Kahve Tutkunu',
    text: 'Ethiopian Yirgacheffe hayatımda içtiğim en güzel kahve. Çiçeksi aromaları ve temiz bitimi beni büyüledi. Artık başka yerde kahve almıyorum!',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Mehmet T.',
    role: 'Barista',
    text: 'Italian Espresso Roast ile mükemmel crema elde ediyorum. Müşterilerim bu kahveyi çok seviyor. Kalitesi gerçekten üst düzey.',
    rating: 5,
    avatar: '👨‍🍳',
  },
  {
    id: 3,
    name: 'Zeynep A.',
    role: 'Düzenli Müşteri',
    text: 'Her ay Morning Blend sipariş veriyorum. Taze kavrulmuş olması fark yaratıyor. Kargo da çok hızlı, paketleme özenli.',
    rating: 5,
    avatar: '👩‍🎨',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#F5E6D3]/50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#C8A96E] text-sm font-medium tracking-widest uppercase">
            Müşteri Yorumları
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#2C1810] mt-2">
            Kahve Severler Ne Diyor?
          </h2>
          <p className="text-[#8B5E3C] mt-3 max-w-xl mx-auto">
            Binlerce mutlu müşterimizin kahve deneyimlerinden bazıları
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E8D5B0]/30 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#C8A96E] text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#5C3D2E] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">{testimonial.name}</p>
                  <p className="text-sm text-[#8B5E3C]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
