import { useEffect } from 'react';
import Navbar from '@/components/public/Navbar';
import Hero from '@/components/public/Hero';
import ServicesSection from '@/components/public/ServicesSection';
import AboutSection from '@/components/public/AboutSection';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';
import Loader from '@/components/public/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);
  return (
    <div className="bg-[var(--dark)] min-h-screen">
      <Loader />
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
