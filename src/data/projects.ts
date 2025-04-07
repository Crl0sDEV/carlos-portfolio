export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack e-commerce site with React and Node.js.",
    image: "/images/project1.png",
    tags: ["React", "Next.js", "Tailwind"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.vercel.app",
  },
  {
    "id": 2,
    "title": "Portfolio Design",
    "description": "A minimalist portfolio built with Framer Motion animations.",
    "image": "/images/project2.png",
    "tags": ["Next.js", "Framer Motion"],
    "github": "https://github.com/yourusername/project2",
    "demo": "https://project2-demo.vercel.app"
  },
  
];