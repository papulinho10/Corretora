import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import BannerCarousel from '../components/BannerCarousel';

const LOGO_URL = "https://i.postimg.cc/7YBcKMHk/c850351e-d2fd-48cb-9a9c-c24580609c2a.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1613490908578-f14d878794d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Home Interior" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          {/* Dark elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/60 to-brand-bg"></div>
        </div>

        <div className="relative z-10 text-center w-full mt-0 md:mt-0">
          <BannerCarousel />
          
          <div className="px-4 md:px-6 max-w-5xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-accent tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-6 md:mb-8"
            >
              EXCLUSIVIDADE E ELEGÂNCIA
            </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center mb-12 md:mb-16"
          >
            <img src={LOGO_URL} alt="Logo" className="h-56 md:h-80 lg:h-[28rem] object-contain drop-shadow-2xl" referrerPolicy="no-referrer" />
          </motion.div>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-brand-surface/90 backdrop-blur-md border border-brand-border p-4 md:p-6 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto shadow-2xl rounded-sm"
          >
            <div className="flex-1 border-b md:border-b-0 md:border-r border-brand-border pb-4 md:pb-0 md:pr-4 text-left">
              <label className="block text-[10px] md:text-xs text-brand-text-light uppercase tracking-widest mb-2 font-semibold">Localização</label>
              <input type="text" placeholder="Itapema, Balneário, Miami..." className="w-full bg-transparent border-none outline-none text-brand-text placeholder:text-brand-text-light/50 font-serif text-lg md:text-xl" />
            </div>
            <div className="flex-1 border-b md:border-b-0 md:border-r border-brand-border pb-4 md:pb-0 md:px-4 text-left">
              <label className="block text-[10px] md:text-xs text-brand-text-light uppercase tracking-widest mb-2 font-semibold">Tipo de Imóvel</label>
              <select className="w-full bg-transparent border-none outline-none text-brand-text font-serif text-lg md:text-xl appearance-none cursor-pointer">
                <option value="" className="bg-brand-surface">Todos os tipos</option>
                <option value="casa" className="bg-brand-surface">Casa em Condomínio</option>
                <option value="cobertura" className="bg-brand-surface">Cobertura</option>
                <option value="mansao" className="bg-brand-surface">Mansão</option>
              </select>
            </div>
            <button className="bg-brand-accent text-brand-bg px-6 md:px-8 py-3 md:py-4 uppercase tracking-widest text-xs md:text-sm font-bold hover:bg-brand-accent-hover transition-colors flex items-center justify-center gap-2 mt-2 md:mt-0">
              <Search size={18} />
              Buscar
            </button>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 md:py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <div>
            <h2 className="text-brand-accent tracking-[0.2em] uppercase text-xs font-semibold mb-3 md:mb-4">Portfólio Selecionado</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-light text-brand-text">Propriedades em Destaque</h3>
          </div>
          <Link to="/" className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest font-medium text-brand-text hover:text-brand-accent transition-colors border-b border-transparent hover:border-brand-accent pb-1">
            Ver todas <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROPERTIES.map((property, index) => (
            <motion.div 
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer bg-brand-surface border border-brand-border shadow-sm hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-500"
            >
              <Link to={`/imovel/${property.id}`} className="block">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute top-4 right-4 bg-brand-surface/95 backdrop-blur-sm px-4 py-2 shadow-sm border border-brand-border">
                    <span className="font-serif text-lg md:text-xl text-brand-text font-medium">{property.price}</span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-brand-accent text-xs md:text-sm">
                    <MapPin size={16} />
                    <span className="tracking-wider uppercase font-medium">{property.location}</span>
                  </div>
                  <h4 className="font-serif text-2xl md:text-3xl text-brand-text group-hover:text-brand-accent transition-colors">{property.title}</h4>
                  
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-brand-text-light text-xs md:text-sm border-t border-brand-border pt-4">
                    <div className="flex items-center gap-2">
                      <Bed size={18} className="text-brand-accent" />
                      <span>{property.beds} Suítes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={18} className="text-brand-accent" />
                      <span>{property.baths} Banhos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square size={18} className="text-brand-accent" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick About Section */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-brand-accent tracking-[0.2em] uppercase text-xs font-semibold mb-4 md:mb-6">Lisandra Diefenthaeler</h2>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight text-brand-text">
              Redefinindo o conceito de <span className="italic text-brand-accent">morar bem</span>.
            </h3>
            <p className="text-brand-text-light leading-relaxed mb-8 md:mb-10 font-light text-base md:text-lg">
              Especialista em imóveis de alto padrão, oferecemos uma curadoria focada em propriedades singulares que proporcionam não apenas luxo, mas um estilo de vida incomparável. Cada imóvel em nosso portfólio é selecionado com rigor e exclusividade.
            </p>
            <Link to="/sobre" className="self-start border-b border-brand-accent text-brand-accent pb-1 uppercase tracking-widest text-xs md:text-sm font-medium hover:text-brand-text hover:border-brand-text transition-colors flex items-center gap-2">
              Conheça nossa história <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative h-[40vh] md:h-[50vh] lg:h-auto order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Interior Design" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
