import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sale - Up to 50% Off | Nike',
  description: 'Shop the latest Nike sale items. Save on shoes, clothing, and gear. Limited time offers.',
};

const saleProducts = [
  {
    id: 401,
    name: 'Air Max 270',
    category: 'Running',
    price: 120,
    originalPrice: 150,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 402,
    name: 'Air Force 1',
    category: 'Lifestyle',
    price: 70,
    originalPrice: 90,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 403,
    name: 'React Infinity Run',
    category: 'Running',
    price: 128,
    originalPrice: 160,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 404,
    name: 'Dunk Low',
    category: 'Lifestyle',
    price: 88,
    originalPrice: 110,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 405,
    name: 'Pegasus 40',
    category: 'Running',
    price: 104,
    originalPrice: 130,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 406,
    name: 'Blazer Mid',
    category: 'Lifestyle',
    price: 80,
    originalPrice: 100,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 407,
    name: 'Zoom Vomero 5',
    category: 'Running',
    price: 112,
    originalPrice: 140,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 408,
    name: 'Court Legacy',
    category: 'Lifestyle',
    price: 72,
    originalPrice: 90,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
    featured: false,
  },
];

export default function SalePage() {
  return (
    <CategoryPage
      title="Sale - Up to 50% Off"
      description="Don't miss out on these limited-time deals. Shop now and save on your favorite styles."
      products={saleProducts}
      categoryColor="from-red-600 to-red-800"
    />
  );
}

