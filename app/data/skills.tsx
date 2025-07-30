import { Database, Code, Brain, Sparkles, Heart } from "lucide-react";
import { ReactNode } from "react";

export interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI Systems & Agent Technologies",
    icon: <Brain className="h-5 w-5 text-blue-400" />,
    skills: [
      "LangChain",
      "LangGraph",
      "Workflow Orchestration",
      "LLMs",
      "Prompt Engineering",
      "Long-Term Memory",
      "Human-in-the-Loop",
      "Tools Integration"],
  },
  {
    title: "Data Science",
    icon: <Database className="h-5 w-5 text-blue-400" />,
    skills: ["Python",
             "Pandas",
             "Scikit-learn",
             "SQL",
             "Model Training & Evaluation",
             "Linear Algebra",
             "Probability & Statistics",
             "Mathematical Optimization"],
  },
  {
    title: "Software Development & Infrastructure",
    icon: <Code className="h-5 w-5 text-blue-400" />,
    skills: ["Python",
             "FastAPI",
             "Jupyter Notebooks",
             "Git & GitHub",
             "Docker",
             "Vercel",
             "Virtual Environments",
             "Linux",
             "REST APIs"],
  },
  {
    title: "Soft Skills",
    icon: <Heart className="h-5 w-5 text-blue-400" />,
    skills: ["Leadership",
             "Effective Communication",
             "Critical Thinking",
             "Problem Solving",
             "Team Collaboration",
             "AI Product Thinking"],
  },
]; 
