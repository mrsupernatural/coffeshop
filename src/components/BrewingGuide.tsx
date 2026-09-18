import React from 'react';

const brewingMethods = [
  {
    id: 1,
    name: 'Pour Over',
    icon: '☕',
    time: '3-4 dk',
    ratio: '1:16',
    temp: '93°C',
    description: 'Temiz ve parlak bir fincan için ideal. Kahvenin karmaşık tatlarını ortaya çıkarır.',
  },
  {
    id: 2,
    name: 'French Press',
    icon: '🫖',
    time: '4 dk',
    ratio: '1:15',
    temp: '96°C',
    description: 'Dolu gövdeli ve zengin bir kahve deneyimi. Doğal yağları korur.',
  },
  {
    id: 3,
    name: 'Espresso',
    icon: '⚡',
    time: '25-30 sn',
    ratio: '1:2',
    temp: '93°C',
    description: 'Yoğun ve konsantre bir shot. Crema tabakasıyla mükemmel.',
  },
  {
    id: 4,
    name: 'AeroPress',
    icon: '🔬',
    time: '1-2 dk',
    ratio: '1:15',
    temp: '85°C',
    description: 'Hızlı ve çok yönlü. Pürüzsüz ve temiz bir fincan sunar.',
  },
];

const BrewingGuide: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#C8A96E] text-sm font-medium tracking-widest uppercase">
            Kahve Hazırlama
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#2C1810] mt-2">
            Mükemmel Fincan İçin Rehber
          </h2>
          <p className="text-[#8B5E3C] mt-3 max-w-xl mx-auto">
            Her hazırlama yöntemi farklı bir deneyim sunar. Size en uygun yöntemi keşfedin.
          </p>
        </div>

        {/* Brewing Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brewingMethods.map((method) => (
            <div
              key={method.id}
              className="bg-gradient-to-br from-[#FDF8F3] to-[#F5E6D3] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-[#E8D5B0]/30"
            >
              <div className="text-center mb-4">
                <span className="text-4xl">{method.icon}</span>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#2C1810] mt-2">
                  {method.name}
                </h3>
              </div>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8B5E3C]">Süre:</span>
                  <span className="font-semibold text-[#2C1810]">{method.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8B5E3C]">Oran:</span>
                  <span className="font-semibold text-[#2C1810]">{method.ratio}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8B5E3C]">Sıcaklık:</span>
                  <span className="font-semibold text-[#2C1810]">{method.temp}</span>
                </div>
              </div>

              <p className="text-sm text-[#5C3D2E] leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrewingGuide;
