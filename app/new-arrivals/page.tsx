import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Arrivals | Nike',
  description: 'Shop the latest new arrivals from Nike. Be the first to get the newest styles.',
};

const newArrivals = [
  {
    id: 501,
    name: 'Air Max 270 NEW',
    category: 'Running',
    price: 150,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 502,
    name: 'Dunk Low Retro NEW',
    category: 'Lifestyle',
    price: 110,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 503,
    name: 'React Infinity Run NEW',
    category: 'Running',
    price: 160,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 504,
    name: 'LeBron 20 NEW',
    category: 'Basketball',
    price: 200,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 505,
    name: 'Air Force 1 NEW',
    category: 'Lifestyle',
    price: 90,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 506,
    name: 'Pegasus 40 NEW',
    category: 'Running',
    price: 130,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop',
    featured: false,
  },
];

export default function NewArrivalsPage() {
  return (
    <CategoryPage
      title="New Arrivals"
      description="Be the first to get the latest styles. Fresh designs, innovative technology, and timeless style."
      products={newArrivals}
      categoryColor="from-purple-600 to-indigo-800"
    />
  );
}

