import { Link } from 'react-router-dom';
import { Plus, ShoppingCart, Repeat } from 'lucide-react';
import { Product, useCart } from '../../lib/cart-context';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const displayPrice = isSubscribed ? product.price * 0.95 : product.price;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
    >
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 z-10 bg-accent-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
          {product.discount}
        </div>
      )}
      
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-[#F8F9FA] p-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Quick Add Overlay (Desktop) */}
        <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-300 hidden md:block" />
      </Link>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2">{product.category}</span>
        
        <Link to={`/product/${product.id}`} className="block mb-1 flex-grow">
          <h3 className="font-medium text-gray-900 line-clamp-2 leading-snug group-hover:text-brand-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="text-xs text-gray-500 mb-3 font-medium">{product.unit}</div>

        {/* Subscribe & Save Toggle */}
        <div className="mb-4 bg-brand-50/50 rounded-lg p-2 border border-brand-100/50 flex items-center justify-between cursor-pointer hover:bg-brand-50 transition-colors" onClick={() => setIsSubscribed(!isSubscribed)}>
          <div className="flex items-center gap-2">
            <Repeat className={cn("w-3.5 h-3.5", isSubscribed ? "text-brand-600" : "text-gray-400")} />
            <span className={cn("text-xs font-bold", isSubscribed ? "text-brand-700" : "text-gray-500")}>Subscribe & Save 5%</span>
          </div>
          <div className={cn("w-8 h-4 rounded-full transition-colors relative", isSubscribed ? "bg-brand-500" : "bg-gray-200")}>
            <div className={cn("absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform", isSubscribed ? "translate-x-4" : "translate-x-0")} />
          </div>
        </div>
        
        <div className="mt-auto flex items-end justify-between pt-2 border-t border-gray-50">
          <div className="flex flex-col">
            {(product.originalPrice || isSubscribed) && (
              <span className="text-[11px] text-gray-400 line-through mb-0.5 font-medium">
                ${(product.originalPrice || product.price).toFixed(2)}
              </span>
            )}
            <span className="text-lg font-display font-bold text-gray-900 leading-none flex items-center gap-1.5">
              ${displayPrice.toFixed(2)}
              {isSubscribed && <span className="text-[10px] bg-accent-100 text-accent-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Sub</span>}
            </span>
          </div>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              addItem({ ...product, price: displayPrice });
            }}
            className="relative overflow-hidden w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-900 flex items-center justify-center group-hover:bg-brand-900 group-hover:border-brand-900 group-hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            aria-label="Add to cart"
          >
            <Plus className="w-5 h-5 absolute transition-transform duration-300 group-hover:scale-0" />
            <ShoppingCart className="w-4 h-4 absolute scale-0 transition-transform duration-300 group-hover:scale-100" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
