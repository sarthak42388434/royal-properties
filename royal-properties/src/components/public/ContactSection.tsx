import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createContactMessage } from '@/lib/database';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const submitMutation = useMutation({
    mutationFn: (data: any) => createContactMessage({ ...data, status: 'unread' }),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "One of our consultants will get back to you shortly.",
        variant: "default",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us via phone.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name, email, and phone number.",
        variant: "destructive",
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Let's Discuss Your Property Needs
            </h2>
            <p className="text-[var(--gray)] leading-relaxed mb-12 text-lg">
              Whether you're looking to buy, sell, or rent, our team of expert consultants is ready to assist you.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg mb-1">Office Address</h4>
                  <p className="text-[var(--gray)] leading-relaxed">
                    117/H-1/379, Asthana Bazar,<br />
                    Pandu Nagar, Kakadeo,<br />
                    Kanpur, Uttar Pradesh 208005, India
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg mb-1">Phone</h4>
                  <a href="tel:+917897500605" className="text-[var(--gray)] hover:text-[var(--gold)] transition-colors text-lg font-medium">
                    +91 78975 00605
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#111118] p-8 md:p-10 rounded-2xl border border-[var(--gold)]/10">
              <h3 className="text-2xl font-serif text-white mb-2">Send a Message</h3>
              <p className="text-[var(--gray)] mb-8">Fill out the form below.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[var(--gray)] text-sm font-medium" htmlFor="name">Your Name *</label>
                    <input id="name" type="text" className="w-full bg-[#0a0a0f] border border-[var(--gold)]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--gold)] transition-colors" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[var(--gray)] text-sm font-medium" htmlFor="phone">Phone Number *</label>
                    <input id="phone" type="tel" className="w-full bg-[#0a0a0f] border border-[var(--gold)]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--gold)] transition-colors" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[var(--gray)] text-sm font-medium" htmlFor="email">Email Address *</label>
                  <input id="email" type="email" className="w-full bg-[#0a0a0f] border border-[var(--gold)]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--gold)] transition-colors" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[var(--gray)] text-sm font-medium" htmlFor="message">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-[#0a0a0f] border border-[var(--gold)]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--gold)] transition-colors resize-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your property requirements..." />
                </div>
                <button type="submit" disabled={submitMutation.isPending} className="w-full flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-black font-bold uppercase tracking-wider py-4 rounded-lg transition-all disabled:opacity-70">
                  {submitMutation.isPending ? <span>Sending...</span> : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
