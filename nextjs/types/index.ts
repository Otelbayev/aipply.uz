import { ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode;
}

export interface Showcase {
  title: string;
  desc: string;
  keywords: string;
  icon: string;
}

export interface Statistics {
  succes: string;
  working: string;
  teching: string;
  end: string;
  price: string;
  desc: string;
  aiDesc: string;
  computerTitle: string;
  ai: string[];
  processor: string;
  memory: string;
  ram: string;
  videoCard: string | null;
}

export interface About {
  name: string;
  img: string;
  title: string;
  desc: string;
  projects: string[];
}

export interface ThenItem {
  id: number;
  icon: string;
  title: string;
}

export interface ModuleBody {
  id: number;
  title: string;
}

export interface Module {
  id: string;
  title: string;
  body: ModuleBody[];
}

export interface Course {
  courseImg: string;
  path: string;
  name: string;
  month: number;
  keywords: string;
  showcase: Showcase;
  statistics: Statistics;
  about: About;
  then: ThenItem[];
  module: Module[];
  project: string[];
  results: string[];
}
