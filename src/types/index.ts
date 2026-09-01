export type ProjectCategory =
  | "ML / AI"
  | "Full-Stack Web"
  | "iOS / Mobile"
  | "Frontend";

export interface TechBadge {
  name: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  descriptionJa: string;
  descriptionEn: string;
  category: ProjectCategory;
  techs: TechBadge[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string | StaticImageData;
  featured?: boolean;
}
import type { StaticImageData } from "next/image";
