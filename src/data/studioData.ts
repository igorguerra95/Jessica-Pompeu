import heroPavilionImg from '../assets/images/hero_architecture_pavilion_1794943047998.jpg';
import casaJardinsImg from '../assets/images/project_casa_jardins_1794943048749.jpg';
import clinicaPrimeImg from '../assets/images/project_clinica_prime_1794943049451.jpg';
import loftHorizonteImg from '../assets/images/project_loft_horizonte_1794943049407.jpg';
import architectPortraitImg from '../assets/images/architect_jessica_portrait_1794943050675.jpg';

import type {
  ArchitecturalProject,
  ProcessStep,
  StudioMetric,
} from '../types';

export const STUDIO_INFO = {
  brandShort: 'Jessica Pompeu',
  brandFull: 'Jessica Pompeu Arquitetura Acessível',
  tagline: 'Onde a rigorosidade da forma encontra a liberdade do habitar.',
  address: 'SEU ENDEREÇO AQUI',
  phone: '(00) 00000-0000',
  whatsappDigits: '5500000000000',
  hours: 'Não informado',
  mapsUrl:
    'https://maps.google.com/?cid=10789693687204539323&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  heroImage: heroPavilionImg,
  architectPortrait: architectPortraitImg,
} as const;

export const STUDIO_METRICS: StudioMetric[] = [
  {
    value: 120,
    prefix: '+',
    label: 'Projetos Autorais',
    context: 'Residências e espaços corporativos entregues',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Conformidade NBR 9050',
    context: 'Rigor técnico integrado à linguagem estética',
  },
  {
    value: 14,
    label: 'Anos de Prática',
    context: 'Experiência em arquitetura e desenho universal',
  },
  {
    value: 42,
    suffix: ' mil m²',
    label: 'Área Projetada',
    context: 'Soluções espaciais executadas em todo o país',
  },
];

export const PORTFOLIO_PROJECTS: ArchitecturalProject[] = [
  {
    id: 'pavilhao-serra-mar',
    code: 'Projeto 01',
    title: 'Pavilhão Serra e Mar',
    category: 'residencial',
    categoryLabel: 'Residencial',
    location: 'Litoral Norte, SP',
    area: '540 m²',
    year: '2025',
    featured: true,
    coverImage: heroPavilionImg,
    gallery: [
      {
        image: heroPavilionImg,
        caption: 'Fachada integrada ao jardim em nível único com travertino antiderrapante.',
      },
      {
        image: casaJardinsImg,
        caption: 'Estar social com vão livre superior a 1,50 m e marcenaria ergonômica.',
      },
    ],
    summary:
      'Residência térrea implantada em desnível suave por meio de rampas paisagísticas imperceptíveis, substituindo degraus tradicionais por transições contínuas entre concreto aparente, madeira freijó e pedra natural.',
    accessibilitySolution:
      'Circulação integral livre de soleiras, piscina com borda de transferência integrada ao deck de travertino bruto e esquadrias motorizadas com trilhos embutidos no piso.',
    materials: ['Concreto Ripado', 'Madeira Freijó', 'Travertino Romano', 'Vidro Solar'],
  },
  {
    id: 'casa-jardins',
    code: 'Projeto 02',
    title: 'Residência Jardins',
    category: 'acessibilidade',
    categoryLabel: 'Acessibilidade Integrada',
    location: 'Jardins, SP',
    area: '380 m²',
    year: '2025',
    coverImage: casaJardinsImg,
    gallery: [
      {
        image: casaJardinsImg,
        caption: 'Sala de estar com pisos nivelados e pontos de alcance universal.',
      },
      {
        image: heroPavilionImg,
        caption: 'Abertura total da área social para o terraço externo nivelado.',
      },
    ],
    summary:
      'Reforma estrutural completa de residência familiar concebida sob o princípio do desenho universal discreto, preservando a sofisticação da nogueira escura e dos metais em latão escovado.',
    accessibilitySolution:
      'Rotas de giro de 1,50 m em todos os ambientes sociais, interruptores e automação residencial posicionados a 1,00 m do piso e banheiros com barras estruturais personalizadas em latão.',
    materials: ['Nogueira Natural', 'Travertino Fosco', 'Latão Escovado', 'Linho Cru'],
  },
  {
    id: 'clinica-aurora',
    code: 'Projeto 03',
    title: 'Instituto Clínico Aurora',
    category: 'comercial',
    categoryLabel: 'Comercial',
    location: 'Itaim Bibi, SP',
    area: '460 m²',
    year: '2024',
    coverImage: clinicaPrimeImg,
    gallery: [
      {
        image: clinicaPrimeImg,
        caption: 'Recepção em ardósia negra com módulo rebaixado para atendimento acessível.',
      },
      {
        image: loftHorizonteImg,
        caption: 'Núcleo de circulação vertical envidraçado e sinalização tátil.',
      },
    ],
    summary:
      'Espaço clínico e galeria de bem-estar projetado para acolher pacientes com total autonomia, combinando painéis acústicos ripados em carvalho com iluminação linear indireta e balcão monolítico.',
    accessibilitySolution:
      'Balcão de recepção em ardósia com mesa de aproximação frontal a 75 cm de altura, sinalização em braile gravada em latão e acústica calibrada para conforto sensorial.',
    materials: ['Ardósia Negra', 'Carvalho Ripado', 'Perfis em Dourado Fosco', 'Piso Vinílico Acústico'],
  },
  {
    id: 'loft-horizonte',
    code: 'Projeto 04',
    title: 'Cobertura Horizonte',
    category: 'acessibilidade',
    categoryLabel: 'Acessibilidade Integrada',
    location: 'Higienópolis, SP',
    area: '310 m²',
    year: '2024',
    coverImage: loftHorizonteImg,
    gallery: [
      {
        image: loftHorizonteImg,
        caption: 'Elevador panorâmico em aço dourado integrado à arquitetura da escada.',
      },
      {
        image: casaJardinsImg,
        caption: 'Pavimento social com marcenaria sob medida e vãos amplos.',
      },
    ],
    summary:
      'Duplex urbano onde a mobilidade vertical tornou-se o elemento escultórico central do projeto: um elevador panorâmico revestido em metal dourado acetinado dialoga com a escada helicoidal de concreto.',
    accessibilitySolution:
      'Plataforma elevatória silenciosa de alta precisão com portas automáticas, corrimãos duplos contínuos na escada e pavimento superior totalmente adaptado para longa permanência.',
    materials: ['Aço Inox Dourado', 'Concreto Moldado', 'Ardósia Escovada', 'Couro Natural'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01.',
    title: 'Diagnóstico Espacial e Humano',
    subtitle: 'Escuta clínica e levantamento técnico',
    description:
      'Mapeamos hábitos, demandas de autonomia física e condicionantes construtivas do imóvel para fundamentar cada decisão projetual em dados reais.',
  },
  {
    number: '02.',
    title: 'Partido Arquitetônico',
    subtitle: 'Proporção, luz e circulação fluida',
    description:
      'Desenvolvemos a volumetria e os fluxos principais garantindo que os requisitos de acessibilidade nasçam como estética pura, jamais como adaptação visível.',
  },
  {
    number: '03.',
    title: 'Executivo e Norma NBR 9050',
    subtitle: 'Detalhamento milimétrico de execução',
    description:
      'Especificamos pisos antiderrapantes, inclinações exatas, alturas ergonômicas de marcenaria, automação e luminotécnica com rigor documental completo.',
  },
  {
    number: '04.',
    title: 'Curadoria e Gestão de Obra',
    subtitle: 'Fidelidade absoluta do desenho à entrega',
    description:
      'Acompanhamos fornecedores, execução de acabamentos nobres e testes finais de mobilidade para assegurar desempenho duradouro e padrão impecável.',
  },
];
