'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  featured: boolean;
}

interface CategoryPageProps {
  title: string;
  description: string;
  products: Product[];
  categoryColor: string;
}

export default function CategoryPage({ title, description, products, categoryColor }: CategoryPageProps) {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
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
    <div className="pt-20 md:pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${categoryColor} py-16 md:py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                      {product.originalPrice && (
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                          SALE
                        </div>
                      )}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-nike-accent hover:text-white z-10"
                        title="Add to cart"
                      >
                        <ShoppingBag className={`w-5 h-5 ${addedItems.has(product.id) ? 'text-green-600' : 'text-nike-black'}`} />
                      </button>
                      {addedItems.has(product.id) && (
                        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold z-20">
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
                        <div className="text-right">
                          {product.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">${product.originalPrice}</p>
                          )}
                          <p className={`text-xl font-bold ${product.originalPrice ? 'text-red-600' : 'text-nike-black'}`}>
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-4">No products found in this category.</p>
            <Link
              href="/"
              className="inline-block bg-nike-black text-white px-8 py-4 rounded-full font-semibold hover:bg-nike-accent transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

