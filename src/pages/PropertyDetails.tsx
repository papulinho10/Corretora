import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Bed, Bath, Square, Car, ArrowLeft, MessageCircle } from 'lucide-react';
import { PROPERTIES } from '../data/properties';

const WHATSAPP_URL = "https://wa.me/5511999999999"; // Replace with real number

export default function PropertyDetails() {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-4 text-brand-text">Imóvel não encontrado</h2>
          <Link to="/" className="text-brand-accent hover:underline uppercase tracking-widest text-sm">Voltar para o início</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 md:pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-brand-text-light hover:text-brand-accent transition-colors mb-8 text-sm uppercase tracking-widest font-medium">
          <ArrowLeft size={16} /> Voltar ao Portfólio
        </Link>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-brand-accent text-sm mb-3">
              <MapPin size={18} />
              <span className="tracking-wider uppercase font-semibold">{property.location}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text font-light mb-2">{property.title}</h1>
            <p className="text-brand-text-light text-lg">{property.condo} - {property.street}</p>
          </div>
          <div className="bg-brand-surface px-6 py-4 border border-brand-border shadow-sm">
            <p className="text-xs uppercase tracking-widest text-brand-text-light mb-1">Valor de Venda</p>
            <p className="font-serif text-3xl md:text-4xl text-brand-accent font-medium">{property.price}</p>
          </div>
        </div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] mb-8 overflow-hidden border border-brand-border"
        >
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {property.gallery.map((img, idx) => (
            <div key={idx} className="h-48 md:h-64 overflow-hidden border border-brand-border">
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Description */}
            <section>
              <h3 className="font-serif text-2xl md:text-3xl text-brand-text mb-6">Sobre o Imóvel</h3>
              <p className="text-brand-text-light leading-relaxed text-base md:text-lg font-light">
                {property.description}
              </p>
            </section>

            {/* Features Grid */}
            <section>
              <h3 className="font-serif text-2xl md:text-3xl text-brand-text mb-6">Características</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-brand-border">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent">
                    <Square size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-text-light mb-1">Área Útil</p>
                    <p className="font-serif text-xl text-brand-text">{property.area}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent">
                    <Bed size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-text-light mb-1">Suítes</p>
                    <p className="font-serif text-xl text-brand-text">{property.beds}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent">
                    <Bath size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-text-light mb-1">Banhos</p>
                    <p className="font-serif text-xl text-brand-text">{property.baths}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent">
                    <Car size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-text-light mb-1">Vagas</p>
                    <p className="font-serif text-xl text-brand-text">{property.parking}</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-brand-surface p-8 border border-brand-border shadow-sm sticky top-32">
              <h4 className="font-serif text-2xl text-brand-text mb-6 border-b border-brand-border pb-4">Resumo Financeiro</h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-text-light">Valor</span>
                  <span className="font-serif text-lg text-brand-accent font-medium">{property.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-text-light">Condomínio</span>
                  <span className="font-serif text-lg text-brand-text font-medium">{property.condoFee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-text-light">IPTU</span>
                  <span className="font-serif text-lg text-brand-text font-medium">{property.iptu}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-brand-border">
                  <span className="text-sm text-brand-text-light">Área Total</span>
                  <span className="font-serif text-lg text-brand-text font-medium">{property.totalArea}</span>
                </div>
              </div>

              <a 
                href={`${WHATSAPP_URL}?text=Olá, gostaria de mais informações sobre o imóvel ${property.title} (${property.id})`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-accent text-brand-bg py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-accent-hover transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Falar com a Corretora
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
