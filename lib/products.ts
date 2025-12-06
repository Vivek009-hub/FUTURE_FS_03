// All products database for search functionality
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  featured: boolean;
}

export const allProducts: Product[] = [
  // Men's products
  { id: 101, name: 'Air Max 270', category: 'Running', price: 150, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', featured: true },
  { id: 102, name: 'Air Force 1', category: 'Lifestyle', price: 90, rating: 4.9, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop', featured: true },
  { id: 103, name: 'LeBron 20', category: 'Basketball', price: 200, rating: 4.7, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop', featured: true },
  { id: 104, name: 'React Infinity Run', category: 'Running', price: 160, rating: 4.6, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop', featured: true },
  { id: 105, name: 'Dunk Low', category: 'Lifestyle', price: 110, rating: 4.8, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop', featured: false },
  { id: 106, name: 'Pegasus 40', category: 'Running', price: 130, rating: 4.7, image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop', featured: false },
  { id: 107, name: 'Blazer Mid', category: 'Lifestyle', price: 100, rating: 4.5, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop', featured: false },
  { id: 108, name: 'Zoom Vomero 5', category: 'Running', price: 140, rating: 4.6, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop', featured: false },
  // Women's products
  { id: 201, name: 'Air Max 90', category: 'Lifestyle', price: 120, rating: 4.9, image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop', featured: true },
  { id: 202, name: 'Air Force 1 Shadow', category: 'Lifestyle', price: 100, rating: 4.8, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop', featured: true },
  { id: 203, name: 'React Infinity Run', category: 'Running', price: 150, rating: 4.7, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop', featured: true },
  { id: 204, name: 'Zoom Pegasus 40', category: 'Running', price: 130, rating: 4.6, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', featured: true },
  { id: 205, name: 'Dunk Low Retro', category: 'Lifestyle', price: 110, rating: 4.8, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop', featured: false },
  { id: 206, name: 'Air Max 270', category: 'Running', price: 140, rating: 4.7, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop', featured: false },
  { id: 207, name: 'Blazer Mid \'77', category: 'Lifestyle', price: 95, rating: 4.5, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop', featured: false },
  { id: 208, name: 'Zoom Vomero 5', category: 'Running', price: 135, rating: 4.6, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop', featured: false },
  // Kids' products
  { id: 301, name: 'Air Max 90 Kids', category: 'Lifestyle', price: 75, rating: 4.8, image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop', featured: true },
  { id: 302, name: 'Air Force 1 Kids', category: 'Lifestyle', price: 65, rating: 4.9, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop', featured: true },
  { id: 303, name: 'Revolution 7', category: 'Running', price: 55, rating: 4.6, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop', featured: true },
  { id: 304, name: 'Court Borough Low', category: 'Lifestyle', price: 50, rating: 4.7, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', featured: true },
  { id: 305, name: 'Dunk Low Kids', category: 'Lifestyle', price: 70, rating: 4.8, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop', featured: false },
  { id: 306, name: 'Flex Runner 2', category: 'Running', price: 45, rating: 4.5, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop', featured: false },
  { id: 307, name: 'Court Legacy', category: 'Lifestyle', price: 60, rating: 4.6, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop', featured: false },
  { id: 308, name: 'Revolution 6', category: 'Running', price: 50, rating: 4.7, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop', featured: false },
  // Sale products
  { id: 401, name: 'Air Max 270', category: 'Running', price: 120, originalPrice: 150, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', featured: true },
  { id: 402, name: 'Air Force 1', category: 'Lifestyle', price: 70, originalPrice: 90, rating: 4.9, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop', featured: true },
  { id: 403, name: 'React Infinity Run', category: 'Running', price: 128, originalPrice: 160, rating: 4.6, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop', featured: true },
  { id: 404, name: 'Dunk Low', category: 'Lifestyle', price: 88, originalPrice: 110, rating: 4.8, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop', featured: true },
  { id: 405, name: 'Pegasus 40', category: 'Running', price: 104, originalPrice: 130, rating: 4.7, image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop', featured: false },
  { id: 406, name: 'Blazer Mid', category: 'Lifestyle', price: 80, originalPrice: 100, rating: 4.5, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop', featured: false },
  { id: 407, name: 'Zoom Vomero 5', category: 'Running', price: 112, originalPrice: 140, rating: 4.6, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop', featured: false },
  { id: 408, name: 'Court Legacy', category: 'Lifestyle', price: 72, originalPrice: 90, rating: 4.6, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop', featured: false },
];

export function searchProducts(query: string): Product[] {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
}

