import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const INSTAGRAM_URL = "https://www.instagram.com/lisandradiefenthaeler/";
const WHATSAPP_URL = "https://wa.me/5511999999999"; // Replace with real number

export default function Broker() {
  return (
    <div className="w-full pt-24 md:pt-32 pb-20 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-brand-surface border border-brand-border p-3 shadow-md relative z-10">
              {/* Placeholder for Broker Photo - Replace with actual photo URL */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Lisandra Diefenthaeler" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-accent z-0 hidden md:block"></div>
          </motion.div>

          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-brand-accent tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-3">A Corretora</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text font-light mb-2">Lisandra Diefenthaeler</h1>
              <p className="text-brand-text-light text-lg italic">Especialista em Imóveis de Luxo</p>
            </div>

            <div className="space-y-6 text-brand-text-light font-light text-base md:text-lg leading-relaxed">
              <p>
                Com uma trajetória marcada pela excelência e dedicação, Lisandra Diefenthaeler consolidou-se como uma das principais referências no mercado imobiliário de alto padrão.
              </p>
              <p>
                Sua abordagem vai muito além da simples intermediação imobiliária. Lisandra atua como uma verdadeira consultora de estilo de vida, compreendendo profundamente as necessidades, desejos e o perfil de cada cliente para encontrar a propriedade que seja o cenário perfeito para suas vidas.
              </p>
              <p>
                Reconhecida por sua discrição, ética inabalável e uma rede de contatos exclusiva, ela oferece acesso a propriedades singulares, muitas vezes não listadas no mercado tradicional (off-market).
              </p>
            </div>

            <div className="pt-8 border-t border-brand-border flex flex-wrap gap-4">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-accent text-brand-bg px-8 py-4 uppercase tracking-widest text-xs md:text-sm font-bold hover:bg-brand-accent-hover transition-colors flex items-center gap-2 shadow-sm"
              >
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-surface text-brand-text border border-brand-border px-8 py-4 uppercase tracking-widest text-xs md:text-sm font-medium hover:border-brand-accent hover:text-brand-accent transition-colors flex items-center gap-2 shadow-sm"
              >
                <Instagram size={18} /> Seguir no Instagram
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
