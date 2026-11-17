import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../data/studioData';
import type { ArchitecturalProject, ProjectCategory } from '../types';
import { Dialog } from './ui/Dialog';

interface PortfolioSectionProps {
  onContactWithProject: (projectType: string) => void;
}

const FILTER_OPTIONS: { id: ProjectCategory; label: string }[] = [
  { id: 'todos', label: 'Todos os Projetos' },
  { id: 'residencial', label: 'Residencial' },
  { id: 'comercial', label: 'Comercial' },
  { id: 'acessibilidade', label: 'Acessibilidade Integrada' },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onContactWithProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<ArchitecturalProject | null>(
    null,
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'todos') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const openProjectModal = (project: ArchitecturalProject) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const handlePrevImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1,
    );
  };

  const markImageError = (src: string) => {
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <section id="portfolio" className="border-b border-border bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Cabeçalho da Seção + Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col justify-between gap-8 border-b border-border pb-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground">
              Acervo Selecionado · Galeria de Obras
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Portfólio Autoral e Espaços Inclusivos
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Cada projeto equilibra materialidade nobre, luminotécnica precisa e autonomia irrestrita, provando que o desenho universal eleva a qualidade espacial para todos os usuários.
            </p>
          </div>

          {/* Controles de Filtro Interativos */}
          <div
            role="tablist"
            aria-label="Filtrar projetos por tipologia"
            className="flex flex-wrap items-center gap-1.5 border border-border bg-card p-1.5"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeCategory === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(option.id)}
                  className={`min-h-10 cursor-pointer px-4 py-2 text-xs font-bold tracking-wide transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid Editorial Assimétrico (12 colunas) */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const isHeroSpan =
              activeCategory === 'todos' && index === 0
                ? 'lg:col-span-7'
                : activeCategory === 'todos' && index === 1
                  ? 'lg:col-span-5'
                  : 'lg:col-span-6';

            const aspectClass =
              activeCategory === 'todos' && index === 0
                ? 'aspect-[16/10]'
                : 'aspect-[4/3]';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: Math.min(index * 0.08, 0.24),
                  ease: 'easeOut',
                }}
                className={`group flex flex-col border border-border bg-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${isHeroSpan}`}
              >
                <button
                  type="button"
                  onClick={() => openProjectModal(project)}
                  aria-label={`Abrir galeria de fotos do projeto ${project.title}`}
                  className="relative w-full cursor-pointer overflow-hidden bg-dark-canvas text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className={`w-full overflow-hidden ${aspectClass}`}>
                    {!failedImages[project.coverImage] ? (
                      <img
                        src={project.coverImage}
                        alt={`${project.title} — ${project.categoryLabel} em ${project.location}`}
                        referrerPolicy="no-referrer"
                        onError={() => markImageError(project.coverImage)}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-obsidian-gradient p-6 text-dark-foreground">
                        <Building2 className="h-8 w-8 text-secondary" strokeWidth={1.25} />
                        <span className="font-display text-xl">{project.title}</span>
                      </div>
                    )}
                  </div>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-canvas/70 via-transparent to-transparent opacity-80 transition-opacity duration-200 group-hover:opacity-95"
                  />

                  <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-dark-foreground/25 bg-dark-canvas/75 text-dark-foreground backdrop-blur-xs transition-colors group-hover:border-secondary group-hover:text-secondary">
                    <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 text-xs text-dark-foreground">
                    <span>Ver galeria de fotos</span>
                    <span className="tabular-nums">
                      {project.gallery.length} registros
                    </span>
                  </div>
                </button>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div className="space-y-3">
                    {/* Metadados tipográficos limpos (sem pílulas) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground tabular-nums">
                      <span className="font-bold text-foreground">
                        {project.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.area}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-5">
                    <button
                      type="button"
                      onClick={() => openProjectModal(project)}
                      className="inline-flex min-h-10 cursor-pointer items-center gap-2 text-xs font-bold tracking-wider text-foreground transition-colors hover:text-secondary whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span>Abrir dossiê e galeria</span>
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </button>

                    <span className="text-xs text-muted-foreground tabular-nums">
                      {project.code}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Chamada discreta pós-portfólio */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="space-y-1">
            <h3 className="font-display text-2xl font-medium text-foreground">
              Deseja viabilizar um projeto residencial ou comercial com acessibilidade nativa?
            </h3>
            <p className="text-sm text-muted-foreground">
              Apresente seu terreno, imóvel ou programa de necessidades para uma avaliação técnica inicial.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onContactWithProject('Residencial')}
            className="inline-flex h-12 cursor-pointer items-center justify-center bg-primary px-7 text-xs font-bold tracking-wider text-primary-foreground transition-colors duration-200 hover:bg-secondary hover:text-secondary-foreground whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Entrar em contato
          </button>
        </div>
      </div>

      {/* Modal Lightbox — Galeria de Fotos e Especificações Técnicas */}
      <Dialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Galeria de Fotos */}
            <div className="bg-dark-canvas lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={selectedProject.gallery[activeImageIndex].image}
                  alt={selectedProject.gallery[activeImageIndex].caption}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />

                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      aria-label="Imagem anterior"
                      className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-dark-foreground/25 bg-dark-canvas/75 text-dark-foreground transition-colors hover:border-secondary hover:text-secondary"
                    >
                      <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      aria-label="Próxima imagem"
                      className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-dark-foreground/25 bg-dark-canvas/75 text-dark-foreground transition-colors hover:border-secondary hover:text-secondary"
                    >
                      <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-3 border-t border-dark-border p-4 text-dark-foreground sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-dark-muted">
                  {selectedProject.gallery[activeImageIndex].caption}
                </p>
                <div className="flex shrink-0 items-center gap-2">
                  {selectedProject.gallery.map((item, idx) => (
                    <button
                      key={item.caption}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Selecionar foto ${idx + 1}`}
                      className={`h-11 w-14 cursor-pointer overflow-hidden border transition-opacity ${
                        idx === activeImageIndex
                          ? 'border-secondary opacity-100'
                          : 'border-dark-border opacity-55 hover:opacity-90'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ficha Técnica e Ação */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground tabular-nums">
                    <span className="font-bold text-foreground">
                      {selectedProject.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.area}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.year}</span>
                  </div>
                  <h3 className="font-display text-3xl font-medium tracking-tight text-foreground">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-2 border-t border-border-subtle pt-4">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Memorial Descritivo
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="space-y-2 border-t border-border-subtle pt-4">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Soluções de Acessibilidade Integrada
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.accessibilitySolution}
                  </p>
                </div>

                <div className="space-y-2 border-t border-border-subtle pt-4">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Materialidade Aplicada
                  </p>
                  <p className="text-sm text-foreground">
                    {selectedProject.materials.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <button
                  type="button"
                  onClick={() => {
                    const categoryLabel = selectedProject.categoryLabel;
                    setSelectedProject(null);
                    onContactWithProject(categoryLabel);
                  }}
                  className="flex h-12 w-full cursor-pointer items-center justify-center bg-primary px-6 text-xs font-bold tracking-wider text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground whitespace-nowrap"
                >
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
};
