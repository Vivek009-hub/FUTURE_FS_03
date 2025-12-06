'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { searchProducts } from '@/lib/products';
import CategoryPage from '@/components/CategoryPage';
import type { Product } from '@/lib/products';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!query) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-nike-black mb-4">
            Search Products
          </h1>
          <p className="text-gray-600">Enter a search query to find products.</p>
        </div>
      </div>
    );
  }

  return (
    <CategoryPage
      title={`Search Results for "${query}"`}
      description={`Found ${results.length} ${results.length === 1 ? 'product' : 'products'}`}
      products={results}
      categoryColor="from-blue-600 to-indigo-800"
    />
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 md:pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-nike-black mb-4">
            Loading...
          </h1>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}

