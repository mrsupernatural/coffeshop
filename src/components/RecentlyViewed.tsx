import React from 'react';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

// Her ürün için özel gradient renkler
const getGradient = (id: number) => {
  const gradients: Record<number, { from: string; to: string }> = {
    1: { from: '#F5E6D3', to: '#E8D5B0' },
    2: { from: '#E8D5B0', to: '#D4C4A8' },
    3: { from: '#FFE4B5', to: '#FFD700' },
    4: { from: '#4A3728', to: '#2C1810' },
    5: { from: '#E6E6FA', to: '#D8BFD8' },
    6: { from: '#2C1810', to: '#1a0f0a' },
  };
  return gradients[id] || { from: '#F5E6D3', to: '#E8D5B0' };
};

interface RecentlyViewedProps {
  onProductClick: (productId: number) => void;
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ onProductClick }) => {
  const { recentlyViewed, clearRecentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) return null;

  return (
    <section className="bg-white border-t border-[#E8D5B0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#2C1810]">
              Son Görüntülenenler
            </h2>
            <p className="text-sm text-[#8B5E3C] mt-1">En son baktığınız ürünler</p>
          </div>
          <button
            onClick={clearRecentlyViewed}
            className="text-sm text-[#8B5E3C] hover:text-[#2C1810] transition-colors cursor-pointer"
          >
            Temizle
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {recentlyViewed.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product.id)}
              className="bg-[#FDF8F3] rounded-xl p-3 cursor-pointer hover:shadow-md transition-all duration-300 group"
            >
              <div
                className="aspect-square rounded-lg overflow-hidden mb-2 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${getGradient(product.id).from}, ${getGradient(product.id).to})`,
                }}
              >
                <span className="text-3xl group-hover:scale-105 transition-transform duration-300">
                  {product.image}
                </span>
              </div>
              <p className="text-xs font-medium text-[#2C1810] truncate">
                {product.name}
              </p>
              <p className="text-xs text-[#C8A96E] font-bold mt-1">
                ₺{product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
