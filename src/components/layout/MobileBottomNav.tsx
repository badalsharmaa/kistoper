import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingBag, Briefcase, User } from 'lucide-react';
import { useCart } from '../../lib/cart-context';
import { cn } from '../../lib/utils';

export default function MobileBottomNav() {
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 z-40 pb-safe">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/" 
          className={cn(
            "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
            isActive('/') ? "text-brand-600" : "text-gray-400 hover:text-brand-600"
          )}
        >
          <Home className="w-6 h-6" strokeWidth={isActive('/') ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-wide">Home</span>
        </Link>
        
        <Link 
          to="/shop" 
          className={cn(
            "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
            isActive('/shop') ? "text-brand-600" : "text-gray-400 hover:text-brand-600"
          )}
        >
          <Search className="w-6 h-6" strokeWidth={isActive('/shop') ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-wide">Shop</span>
        </Link>
        
        <button 
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-400 hover:text-brand-600 transition-colors relative"
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6" strokeWidth={2} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-accent-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-wide">Cart</span>
        </button>
        
        <Link 
          to="/services" 
          className={cn(
            "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
            isActive('/services') ? "text-brand-600" : "text-gray-400 hover:text-brand-600"
          )}
        >
          <Briefcase className="w-6 h-6" strokeWidth={isActive('/services') ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-wide">Services</span>
        </Link>
        
        <Link 
          to="/account" 
          className={cn(
            "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
            isActive('/account') ? "text-brand-600" : "text-gray-400 hover:text-brand-600"
          )}
        >
          <User className="w-6 h-6" strokeWidth={isActive('/account') ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-wide">Account</span>
        </Link>
      </div>
    </div>
  );
}
