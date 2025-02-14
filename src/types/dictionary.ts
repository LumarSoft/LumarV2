// Define tus íconos en un objeto
import { Monitor, Zap, Box, Wand2 } from "lucide-react";

export const iconMap = {
  Monitor,
  Zap,
  Box,
  Wand2,
};

// Crea un tipo que contenga las claves del iconMap
export type IconNames = keyof typeof iconMap;

export interface Dictionary {
  Hero: HeroContent;
  About: AboutContent;
  Portfolio: PortfolioContent;
  Services: ServicesContent;
  Values: ValuesContent;
  Staff: AboutContent;
  Talk: TalkContent;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
  btncta: string;
}

export interface PortfolioContent {
  title: string;
  subtitle: string;
  projects: ProjectContent[];
}

export interface ProjectContent {
  title: string;
  description: string;
  image: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  subtitle2: string;
  services: ServiceContent[];
}

export interface ServiceContent {
  title: string;
  description: string;
  icon: IconNames; // Cambia aquí el tipo a IconNames
}

export interface TalkContent {
  title: string;
  subtitle: string;
  subtitle2: string;
  sendMessage: string;
  successMessage: string;
  errorSendMessage: string;
  errorMessage: string;
}

export interface ValuesContent {
  title: string;
  subtitle: string;
  description: string;
  values: string[];
  button: string;
  image: string;
}
