'use client';

import Link from 'next/link';
import { useShop } from '@/context/shop-context';
import { products } from '@/data/products';

export default function CartPage() {
  const { cartIds, removeFromCart } = useShop();
  const items = products.filter((product) => cartIds.includes(product.id));

  return (
    <section className="stack-lg">
      <div className="section-header">
        <h1>Cart</h1>
        <p>{items.length} premium selections ready for checkout.</p>
      </div>
      {items.length === 0 ? (
        <p>Your cart is empty. <Link href="/catalogue" className="simple-link">Discover products</Link>.</p>
      ) : (
        <div className="stack-md">
          {items.map((item) => (
            <div key={item.id} className="list-item fade-in">
              <div>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </div>
              <div className="row-between gap-sm">
                <strong>${item.price}</strong>
                <button className="ghost-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
