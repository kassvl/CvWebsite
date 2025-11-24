import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SLIDING_IMAGES = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Abstract Dark
  "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2564&auto=format&fit=crop", // Dark Texture
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop", // Modern Building
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2564&auto=format&fit=crop"  // Skyscraper
];

export const HomeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Sliding Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark Overlay */}
        <MarqueeBackground />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 flex flex-col items-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.4em] text-yellow-500/80 mb-6">
            Architecting the Future
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white mix-blend-difference"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            KADİRHAN
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white/90"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            EMRE MEMİŞ
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-8 text-lg md:text-xl text-neutral-400 max-w-lg font-light"
        >
          Senior Software Architect & <span className="text-yellow-100/80">Cloud Engineering Lead</span>.
          <br/>Building million-scale systems with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
           <div className="h-16 w-[1px] bg-gradient-to-b from-yellow-500/0 via-yellow-500 to-yellow-500/0 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const MarqueeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex flex-col gap-8 opacity-40 rotate-[-5deg] scale-125">
        {/* Row 1 - Moving Left */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex gap-8 w-max"
        >
          {[...SLIDING_IMAGES, ...SLIDING_IMAGES].map((src, i) => (
            <img key={i} src={src} alt="" className="h-[30vh] w-[40vw] object-cover rounded-lg grayscale brightness-75" />
          ))}
        </motion.div>

        {/* Row 2 - Moving Right */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          className="flex gap-8 w-max"
        >
          {[...SLIDING_IMAGES, ...SLIDING_IMAGES].map((src, i) => (
            <img key={i} src={src} alt="" className="h-[30vh] w-[40vw] object-cover rounded-lg grayscale brightness-75" />
          ))}
        </motion.div>

         {/* Row 3 - Moving Left */}
         <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          className="flex gap-8 w-max"
        >
          {[...SLIDING_IMAGES, ...SLIDING_IMAGES].map((src, i) => (
            <img key={i} src={src} alt="" className="h-[30vh] w-[40vw] object-cover rounded-lg grayscale brightness-75" />
          ))}
        </motion.div>
    </div>
  )
}

// WhoAmISection has been removed in favor of the new dedicated AboutSection
