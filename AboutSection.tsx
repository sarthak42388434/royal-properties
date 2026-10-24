import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div className="relative" initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80" alt="Royal Properties office in Kanpur" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#111118] border border-[var(--gold)]/20 rounded-xl p-6 max-w-xs backdrop-blur-sm">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white font-serif font-semibold text-sm">Royal Properties Kanpur</p>
                  <p className="text-[var(--gray)] text-xs mt-1 leading-relaxed">117/H-1/379, Asthana Bazar,<br />Pandu Nagar, Kakadeo,<br />Kanpur, Uttar Pradesh 208005</p>
                </div>
              </div>
              <a href="tel:+917897500605" className="flex items-center gap-2 text-[var(--gold)] text-sm font-semibold hover:text-[var(--gold-light)] transition-colors">
                <Phone size={14} />+91 78975 00605
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 leading-tight">Your Trusted Real Estate<br /><span className="text-[var(--gold)]">Consultant in Kanpur</span></h2>
            <p className="text-[var(--gray)] text-lg leading-relaxed mb-6">Royal Properties is a reliable real estate consultancy based in Kanpur, Uttar Pradesh. We specialize in facilitating property sales, purchases, and rentals for our valued clients.</p>
            <p className="text-[var(--gray)] text-lg leading-relaxed mb-8">Our team provides personalized guidance throughout your property journey, whether you're looking to buy your first home, sell a property, or find the perfect rental. We prioritize transparency, professionalism, and client satisfaction in every interaction.</p>
            <div className="space-y-4 mb-10">
              {['Personalized property consultation', 'Transparent and honest dealings', 'Local market expertise in Kanpur', 'Support for buying, selling, and renting'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--gold)] rounded-full shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-black px-8 py-4 rounded-full font-semibold transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]">Get In Touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
