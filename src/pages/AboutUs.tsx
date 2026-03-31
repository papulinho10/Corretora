import React from 'react';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="w-full pt-24 md:pt-32 pb-20 bg-brand-bg">
      <div className="max-w-5xl mx-auto px-4 md:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-accent tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-4"
          >
            Nossa História
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-brand-text font-light leading-tight"
          >
            Tradição, Exclusividade e <br/><span className="italic text-brand-accent">Excelência</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden bg-brand-surface border border-brand-border p-2 shadow-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Office" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-brand-text-light font-light text-base md:text-lg leading-relaxed"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-8">A Arte de Viver Bem</h2>
            <p>
              Fundada com o propósito de redefinir o mercado imobiliário de alto padrão, nossa corretora não apenas vende imóveis, mas realiza a curadoria de estilos de vida. Entendemos que uma casa é o reflexo de quem você é e de suas maiores conquistas.
            </p>
            <p>
              Nossa equipe é formada por especialistas discretos, altamente capacitados e com profundo conhecimento do mercado de luxo. Trabalhamos com um portfólio restrito e selecionado a dedo, garantindo que cada propriedade oferecida atenda aos mais rigorosos padrões de qualidade, design e localização.
            </p>
            <p>
              Acreditamos que o luxo verdadeiro reside nos detalhes, no atendimento personalizado e na capacidade de transformar o complexo processo de aquisição imobiliária em uma experiência fluida, segura e memorável.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Exclusividade", desc: "Acesso a propriedades off-market e oportunidades únicas no mercado." },
            { title: "Discrição", desc: "Sigilo absoluto em todas as etapas da negociação para nossos clientes." },
            { title: "Excelência", desc: "Atendimento impecável e assessoria completa, do início ao fim." }
          ].map((val, i) => (
            <div key={i} className="bg-brand-surface p-10 border border-brand-border shadow-sm">
              <h3 className="font-serif text-2xl text-brand-accent mb-4">{val.title}</h3>
              <p className="text-brand-text-light font-light text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
