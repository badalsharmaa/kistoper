import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Menu, X, Heart, ChevronDown, Tag } from 'lucide-react';
import { useCart } from '../../lib/cart-context';
import { cn } from '../../lib/utils';

const CATEGORIES = [
  "Glass Lamps", "Designer Shoes", "Home Decor", "Custom Services"
];

const LOCATIONS = [
  { name: "Agra (HO)", address: "95- Surya Lok Colony, Mau Road, Agra (U.P.) - 282005" },
  { name: "Global Shipping", address: "Worldwide delivery from Indian ports (Mundra, Delhi, Mumbai)" },
  { name: "Documentation Hub", address: "Expert assistance for IEC, DGFT, and Custom Clearance" }
];

export default function Header() {
  const { totalItems, subtotal, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const isActive = (path: string) => location.pathname === path;
  const isCategoryActive = (category: string) => location.search.includes(`category=${encodeURIComponent(category)}`);

  const MegaMenuContent = () => (
    <div className="bg-white shadow-2xl border border-gray-100 rounded-b-2xl md:rounded-2xl overflow-hidden">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-brand-900 font-black text-lg mb-4">Glass Lamps</h3>
            <ul className="space-y-3">
              <li><Link to="/shop?category=Glass%20Lamps" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Mosaic Table Lamps</Link></li>
              <li><Link to="/shop?category=Glass%20Lamps" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Hanging Lamps</Link></li>
              <li><Link to="/shop?category=Glass%20Lamps" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Floor Lamps</Link></li>
              <li><Link to="/shop?category=Glass%20Lamps" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Custom Designs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-brand-900 font-black text-lg mb-4">Designer Shoes</h3>
            <ul className="space-y-3">
              <li><Link to="/shop?category=Designer%20Shoes" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Premium Sneakers</Link></li>
              <li><Link to="/shop?category=Designer%20Shoes" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Casual Loafers</Link></li>
              <li><Link to="/shop?category=Designer%20Shoes" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Formal Collection</Link></li>
              <li><Link to="/shop?category=Designer%20Shoes" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Boots & Outdoors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-brand-900 font-black text-lg mb-4">Export Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Custom Clearance</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">IEC & Certification</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Embassy Legalization</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Logistics Support</Link></li>
            </ul>
          </div>
          <div className="bg-brand-50 rounded-2xl p-6 relative overflow-hidden hidden md:block">
            <div className="relative z-10">
              <span className="bg-accent-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Export Offer</span>
              <h3 className="text-xl font-black text-brand-950 mt-3 mb-2">Wholesale Pricing</h3>
              <p className="text-sm text-gray-600 mb-4 font-medium">Get competitive quotes for bulk international orders.</p>
              <Link to="/contact" className="text-brand-700 font-bold text-sm hover:underline">Inquire Now &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="w-full bg-white relative z-40">
        <div className="hidden md:block bg-brand-950 text-brand-100 text-[11px] font-medium tracking-wide py-2">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <button 
                  className="flex items-center hover:text-white cursor-pointer transition-colors"
                  onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
                >
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand-400" /> 
                  Delivering to: <span className="text-white ml-1 font-semibold border-b border-dashed border-brand-500">{selectedLocation.name}</span>
                  <ChevronDown className="w-3 h-3 ml-1 text-brand-400" />
                </button>
                
                {isLocationMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100 mb-2 flex justify-between items-center">
                      <p className="text-gray-900 font-bold text-sm">Select your store</p>
                      <button onClick={() => setIsLocationMenuOpen(false)} className="text-gray-400 hover:text-gray-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {LOCATIONS.map((loc) => (
                      <button
                        key={loc.name}
                        className="w-full text-left px-4 py-2 hover:bg-brand-50 transition-colors flex flex-col"
                        onClick={() => {
                          setSelectedLocation(loc);
                          setIsLocationMenuOpen(false);
                        }}
                      >
                        <span className={cn("text-sm font-bold", selectedLocation.name === loc.name ? "text-brand-600" : "text-gray-900")}>
                          {loc.name}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">{loc.address}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <span className="flex items-center text-brand-300">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
                Global Export Priority
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/contact" className="hover:text-white transition-colors">Store Locator</Link>
              <Link to="/rewards" className="hover:text-white transition-colors">Rewards</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-2 md:py-3">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center justify-between md:flex-shrink-0">
              <button className="md:hidden p-2 -ml-2 text-gray-900" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
              <Link to="/" className="block group">
                <img src="/branding/logo.webp" alt="Kistoper Logo" className="h-8 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" />
              </Link>
              <button className="md:hidden flex items-center text-gray-900" onClick={() => setIsCartOpen(true)}>
                <div className="relative">
                  <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                      {totalItems}
                    </span>
                  )}
                </div>
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div className="hidden md:flex items-center justify-between gap-6">
                <div className="flex-1 max-w-2xl">
                  <form onSubmit={handleSearch} className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-brand-600 transition-colors" />
                    <input
                      type="text"
                      placeholder="Search for glass lamps, designer shoes, home decor..."
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 rounded-full text-sm font-medium transition-all outline-none placeholder:text-gray-400 shadow-inner"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-900 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-brand-800 transition-colors">
                      Search
                    </button>
                  </form>
                </div>

                <div className="flex items-center space-x-6 flex-shrink-0">
                  <Link to="/services" className={cn("flex flex-col items-center transition-colors", isActive('/services') ? "text-brand-700" : "text-gray-500 hover:text-brand-700")}>
                    <Heart className="w-5 h-5" strokeWidth={isActive('/services') ? 2.5 : 1.5} />
                    <span className="text-[10px] font-semibold mt-1 tracking-wide">Services</span>
                  </Link>
                  <Link to="/account" className={cn("flex flex-col items-center transition-colors", isActive('/account') ? "text-brand-700" : "text-gray-500 hover:text-brand-700")}>
                    <User className="w-5 h-5" strokeWidth={isActive('/account') ? 2.5 : 1.5} />
                    <span className="text-[10px] font-semibold mt-1 tracking-wide">Sign In</span>
                  </Link>
                  <button className="flex items-center gap-3 bg-brand-900 text-white px-5 py-2.5 rounded-full hover:bg-brand-800 transition-all shadow-sm hover:shadow-md active:scale-95" onClick={() => setIsCartOpen(true)}>
                    <div className="relative">
                      <ShoppingCart className="w-4 h-4" strokeWidth={2} />
                      {totalItems > 0 && (
                        <span className="absolute -top-2.5 -right-2.5 bg-accent-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-brand-900">
                          {totalItems}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-bold tracking-wide">${subtotal.toFixed(2)}</span>
                  </button>
                </div>
              </div>

              <div className="md:hidden w-full">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-500 rounded-xl text-sm outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </form>
              </div>

              <div className="hidden md:flex items-center justify-between border-t border-gray-100 pt-3">
                <nav className="flex items-center space-x-8 text-sm font-bold text-gray-700">
                  <div className="relative group" onMouseEnter={() => setActiveMegaMenu('main')} onMouseLeave={() => setActiveMegaMenu(null)}>
                    <button className="flex items-center gap-1.5 hover:text-brand-700 py-1">
                      <Menu className="w-4 h-4" /> All Categories <ChevronDown className="w-3 h-3" />
                    </button>
                    <div className={cn("absolute top-full left-0 w-[800px] pt-4 transition-all duration-200 origin-top-left z-50", activeMegaMenu === 'main' ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none")}>
                      <MegaMenuContent />
                    </div>
                  </div>
                  
                  <Link to="/shop" className={cn("py-1 transition-colors border-b-2", isActive('/shop') && !location.search ? "text-accent-600 font-black border-accent-600" : "text-gray-700 hover:text-accent-700 border-transparent")}>Wholesale</Link>
                  <Link to="/shop?category=Glass%20Lamps" className={cn("py-1 transition-colors border-b-2", isCategoryActive('Glass Lamps') ? "text-brand-700 font-black border-brand-700" : "text-gray-700 hover:text-brand-700 border-transparent")}>Lamps</Link>
                  <Link to="/shop?category=Designer%20Shoes" className={cn("py-1 transition-colors border-b-2", isCategoryActive('Designer Shoes') ? "text-brand-700 font-black border-brand-700" : "text-gray-700 hover:text-brand-700 border-transparent")}>Shoes</Link>
                  <Link to="/services" className={cn("py-1 transition-colors border-b-2", isActive('/services') ? "text-brand-700 font-black border-brand-700" : "text-gray-700 hover:text-brand-700 border-transparent")}>Services</Link>
                </nav>
                <Link to="/deals" className="flex items-center gap-2 text-xs font-bold text-brand-700 bg-brand-50 px-4 py-2 rounded-full hover:bg-brand-100 transition-colors">
                  <Tag className="w-3.5 h-3.5" /> Special Offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={cn("fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-500 ease-in-out", isScrolled ? "translate-y-0" : "-translate-y-full")}>
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <button className="md:hidden p-2 -ml-2 text-gray-900" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group" onMouseEnter={() => setActiveMegaMenu('sticky')} onMouseLeave={() => setActiveMegaMenu(null)}>
              <button className="flex items-center gap-1.5 font-bold text-gray-900 hover:text-brand-700 py-2">
                <Menu className="w-5 h-5" /> Menu
              </button>
              <div className={cn("absolute top-full left-0 w-[800px] pt-4 transition-all duration-200 origin-top-left", activeMegaMenu === 'sticky' ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none")}>
                <MegaMenuContent />
              </div>
            </div>
            <Link to="/deals" className={cn("text-sm font-bold transition-colors", isActive('/deals') ? "text-accent-600" : "text-gray-700 hover:text-accent-700")}>Deals</Link>
            <Link to="/shop" className={cn("text-sm font-bold transition-colors", isActive('/shop') ? "text-brand-700" : "text-gray-700 hover:text-brand-700")}>Shop</Link>
            <Link to="/services" className={cn("text-sm font-bold transition-colors", isActive('/services') ? "text-brand-700" : "text-gray-700 hover:text-brand-700")}>Services</Link>
          </div>
          <div className="flex-1 max-w-xl mx-auto hidden md:block">
            <form onSubmit={handleSearch} className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-brand-600 transition-colors" />
              <input type="text" placeholder="Search products..." className="w-full pl-11 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 rounded-full text-sm font-medium transition-all outline-none placeholder:text-gray-400" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </form>
          </div>
          <div className="flex items-center justify-end space-x-4 md:space-x-6">
            <Link to="/account" className={cn("hidden md:block transition-colors", isActive('/account') ? "text-brand-700" : "text-gray-500 hover:text-brand-700")}>
              <User className="w-6 h-6" strokeWidth={isActive('/account') ? 2.5 : 1.5} />
            </Link>
            <button className="flex items-center gap-2 text-gray-900 hover:text-brand-700 transition-colors" onClick={() => setIsCartOpen(true)}>
              <div className="relative">
                <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden md:block text-sm font-bold">${subtotal.toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-sm"><User className="w-5 h-5" /></div>
                <div>
                  <p className="font-display font-bold text-gray-900 text-lg">Welcome</p>
                  <p className="text-sm text-brand-600 font-semibold">Sign in / Register</p>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400 hover:bg-gray-200 rounded-full transition-colors"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto py-6">
              <div className="px-6 pb-6 border-b border-gray-100">
                <ul className="space-y-5">
                  <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={cn("block font-display font-bold text-xl", isActive('/') ? "text-brand-600" : "text-gray-900")}>Home</Link></li>
                  <li><Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={cn("block font-display font-bold text-xl", isActive('/shop') && !location.search ? "text-accent-600" : "text-gray-900")}>Wholesale</Link></li>
                  <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={cn("block font-display font-bold text-xl", isActive('/services') ? "text-brand-600" : "text-gray-900")}>Services</Link></li>
                </ul>
              </div>
              <div className="px-6 pt-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Categories</h3>
                <ul className="space-y-4">
                  {CATEGORIES.map(category => (
                    <li key={category}>
                      <Link to={`/shop?category=${encodeURIComponent(category)}`} onClick={() => setIsMobileMenuOpen(false)} className={cn("block font-medium text-lg", isCategoryActive(category) ? "text-brand-600" : "text-gray-600")}>{category}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
