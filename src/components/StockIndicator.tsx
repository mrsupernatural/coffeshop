import React from 'react';

interface StockIndicatorProps {
  stock: number;
}

const StockIndicator: React.FC<StockIndicatorProps> = ({ stock }) => {
  if (stock === 0) {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-medium text-red-600">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        Stokta Yok
      </span>
    );
  }

  if (stock <= 5) {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-600">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        Son {stock} Adet!
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">
      <span className="w-2 h-2 rounded-full bg-green-500"></span>
      Stokta Mevcut
    </span>
  );
};

export default StockIndicator;
