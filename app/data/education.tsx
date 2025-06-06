import { Briefcase, GraduationCap, BookOpen, Users } from "lucide-react";
import { ReactNode } from "react";

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: ReactNode;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  icon: ReactNode;
}

export interface ExtracurricularItem {
  role: string;
  organization: string;
  description: string;
  icon: ReactNode;
}

export const experienceData: ExperienceItem[] = [
  {
    title: "AI Developer",
    company: "Qikstarts AI",
    period: "March 2025 - Present",
    description: "Collaborate in the design, development, and orchestration of AI agents utilizing Retrieval-Augmented Generation (RAG) techniques to automate customer engagement, loyalty programs, and sales processes.",
    icon: <Briefcase className="h-5 w-5 text-blue-400" />,
  },
  {
    title: "Research Assistant",
    company: "Universidad Politécnica Estatal del Carchi",
    period: "March 2025 - Present",
    description: "Assist in the research project \"Artificial Intelligence to Predict Stress Factors in Dairy Cattle\", utilizing machine learning techniques for data analysis and model development.",
    icon: <BookOpen className="h-5 w-5 text-blue-400" />,
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Computer Science Engineering",
    institution: "Universidad Politécnica Estatal del Carchi",
    period: "May 2022 - Present",
    location: "Tulcán, Ecuador",
    icon: <GraduationCap className="h-5 w-5 text-blue-400" />,
  },
  {
    degree: "Self-Study & Certifications",
    institution: "Platzi",
    period: "November 2023 - Present",
    location: "Remote",
    icon: <BookOpen className="h-5 w-5 text-blue-400" />,
  },
];

export const extracurricularData: ExtracurricularItem[] = [
  {
    role: "President",
    organization: "Computational Mathematical Optimization Club",
    description: "Leading the UPEC's Computational Mathematical Optimization Club.",
    icon: <Users className="h-5 w-5 text-blue-400" />,
  },
  {
    role: "Active Member",
    organization: "Programming Club",
    description: "Participating in UPEC's Programming Club activities and competitions.",
    icon: <Users className="h-5 w-5 text-blue-400" />,
  },
]; 