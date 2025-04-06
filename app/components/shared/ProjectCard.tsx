"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
      onClick={() => onClick(project)}
    >
      <div
        className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg cursor-pointer"
        aria-label={`View project: ${project.title}`}
      >
        <div className="relative h-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <Card className="relative h-full bg-gradient-to-br from-blue-900/30 to-black border-blue-500/20 overflow-hidden transition-all duration-300 group-hover:border-blue-500/40">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={
                  project.image ||
                  "/placeholder.svg?height=200&width=400&text=Project+Preview"
                }
                alt={project.title}
                width={400}
                height={200}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

              {/* Category badge */}
              <div className="absolute top-3 right-3">
                <Badge className="bg-blue-600/80 hover:bg-blue-600 text-white border-none backdrop-blur-sm">
                  {project.category === "ai"
                    ? "AI/ML"
                    : project.category === "web"
                    ? "Web/Mobile"
                    : "Other"}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1 text-sm transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                View Project{" "}
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
