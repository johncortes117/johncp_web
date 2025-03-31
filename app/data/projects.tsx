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
    image: "/placeholder.svg?height=200&width=400&text=AgenteIAma",
    link: "https://github.com/johncortes117/Agente-IAma",
    category: "ai",
  },
  {
    title: "Comprandito",
    description:
      "Mobile and web application with an AI assistant that helps users in Tulcán find the best products and stores for their purchases.",
    tags: ["Flutter", "Dart", "Node.js", "TypeScript", "AI", "LLM"],
    image: "/placeholder.svg?height=200&width=400&text=Comprandito",
    link: "https://v0-modern-landing-page-eosin-one.vercel.app/",
    category: "web",
  },
  {
    title: "Portal CITT",
    description:
      "Portal to centralize and manage the centers and projects of UPEC's research department.",
    tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=200&width=400&text=Portal+CITT",
    link: "https://github.com/johncortes117/portal-citt",
    category: "web",
  },
  {
    title: "Drone Navigation System",
    description:
      "An AI-powered drone navigation system to optimize delivery routes in urban environments.",
    tags: ["Python", "TensorFlow", "Computer Vision", "Robotics"],
    image: "/placeholder.svg?height=200&width=400&text=Drone+Navigation",
    link: "https://github.com/johncortes117/drone-nav",
    category: "ai",
  },
  {
    title: "Sentiment Analysis Tool",
    description:
      "Real-time sentiment analysis tool for social media monitoring and brand reputation management.",
    tags: ["Python", "NLP", "Machine Learning", "API"],
    image: "/placeholder.svg?height=200&width=400&text=Sentiment+Analysis",
    link: "https://github.com/johncortes117/sentiment-analyzer",
    category: "ai",
  },
  {
    title: "Crypto Tracker",
    description:
      "A responsive web application for tracking cryptocurrency prices and market trends.",
    tags: ["React", "TypeScript", "API Integration", "TailwindCSS"],
    image: "/placeholder.svg?height=200&width=400&text=Crypto+Tracker",
    link: "https://github.com/johncortes117/crypto-tracker",
    category: "web",
  },
]; 