import { Framework } from "./framework";
import { Language } from "./language";

export type WorkItem = {
  imageUrl?: string | null;
  title: string;
  description: string;
  type: 'private' | 'public';
  projectUrl: URL | null;
  demoUrl?: URL;
  startDate: Date;
  endDate: Date | null;
  languages: Set<Language>,
  frameworks?: Set<Framework>
};
