import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { Sheet } from './ui/Sheet';

interface HeaderProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileContact = () => {
    setMobileMenuOpen(false);
    onContactClick();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 md:h-18 lg:px-10">
        {/* Zona 1: Wordmark em linha única */}
        <a
          href="#inicio"
          className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80 whitespace-nowrap shrink-0 sm:text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {STUDIO_INFO.brandShort}
        </a>

        {/* Zona 2: Links de navegação concisos */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm font-normal tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-secondary transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação primária única + gatilho do drawer mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onContactClick}
            className="hidden h-10 cursor-pointer items-center justify-center border border-primary bg-primary px-5 text-xs font-bold tracking-wider text-primary-foreground transition-all duration-200 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground whitespace-nowrap shrink-0 md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Entrar em contato
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-border bg-card text-foreground transition-colors hover:border-secondary md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Menu Mobile (Sheet / Drawer) */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <div className="flex h-full flex-col justify-between pt-8">
          <div>
            <p className="font-display text-2xl font-medium tracking-tight text-dark-foreground">
              {STUDIO_INFO.brandFull}
            </p>
            <div className="my-6 h-px w-14 bg-secondary" />
            <nav
              aria-label="Navegação mobile"
              className="flex flex-col divide-y divide-dark-border"
            >
              {NAV_LINKS.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNav(item.href);
                  }}
                  className="flex min-h-12 items-center justify-between py-3.5 text-base font-normal text-dark-foreground transition-colors hover:text-secondary"
                >
                  <span>{item.label}</span>
                  <span className="font-display text-sm text-secondary tabular-nums">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-5 border-t border-dark-border pt-6">
            <div className="space-y-1 text-xs text-dark-muted">
              <p>Atendimento exclusivo</p>
              <p className="text-sm text-dark-foreground tabular-nums">
                {STUDIO_INFO.phone}
              </p>
            </div>
            <button
              type="button"
              onClick={handleMobileContact}
              className="flex h-12 w-full cursor-pointer items-center justify-center bg-secondary px-6 text-xs font-bold tracking-wider text-secondary-foreground transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              Entrar em contato
            </button>
          </div>
        </div>
      </Sheet>
    </header>
  );
};
