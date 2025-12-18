export interface Project {
  id: number;
  title: string;
  category: string;
  location?: string;
  image: string;
  year: string;
  description?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
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