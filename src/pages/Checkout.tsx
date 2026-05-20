import React, { useState } from 'react';
import { useCart } from '../lib/cart-context';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, CreditCard, MapPin, Phone, ShieldCheck, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const tax = subtotal * 0.0825;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + shipping;

  if (items.length === 0 && step === 1) {
    return (
      <div className="container mx-auto px-4 py-16 text-center max-w-md">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">You need items in your cart to checkout.</p>
        <Link to="/shop" className="bg-brand-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors block w-full">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4); // Success step
      clearCart();
    }, 2000);
  };

  if (step === 4) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="container mx-auto px-4 py-16 text-center max-w-lg"
      >
        <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-brand-600" />
        </div>
        <h1 className="text-4xl font-display font-black text-gray-900 mb-4 tracking-tight">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8 text-lg">Thank you for your purchase. Your order #IND-{Math.floor(Math.random() * 100000)} is being processed and will be delivered soon.</p>
        <Link to="/shop" className="bg-brand-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors inline-block w-full shadow-lg shadow-brand-900/20">
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24">
      <div className="bg-white border-b border-gray-200 pt-8 pb-4 sticky top-16 z-30">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Progress Bar */}
          <div className="flex items-center justify-between max-w-2xl mx-auto relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10"></div>
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-600 -z-10 transition-all duration-500`} style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
            
            {[
              { num: 1, label: 'Shipping', icon: MapPin },
              { num: 2, label: 'Payment', icon: CreditCard },
              { num: 3, label: 'Review', icon: ShoppingBag }
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-2 bg-white px-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= s.num ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20' : 'bg-gray-100 text-gray-400'}`}>
                  {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${step >= s.num ? 'text-brand-900' : 'text-gray-400'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Checkout Area */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {step === 1 && (
                <form onSubmit={handleNextStep} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-display font-black text-gray-900 mb-6">Shipping Information</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="(555) 123-4567" />
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Street Address</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white mb-4" placeholder="123 Main St" />
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-2">
                          <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                          <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="City" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">State</label>
                          <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="CA" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">ZIP</label>
                          <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="90210" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="mt-8 w-full bg-brand-900 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-colors flex items-center justify-center shadow-lg shadow-brand-900/20">
                    Continue to Payment <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleNextStep} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-display font-black text-gray-900 mb-6">Payment Method</h2>
                  
                  <div className="space-y-4 mb-8">
                    <label className="flex items-center p-4 border-2 border-brand-500 rounded-xl bg-brand-50 cursor-pointer">
                      <input type="radio" name="payment" className="w-5 h-5 text-brand-600 focus:ring-brand-500" defaultChecked />
                      <div className="ml-4 flex-1 flex justify-between items-center">
                        <span className="font-bold text-brand-900">Credit Card</span>
                        <div className="flex gap-2">
                          <div className="w-8 h-5 bg-white rounded shadow-sm border border-gray-200"></div>
                          <div className="w-8 h-5 bg-white rounded shadow-sm border border-gray-200"></div>
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                      <input type="radio" name="payment" className="w-5 h-5 text-brand-600 focus:ring-brand-500" />
                      <div className="ml-4 flex-1 flex justify-between items-center">
                        <span className="font-bold text-gray-700">PayPal</span>
                      </div>
                    </label>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Date</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">CVC</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Name on Card</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-4 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                      Back
                    </button>
                    <button type="submit" className="flex-1 bg-brand-900 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-colors flex items-center justify-center shadow-lg shadow-brand-900/20">
                      Review Order <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handlePlaceOrder} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-display font-black text-gray-900 mb-6">Review Your Order</h2>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-600" /> Shipping To</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          John Doe<br/>
                          123 Main St<br/>
                          San Francisco, CA 94105<br/>
                          (555) 123-4567
                        </p>
                        <button type="button" onClick={() => setStep(1)} className="text-brand-600 text-sm font-bold mt-2 hover:underline">Edit</button>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CreditCard className="w-4 h-4 text-brand-600" /> Payment</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Credit Card ending in 4242<br/>
                          Exp: 12/25
                        </p>
                        <button type="button" onClick={() => setStep(2)} className="text-brand-600 text-sm font-bold mt-2 hover:underline">Edit</button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button type="button" onClick={() => setStep(2)} className="px-6 py-4 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                      Back
                    </button>
                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="flex-1 bg-accent-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-accent-700 transition-colors flex items-center justify-center shadow-lg shadow-accent-600/20 disabled:opacity-70"
                    >
                      {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-32">
              <h3 className="text-xl font-display font-black text-gray-900 mb-6">Order Summary</h3>
              
              <div className="max-h-[300px] overflow-y-auto pr-2 mb-6 space-y-4 hide-scrollbar">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 border border-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-900 line-clamp-2">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-bold text-sm text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm pt-6 border-t border-gray-100 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="font-medium text-brand-600">Free</span>
                  ) : (
                    <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end pt-4 border-t border-gray-100 mb-6">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-3xl font-display font-black text-gray-900">${total.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                Secure Encrypted Checkout
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
