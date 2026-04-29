export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  image?: string[];
  content: {
    concept: string;
    features: string[];
    learnings: string;
  };
};
