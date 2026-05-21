import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../../lib/data';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const saleItems = [
    ...MOCK_PRODUCTS.filter(p => p.discount && p.category === 'Glass Lamps').slice(0, 2),
    ...MOCK_PRODUCTS.filter(p => p.discount && p.category !== 'Glass Lamps').slice(0, 1)
  ];

  useEffect(() => {
    // Show popup after 3 seconds of page load
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasTriggered]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('popup-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('popup-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('popup-open');
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col z-10"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors shadow-sm"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>
            
            {/* Header */}
            <div className="bg-brand-50 p-8 pb-6 border-b border-brand-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 shadow-sm">
                <Tag className="w-3 h-3" /> Flash Sale Active
              </div>
              <h2 className="text-3xl font-display font-black text-brand-950 mb-2 tracking-tight">
                Today's Top Deals
              </h2>
              <p className="text-gray-600 font-medium">
                Grab these limited-time offers before they're gone!
              </p>
            </div>

            {/* Smart List */}
            <div className="p-6 md:p-8 bg-white">
              <div className="space-y-4 mb-8">
                {saleItems.map((item) => {
                  const discountValue = parseInt(item.discount || '0');
                  const finalPrice = item.price * (1 - discountValue / 100);
                  
                  return (
                    <div key={item.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl shadow-sm" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-accent-600 font-black">${finalPrice.toFixed(2)}</span>
                          <span className="text-gray-400 text-sm line-through">${item.price.toFixed(2)}</span>
                        </div>
                      </div>
                      <Link 
                        to={`/shop`}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-brand-100 text-brand-700 font-bold text-sm rounded-lg hover:bg-brand-200 transition-colors"
                      >
                        Add
                      </Link>
                    </div>
                  );
                })}
              </div>
              
              <Link 
                to="/deals"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand-900 text-white py-4 rounded-xl font-bold tracking-wide hover:bg-brand-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-900/20"
              >
                Shop All Deals <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
