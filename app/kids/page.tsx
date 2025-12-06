import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kids\' Shoes & Apparel | Nike',
  description: 'Shop the latest kids\' shoes, clothing, and gear. Fun, durable, and designed for active kids.',
};

const kidsProducts = [
  {
    id: 301,
    name: 'Air Max 90',
    category: 'Lifestyle',
    price: 75,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 302,
    name: 'Air Force 1',
    category: 'Lifestyle',
    price: 65,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 303,
    name: 'Revolution 7',
    category: 'Running',
    price: 55,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 304,
    name: 'Court Borough Low',
    category: 'Lifestyle',
    price: 50,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 305,
    name: 'Dunk Low',
    category: 'Lifestyle',
    price: 70,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 306,
    name: 'Flex Runner 2',
    category: 'Running',
    price: 45,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 307,
    name: 'Court Legacy',
    category: 'Lifestyle',
    price: 60,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 308,
    name: 'Revolution 6',
    category: 'Running',
    price: 50,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
    featured: false,
  },
];

export default function KidsPage() {
  return (
    <CategoryPage
      title="Kids' Collection"
      description="Fun, durable, and ready for adventure. Shoes and gear that keep up with active kids."
      products={kidsProducts}
      categoryColor="from-green-500 to-emerald-600"
    />
  );
}

