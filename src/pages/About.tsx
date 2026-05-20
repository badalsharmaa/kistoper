import { motion } from 'motion/react';
import { Globe, ShieldCheck, MapPin, User, FileText, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full bg-brand-950 py-20 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
            {/* Ambient background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-500/30 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-brand-100 text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              <Globe className="w-4 h-4" /> Global Export & Import
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-[1.1] tracking-tight">
              Shivansh International
            </h1>
            <p className="text-lg md:text-xl text-brand-100/80 max-w-2xl leading-relaxed font-medium">
              A premium global export and import business dedicated to excellence, specializing in handcrafted products and expert international trade services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Column: Story & Proprietor */}
          <div className="md:col-span-8 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-display font-black text-brand-950 mb-6">Our Legacy of Excellence</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Shivansh International stands as a beacon of quality and reliability in the global trade sector. We are deeply committed to bringing the finest handcrafted Indian products to the global market while ensuring a seamless and fully compliant export experience.
                </p>
                <div className="flex items-center gap-4 p-6 bg-brand-50 rounded-2xl border border-brand-100 mt-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm flex-shrink-0">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brand-950">Sushil Kumar Gaur</h3>
                    <p className="text-brand-700 font-medium">Proprietor & Visionary</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Business Pillars */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-black text-brand-950 mb-6">Core Business Pillars</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Pillar 1 */}
                <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 hover:border-brand-200 transition-colors">
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Exports</h3>
                  <ul className="space-y-3 text-gray-600 font-medium mt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                      <span>Handcrafted Glass Lamps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                      <span>Designer Footwear</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 hover:border-brand-200 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Services</h3>
                  <ul className="space-y-3 text-gray-600 font-medium mt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>Custom Clearance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>IEC/DGFT Licensing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>International Certifications</span>
                    </li>
                  </ul>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact/Location */}
          <div className="md:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-50 p-8 rounded-[2rem] border border-brand-100"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 mb-6 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-brand-950 mb-4">Head Office</h3>
              <address className="not-italic text-brand-800 space-y-2 font-medium leading-relaxed">
                <p>95- Surya Lok Colony,</p>
                <p>Mau Road, Near Shanti Hospital,</p>
                <p>Agra, India</p>
                <p className="text-sm mt-4 text-brand-600 font-bold">Pin Code: 282005</p>
              </address>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center h-48 rounded-[2rem] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brand-950/60 group-hover:bg-brand-950/70 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-white font-bold tracking-widest text-xs mb-1 uppercase">Global Quality</span>
                <span className="text-brand-100 text-sm">Crafted in India, Shipped Worldwide</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
