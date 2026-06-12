import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative w-full bg-brand-950 py-16 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-500/30 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-100 text-xs font-bold tracking-wider uppercase rounded-full border border-white/10 mb-4">
              <Shield className="w-3.5 h-3.5" /> Data Protection
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-brand-200 text-sm md:text-base font-medium">
              Last Updated: June 12, 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed"
        >
          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-brand-500" /> 1. Introduction
            </h2>
            <p className="mb-4">
              Welcome to <strong>Kistoper</strong> ("we", "our", or "us"). We are committed to protecting your business and personal information. All export documentation, logistics processing, and related trade services on this platform are managed and operated by <strong>Shivansh International</strong>, located in Agra, India.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website, submit wholesale or export inquiries, or purchase handcrafted lamps, designer footwear, or logistics/licensing services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-brand-500" /> 2. Information We Collect
            </h2>
            <p className="mb-4">
              To process export inquiries, custom clearances, and global orders, we collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Full name, corporate email address, primary/secondary phone numbers, and company mailing address.</li>
              <li><strong>Business & Export Details:</strong> Company registration status, Import Export Code (IEC) (if applicable), VAT/GST number, shipping destination port, and specific bulk order requirements.</li>
              <li><strong>Communication Data:</strong> Inquiries sent through our checkout/inquiry forms, WhatsApp order requests, or custom clearance registration forms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-500" /> 3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We process your business information to fulfill export procedures and trade compliance:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To prepare formal commercial invoices, packing lists, and export quotes.</li>
              <li>To handle customs clearance, obtain shipping approvals, and coordinate port logistics under Shivansh International.</li>
              <li>To communicate order status updates, regulatory changes, or direct WhatsApp inquiries.</li>
              <li>To verify compliance with Indian customs regulations and international trade guidelines (including DGFT and IEC verification).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-brand-500" /> 4. Data Security & Storage
            </h2>
            <p className="mb-4">
              We employ strict industry-standard security measures (including secure SSL encryption and firewalls) to protect your business documentation from unauthorized access, alteration, or disclosure.
            </p>
            <p>
              Your export data is stored securely and is only accessible by authorized logistics managers who are directly involved in customs operations, freight management, or legal documentation. We do not sell or lease your business details to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-brand-500" /> 5. Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact our data compliance officer:
            </p>
            <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-950 text-sm">Corporate Office</h4>
                  <p className="text-sm text-brand-800">95- Surya Lok Colony, Mau Road, Near Shanti Hospital, Khandari, Agra (U.P.) - 282005, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-950 text-sm">WhatsApp / Support</h4>
                  <p className="text-sm text-brand-800">+91 90584 39992 (Primary) / +91 70373 94791 (Secondary)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-950 text-sm">Official Email</h4>
                  <a href="mailto:shivanshinternationalindia@gmail.com" className="text-sm text-brand-600 font-bold hover:underline">shivanshinternationalindia@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
