import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop All Products | Nike',
  description: 'Browse our complete collection of Nike shoes, clothing, and gear.',
};

// Combine all products from different categories
const allProducts = [
  // Men's products
  {
    id: 101,
    name: 'Air Max 270',
    category: 'Running',
    price: 150,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 102,
    name: 'Air Force 1',
    category: 'Lifestyle',
    price: 90,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 103,
    name: 'LeBron 20',
    category: 'Basketball',
    price: 200,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 104,
    name: 'React Infinity Run',
    category: 'Running',
    price: 160,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 105,
    name: 'Dunk Low',
    category: 'Lifestyle',
    price: 110,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 106,
    name: 'Pegasus 40',
    category: 'Running',
    price: 130,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop',
    featured: false,
  },
  // Women's products
  {
    id: 201,
    name: 'Air Max 90',
    category: 'Lifestyle',
    price: 120,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 202,
    name: 'Air Force 1 Shadow',
    category: 'Lifestyle',
    price: 100,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
    featured: true,
  },
  // Kids' products
  {
    id: 301,
    name: 'Air Max 90 Kids',
    category: 'Lifestyle',
    price: 75,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 302,
    name: 'Air Force 1 Kids',
    category: 'Lifestyle',
    price: 65,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
    featured: true,
  },
];

export default function ShopPage() {
  return (
    <CategoryPage
      title="Shop All Products"
      description="Discover our complete collection of athletic footwear, apparel, and gear."
      products={allProducts}
      categoryColor="from-gray-700 to-gray-900"
    />
  );
}

