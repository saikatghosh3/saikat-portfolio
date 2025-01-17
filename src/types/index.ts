export type Theme = 'light' | 'dark';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}
export interface Education {
  institution: string;
  degree: string;
  passingYear: string; 
  description: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}