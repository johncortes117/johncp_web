"use client";

import { motion } from "framer-motion";
import { ExternalLink, X, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/app/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-30"></div>
        <Card className="relative bg-gradient-to-br from-blue-900/80 to-black border-blue-500/30 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-56 md:h-64 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-200 hover:text-white transition-colors bg-black/40 p-2 rounded-full"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">
                {project.title}
              </h3>

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

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors group relative overflow-hidden mr-3"
              >
                <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}