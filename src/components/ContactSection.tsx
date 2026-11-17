import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_INFO } from '../data/studioData';
import type { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedProjectType?: string;
  nameInputRef: React.RefObject<HTMLInputElement | null>;
}

const PROJECT_TYPES = [
  'Residencial',
  'Comercial',
  'Acessibilidade Integrada',
  'Consultoria NBR 9050',
];

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedProjectType,
  nameInputRef,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residencial',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProjectType && PROJECT_TYPES.includes(preselectedProjectType)) {
      setFormData((prev) => ({ ...prev, projectType: preselectedProjectType }));
    }
  }, [preselectedProjectType]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (formData.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo para o atendimento.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp com DDD.';
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message =
        'Descreva brevemente o imóvel, metragem estimada ou necessidade.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Residencial',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  const whatsappDirectUrl = `https://wa.me/${STUDIO_INFO.whatsappDigits}?text=${encodeURIComponent(
    `Olá, Jessica Pompeu Arquitetura Acessível. Gostaria de iniciar um atendimento para projeto ${formData.projectType}.`,
  )}`;

  return (
    <section id="contato" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna Esquerda: Informações Institucionais */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between space-y-10 lg:col-span-5"
          >
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground">
                Contato · Agendamento Técnico
              </p>
              <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-tight text-foreground sm:text-5xl">
                Inicie a conversa sobre o seu projeto
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Atendemos estudos preliminares residenciais, adequações corporativas e consultorias especializadas em desenho universal com atendimento personalizado.
              </p>
            </div>

            <div className="divide-y divide-border border-y border-border">
              <div className="flex items-start gap-4 py-5">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                  strokeWidth={1.5}
                />
                <div className="space-y-1">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Endereço
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {STUDIO_INFO.address}
                  </p>
                  <a
                    href={STUDIO_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 pt-1 text-xs font-bold text-foreground underline decoration-secondary underline-offset-4 transition-colors hover:text-secondary"
                  >
                    <span>Ver localização no Google Maps</span>
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                  strokeWidth={1.5}
                />
                <div className="space-y-1">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Telefone e WhatsApp
                  </p>
                  <a
                    href={`tel:${STUDIO_INFO.whatsappDigits}`}
                    className="block text-sm font-medium text-foreground tabular-nums transition-colors hover:text-secondary"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                  strokeWidth={1.5}
                />
                <div className="space-y-1">
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Horário de Atendimento
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {STUDIO_INFO.hours}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário Minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="border border-border bg-card p-6 shadow-card sm:p-10 lg:col-span-7"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="space-y-1 border-b border-border-subtle pb-4">
                  <h3 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
                    Solicitação de Atendimento
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Preencha os dados abaixo para retornarmos com disponibilidade de agenda.
                  </p>
                </div>

                {/* Seletor de Tipologia */}
                <div className="space-y-2">
                  <span className="block text-xs font-bold tracking-wider text-foreground">
                    Tipologia do Projeto
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const active = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, projectType: type }))
                          }
                          className={`min-h-10 cursor-pointer border px-4 py-2 text-xs font-bold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            active
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border bg-background text-muted-foreground hover:border-secondary hover:text-foreground'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5 sm:col-span-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold tracking-wider text-foreground"
                    >
                      Nome Completo
                    </label>
                    <input
                      ref={nameInputRef}
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Ex.: Mariana Albuquerque"
                      aria-invalid={Boolean(errors.name)}
                      className="h-12 w-full border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold tracking-wider text-foreground"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="nome@empresa.com.br"
                      aria-invalid={Boolean(errors.email)}
                      className="h-12 w-full border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold tracking-wider text-foreground"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const formatted = formatBrazilPhone(e.target.value);
                        setFormData((prev) => ({ ...prev, phone: formatted }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="(00) 00000-0000"
                      aria-invalid={Boolean(errors.phone)}
                      className="h-12 w-full border border-border bg-background px-4 text-sm text-foreground tabular-nums placeholder:text-muted-foreground/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold tracking-wider text-foreground"
                    >
                      Briefing Inicial
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message)
                          setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Descreva a cidade, tipologia do imóvel, metragem aproximada e objetivos de acessibilidade ou reforma."
                      aria-invalid={Boolean(errors.message)}
                      className="w-full resize-y border border-border bg-background p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex h-12 cursor-pointer items-center justify-center bg-primary px-8 text-xs font-bold tracking-wider text-primary-foreground transition-colors duration-200 hover:bg-secondary hover:text-secondary-foreground whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Entrar em contato
                  </button>
                  <span className="text-xs text-muted-foreground">
                    Atendimento formal e confidencial.
                  </span>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-start justify-center space-y-6 py-8">
                <div className="inline-flex h-12 w-12 items-center justify-center border border-secondary bg-accent-soft text-foreground">
                  <CheckCircle2 className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-3xl font-medium text-foreground">
                    Solicitação registrada com sucesso
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                    Agradecemos o contato, <strong className="text-foreground">{formData.name}</strong>. Seu briefing para o projeto <strong className="text-foreground">{formData.projectType}</strong> foi estruturado para retorno pelo telefone <span className="tabular-nums">{formData.phone}</span> ou e-mail <span className="text-foreground">{formData.email}</span>.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 text-xs font-bold tracking-wider text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground whitespace-nowrap"
                  >
                    <span>Continuar pelo WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex h-12 cursor-pointer items-center justify-center border border-border bg-background px-6 text-xs font-bold tracking-wider text-foreground transition-colors hover:border-secondary whitespace-nowrap"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
