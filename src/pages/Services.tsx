import { useState } from 'react';
import { Search, Clock, Shield, Briefcase, FileText, ArrowRight, CheckCircle2, X, Send, Phone, Mail, Building2, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 1,
    title: "Custom Clearance",
    category: "Logistics",
    time: "Fast Track",
    servings: "All India",
    difficulty: "Expert",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "End-to-end documentation for export/import, customs examination, and duty payment across all major Indian ports."
  },
  {
    id: 2,
    title: "IEC & DGFT Licensing",
    category: "Consultancy",
    time: "72 Hours",
    servings: "New/Existing",
    difficulty: "Official",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    description: "Obtaining Import Export Code (IEC) and handling all DGFT matters, including DEPB and advanced license management."
  },
  {
    id: 3,
    title: "International Certifications",
    category: "Certification",
    time: "Variable",
    servings: "Global",
    difficulty: "Required",
    image: "https://images.unsplash.com/photo-1589152144820-692b189e0b34?auto=format&fit=crop&q=80&w=800",
    description: "Assistance with Certificate of Origin (GSP, AIFTA, SAFTA), Fumigation, Health Certificates, and ISO 9001:2015."
  },
  {
    id: 4,
    title: "Embassy Legalization",
    category: "Documentation",
    time: "Priority",
    servings: "Diplomatic",
    difficulty: "Special",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    description: "Professional attestation and legalization of export documents through various embassies and chambers of commerce."
  },
  {
    id: 5,
    title: "Trademark & Intellectual Property",
    category: "Consultancy",
    time: "Long-term",
    servings: "Brands",
    difficulty: "Strategic",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    description: "Protecting your brand identity globally with trademark registration and IP enforcement services."
  },
  {
    id: 6,
    title: "Bonded Warehousing",
    category: "Logistics",
    time: "On-demand",
    servings: "Cargo",
    difficulty: "Essential",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
    description: "Facilitating setup and management of bonded or general warehouses for efficient inventory control."
  }
];

const CATEGORIES = ["All", "Logistics", "Consultancy", "Certification", "Documentation"];

type Service = typeof SERVICES[0];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-brand-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              Export Services & <br/>
              <span className="text-brand-400">Documentation.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 mb-10"
            >
              Expert support for international trade. From custom clearance to global certifications, we handle the complexity for you.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for services (e.g., Custom, IEC, ISO...)" 
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-brand-500/30 shadow-xl text-lg placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories & Grid */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === category 
                  ? 'bg-brand-900 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Service Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-900">
                    {service.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-brand-600" />
                        {service.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-brand-600" />
                        {service.servings}
                      </div>
                    </div>
                    <div className="text-brand-600 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      Inquire <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 text-brand-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Trust & Certification Section */}
      <section className="bg-gray-50 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-900 to-brand-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl isolate transform translate-z-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl -ml-32 -mb-32 opacity-30"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-800/80 rounded-full text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-700/50">
                  <Shield className="w-3.5 h-3.5 text-accent-400" /> Verified Exporter
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black mb-3">
                  Government Registered & Certified
                </h3>
                <p className="text-brand-200 text-sm md:text-base font-medium max-w-xl leading-relaxed">
                  We are a fully licensed and compliant B2B export house. All shipments are processed in strict accordance with the Directorate General of Foreign Trade (DGFT) guidelines.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center flex-shrink-0 w-full md:w-auto">
                <span className="block text-xs font-bold uppercase tracking-widest text-brand-300 mb-1">Import Export Code</span>
                <span className="block text-xl md:text-2xl font-black font-mono tracking-wider text-white select-all">
                  IEC NO. BHQPG5702D
                </span>
                <span className="block text-[10px] text-brand-200 mt-2 font-bold uppercase tracking-wider">
                  Verified by Govt. of India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Service Info */}
              <div className="w-full md:w-5/12 bg-brand-900 p-8 text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-800 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="bg-brand-800 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 leading-tight">{selectedService.title}</h3>
                  <p className="text-brand-200 text-sm mb-6 leading-relaxed">
                    {selectedService.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-300">
                      <Clock className="w-4 h-4" /> {selectedService.time}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-300">
                      <CheckCircle2 className="w-4 h-4" /> {selectedService.servings}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Inquiry Form */}
              <div className="w-full md:w-7/12 p-8 relative">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
                
                <h4 className="text-xl font-black text-gray-900 mb-6">Service Inquiry</h4>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSelectedService(null); alert('Inquiry sent successfully!'); }}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Company Name (Optional)" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          required
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          required
                          type="tel" 
                          placeholder="Phone Number" 
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        />
                      </div>
                    </div>
                    <textarea 
                      placeholder="Share your specific requirements..." 
                      rows={4}
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-brand-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/10"
                  >
                    Send Inquiry <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
