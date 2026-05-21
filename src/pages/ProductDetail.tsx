import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw, ImageOff } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/data';
import { useCart } from '../lib/cart-context';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <button onClick={() => navigate('/shop')} className="text-brand-600 hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const relatedProducts = MOCK_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-brand-600">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 truncate">{product.name}</span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Product Image */}
          <div className="bg-gray-50 p-8 md:p-12 flex items-center justify-center relative min-h-[400px]">
            {product.discount && (
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                {product.discount}
              </div>
            )}
            {imageError ? (
              <div className="flex flex-col items-center justify-center text-gray-300 gap-4">
                <ImageOff className="w-24 h-24 stroke-[1]" />
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Image Not Found</span>
              </div>
            ) : (
              <img 
                src={product.image} 
                alt={product.name} 
                onError={() => {
                  setImageError(true);
                  if (import.meta.env.DEV) {
                    console.error(`Failed to load image for product: ${product.id} (${product.image})`);
                  }
                }}
                className="w-full max-w-md h-auto object-contain mix-blend-multiply transition-opacity duration-300"
              />
            )}
          </div>
          
          {/* Product Info */}
          <div className="p-6 md:p-10 flex flex-col">
            <div className="mb-2">
              <span className="text-sm text-brand-600 font-medium">{product.category}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-black text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through mb-1">${product.originalPrice.toFixed(2)}</span>
              )}
              <span className="text-sm text-gray-500 mb-1 ml-2">/ {product.unit}</span>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Premium quality {product.name.toLowerCase()} sourced directly from trusted suppliers. 
              Perfect for your daily cooking needs. Guaranteed fresh and authentic.
            </p>
            
            <div className="mt-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Quantity Selector */}
                <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden h-14 w-full sm:w-36">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="flex-1 text-center font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-brand-900 text-white h-14 rounded-full font-bold text-lg hover:bg-brand-800 transition-colors flex items-center justify-center shadow-lg shadow-brand-900/20"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
              
              {/* Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Same Day<br/>Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Quality<br/>Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Easy<br/>Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
