// Tipos globais do projeto

export interface NavigationItem {
  href: string;
  label: string;
  id: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ScrollProgress {
  progress: number;
}

export interface MobileMenuState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

// Tipos para Analytics
export interface GtagFunction {
  (...args: unknown[]): void;
  q?: unknown[][];
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}
