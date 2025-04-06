export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: "AgenteIAma",
    description:
      "An AI assistant based on Llama LLM designed to help young people in Latin America build their educational and professional future.",
    tags: ["Python", "FastAPI", "AI", "LLM"],
    image: "/agent_IAma.png?height=200&width=400&text=AgenteIAma",
    link: "https://github.com/johncortes117/Agente-IAma",
    category: "ai",
  },
  {
    title: "Comprandito",
    description:
      "Mobile and web application with an AI assistant that helps users in Tulcán find the best products and stores for their purchases.",
    tags: ["Flutter", "Dart", "Node.js", "TypeScript", "AI", "LLM"],
    image: "/comprandito_landing.png?height=200&width=400&text=Comprandito",
    link: "https://v0-modern-landing-page-eosin-one.vercel.app/",
    category: "web",
  },
  {
    title: "Portal CITT",
    description:
      "Portal to centralize and manage the centers and projects of UPEC's research department.",
    tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    image: "/ciit_website.png?height=200&width=400&text=Portal+CITT",
    link: "https://github.com/johncortes117/portal-citt",
    category: "web",
  },
]; 