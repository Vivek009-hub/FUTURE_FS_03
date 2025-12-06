'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useSearch } from '@/contexts/SearchContext';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const { setIsSearchOpen } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setIsSearchOpen(true);
        }
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [setIsSearchOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-nike-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">✓</span>
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-nike-black">
              NIKE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-nike-black hover:text-nike-accent transition-colors">
              New & Featured
            </Link>
            <Link href="/men" className="text-sm font-medium text-nike-black hover:text-nike-accent transition-colors">
              Men
            </Link>
            <Link href="/women" className="text-sm font-medium text-nike-black hover:text-nike-accent transition-colors">
              Women
            </Link>
            <Link href="/kids" className="text-sm font-medium text-nike-black hover:text-nike-accent transition-colors">
              Kids
            </Link>
            <Link href="/sale" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
              Sale
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="w-5 h-5 text-nike-black" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-nike-black" />
            </button>
            <Link
              href="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5 text-nike-black" />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-nike-accent text-white text-xs rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-base font-medium text-nike-black hover:text-nike-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                New & Featured
              </Link>
              <Link
                href="/men"
                className="block text-base font-medium text-nike-black hover:text-nike-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/women"
                className="block text-base font-medium text-nike-black hover:text-nike-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Women
              </Link>
              <Link
                href="/kids"
                className="block text-base font-medium text-nike-black hover:text-nike-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kids
              </Link>
              <Link
                href="/sale"
                className="block text-base font-medium text-red-600 hover:text-red-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sale
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SearchModal />
    </nav>
  );
}

