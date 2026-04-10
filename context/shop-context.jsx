'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cartIds, setCartIds] = useState([]);
  const [favouriteIds, setFavouriteIds] = useState([]);

  const addToCart = (id) => {
    setCartIds((current) => (current.includes(id) ? current : [...current, id]));
  };

  const toggleFavourite = (id) => {
    setFavouriteIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const removeFromCart = (id) => {
    setCartIds((current) => current.filter((item) => item !== id));
  };

  const value = useMemo(
    () => ({ cartIds, favouriteIds, addToCart, removeFromCart, toggleFavourite }),
    [cartIds, favouriteIds]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
