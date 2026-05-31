const names = [
  'Graphite Serum', 'Lime Mist', 'Velvet Cream', 'Matte Brush', 'Night Shampoo', 'Urban Oil',
  'Glass Balm', 'Soft Powder', 'Forest Mask', 'Clean Capsule', 'Prime Comb', 'Glow Drops'
];

const categoryConfig = [
  { category: 'Makeup', count: 68, baseUsd: 28 },
  { category: 'Hair', count: 29, baseUsd: 34 },
  { category: 'Accessories', count: 71, baseUsd: 18 },
  { category: 'Exclusive', count: 15, baseUsd: 64 }
];

const tagMap = {
  Makeup: ['Beauty', 'Premium', 'New'],
  Hair: ['Care', 'Smooth', 'Clean'],
  Accessories: ['Kit', 'Utility', 'Matte'],
  Exclusive: ['Limited', 'Reserve', 'Premium']
};

export const categories = [
  { id: 'popular', label: 'Popular', count: 60, accent: true },
  { id: 'exclusive', label: 'Exclusive', count: 15, accent: true },
  { id: 'all', label: 'All', count: 183 },
  { id: 'makeup', label: 'Makeup', count: 68 },
  { id: 'hair', label: 'Hair', count: 29 },
  { id: 'accessories', label: 'Accessories', count: 71 }
];

const makeProduct = (category, index, offset, baseUsd) => {
  const name = names[(index + offset) % names.length];
  const priceUsd = baseUsd + ((index * 7 + offset) % 34);

  return {
    id: `${category.toLowerCase()}-${index + 1}`,
    name: `${name} ${index + 1}`,
    title: `${name} ${index + 1}`,
    category,
    tags: tagMap[category],
    price: priceUsd,
    usdPrice: priceUsd,
    demoPrice: `${priceUsd} USD`,
    description: `${category} demo catalogue item with premium packaging and clean mini-app presentation.`,
    characteristics: [
      'Demo marketplace item',
      'Availability may vary',
      'Estimated time shown in app',
      'Legal products only'
    ],
    tone: ['lime', 'graphite', 'emerald', 'charcoal'][(index + offset) % 4],
    isNew: offset + index < 5
  };
};

export const products = categoryConfig.flatMap((item, categoryIndex) =>
  Array.from({ length: item.count }, (_, index) =>
    makeProduct(item.category, index, categoryIndex * 11, item.baseUsd)
  )
);

const takeByCategory = (category, amount) => products.filter((item) => item.category === category).slice(0, amount);

export const popularProducts = [
  ...takeByCategory('Makeup', 25),
  ...takeByCategory('Exclusive', 10),
  ...takeByCategory('Hair', 8),
  ...takeByCategory('Accessories', 17)
];

export const getProductById = (id) => products.find((product) => product.id === id);
