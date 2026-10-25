import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#111820] block mb-2 font-medium uppercase tracking-wider">Serviços residenciais</span>
          <h2 className="font-display text-33 md:text-41 text-[#111820]">Serviços para renovar e cuidar da sua casa</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#111820] uppercase tracking-wider block mb-2 font-medium">Reparos residenciais</span>
              <h3 className="font-display text-26 md:text-33 text-[#111820] mb-4">Pintura residencial com capricho</h3>
              <p className="font-body text-15 md:text-17 text-[#111820]/80 leading-relaxed mb-6">A equipe realiza pintura e reparos com atenção aos detalhes e ao acabamento.</p>
              <div className="p-4 bg-[#F5F7FA] border-l-4 border-[#092C91] mb-6 rounded-sm"><span className="font-body text-13 text-[#111820]/80"><strong className="text-[#111820] font-semibold">Antes do início:</strong> Converse com a equipe sobre o escopo e os prazos.</span></div>
              <Button href="/pintura-residencial/" variant="ghost" size="md">Conheça os serviços de pintura</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-repair.jpg" alt="Serviço residencial" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-pipes.jpg" alt="Reparo hidráulico" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#111820] uppercase tracking-wider block mb-2 font-medium">Reparos residenciais</span>
              <h3 className="font-display text-26 md:text-33 text-[#111820] mb-4">Reformas e reparos residenciais</h3>
              <p className="font-body text-15 md:text-17 text-[#111820]/80 leading-relaxed mb-6">Converse com a equipe sobre reformas e reparos para sua residência.</p>
              <div className="p-4 bg-[#F5F7FA] border-l-4 border-[#092C91] mb-6 rounded-sm"><span className="font-body text-13 text-[#111820]/80"><strong className="text-[#111820] font-semibold">Converse com a equipe:</strong> A equipe conversa com você sobre o serviço e as próximas etapas.</span></div>
              <Button href="/reformas-residenciais/" variant="ghost" size="md">Conheça os serviços</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
