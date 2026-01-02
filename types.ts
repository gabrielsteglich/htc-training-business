import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  submenu?: NavItem[];
}

export interface Course {
  id: string;
  title: string;
  category: 'CRM' | 'AVSEC' | 'DGR' | 'Corporate';
  description: string;
  audience: string;
  icon: LucideIcon;
  delivery: ('Online' | 'In-Person' | 'Hybrid')[];
  // New detailed fields
  duration: string;
  certification: string;
  requirements?: string;
  syllabus: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}