import React from 'react';

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating' | 'name';

interface SortFilterProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  productCount: number;
}

const SortFilter: React.FC<SortFilterProps> = ({ sortBy, onSortChange, productCount }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
      <p className="text-sm text-[#8B5E3C]">
        <span className="font-semibold text-[#2C1810]">{productCount}</span> ürün bulundu
      </p>
      <div className="flex items-center gap-2">
        <label className="text-sm text-[#8B5E3C] whitespace-nowrap">Sırala:</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="px-3 py-2 rounded-lg border border-[#E8D5B0] bg-white text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] cursor-pointer"
        >
          <option value="default">Varsayılan</option>
          <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
          <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
          <option value="rating">En Yüksek Puan</option>
          <option value="name">İsme Göre (A-Z)</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
