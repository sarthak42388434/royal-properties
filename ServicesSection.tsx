import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Key, Tag } from 'lucide-react';

const services = [
  {
    id: 'buy',
    icon: <Home size={32} />,
    title: 'Property Buying Assistance',
    subtitle: '购房服务',
    description: 'Looking to purchase a property in Kanpur? Connect with Royal Properties to discuss your property requirements and explore suitable next steps.',
    cta: 'Enquire About Buying',
    ctaHref: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=70',
    accent: 'from-amber-500/10 to-transparent',
  },
  {
    id: 'sell',
    icon: <Tag size={32} />,
    title: 'Property Selling Assistance',
    subtitle: '售房服务',
    description: 'Planning to sell your property? Contact Royal Properties to discuss your property details and selling requirements.',
    cta: 'Discuss Selling Your Property',
    ctaHref: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=70',
    accent: 'from-amber-600/10 to-transparent',
  },
  {
    id: 'rent',
    icon: <Key size={32} />,
    title: 'Rental Property Assistance',
    subtitle: '租房服务',
    description: 'Searching for a rental property or looking to rent out your property? Get in touch with Royal Properties to discuss your requirements.',
    cta: 'Enquire About Rentals',
    ctaHref: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=70',
    accent: 'from-amber-400/10 to-transparent',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="buy" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--gold)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto">
            Professional guidance for every step of your property journey in Kanpur
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.accent} to-[#0a0a0f]/95`} />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[320px] flex flex-col justify-end">
                <div className="w-14 h-14 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)] mb-6 group-hover:bg-[var(--gold)]/30 transition-colors">
                  {service.icon}
                </div>

                <span className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-2 block">
                  {service.subtitle}
                </span>

                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-[var(--gray)] leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href={service.ctaHref}
                  className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold hover:text-[var(--gold-light)] transition-colors group/link"
                >
                  {service.cta}
                  <Key size={16} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
