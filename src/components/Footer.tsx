import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

const FOOTER_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-dark-border bg-dark-canvas text-dark-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-dark-border pb-10 md:grid-cols-12">
          <div className="space-y-3 md:col-span-5">
            <p className="font-display text-2xl font-medium tracking-tight text-dark-foreground sm:text-3xl">
              {STUDIO_INFO.brandFull}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-dark-muted">
              Arquitetura residencial e comercial concebida sob rigor técnico, materialidade nobre e desenho universal.
            </p>
          </div>

          <div className="space-y-3 md:col-span-3">
            <p className="text-xs font-bold tracking-wider text-secondary">
              Navegação
            </p>
            <ul className="space-y-2.5 text-sm text-dark-muted">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-dark-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 md:col-span-4">
            <p className="text-xs font-bold tracking-wider text-secondary">
              Atendimento e Localização
            </p>
            <div className="space-y-2 text-sm text-dark-muted">
              <p>{STUDIO_INFO.address}</p>
              <p className="tabular-nums">{STUDIO_INFO.phone}</p>
              <p>Horário: {STUDIO_INFO.hours}</p>
              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pt-1 text-xs font-bold text-dark-foreground underline decoration-secondary underline-offset-4 transition-colors hover:text-secondary"
              >
                <span>Localização no Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-6 text-xs text-dark-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {STUDIO_INFO.brandFull}. Todos os direitos reservados.
          </p>
          <p>Desenho Universal · Conformidade NBR 9050</p>
        </div>
      </div>
    </footer>
  );
};
