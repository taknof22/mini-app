export default function CategoryPills({ categories }) {
  return (
    <div className="pill-wrap">
      {categories.map((category) => {
        const label = typeof category === 'string' ? category : category.label;
        const count = typeof category === 'string' ? null : category.count;
        return (
          <span key={label} className="pill">
            {label}{count ? ` ${count}` : ''}
          </span>
        );
      })}
    </div>
  );
}
