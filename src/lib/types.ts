export interface Project {
  slug: string;
  title: string;
  summary: string;
  longDescription: string;
  role: string;
  problemStatement: string;
  solution: string;
  keyChallenges: string[];
  tech: string[];
  repo?: string;
  demo?: string;
  images: string[];
  tags: string[];
  date: string;
  impact?: string;
  howToRun?: string;
  upvotes?: number;
  views?: number;
}
