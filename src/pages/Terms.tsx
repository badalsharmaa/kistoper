import { motion } from 'motion/react';
import { FileText, ShieldAlert, BadgeCheck, Scale, Mail, Phone, MapPin } from 'lucide-react';

export default function Terms() {
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
              <Scale className="w-3.5 h-3.5" /> Legal Agreement
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black mb-4 tracking-tight">
              Terms of Service
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
              <FileText className="w-6 h-6 text-brand-500" /> 1. Agreement to Terms
            </h2>
            <p className="mb-4">
              By accessing this website, submitting wholesale or export inquiries, or engaging with our logistics, custom clearance, and export licensing services, you agree to be bound by these Terms of Service.
            </p>
            <p>
              All transactions, export document processing, and supply agreements are managed under the trade regulations of India and are executed by our parent trading house, <strong>Shivansh International</strong> (A Government of India registered export firm with <strong>IEC NO. BHQPG5702D</strong>).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <BadgeCheck className="w-6 h-6 text-brand-500" /> 2. Export & Inquiry Process
            </h2>
            <p className="mb-4">
              We operate exclusively in the business-to-business (B2B) trade domain. The following guidelines apply to all inquiries and wholesale operations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Inquiry Submission:</strong> Adding items to your export inquiry list does not constitute a final sale. No payments are processed on this website. Our logistics managers will follow up with a formal Proforma Invoice (PI) stating precise freight and loading terms.</li>
              <li><strong>FOB/CIF Shipping Terms:</strong> Shipping quotes are calculated on Free On Board (FOB) or Cost, Insurance, and Freight (CIF) bases depending on the port of destination specified in the inquiry.</li>
              <li><strong>Product Tolerances:</strong> Handcrafted items (such as mosaic glass lamps and handcrafted leather footwear) are subject to minor aesthetic variations. These variations are characteristics of handmade artisan products and are not classified as manufacturing defects.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-brand-500" /> 3. Customs & Import Compliance
            </h2>
            <p className="mb-4">
              While we handle complete export clearance at the port of origin (India) through our licensed customs brokers under Shivansh International:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Buyers are solely responsible for ensuring that the products ordered comply with the local import laws and certifications of the destination country.</li>
              <li>Any import duties, local custom clearance processing charges, or warehouse fees at the destination port are the sole liability of the buyer.</li>
              <li>We will provide all standard export documents, including Certificate of Origin, Bill of Lading, Fumigation Certificate, and Phytosanitary Certificate as mutually agreed in the export contract.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6 text-brand-500" /> 4. Payment & Cancellation
            </h2>
            <p className="mb-4">
              Payments are executed outside this platform via official corporate bank transfers (Telegraphic Transfer / TT or Letter of Credit / LC) as specified in the Proforma Invoice:
            </p>
            <p>
              Production for custom bulk designs or footwear runs commences only upon receipt of the deposit as outlined in the signed export contract. Cancellation of custom orders is not permitted once raw materials or tooling have been acquired.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black text-brand-950 mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-brand-500" /> 5. Contact Information
            </h2>
            <p className="mb-6">
              For any questions regarding shipping contracts, wholesale rates, legal clearances, or these Terms of Service, please contact us:
            </p>
            <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-950 text-sm">Head Office</h4>
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
