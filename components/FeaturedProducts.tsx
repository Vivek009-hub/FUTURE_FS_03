'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Air Max 270',
    category: 'Running',
    price: 150,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 2,
    name: 'Air Force 1',
    category: 'Lifestyle',
    price: 90,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 3,
    name: 'LeBron 20',
    category: 'Basketball',
    price: 200,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
    featured: true,
  },
  {
    id: 4,
    name: 'React Infinity Run',
    category: 'Running',
    price: 160,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    featured: true,
  },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setAddedItems((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-nike-black mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and innovative designs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <Link href={`/product/${product.id}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-nike-accent hover:text-white z-10"
                      title="Add to cart"
                    >
                      <ShoppingBag className={`w-5 h-5 ${addedItems.has(product.id) ? 'text-green-600' : 'text-nike-black'}`} />
                    </button>
                    {addedItems.has(product.id) && (
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                        Added!
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                    <h3 className="text-xl font-display font-bold text-nike-black mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                      <p className="text-xl font-bold text-nike-black">${product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/shop"
            className="inline-block bg-nike-black text-white px-8 py-4 rounded-full font-semibold hover:bg-nike-accent transition-colors"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

