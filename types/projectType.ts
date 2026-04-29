export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  image?: string[];
  content: {
    problem: string;
    solution: string;
    features: string[];
    learnings: string;
  };
};
