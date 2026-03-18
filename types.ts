export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  project?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  technologies: string[];
}

export enum Tab {
  OVERVIEW = 'Overview',
  EXPERIENCE = 'Experience',
  SKILLS = 'Skills',
  PROJECTS = 'Projects',
  TESTIMONIALS = 'Testimonials',
  RATINGS = 'Ratings',
  CONTACT = 'Contact'
}

export interface RatingCategory {
  id: string;
  name: string;
  description: string;
  rating: number;
  totalVotes: number;
}

export interface Testimonial {
  id: string;
  projectName: string;
  image: string;
  caption: string;
}