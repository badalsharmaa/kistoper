import { useCart } from '../lib/cart-context';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const tax = subtotal * 0.0825; // 8.25% tax
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + shipping;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Discover our handcrafted products and exclusive offers.</p>
          <Link to="/shop" className="inline-flex items-center justify-center bg-brand-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Cart Items List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>
              
              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <li key={item.id} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      {/* Product Image & Info */}
                      <div className="flex items-center gap-4 flex-1">
                        <Link to={`/product/${item.id}`} className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-50 rounded-xl p-2 border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                        </Link>
                        <div>
                          <Link to={`/product/${item.id}`} className="font-bold text-gray-900 hover:text-brand-600 transition-colors line-clamp-2 mb-1">
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-500 mb-2">{item.unit}</p>
                          <p className="font-medium text-gray-900 md:hidden">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      
                      {/* Controls */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto">
                        <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden h-10 w-28">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="flex-1 text-center font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <div className="hidden md:block text-right w-20 font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.length} items)</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Tax</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="font-medium text-brand-600">Free</span>
                  ) : (
                    <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
                  )}
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-black text-gray-900">${total.toFixed(2)}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-500 mt-2 text-right">
                    Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
                  </p>
                )}
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center bg-brand-900 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20"
              >
                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                Secure Checkout Guaranteed
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
