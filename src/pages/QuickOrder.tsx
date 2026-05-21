import { motion } from 'motion/react';
import { Package, Repeat, CalendarSync, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/data';
import ProductCard from '../components/ui/ProductCard';

export default function QuickOrder() {
  const frequentlyBought = MOCK_PRODUCTS.slice(0, 4);
  const subscriptionIdeas = MOCK_PRODUCTS.slice(4, 8);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-900 text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-brand-100 text-sm font-bold tracking-wide mb-6">
              <Repeat className="w-4 h-4" /> Bulk Export System
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight">
              Your Exports, <br className="hidden md:block" />
              <span className="text-accent-400">Simplified.</span>
            </h1>
            <p className="text-brand-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              Streamline your global procurement. Set up recurring shipments for your inventory or reorder best-sellers in one click.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Subscriptions & Reorder */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Subscriptions (Mock) */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                    <CalendarSync className="w-6 h-6 text-brand-600" /> Scheduled Shipments
                  </h2>
                  <p className="text-gray-500 font-medium mt-1">Manage your recurring export shipments</p>
                </div>
                <button className="text-brand-600 font-bold text-sm hover:text-brand-700 bg-brand-50 px-4 py-2 rounded-lg transition-colors">
                  Manage All
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="bg-brand-50/50 border border-brand-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Package className="w-8 h-8 text-brand-400" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-gray-900">Export Sample Kit</h3>
                    <p className="text-sm text-gray-500 mt-1">Glass Lamps, Designer Shoes, Custom Decor</p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-xs font-bold text-brand-600">
                      <Clock className="w-3.5 h-3.5" /> Next shipment: Within standard lead times
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-end gap-2">
                    <span className="font-black text-lg text-gray-900">$2,450.00</span>
                    <button className="text-xs font-bold text-gray-500 hover:text-gray-900 underline">Skip this shipment</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Frequently Bought Together */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-gray-900">Order Again</h2>
                <button className="text-brand-600 font-bold text-sm hover:text-brand-700 flex items-center gap-1">
                  View Export History <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {frequentlyBought.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            
            {/* Subscription Ideas */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-gray-900">Recommended for Wholesale</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {subscriptionIdeas.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Info & Perks */}
          <div className="space-y-6">
            
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 sticky top-32">
              <h3 className="text-xl font-black text-gray-900 mb-6">Why Schedule Shipments?</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Save on Bulk Orders</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">Get competitive wholesale pricing on all scheduled export orders.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Consistent Inventory</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">Align with your retail cycle (monthly, quarterly) and maintain steady stock.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Flexible Logistics</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">Modify shipments or adjust volumes as per your market demand with ease.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="bg-brand-950 rounded-2xl p-6 text-center text-white">
                  <h4 className="font-bold mb-2">Need help setting up?</h4>
                  <p className="text-sm text-brand-200 mb-4">Our logistics team can help you optimize your recurring export schedule.</p>
                  <button className="w-full bg-white text-brand-950 font-bold py-3 rounded-xl hover:bg-brand-50 transition-colors">
                    Chat with Export Manager
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
