export type ProjectCategory = 'todos' | 'residencial' | 'comercial' | 'acessibilidade';

export interface ProjectGalleryItem {
  image: string;
  caption: string;
}

export interface ArchitecturalProject {
  id: string;
  code: string;
  title: string;
  category: Exclude<ProjectCategory, 'todos'>;
  categoryLabel: string;
  location: string;
  area: string;
  year: string;
  featured?: boolean;
  coverImage: string;
  gallery: ProjectGalleryItem[];
  summary: string;
  accessibilitySolution: string;
  materials: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface StudioMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}
