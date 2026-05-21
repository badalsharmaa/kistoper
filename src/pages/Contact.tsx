import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Header */}
      <div className="bg-brand-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight"
          >
            Get in <span className="text-brand-400">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto font-medium"
          >
            Have questions about our products or export services? Our team is here to help you navigate global trade.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-12 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] shadow-xl shadow-brand-900/5 p-8 md:p-12 border border-gray-100"
          >
            <h2 className="text-2xl font-black text-brand-950 mb-8 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-brand-600" />
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Inquiry about Glass Lamps"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all font-medium"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="How can we help you today?"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all font-medium resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full md:w-fit bg-brand-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/20 group"
              >
                Send Message 
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Sidebar Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-brand-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-800 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <h3 className="text-xl font-black mb-8 relative z-10">Contact Information</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-1">WhatsApp / Call</p>
                    <a href="tel:+919058439992" className="text-lg font-bold hover:text-brand-400 transition-colors">+91 90584 39992</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:info@shivanshinternational.com" className="text-lg font-bold hover:text-brand-400 transition-colors">info@kistoper.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-1">Head Office</p>
                    <p className="text-sm font-medium leading-relaxed">
                      95- Surya Lok Colony, Mau Road,<br/>
                      Agra (U.P.) - 282005, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">Mon-Sat: 10AM - 7PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-brand-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-lg h-[350px] relative group"
            >
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=95-Surya%20Lok%20Colony,Mau%20Road,Agra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                title="Kistoper Head Office"
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                  <span className="text-xs font-black text-brand-950 uppercase tracking-widest">Agra Head Office</span>
                </div>
                <a 
                  href="https://maps.google.com/maps?q=95-Surya%20Lok%20Colony,Mau%20Road,Agra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-600 font-bold text-[10px] uppercase tracking-widest hover:underline"
                >
                  Open in Maps
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
