import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Buy Property', href: '#buy' },
    { name: 'Sell Property', href: '#sell' },
    { name: 'Rent Property', href: '#rent' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[99990] transition-all duration-500 ${
        scrolled ? 'bg-[rgba(5,5,5,0.95)] backdrop-blur-md border-b border-[var(--gold)]/20 py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="Royal Properties Kanpur logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-[var(--gold)] font-serif font-bold text-lg tracking-wide group-hover:text-[var(--gold-light)] transition-colors">Royal Properties</span>
              <span className="text-[var(--gray)] text-[10px] tracking-[0.25em] uppercase">Kanpur</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white/80 hover:text-[var(--gold)] transition-colors text-sm font-medium tracking-wide">{link.name}</a>
            ))}
            <a href="tel:+917897500605" className="flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-black px-5 py-2 rounded-full text-sm font-semibold transition-all">
              <Phone size={16} />Call Now
            </a>
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[99995] bg-[#050505]/98 backdrop-blur-xl flex flex-col items-center justify-center">
            <button className="absolute top-6 right-6 text-white p-2" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <motion.a key={link.name} href={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[var(--gold)] text-2xl font-serif tracking-widest uppercase transition-colors">{link.name}</motion.a>
              ))}
              <motion.a href="tel:+917897500605" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-4 flex items-center gap-2 bg-[var(--gold)] text-black px-6 py-3 rounded-full font-semibold">
                <Phone size={18} />+91 78975 00605
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
