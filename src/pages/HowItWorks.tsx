import { motion } from 'motion/react';
import { CalendarSync, MessageCircle, CheckCircle2, ShoppingBag, Clock, CreditCard, Smartphone, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight">
              Global Export Made Simple
            </h1>
            <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Discover professional ways to source premium handcrafted goods. Whether you need scheduled bulk shipments or direct export inquiries, we facilitate it all.
            </p>
          </motion.div>
        </div>
        
        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FAFAFA"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        
        {/* Subscriptions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[2.5rem] shadow-xl shadow-brand-900/5 border border-gray-100 overflow-hidden mb-16"
          id="subscriptions"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 lg:pr-12 flex flex-col justify-center">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8">
                <CalendarSync className="w-8 h-8 text-brand-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black text-brand-950 mb-4 tracking-tight">
                Scheduled Shipments
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Maintain steady inventory of premium goods like glass lamps and designer footwear. Schedule your export shipments and let us handle the global logistics.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Choose Your Items</h4>
                    <p className="text-gray-500 mt-1">Select the products you need regularly from our wholesale catalog.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Set the Frequency</h4>
                    <p className="text-gray-500 mt-1">Choose your shipping window: monthly, quarterly, or as per production cycles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Manage & Receive</h4>
                    <p className="text-gray-500 mt-1">We'll manage production and export logistics to deliver to your nearest port or warehouse.</p>
                  </div>
                </div>
              </div>

              <Link to="/shop" className="inline-flex items-center justify-center bg-brand-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors w-fit shadow-lg shadow-brand-900/20">
                Start Bulk Order <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="bg-brand-50 p-8 md:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-brand-100">
              <h3 className="text-2xl font-bold text-brand-950 mb-8">Wholesale Benefits</h3>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Tiered Bulk Discounts", desc: "Enjoy progressive discounts based on order volume and shipment frequency." },
                  { icon: Truck, title: "Logistics Support", desc: "Bulk orders qualify for end-to-end logistics and documentation support." },
                  { icon: Clock, title: "Flexible Lead Times", desc: "Align production with your market demand with our agile manufacturing process." },
                  { icon: CheckCircle2, title: "Priority Production", desc: "Scheduled shipments are prioritized in our production queue to guarantee availability." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-brand-100/50">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden"
          id="whatsapp"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="order-2 lg:order-1 bg-[#f0fdf4] p-8 md:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-r border-[#dcfce7]">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Inquiry via WhatsApp?</h3>
              <div className="space-y-6">
                {[
                  { icon: Smartphone, title: "Familiar & Fast", desc: "No need to navigate a portal. Just type your bulk requirements like you're texting a friend." },
                  { icon: MessageCircle, title: "Custom Quotes", desc: "Chat directly with our export managers for personalized pricing and custom designs." },
                  { icon: ShoppingBag, title: "Production Updates", desc: "Get real-time photos and videos of your order being manufactured and packed." },
                  { icon: CreditCard, title: "Secure Transactions", desc: "We provide formal proforma invoices and secure payment links once QC is complete." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#dcfce7]/50">
                    <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-[#16a34a]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 p-8 md:p-16 lg:pl-12 flex flex-col justify-center">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 mb-4 tracking-tight">
                Export Inquiry via WhatsApp
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Directly communicate for bulk quotes, custom designs, and logistics updates via WhatsApp.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#16a34a] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Send Your Requirements</h4>
                    <p className="text-gray-500 mt-1">Text us your SKU requirements, or send your formal purchase order.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#16a34a] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">QC & Proforma</h4>
                    <p className="text-gray-500 mt-1">Our production team ensures quality control and provides a formal export quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#16a34a] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Pay & Ship</h4>
                    <p className="text-gray-500 mt-1">Complete payment via secure channels and choose your preferred shipping terms (FOB, CIF, etc.).</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/919058439992" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors w-fit shadow-lg shadow-[#25D366]/20"
              >
                Message Us Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
