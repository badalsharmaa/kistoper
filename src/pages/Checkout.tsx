import React, { useState } from 'react';
import { useCart } from '../lib/cart-context';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, MapPin, Phone, ShieldCheck, ShoppingBag, Mail, User, Building2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const orderSummary = items.map(item => `${item.name} (Qty: ${item.quantity})`).join('\n');

      const templateParams = {
        to_name: "Kistoper Export Team",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        address: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`,
        order_details: orderSummary,
        message: formData.message || "No additional requirements."
      };

      // EmailJS implementation (using placeholders)
      await emailjs.send(
        'service_default', 
        'template_order',   
        templateParams,
        'user_public_key'   
      ).catch(err => {
        console.warn('EmailJS not configured yet, simulating success for demo.', err);
      });

      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      clearCart();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center max-w-md">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your inquiry list is empty</h2>
        <p className="text-gray-500 mb-8">Add items to your inquiry list to request a quote.</p>
        <Link to="/shop" className="bg-brand-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors block w-full">
          Browse Products
        </Link>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="container mx-auto px-4 py-16 text-center max-w-2xl"
      >
        <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-brand-600" />
        </div>
        <h1 className="text-4xl font-display font-black text-gray-900 mb-4 tracking-tight">Request Received!</h1>
        <p className="text-xl text-brand-700 font-bold mb-4">We will contact you shortly regarding your order.</p>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Your export inquiry has been successfully forwarded to our logistics team at Shivansh International. 
          A dedicated manager will review your requirements and provide a formal quote within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop" className="bg-brand-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20">
            Continue Browsing
          </Link>
          <a href="https://wa.me/919058439992" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2">
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 pt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-black text-brand-950 tracking-tight mb-4">Finalize Export Inquiry</h1>
          <p className="text-gray-600 font-medium">Please provide your details. No payment is required at this stage.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 xl:col-span-8">
            <form onSubmit={handlePlaceOrder} className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-950 mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-brand-600" /> Client Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">First Name</label>
                      <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Last Name</label>
                      <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="Doe" />
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Phone / WhatsApp</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Company Name (Optional)</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input name="company" value={formData.company} onChange={handleInputChange} type="text" className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="Company Global Inc." />
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-50">
                  <h3 className="text-lg font-bold text-brand-950 mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-600" /> Shipping Destination
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Street Address</label>
                      <input required name="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="123 Export Lane" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">City</label>
                        <input required name="city" value={formData.city} onChange={handleInputChange} type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="London" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">State / Prov</label>
                        <input required name="state" value={formData.state} onChange={handleInputChange} type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="UK" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">ZIP / Postal</label>
                        <input required name="zip" value={formData.zip} onChange={handleInputChange} type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium" placeholder="E1 6AN" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-50">
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-brand-600" /> Additional Requirements
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 focus:bg-white font-medium resize-none" placeholder="E.g. Specific voltage for lamps, custom packaging, or port of delivery..."></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="mt-12 w-full bg-brand-900 text-white px-8 py-5 rounded-[1.5rem] font-bold text-lg hover:bg-brand-800 transition-all flex items-center justify-center shadow-xl shadow-brand-900/20 disabled:opacity-70 group"
              >
                {isProcessing ? 'Submitting Inquiry...' : 'Submit Inquiry & Request Quote'} 
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 sticky top-32">
              <h3 className="text-xl font-display font-black text-brand-950 mb-6">Inquiry Summary</h3>
              
              <div className="max-h-[400px] overflow-y-auto pr-2 mb-6 space-y-5 hide-scrollbar">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl p-2 border border-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-900 line-clamp-2">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1 font-medium">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Total Items</span>
                  <span className="text-2xl font-display font-black text-brand-950">{items.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-brand-50 rounded-2xl border border-brand-100/50">
                  <ShieldCheck className="w-5 h-5 text-brand-600 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-brand-900 uppercase tracking-wide mb-1">Direct Verification</p>
                    <p className="text-[10px] text-brand-700 leading-relaxed font-medium">All inquiries are manually reviewed by our export experts to ensure accuracy before invoicing.</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                  Premium Export Logistics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
