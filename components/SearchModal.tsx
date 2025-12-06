'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/contexts/SearchContext';
import { searchProducts } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useSearch();
  const { addToCart } = useCart();
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchQuery) {
      const searchResults = searchProducts(searchQuery);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setResults([]);
  };

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

              {/* Search Input */}
              <div className="p-4 border-b">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 outline-none text-lg"
                  />
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery && results.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <p>No products found for &quot;{searchQuery}&quot;</p>
                  </div>
                ) : searchQuery && results.length > 0 ? (
                  <div className="p-4 space-y-2">
                    {results.slice(0, 5).map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={handleClose}
                        className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-nike-black truncate">{product.name}</h3>
                          <p className="text-sm text-gray-500">{product.category}</p>
                          <p className="text-lg font-bold text-nike-black">${product.price}</p>
                        </div>

                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="px-4 py-2 bg-nike-black text-white rounded-full text-sm font-semibold hover:bg-nike-accent transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Add
                        </button>
                      </Link>
                    ))}

                    {results.length > 5 && (
                      <Link
                        href={`/search?q=${encodeURIComponent(searchQuery)}`}
                        onClick={handleClose}
                        className="block text-center py-3 text-nike-accent font-semibold hover:bg-gray-50 rounded-lg"
                      >
                        View all {results.length} results
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <p>Start typing to search for products...</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
