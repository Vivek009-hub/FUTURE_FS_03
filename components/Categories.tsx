'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Running',
    description: 'Built for speed and endurance',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Basketball',
    description: 'Court-ready performance',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    name: 'Lifestyle',
    description: 'Everyday comfort and style',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    name: 'Training',
    description: 'Push your limits',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-nike-black mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect fit across our diverse range of athletic categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/category/${category.name.toLowerCase()}`}
                className="group block relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity z-10" />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-80 transition-opacity z-20`} />
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:translate-x-2 transition-transform">
                    {category.name}
                  </h3>
                  <p className="text-sm mb-4 opacity-90">{category.description}</p>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Shop Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

