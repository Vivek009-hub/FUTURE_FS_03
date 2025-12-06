import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Women\'s Shoes & Apparel | Nike',
  description: 'Shop the latest women\'s shoes, clothing, and gear. Discover performance and lifestyle products designed for women.',
};

const womenProducts = [
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
  {
    id: 203,
    name: 'React Infinity Run',
    category: 'Running',
    price: 150,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 204,
    name: 'Zoom Pegasus 40',
    category: 'Running',
    price: 130,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 205,
    name: 'Dunk Low Retro',
    category: 'Lifestyle',
    price: 110,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 206,
    name: 'Air Max 270',
    category: 'Running',
    price: 140,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 207,
    name: 'Blazer Mid \'77',
    category: 'Lifestyle',
    price: 95,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop',
    featured: false,
  },
  {
    id: 208,
    name: 'Zoom Vomero 5',
    category: 'Running',
    price: 135,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
    featured: false,
  },
];

export default function WomenPage() {
  return (
    <CategoryPage
      title="Women's Collection"
      description="Empower your performance. Discover shoes and apparel designed to move with you."
      products={womenProducts}
      categoryColor="from-pink-500 to-rose-600"
    />
  );
}

