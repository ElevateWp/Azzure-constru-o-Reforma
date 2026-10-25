import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const REASONS = [
  {
    title: 'Conversa clara',
    description: 'Converse diretamente com a equipe sobre o serviço que você precisa.',
  },
  {
    title: 'Alinhamento do escopo',
    description: 'Alinhe o escopo e os prazos do serviço para seu imóvel.',
  },
  {
    title: 'Planejamento das etapas',
    description: 'Converse sobre o serviço, o orçamento e as próximas etapas do seu projeto.',
  },
  {
    title: 'Serviços para sua casa',
    description: 'Converse com a equipe sobre pintura personalizada, reformas residenciais, reparos hidráulicos e gerais, trincas, infiltrações e envernizamento de madeira.',
  },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columns 1–6: Left-Aligned Editorial Reasons List */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Nosso jeito de trabalhar
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Serviços para renovar e cuidar da sua casa
              </h2>

              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll
                    key={reason.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0"
                  >
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Imagens de serviços residenciais */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large image */}
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image
                    src="/images/plumbing-technician.jpg"
                    alt="Serviço residencial"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#111820]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                    Pintura e reformas residenciais
                  </div>
                </div>
                {/* Additional reparos hidráulicos imagery */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/plumbing-repair.jpg"
                    alt="Projeto residencial"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Projeto residencial detail */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-[#F5F7FA] overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/plumbing-pipes.jpg"
                    alt="Reparos e acabamentos"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#111820]/80 text-paper font-body text-12 px-3 py-2 text-center">
                     Reparos residenciais
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
