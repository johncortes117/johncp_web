import { Code, Database, Brain } from "lucide-react";
import { ReactNode } from "react";

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link: string;
  icon: ReactNode;
  category?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Mobile App Development",
    issuer: "Google",
    date: "March 2025",
    link: "https://skillshop.exceedlms.com/student/award/seN4oojwAErbP2NEfJCnn8Qm",
    icon: <Code className="h-6 w-6 text-blue-400" />,
    description:
      "Comprehensive course on mobile application development fundamentals and best practices.",
    category: "development"
  },
  {
    title:
      "Data Science Environment with Jupyter Notebooks and Anaconda",
    issuer: "Platzi",
    date: "November 2024",
    link: "https://platzi.com/p/john_cortes/curso/2434-jupyter-notebook/diploma/detalle/",
    icon: <Database className="h-6 w-6 text-blue-400" />,
    description:
      "Setting up and using Jupyter Notebooks and Anaconda for data science projects.",
    category: "data-science"
  },
  {
    title: "Introduction to Terminal and Command Line",
    issuer: "Platzi",
    date: "November 2024",
    link: "https://platzi.com/p/john_cortes/curso/2292-terminal/diploma/detalle/",
    icon: <Code className="h-6 w-6 text-blue-400" />,
    description:
      "Fundamentals of terminal usage and command line operations for developers.",
    category: "development"
  },
  {
    title: "Professional Git and GitHub",
    issuer: "Platzi",
    date: "October 2024",
    link: "https://platzi.com/p/john_cortes/curso/1557-course/diploma/detalle/",
    icon: <Code className="h-6 w-6 text-blue-400" />,
    description:
      "Advanced version control with Git and collaboration using GitHub.",
    category: "development"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "August 2024",
    link: "https://www.credly.com/badges/749f04c6-12bd-45c1-9e0a-b061c3226c4a/linked_in_profile",
    icon: <Brain className="h-6 w-6 text-blue-400" />,
    description:
      "Core concepts and applications of artificial intelligence and machine learning.",
    category: "ai"
  },
  {
    title: "Database Fundamentals",
    issuer: "Platzi",
    date: "July 2024",
    link: "https://platzi.com/p/john_cortes/curso/1566-fundamentos-db/diploma/detalle/",
    icon: <Database className="h-6 w-6 text-blue-400" />,
    description:
      "Essential concepts of database design, management, and optimization.",
    category: "data-science"
  },
]; 