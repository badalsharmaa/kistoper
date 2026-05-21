import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Clock, Search, ChevronRight, Sparkles, Timer, Gift, MessageCircle, CalendarSync, MapPin } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import PromoPopup from '../components/ui/PromoPopup';
import ProductMarquee from '../components/ui/ProductMarquee';
import RewardsMarquee from '../components/ui/RewardsMarquee';
import { MOCK_PRODUCTS } from '../lib/data';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const CATEGORIES = [
  { name: "Glass Lamps", image: "https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&q=80&w=400", query: "Glass Lamps" },
  { name: "Designer Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400", query: "Designer Shoes" },
  { name: "Home Decor", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400", query: "Home Decor" },
  { name: "Documentation", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=400", query: "Custom Services" },
  { name: "Global Shipping", image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=400", query: "Custom Services" },
  { name: "Custom Orders", image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=400", query: "Custom Services" },
];

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredProducts = MOCK_PRODUCTS.slice(0, 5);
  const deals = [
    ...MOCK_PRODUCTS.filter(p => p.discount && p.category === 'Glass Lamps').slice(0, 3),
    ...MOCK_PRODUCTS.filter(p => p.discount && p.category !== 'Glass Lamps').slice(0, 2)
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-[#FAFAFA]">
      <PromoPopup />
      
      {/* Editorial Hero Section */}
      <div className="relative w-full bg-brand-50 py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex flex-col justify-center z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-800 text-[10px] font-bold tracking-widest uppercase mb-8 w-fit border border-brand-200">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                Global Shipping from India
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-black text-brand-950 mb-6 leading-[1.05] tracking-tighter">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-block"
                >
                  Global
                </motion.span> <br className="hidden md:block" />
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block text-brand-600"
                >
                  Export
                </motion.span>{' '}
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block"
                >
                  & Excellence
                </motion.span> <br className="hidden md:block" />
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-block"
                >
                  Handcrafted.
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium"
              >
                Specializing in premium handcrafted glass lamps, designer footwear, and expert international import/export documentation services.
              </motion.p>
              
              {/* Hero Search Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-full max-w-md"
              >
                <form onSubmit={handleSearch} className="relative flex items-center w-full bg-white rounded-2xl p-2 shadow-xl shadow-brand-900/5 border border-gray-100">
                  <Search className="w-5 h-5 text-gray-400 ml-3" />
                  <input 
                    type="text" 
                    placeholder="Search for lamps, shoes, services..." 
                    className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-gray-900 text-base placeholder:text-gray-400 font-medium"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="bg-brand-900 text-white px-6 py-3 rounded-xl font-bold tracking-wide hover:bg-brand-800 transition-colors text-sm">
                    Search
                  </button>
                </form>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
              animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-1/2 relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-900/10"
            >
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                src="src/assets/lampwithbg2.png" 
                alt="Handcrafted Glass Lamps" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/20 to-transparent mix-blend-overlay" />
            </motion.div>
            
          </div>
        </div>
        
        {/* Curved Divider at bottom of Hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-brand-50/30 border border-brand-100 hover:shadow-lg transition-all"
            >
              <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-6 text-brand-600 shadow-sm">
                <Truck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-brand-950 mb-3">Worldwide Shipping</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Reliable international logistics from major Indian ports to your destination. Secure and timely delivery.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-accent-50/30 border border-accent-100 hover:shadow-lg transition-all"
            >
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent-600 shadow-sm">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-brand-950 mb-3">Handcrafted Quality</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Every lamp and shoe article is inspected for superior craftsmanship and authentic design before export.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-blue-50/30 border border-blue-100 hover:shadow-lg transition-all"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 shadow-sm">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-brand-950 mb-3">Expert Documentation</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Full support for IEC, custom clearance, and embassy legalization to ensure a smooth trade process.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rewards Marquee Section */}
      <RewardsMarquee />

      {/* Flash Sale Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 py-16 md:py-20"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 text-accent-700 text-xs font-bold tracking-widest uppercase mb-3 border border-accent-100">
              <Timer className="w-4 h-4" /> Ends in 12:45:00
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-950 tracking-tight">Flash Sale</h2>
          </div>
          <Link to="/deals" className="text-accent-600 font-bold hover:text-accent-800 flex items-center text-sm tracking-wide uppercase">
            View All Deals <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {deals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>

      {/* Explore Categories (Sleek Grid) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 py-12 md:py-16"
      >
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-black text-brand-950 tracking-tight">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              to={`/shop?category=${encodeURIComponent(cat.query)}`} 
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <span className="font-bold text-gray-900 text-sm md:text-base text-center group-hover:text-brand-600 transition-colors tracking-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Featured Items Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-white rounded-[3rem] shadow-sm border border-gray-100 mb-12"
      >
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold tracking-widest uppercase mb-3 border border-brand-100">
              <Sparkles className="w-4 h-4" /> Handpicked for you
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-950 tracking-tight">Featured Items</h2>
          </div>
          <Link to="/shop" className="text-brand-600 font-bold hover:text-brand-800 flex items-center text-sm tracking-wide uppercase">
            Shop All <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {MOCK_PRODUCTS.slice(3, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>

      {/* Product Marquee Divider */}
      <ProductMarquee />

      {/* Editorial Bento Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[500px]">
          {/* Promo 1 - Large */}
          <Link to="/shop?category=Glass%20Lamps" className="md:col-span-8 relative rounded-[2rem] overflow-hidden group h-[400px] md:h-full">
            <img src="src/assets/lampwithbg.png" alt="Handcrafted Lamps" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/40 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <span className="text-brand-300 font-bold tracking-widest text-[10px] mb-3 uppercase">Artisan Crafted</span>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 max-w-md leading-[1.1] tracking-tight">Handcrafted Mosaic Glass Lamps</h3>
              <span className="inline-flex items-center text-white font-bold text-sm tracking-wide hover:text-brand-300 transition-colors w-fit group-hover:translate-x-2 duration-300">
                Shop Collection <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </Link>
          
          {/* Promo 2 - Small */}
          <Link to="/shop?category=Designer%20Shoes" className="md:col-span-4 relative rounded-[2rem] overflow-hidden group h-[300px] md:h-full">
            <img src="src/assets/shoes.png" alt="Designer Footwear" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-950/90 via-accent-900/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-accent-300 font-bold tracking-widest text-[10px] mb-3 uppercase">Premium Quality</span>
              <h3 className="text-3xl font-display font-black text-white mb-4 leading-[1.1] tracking-tight">Designer Footwear Collection</h3>
              <span className="inline-flex items-center text-white font-bold text-sm tracking-wide hover:text-accent-300 transition-colors w-fit group-hover:translate-x-2 duration-300">
                Explore <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Upcoming Sale Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 py-12"
      >
        <div className="relative rounded-[2rem] overflow-hidden bg-[#1c352d] p-8 md:p-16 flex flex-col items-start justify-center min-h-[350px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-bold tracking-widest uppercase mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-[#f97316]" /> COMING SOON
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-[1.1] tracking-tight max-w-2xl">
            Global Export<br/>Trade Fair
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 font-medium leading-relaxed max-w-xl">
            Prepare for our international showcase. Exclusive wholesale pricing on bulk orders for glass lamps and premium footwear. Starts June 15th.
          </p>
          <button className="bg-[#f97316] text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-[#ea580c] transition-colors">
            GET INVITATION
          </button>
        </div>
      </motion.div>

      {/* Interactive Map Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 py-12 md:py-16"
      >
        <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Left: Locations List */}
          <div className="w-full lg:w-1/3 p-8 md:p-12 bg-brand-50/50 border-r border-gray-100">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold tracking-widest uppercase mb-6 border border-brand-200">
              <MapPin className="w-4 h-4" /> Global Hubs
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-950 tracking-tight mb-8">Export Network</h2>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {[
                { name: "Agra (HO)", address: "95- Surya Lok Colony, Mau Road, Agra (U.P.) - 282005" },
                { name: "Mundra Port", address: "Key shipping hub for international lamp exports" },
                { name: "Nhava Sheva", address: "Primary gateway for footwear shipments" },
                { name: "IGI Delhi", address: "Air freight hub for priority documentation and samples" },
                { name: "Global Delivery", address: "Door-to-door shipping available across 50+ countries", isDelivery: true },
                { name: "Custom Clearance", address: "In-house expert support for all port registrations", isDelivery: true }
              ].map((loc, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-300 transition-colors cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", loc.isDelivery ? "bg-accent-100 text-accent-600" : "bg-brand-100 text-brand-600")}>
                      {loc.isDelivery ? <Truck className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{loc.name}</h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{loc.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Map Embed (Keyless) */}
          <div className="w-full lg:w-2/3 relative min-h-[400px] lg:min-h-full bg-gray-100 overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              frameborder="0" 
              scrolling="no" 
              marginheight="0" 
              marginwidth="0" 
              src="https://maps.google.com/maps?q=95-Surya%20Lok%20Colony,Mau%20Road,Agra&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 border-0 grayscale hover:grayscale-0 transition-all duration-700"
              title="Kistoper Head Office"
            ></iframe>
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-100 shadow-xl z-10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Agra Head Office</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Section (WhatsApp & Recurring) */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp Ordering */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#25D366]/20 overflow-hidden">
                <img src="/src/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-gray-900 mb-4 tracking-tight">Direct WhatsApp Inquiry</h3>
              <p className="text-gray-600 mb-8 max-w-sm leading-relaxed font-medium">
                Connect directly with our export team via WhatsApp for real-time quotes, custom designs, and order tracking.
              </p>
              <a 
                href="https://wa.me/919058439992" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                Chat Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Recurring Orders */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-900 rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <CalendarSync className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-4 tracking-tight">Documentation Support</h3>
              <p className="text-brand-100 mb-8 max-w-sm leading-relaxed font-medium">
                We handle the heavy lifting of paperwork, including IEC registration, custom clearance, and embassy legalization.
              </p>
              <Link to="/services" className="inline-flex items-center justify-center bg-white text-brand-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg shadow-white/10">
                View Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trending Products */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 py-16 md:py-20"
      >
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-black text-brand-950 tracking-tight">Trending Now</h2>
          <Link to="/shop" className="text-brand-600 font-bold hover:text-brand-800 flex items-center text-sm tracking-wide uppercase">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>

    </div>
  );
}
