import { motion } from 'motion/react';
import { MessageCircle, QrCode, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhatsAppOrder() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-[#128C7E] text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-bold tracking-wide mb-6">
            <MessageCircle className="w-4 h-4" /> Official WhatsApp Ordering
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Order Groceries with a Text.
          </h1>
          <p className="text-green-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Skip the cart. Just send us your shopping list on WhatsApp, and we'll have it ready for pickup or delivery in minutes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-20 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Instructions */}
          <div className="p-8 md:p-12 md:w-3/5">
            <h2 className="text-2xl font-black text-gray-900 mb-8">How it works</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-[#128C7E] flex items-center justify-center flex-shrink-0 font-black text-lg">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Say "Hi" to start</h3>
                  <p className="text-gray-500 mt-1">Save our number or scan the QR code to open a chat with our automated assistant.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-[#128C7E] flex items-center justify-center flex-shrink-0 font-black text-lg">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Send your list</h3>
                  <p className="text-gray-500 mt-1">Type your items (e.g., "2 gallons whole milk, 1 bag basmati rice, fresh cilantro"). Or send a photo of your handwritten list!</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-[#128C7E] flex items-center justify-center flex-shrink-0 font-black text-lg">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Confirm & Pay</h3>
                  <p className="text-gray-500 mt-1">We'll reply with your total and a secure payment link. Choose pickup or delivery.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <a 
                href="https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20start%20a%20new%20grocery%20order." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold tracking-wide hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
              >
                <Smartphone className="w-5 h-5" /> Open WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right: QR Code */}
          <div className="bg-gray-50 p-8 md:p-12 md:w-2/5 flex flex-col items-center justify-center text-center border-l border-gray-100">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-6">
              <QrCode className="w-48 h-48 text-gray-900" />
            </div>
            <h3 className="font-black text-gray-900 text-xl mb-2">Scan to Order</h3>
            <p className="text-gray-500 text-sm">Open your phone's camera and point it at this code to start chatting instantly.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
