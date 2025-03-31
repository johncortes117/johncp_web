"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/app/data/projects";
import { Project } from "@/app/data/projects";
import ProjectCard from "./shared/ProjectCard";

export default function Projects() {
  const filteredProjects = (category: string) => {
    if (category === "all") return projects;
    return projects.filter(project => project.category === category);
  };

  return (
    <section id="proyectos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-2">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm border-blue-500/50 bg-blue-500/5 text-blue-400"
            >
              <Code className="mr-1 h-3 w-3" /> Projects
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Featured
            </span>{" "}
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            A showcase of my top three projects focusing on AI solutions and software development. 
            Each project represents my skills in creating practical applications for real-world problems.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-blue-950/30 border border-blue-500/20 p-1">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-blue-600"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-blue-600"
              >
                AI/ML
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="data-[state=active]:bg-blue-600"
              >
                Web/Mobile
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className="data-[state=active]:bg-blue-600"
              >
                Other
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects("all").map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects("ai").map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects("web").map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects("other").map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
