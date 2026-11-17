import React, { useState } from 'react';
import { Compass, User } from 'lucide-react';
import { motion } from 'motion/react';
import { PROCESS_STEPS, STUDIO_INFO } from '../data/studioData';

interface AboutSectionProps {
  onContactClick: () => void;
}

const STUDIO_PILLARS = [
  {
    title: 'Estética Sem Concessões',
    detail:
      'Rampas integradas ao paisagismo, vãos generosos e alturas ergonômicas ocultas na própria linguagem do mobiliário e da arquitetura.',
  },
  {
    title: 'Rigor Normativo NBR 9050',
    detail:
      'Concepção integral alinhada às normas brasileiras de acessibilidade para aprovações municipais, clínicas, corporações e residências definitivas.',
  },
  {
    title: 'Longevidade Espacial',
    detail:
      'Projetamos imóveis preparados para atravessar décadas com segurança, conforto sensorial e valorização patrimonial contínua.',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const [portraitError, setPortraitError] = useState(false);

  return (
    <section id="sobre" className="border-b border-border bg-background">
      {/* Bloco 1: Visão Estética e Autoria */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Retrato Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden border border-border bg-card shadow-architectural">
              <div className="aspect-[3/4] w-full overflow-hidden bg-dark-canvas">
                {!portraitError ? (
                  <img
                    src={STUDIO_INFO.architectPortrait}
                    alt="Arquiteta Jessica Pompeu no estúdio ao lado de amostras de pedra natural e plantas técnicas"
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-obsidian-gradient p-8 text-dark-foreground">
                    <User className="h-10 w-10 text-secondary" strokeWidth={1.25} />
                    <span className="font-display text-2xl">Jessica Pompeu</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-border px-6 py-4">
                <div>
                  <p className="font-display text-xl font-medium text-foreground">
                    Jessica Pompeu
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Arquiteta e Urbanista · Especialista em Desenho Universal
                  </p>
                </div>
                <Compass className="h-5 w-5 shrink-0 text-secondary" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Manifesto e Pilares */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="space-y-8 lg:col-span-7"
          >
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground">
                Sobre o Escritório · Visão Estética
              </p>
              <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-tight text-foreground sm:text-5xl">
                A verdadeira sofisticação arquitetônica é aquela que não exclui ninguém.
              </h2>
              <div className="h-px w-20 bg-secondary" aria-hidden="true" />
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                À frente do escritório <strong className="font-bold text-foreground">Jessica Pompeu Arquitetura Acessível</strong>, conduzimos projetos residenciais, clínicas e espaços comerciais onde o desenho universal deixa de ser um requisito posterior para se tornar a própria matriz da beleza construtiva.
              </p>
              <p>
                Cada traço nasce do equilíbrio entre proporção clássica, materiais naturais brasileiros — como freijó, ardósia e travertino — e soluções técnicas invisíveis que garantem autonomia plena em todas as etapas da vida.
              </p>
            </div>

            {/* Pilares separados por divisores hairline (sem caixas aninhadas) */}
            <div className="divide-y divide-border border-y border-border">
              {STUDIO_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="flex items-baseline gap-3 sm:col-span-5">
                    <span className="font-display text-lg text-secondary tabular-nums">
                      0{idx + 1}.
                    </span>
                    <h3 className="font-display text-xl font-medium text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bloco 2: Processo Criativo em Canvas Preto Elegante (#0F172A) */}
      <div className="bg-obsidian-gradient py-16 text-dark-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-6 border-b border-dark-border pb-10 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-bold tracking-[0.18em] text-secondary">
                Metodologia · Processo Criativo
              </p>
              <h2 className="font-display text-4xl font-medium tracking-tight text-dark-foreground sm:text-5xl">
                Do primeiro estudo à obra entregue com precisão
              </h2>
            </div>

            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex h-12 cursor-pointer items-center justify-center bg-secondary px-7 text-xs font-bold tracking-wider text-secondary-foreground transition-opacity duration-200 hover:opacity-90 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              Entrar em contato
            </button>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className="flex flex-col justify-between border border-dark-border bg-dark-surface/65 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-secondary/60 sm:p-7"
              >
                <div className="space-y-4">
                  <span className="font-display text-3xl font-medium text-secondary tabular-nums">
                    {step.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl font-medium text-dark-foreground">
                      {step.title}
                    </h3>
                    <p className="text-xs text-secondary/90">{step.subtitle}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-dark-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
