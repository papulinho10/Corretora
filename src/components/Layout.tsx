import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = "https://i.postimg.cc/1Xk3h0KH/eff09025-79ab-4043-ac72-3eaeae57578b.png";
const INSTAGRAM_URL = "https://www.instagram.com/lisandradiefenthaeler/";
const WHATSAPP_URL = "https://wa.me/5511999999999"; // Replace with real number

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-brand-bg">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-surface/95 backdrop-blur-md py-2 md:py-4 shadow-lg border-b border-brand-border' : 'bg-brand-bg/80 backdrop-blur-sm py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
          <Link to="/" className="relative z-50">
            <img src={LOGO_URL} alt="Logo Imobiliária" className="h-12 md:h-16 object-contain transition-all duration-300" referrerPolicy="no-referrer" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm tracking-widest uppercase font-medium hover:text-brand-accent transition-colors">Início</Link>
            <Link to="/sobre" className="text-sm tracking-widest uppercase font-medium hover:text-brand-accent transition-colors">A Corretora</Link>
            <Link to="/corretora" className="text-sm tracking-widest uppercase font-medium hover:text-brand-accent transition-colors">A Especialista</Link>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-brand-bg px-6 py-3 text-sm tracking-widest uppercase font-bold hover:bg-brand-accent-hover transition-all duration-300 shadow-sm">
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 text-brand-text p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-surface flex flex-col items-center justify-center space-y-8 px-6 text-center"
          >
            <Link to="/" className="text-2xl font-serif tracking-widest uppercase hover:text-brand-accent transition-colors">Início</Link>
            <Link to="/sobre" className="text-2xl font-serif tracking-widest uppercase hover:text-brand-accent transition-colors">A Corretora</Link>
            <Link to="/corretora" className="text-2xl font-serif tracking-widest uppercase hover:text-brand-accent transition-colors">A Especialista</Link>
            
            <div className="flex gap-6 mt-8">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-text hover:text-brand-accent hover:border-brand-accent transition-colors shadow-sm">
                <Instagram size={24} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-text hover:text-brand-accent hover:border-brand-accent transition-colors shadow-sm">
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Footer */}
      <footer className="bg-brand-surface pt-20 pb-10 px-6 md:px-12 border-t border-brand-border mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <img src={LOGO_URL} alt="Logo Imobiliária" className="h-16 object-contain mb-6" referrerPolicy="no-referrer" />
            <p className="text-brand-text-light text-sm font-light leading-relaxed">
              A principal corretora de imóveis de luxo, conectando clientes extraordinários a propriedades excepcionais com elegância e exclusividade.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-text">Contato</h4>
            <ul className="space-y-4 text-brand-text-light text-sm font-light">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-accent transition-colors">
                  <Phone size={18} className="text-brand-accent" /> +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-brand-accent transition-colors cursor-pointer">
                <Mail size={18} className="text-brand-accent" /> contato@altopadrao.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-brand-accent" /> 
                <span>Itapema, Balneário e Porto belo - SC<br/>MIAMI Beach 🇺🇸</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-text">Navegação</h4>
            <ul className="space-y-3 text-brand-text-light text-sm font-light">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-accent transition-colors">A Corretora</Link></li>
              <li><Link to="/corretora" className="hover:text-brand-accent transition-colors">A Especialista</Link></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-text">Redes Sociais</h4>
            <p className="text-brand-text-light text-sm font-light mb-6">Acompanhe nosso portfólio e novidades exclusivas.</p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-text hover:border-brand-accent hover:text-brand-accent hover:bg-brand-bg transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-text hover:border-brand-accent hover:text-brand-accent hover:bg-brand-bg transition-all shadow-sm">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-light font-light tracking-wider">
          <p>&copy; {new Date().getFullYear()} Lisandra Diefenthaeler. Todos os direitos reservados.</p>
          <p>Design Exclusivo</p>
        </div>
      </footer>
    </div>
  );
}
