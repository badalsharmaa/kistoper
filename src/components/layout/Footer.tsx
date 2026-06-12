import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-16 pb-24 md:pb-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-900 rounded-[2rem] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">Export with Kistoper</h3>
            <p className="text-brand-100 text-lg">Partner with us for premium handcrafted products and expert services powered by Shivansh International.</p>
          </div>
          <div className="relative z-10 w-full md:w-1/2 max-w-md">
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Business email for quotes" className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-6 py-4 rounded-full outline-none focus:bg-white/20 transition-all font-medium" required />
              <button type="submit" className="absolute right-2 bg-accent-500 hover:bg-accent-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center mb-6 bg-white p-2 rounded-2xl inline-block w-fit shadow-lg shadow-white/5">
              <img src="/branding/logo.png" alt="Kistoper Logo" className="h-12 md:h-16 object-contain" />
            </div>
            <p className="text-base text-gray-400 mb-6 leading-relaxed max-w-sm">
              Your premier global partner for handcrafted mosaic glass lamps and designer footwear. Export services powered by Shivansh International.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-bold text-lg mb-6">Catalog</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/shop" className="hover:text-brand-400 transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=Glass%20Lamps" className="hover:text-brand-400 transition-colors">Glass Lamps</Link></li>
              <li><Link to="/shop?category=Designer%20Shoes" className="hover:text-brand-400 transition-colors">Designer Shoes</Link></li>
              <li><Link to="/shop?category=Home%20Decor" className="hover:text-brand-400 transition-colors">Home Decor</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Export Services</Link></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Export Inquiry</Link></li>
              <li><Link to="/faq" className="hover:text-brand-400 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-400 transition-colors">Global Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-brand-400 transition-colors">Documentation</Link></li>
              <li><Link to="/rewards" className="hover:text-brand-400 transition-colors">Wholesale Portal</Link></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <h4 className="text-white font-bold text-lg mb-6">Head Office</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">95- Surya Lok Colony, Mau Road, Near Shanti Hospital, Khandari, Agra (U.P.) - 282005</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold">Contact: Sushil Kumar Gaur</span>
                  <a href="tel:+919058439992" className="hover:text-white transition-colors text-sm">+91 90584 39992 (Primary)</a>
                  <a href="tel:+917037394791" className="hover:text-white transition-colors text-sm">+91 70373 94791 (Secondary)</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                <a href="mailto:shivanshinternationalindia@gmail.com" className="hover:text-white transition-colors">shivanshinternationalindia@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium"
        >
          <p>&copy; {new Date().getFullYear()} Kistoper. All rights reserved. Services powered by Shivansh International.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
