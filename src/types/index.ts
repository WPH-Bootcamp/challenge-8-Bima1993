export type ButtonVariant = "primary" | "secondary" | "outline";

export type ButtonSize = "sm" | "md" | "lg";

export type ThemeMode = "dark" | "light";

export type ProcessStepSide = "left" | "right";

export type ModalStatus = "success" | "failed";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
  side: ProcessStepSide;
}

export interface IndustryItem {
  id: string;
  label: string;
  description: string;
  image: string;
  alt: string;
}

export interface PortfolioItem {
  category: string;
  title: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
