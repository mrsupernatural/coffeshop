import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Coupon {
  code: string;
  discount: number; // percentage
  description: string;
}

const validCoupons: Coupon[] = [
  { code: 'HOŞGELDİN10', discount: 10, description: '%10 Hoş Geldin İndirimi' },
  { code: 'KAHVE20', discount: 20, description: '%20 Kahve Sever İndirimi' },
  { code: 'İLK50', discount: 50, description: '₺50 İlk Sipariş İndirimi' },
];

interface CouponContextType {
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  discountAmount: number;
  setDiscountBase: (amount: number) => void;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const CouponProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [discountBase, setDiscountBase] = useState(0);

  const applyCoupon = (code: string): boolean => {
    const coupon = validCoupons.find(
      (c) => c.code.toUpperCase() === code.toUpperCase()
    );
    if (coupon) {
      setAppliedCoupon(coupon);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const discountAmount = appliedCoupon
    ? appliedCoupon.code === 'İLK50'
      ? Math.min(50, discountBase)
      : Math.round(discountBase * (appliedCoupon.discount / 100))
    : 0;

  return (
    <CouponContext.Provider
      value={{
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        discountAmount,
        setDiscountBase,
      }}
    >
      {children}
    </CouponContext.Provider>
  );
};

export const useCoupon = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error('useCoupon must be used within a CouponProvider');
  }
  return context;
};

export { validCoupons };
