import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { MOCK_PRODUCTS } from '../lib/data';
import { Filter, ChevronDown } from 'lucide-react';

const CATEGORIES = [
  "All", "Glass Lamps", "Designer Shoes", "Home Decor", "Custom Services"
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('q') || '';
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = categoryQuery === 'All' || product.category === categoryQuery;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    setIsMobileFiltersOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {searchQuery ? `Search: "${searchQuery}"` : categoryQuery === 'All' ? 'All Products' : categoryQuery}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{filteredProducts.length} products found</p>
        </div>
        
        <button 
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters (Desktop) */}
        <div className={`md:block col-span-1 ${isMobileFiltersOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 sticky top-24">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Categories</h3>
            <ul className="space-y-2">
              {CATEGORIES.map(category => (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors ${
                      categoryQuery === category 
                        ? 'bg-brand-50 text-brand-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            
            <h3 className="font-bold text-lg mb-4 mt-8 border-b pb-2">Price Range</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
                Under $5
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
                $5 to $10
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
                $10 to $20
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
                Over $20
              </label>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-span-1 md:col-span-3">
          {/* Active Filters & Sort */}
          <div className="flex justify-between items-center mb-4 hidden md:flex">
            <div className="flex gap-2">
              {/* Active filter chips could go here */}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Sort by:</span>
              <button className="flex items-center gap-1 font-medium text-gray-900 hover:text-brand-600">
                Recommended <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-lg text-gray-500 mb-4">No products found matching your criteria.</p>
              <button 
                onClick={() => handleCategoryChange('All')}
                className="text-brand-600 font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
