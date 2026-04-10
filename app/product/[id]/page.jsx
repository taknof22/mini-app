'use client';

import { useParams } from 'next/navigation';
import { getProductById } from '@/data/products';
import { useShop } from '@/context/shop-context';

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id);
  const { cartIds, favouriteIds, addToCart, toggleFavourite } = useShop();

  if (!product) {
    return <p>Product not found.</p>;
  }

  const inCart = cartIds.includes(product.id);
  const isFavourite = favouriteIds.includes(product.id);

  return (
    <section className="product-page fade-up">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <p className="category">{product.category}</p>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <div className="hero-actions">
          <button className={`primary-btn ${inCart ? 'added' : ''}`} onClick={() => addToCart(product.id)}>
            {inCart ? 'Added to cart' : 'Add to cart'}
          </button>
          <button className="ghost-btn" onClick={() => toggleFavourite(product.id)}>
            {isFavourite ? '★ Favourites' : '☆ Favourites'}
          </button>
        </div>
      </div>
    </section>
  );
}
