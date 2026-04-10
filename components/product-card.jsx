'use client';

import Link from 'next/link';
import { useShop } from '@/context/shop-context';

export default function ProductCard({ product }) {
  const { cartIds, favouriteIds, addToCart, toggleFavourite } = useShop();
  const inCart = cartIds.includes(product.id);
  const isFavourite = favouriteIds.includes(product.id);

  return (
    <article className="product-card fade-in">
      <Link href={`/product/${product.id}`} className="image-wrap">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-content">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="row-between">
          <strong>${product.price}</strong>
          <button className="ghost-btn" onClick={() => toggleFavourite(product.id)}>
            {isFavourite ? '★ Favourites' : '☆ Favourites'}
          </button>
        </div>
        <button className={`primary-btn ${inCart ? 'added' : ''}`} onClick={() => addToCart(product.id)}>
          {inCart ? 'Added to cart' : 'Add to cart'}
        </button>
      </div>
    </article>
  );
}
