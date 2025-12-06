import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Category | Nike',
  description: 'Browse products by category.',
};

// Map category names to products
const categoryProducts: Record<string, any[]> = {
  running: [
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
      id: 104,
      name: 'React Infinity Run',
      category: 'Running',
      price: 160,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
      featured: true,
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
  ],
  basketball: [
    {
      id: 103,
      name: 'LeBron 20',
      category: 'Basketball',
      price: 200,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
      featured: true,
    },
  ],
  lifestyle: [
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
      id: 105,
      name: 'Dunk Low',
      category: 'Lifestyle',
      price: 110,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
      featured: false,
    },
  ],
  training: [
    {
      id: 107,
      name: 'Training Pro',
      category: 'Training',
      price: 140,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
      featured: true,
    },
  ],
};

const categoryInfo: Record<string, { title: string; description: string; color: string }> = {
  running: {
    title: 'Running Shoes',
    description: 'Built for speed and endurance. Find your perfect running companion.',
    color: 'from-blue-500 to-cyan-500',
  },
  basketball: {
    title: 'Basketball Shoes',
    description: 'Court-ready performance. Elevate your game.',
    color: 'from-orange-500 to-red-500',
  },
  lifestyle: {
    title: 'Lifestyle Shoes',
    description: 'Everyday comfort and style. Perfect for any occasion.',
    color: 'from-purple-500 to-pink-500',
  },
  training: {
    title: 'Training Shoes',
    description: 'Push your limits. Built for intense workouts.',
    color: 'from-green-500 to-emerald-500',
  },
};

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPageRoute({ params }: CategoryPageProps) {
  const category = params.category.toLowerCase();
  const products = categoryProducts[category];
  const info = categoryInfo[category];

  if (!products || !info) {
    notFound();
  }

  return (
    <CategoryPage
      title={info.title}
      description={info.description}
      products={products}
      categoryColor={info.color}
    />
  );
}

