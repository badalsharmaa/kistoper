import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RewardsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the central element
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <section 
        ref={containerRef}
        className="relative w-full overflow-hidden py-24 md:py-32 flex items-center justify-center min-h-[500px] md:min-h-[700px] rounded-[2.5rem] shadow-2xl shadow-brand-900/5"
        style={{
          background: 'linear-gradient(180deg, #022c22 0%, #064e3b 100%)', // brand-950 to brand-900
        }}
      >
        {/* Abstract Curved Dividers inside the box */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" opacity="0.05"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" opacity="0.05"></path>
          </svg>
        </div>

        {/* Grain Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Top Marquee Text Layer (Below Center) */}
        <div 
          className="absolute top-1/2 left-0 w-full -translate-y-[130%] md:-translate-y-[110%] pointer-events-none z-0"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: [0, "-50%"] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              style={{ willChange: "transform" }}
            >
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-[18vw] md:text-[14vw] lg:text-[10vw] font-black tracking-[0.08em] text-white opacity-5 px-4 font-sans leading-none">
                  EARN POINTS • GET REWARDS • EXCLUSIVE DEALS • FREE DELIVERY • 
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Center Content Layer */}
        <motion.div 
          style={{ y }}
          className="relative z-10 flex flex-col items-center text-center px-4"
        >
          <motion.div 
            animate={{ 
              y: [-8, 8, -8],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
            className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,255,255,0.3)] border-4 border-white/10 overflow-hidden p-8"
          >
            <img src="/branding/logo.png" alt="Kistoper Partner Logo" className="w-full h-full object-contain" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight max-w-2xl leading-[1.1]">
            Kistoper Wholesale Portal
          </h2>
          <p className="text-brand-100 text-lg md:text-xl font-medium max-w-xl mb-10 leading-relaxed">
            Partner with us for bulk orders. Unlock exclusive wholesale pricing for global exports and dedicated logistics support.
          </p>
          
          <Link to="/contact" className="inline-flex items-center justify-center bg-white text-brand-950 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-xl hover:scale-105 duration-300">
            Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

        {/* Bottom Marquee Text Layer (Above Center) */}
        <div 
          className="absolute top-1/2 left-0 w-full translate-y-[30%] md:translate-y-[10%] pointer-events-none z-20"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["-50%", 0] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              style={{ willChange: "transform" }}
            >
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-[18vw] md:text-[14vw] lg:text-[10vw] font-black tracking-[0.08em] text-white opacity-5 px-4 font-sans leading-none">
                  MEMBER PERKS • CASHBACK • SPECIAL OFFERS • VIP ACCESS • 
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
