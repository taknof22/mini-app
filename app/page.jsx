import Link from 'next/link';
import ProductCard from '@/components/product-card';
import CategoryPills from '@/components/category-pills';
import { categories, products } from '@/data/products';

export default function HomePage() {
  return (
    <section className="stack-lg">
      <section className="hero fade-up">
        <p className="eyebrow">Premium CBD Collection</p>
        <h1>Premium CBD products for balance and calm</h1>
        <p>Natural support every day</p>
        <div className="hero-actions">
          <Link href="/catalogue" className="primary-btn">Explore Catalogue</Link>
          <Link href="/favourites" className="ghost-btn">View Favourites</Link>
        </div>
      </section>

      <section>
        <h2>Categories</h2>
        <CategoryPills categories={categories} />
      </section>

      <section>
        <div className="row-between">
          <h2>Featured Products</h2>
          <Link href="/catalogue" className="simple-link">See all</Link>
        </div>
        <div className="grid cards-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </section>
  );
}
