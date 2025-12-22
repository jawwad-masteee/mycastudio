export interface Project {
  id: number;
  title: string;
  category: string;
  location?: string;
  image: string;
  year: string;
  description?: string; // Part 1
  descriptionPart2?: string; // Part 2
  // New fields for Case Study Page
  slug?: string;
  gallery?: string[]; // Images for Hero Slider
  client?: string;
  services?: string[];
  challenge?: string;
  solution?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  author?: string;
  content?: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
  isComingSoon?: boolean;
}

export enum PageState {
  LOADING,
  READY
}