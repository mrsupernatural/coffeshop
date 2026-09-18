import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

interface CompareContextType {
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: number) => void;
  isInCompare: (productId: number) => boolean;
  clearCompare: () => void;
  compareCount: number;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [compareList, setCompareList] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    setCompareList((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId: number) => {
    setCompareList((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInCompare = (productId: number) => {
    return compareList.some((item) => item.id === productId);
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const compareCount = compareList.length;

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
        compareCount,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
