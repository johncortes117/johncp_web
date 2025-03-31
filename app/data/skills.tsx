import { Database, Code, Brain, Sparkles, BookOpen } from "lucide-react";
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
    skills: ["Git", "Docker", "CI/CD", "AWS", "Azure"],
  },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  logo?: string;
  icon?: ReactNode;
}

export const experiences: Experience[] = [
  {
    title: "Research Assistant",
    company: "UPEC",
    period: "Jan 2024 - Present",
    icon: <BookOpen className="h-5 w-5 text-blue-400" />,
    description: [
      "Developing AI-powered research tools for academic use.",
      "Creating machine learning models for data analysis.",
      "Collaborating with faculty on research publications.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Tech Innovate",
    period: "May 2023 - Dec 2023",
    icon: <Database className="h-5 w-5 text-blue-400" />,
    description: [
      "Performed data cleaning and preprocessing for ML models.",
      "Developed data visualizations and reports.",
      "Assisted in the implementation of predictive models.",
    ],
  },
  {
    title: "Web Developer",
    company: "Creative Solutions",
    period: "Sep 2022 - Apr 2023",
    icon: <Code className="h-5 w-5 text-blue-400" />,
    description: [
      "Developed responsive web applications.",
      "Implemented backend APIs and database integrations.",
      "Collaborated with design team on UI/UX improvements.",
    ],
  },
]; 