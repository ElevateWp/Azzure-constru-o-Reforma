import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'Quais serviços residenciais posso solicitar?',
    answer: 'A Azzure atende serviços de pintura, reformas residenciais, reparos gerais e hidráulicos, trincas, infiltrações e envernizamento de madeira.',
    relatedLink: { href: '/servicos/', label: 'Conheça nossos serviços →' },
  },
  {
    question: 'A Azzure atende na minha região?',
    answer: 'A Azzure Construção e Reforma atende em Palmeiras de Goiás e região.',
    relatedLink: { href: '/contato/', label: 'Fale com nossa equipe →' },
  },
  {
    question: 'Quais tipos de reparo são realizados?',
    answer: 'A equipe realiza reparos residenciais. Entre em contato para conversar sobre o serviço que você precisa.',
    relatedLink: { href: '/reparos-gerais/', label: 'Conheça os serviços →' },
  },
  {
    question: 'Como solicito um orçamento?',
    answer: `Ligue para ${CLINIC_INFO.contact.phone} ou envie uma mensagem pelo formulário de orçamento.`,
    relatedLink: { href: '/orcamento/', label: 'Solicitar orçamento →' },
  },
  {
    question: 'Como confirmo a disponibilidade?',
    answer: `Ligue para ${CLINIC_INFO.contact.phone} para conversar sobre seu imóvel e confirmar a disponibilidade.`,
    relatedLink: { href: '/contato/', label: 'Fale com nossa equipe →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Dúvidas frequentes
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Dúvidas sobre seu projeto
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                Saiba mais sobre serviços, orçamentos e disponibilidade de atendimento.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Ficou com alguma dúvida?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Ligue ou envie uma mensagem para nossa equipe. Será um prazer ajudar.
              </p>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Ligue para nossa equipe
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
