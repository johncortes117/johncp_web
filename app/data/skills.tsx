import { Database, Code, Brain, Sparkles, Heart } from "lucide-react";
import { ReactNode } from "react";

export interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Science & ML Tools",
    icon: <Database className="h-5 w-5 text-blue-400" />,
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
  },
  {
    title: "AI Tools",
    icon: <Brain className="h-5 w-5 text-blue-400" />,
    skills: [
      "Jupyter Notebooks",
      "Google Colab",
      "LangChain",
      "OpenAI API",
      "Azure AI",
      "IBM Watson",
    ],
  },
  {
    title: "Backend & API Development",
    icon: <Code className="h-5 w-5 text-blue-400" />,
    skills: ["Django", "FastAPI"],
  },
  {
    title: "Others",
    icon: <Sparkles className="h-5 w-5 text-blue-400" />,
    skills: ["Git & GitHub", "Linux", "VS Code", "Anaconda", "Docker", "Figma"],
  },
  {
    title: "Soft Skills",
    icon: <Heart className="h-5 w-5 text-blue-400" />,
    skills: ["Effective Communication", "Leadership", "Team Collaboration", "Teaching", "Proactivity"],
  },
]; 