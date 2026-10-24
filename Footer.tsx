import { MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Buy Property', href: '#buy' },
    { name: 'Sell Property', href: '#sell' },
    { name: 'Rent Property', href: '#rent' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black border-t border-[var(--gold)]/20 pt-16 pb-6 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Royal Properties Kanpur logo" className="w-10 h-10 object-contain" />
              <div>
                <span className="text-[var(--gold)] font-serif font-bold text-lg tracking-wide block">Royal Properties</span>
                <span className="text-[var(--gray)] text-[10px] tracking-[0.2em] uppercase">Kanpur</span>
              </div>
            </div>
            <p className="text-[var(--gray)] mb-6 leading-relaxed text-sm">
              Reliable real estate consultancy facilitating property sales, purchases, and rentals in Kanpur, Uttar Pradesh.
            </p>
          </div>
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--gray)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/50" />{link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wider">Services</h3>
            <ul className="space-y-3">
              {['Property Buying', 'Property Selling', 'Rental Assistance'].map((label) => (
                <li key={label}>
                  <a href="#contact" className="text-[var(--gray)] hover:text-[var(--gold)] transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/50" />{label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--gold)] shrink-0 mt-1" size={18} />
                <span className="text-[var(--gray)] text-sm leading-relaxed">
                  117/H-1/379, Asthana Bazar,<br />Pandu Nagar, Kakadeo,<br />Kanpur, UP 208005
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--gold)] shrink-0" size={18} />
                <a href="tel:+917897500605" className="text-[var(--gray)] hover:text-[var(--gold)] transition-colors text-sm">+91 78975 00605</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-[var(--gold)]/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--gray)] text-sm">© {new Date().getFullYear()} <span className="text-[var(--gold)]">Royal Properties Kanpur</span>. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-[var(--gray)]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 w-12 h-12 bg-[var(--gold)] text-black rounded-full flex items-center justify-center hover:bg-[var(--gold-light)] transition-all z-50 shadow-lg" aria-label="Scroll to top">
          <ChevronUp size={24} />
        </button>
      )}
    </footer>
  );
}
