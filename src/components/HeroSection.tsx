import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_INFO, STUDIO_METRICS } from '../data/studioData';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-background architectural-grain"
    >
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 md:pt-16 md:pb-16 lg:px-10 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Editorial Esquerda */}
          <div className="flex min-w-0 flex-col justify-between lg:col-span-6">
            <div className="space-y-6 md:space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.04, ease: 'easeOut' }}
                className="text-xs font-bold tracking-[0.18em] text-muted-foreground"
              >
                Arquitetura Autoral · Desenho Universal
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
                className="font-display text-[clamp(3rem,5vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.03em] text-foreground"
              >
                Onde a precisão da forma acolhe todas as vidas.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
                className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Jessica Pompeu Arquitetura Acessível projeta residências de alto padrão e espaços corporativos nos quais a conformidade técnica e a acessibilidade universal fluem com naturalidade absoluta.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex h-12 cursor-pointer items-center justify-center gap-3 bg-primary px-7 text-xs font-bold tracking-wider text-primary-foreground transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>Entrar em contato</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>

                <a
                  href="#portfolio"
                  className="inline-flex h-12 items-center justify-center border border-border bg-card px-6 text-xs font-bold tracking-wider text-foreground transition-colors duration-200 hover:border-secondary hover:bg-surface whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Explorar portfólio
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.38, ease: 'easeOut' }}
              className="mt-10 hidden border-t border-border-subtle pt-5 lg:flex lg:items-center lg:justify-between"
            >
              <span className="text-xs text-muted-foreground">
                Residencial · Corporativo · Adequação NBR 9050
              </span>
              <span className="h-px w-16 bg-secondary" aria-hidden="true" />
            </motion.div>
          </div>

          {/* Coluna Visual Direita */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[320px] overflow-hidden border border-border bg-dark-canvas shadow-architectural sm:min-h-[420px] lg:min-h-[540px]">
              {!imgError ? (
                <img
                  src={STUDIO_INFO.heroImage}
                  alt="Pavilhão residencial contemporâneo com deck contínuo sem desníveis em travertino e madeira freijó"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover lg:h-full"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-obsidian-gradient p-8 text-center text-dark-foreground">
                  <Building2 className="h-10 w-10 text-secondary" strokeWidth={1.25} />
                  <p className="font-display text-2xl">Pavilhão Serra e Mar</p>
                </div>
              )}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-canvas/85 via-dark-canvas/20 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-2 p-6 text-dark-foreground sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs text-secondary">Obra em Destaque</p>
                  <p className="font-display text-2xl font-medium tracking-tight">
                    Pavilhão Serra e Mar
                  </p>
                </div>
                <p className="text-xs text-dark-muted tabular-nums">
                  540 m² · Circulação Nível Zero
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Faixa Horizontal de Métricas Arquitetônicas (Full-width abaixo do split) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-12 grid grid-cols-2 border border-border bg-card shadow-card md:mt-16 lg:grid-cols-4"
        >
          {STUDIO_METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-between p-5 sm:p-7 ${
                index < STUDIO_METRICS.length - 1 ? 'border-b border-border lg:border-b-0 lg:border-r' : ''
              } ${index % 2 === 0 ? 'border-r border-border lg:border-r' : ''}`}
            >
              <div className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                <AnimatedCounter
                  target={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-sm font-bold text-foreground">
                  {metric.label}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {metric.context}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
