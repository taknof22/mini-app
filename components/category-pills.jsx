export default function CategoryPills({ categories }) {
  return (
    <div className="pill-wrap">
      {categories.map((category) => (
        <span key={category} className="pill">{category}</span>
      ))}
    </div>
  );
}
