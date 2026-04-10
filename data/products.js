export const categories = ['Cosmetics', 'Capsules', 'Oils', 'Flowers'];

export const products = [
  {
    id: 'cbd-face-serum',
    name: 'CBD Radiance Face Serum',
    category: 'Cosmetics',
    price: 68,
    description: 'A velvety serum with broad-spectrum CBD and botanical extracts for visible glow and calm skin.',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cbd-softgels',
    name: 'Daily Balance Softgels',
    category: 'Capsules',
    price: 52,
    description: 'Precise daily capsules designed for simple routines and long-lasting composure.',
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cbd-dropper-oil',
    name: 'Calm Spectrum Oil',
    category: 'Oils',
    price: 74,
    description: 'Premium CBD oil with a smooth taste profile crafted for everyday balance and calm.',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cbd-flower-premium',
    name: 'Reserve CBD Flower',
    category: 'Flowers',
    price: 46,
    description: 'Hand-selected aromatic CBD flower grown with strict quality standards.',
    image: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cbd-body-cream',
    name: 'Relief Body Cream',
    category: 'Cosmetics',
    price: 58,
    description: 'Nourishing cream enriched with CBD, shea, and calming herbs for comfort.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cbd-night-oil',
    name: 'Evening Ritual Oil',
    category: 'Oils',
    price: 79,
    description: 'A relaxing nighttime blend made to support quiet evenings and restorative routines.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'
  }
];

export const getProductById = (id) => products.find((product) => product.id === id);
