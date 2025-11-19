export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  role: string;
  category: 'LLM' | 'Computer Vision' | 'Data Science' | 'Agentic AI' | 'LLM Core' | 'MLOps';
  blogContent?: string; // HTML content for the blog post
  githubUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export enum ChatState {
  CLOSED,
  MINIMIZED,
  OPEN
}