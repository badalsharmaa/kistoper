import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ProductMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the featured image
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <section 
        ref={containerRef}
        className="relative w-full overflow-hidden py-24 md:py-32 flex items-center justify-center min-h-[500px] md:min-h-[700px] rounded-[2.5rem] shadow-2xl shadow-brand-900/5"
        style={{
          background: 'linear-gradient(180deg, #f7f4ef 0%, #efe6d6 100%)',
        }}
      >
        {/* Abstract Curved Dividers inside the box */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" opacity="0.4"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" opacity="0.4"></path>
          </svg>
        </div>

        {/* Grain Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Top Marquee Text Layer */}
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
                <span key={i} className="text-[18vw] md:text-[14vw] lg:text-[10vw] font-black tracking-[0.08em] text-[#111] opacity-15 px-4 font-sans leading-none">
                  HANDCRAFTED LAMPS • DESIGNER FOOTWEAR • EXPORT QUALITY • ARTISAN MADE • 
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured Product Image Layer */}
        <motion.div 
          style={{ y }}
          className="relative z-10 w-[300px] md:w-[450px] lg:w-[550px] cursor-pointer group"
        >
          <motion.img 
            animate={{ 
              y: [-12, 12, -12],
              rotate: [2, -2, 2]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
            src="src/assets/hang_lamp.png" 
            alt="Handcrafted Lamp"
            className="w-full h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 rounded-3xl"
            style={{
              filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.25)) drop-shadow(0 0 30px rgba(255,200,100,0.3))'
            }}
          />
        </motion.div>

        {/* Bottom Marquee Text Layer */}
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
                <span key={i} className="text-[18vw] md:text-[14vw] lg:text-[10vw] font-black tracking-[0.08em] text-[#111] opacity-15 px-4 font-sans leading-none">
                  GLOBAL EXPORT • PREMIUM FINISH • AUTHENTIC INDIAN CRAFT • SHIVANSH EXCLUSIVE • 
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
