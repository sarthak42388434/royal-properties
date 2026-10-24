import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax-layer');
        parallaxElements.forEach((el: any) => {
          const speed = el.dataset.speed || 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };

  return (
    <section ref={heroRef} id="hero" className="relative w-full min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&auto=format&fit=crop&q=80" alt="Premium residential architecture in Kanpur" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/70 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
      </div>
      <div className="absolute top-20 right-20 w-64 h-64 border border-[var(--gold)]/10 rounded-full parallax-layer" data-speed="0.2" />
      <div className="absolute bottom-32 right-40 w-32 h-32 border border-[var(--gold)]/20 parallax-layer" data-speed="0.15" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[var(--gold)] rounded-full parallax-layer" data-speed="0.3" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[var(--gold)]/60 rounded-full parallax-layer" data-speed="0.25" />
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <motion.div className="max-w-2xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs font-semibold tracking-[0.3em] uppercase">Royal Properties Kanpur</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] mb-6">
            Find the Right Property<br /><span className="text-[var(--gold)] italic">in Kanpur</span><br />with Royal Properties
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[var(--gray)] text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Reliable real estate assistance for buying, selling, and renting properties in Kanpur, Uttar Pradesh.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href="tel:+917897500605" className="flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-black px-8 py-4 rounded-full font-semibold transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]">
              <Phone size={18} />Call for Property Assistance
            </a>
            <a href="#buy" className="flex items-center gap-2 border border-[var(--gold)]/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--gold)]/10 transition-all">
              Explore Our Services<ArrowRight size={18} />
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-8 text-sm">
            {['Buying Assistance', 'Selling Assistance', 'Rental Assistance'].map((label) => (
              <div key={label} className="flex items-center gap-2 text-[var(--gray)]">
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full" />{label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[var(--gray)] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--gold)]/50 to-transparent" />
      </div>
    </section>
  );
}
