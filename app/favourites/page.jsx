'use client';

import { useShop } from '@/context/shop-context';
import { products } from '@/data/products';
import ProductCard from '@/components/product-card';

export default function FavouritesPage() {
  const { favouriteIds } = useShop();
  const items = products.filter((product) => favouriteIds.includes(product.id));

  return (
    <section className="stack-lg">
      <div className="section-header">
        <h1>Favourites</h1>
        <p>Save the products you love and return anytime.</p>
      </div>
      {items.length === 0 ? <p>No favourites yet.</p> : <div className="grid cards-grid">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
    </section>
  );
}
