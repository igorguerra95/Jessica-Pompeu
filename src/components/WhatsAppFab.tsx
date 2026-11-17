import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const WhatsAppFab: React.FC = () => {
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappDigits}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com o escritório Jessica Pompeu Arquitetura Acessível.',
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar pelo WhatsApp no telefone ${STUDIO_INFO.phone}`}
      title={`WhatsApp: ${STUDIO_INFO.phone}`}
      className="group fixed bottom-5 right-5 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary bg-primary text-primary-foreground shadow-architectural transition-colors duration-200 hover:bg-secondary hover:text-secondary-foreground sm:h-13 sm:w-13 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        aria-hidden="true"
        className="animate-whatsapp-pulse pointer-events-none absolute inset-0 rounded-full border border-secondary"
      />
      <MessageCircle className="relative z-10 h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
    </a>
  );
};
