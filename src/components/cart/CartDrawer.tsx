import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../lib/cart-context';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="w-full h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="px-4 py-4 border-b flex items-center justify-between bg-gray-50">
            <h2 className="text-lg font-bold flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Your Cart ({items.length})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                <ShoppingBag className="w-16 h-16 text-gray-300" />
                <p className="text-lg font-medium">Your cart is empty</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex py-2 border-b border-gray-100 last:border-0">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white p-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                          <h3 className="line-clamp-2"><Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>{item.name}</Link></h3>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">{item.unit}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 font-medium text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="font-medium text-red-600 hover:text-red-500 text-xs"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="text-xs text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center rounded-full border border-transparent bg-brand-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-700 transition-colors"
                >
                  Checkout
                </button>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/cart');
                  }}
                  className="w-full flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  View Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
