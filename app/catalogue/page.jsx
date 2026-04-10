import ProductCard from '@/components/product-card';
import CategoryPills from '@/components/category-pills';
import { categories, products } from '@/data/products';

export default function CataloguePage() {
  return (
    <section className="stack-lg">
      <div className="section-header fade-up">
        <h1>Catalogue</h1>
        <p>Curated CBD essentials crafted with purity, consistency, and premium botanicals.</p>
      </div>
      <CategoryPills categories={categories} />
      <div className="grid cards-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
