"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  // Project Card Component
  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
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
                {project.tags.map((tag: string, i: number) => (
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
      </a>
    </motion.div>
  );

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
            A selection of my most innovative projects in AI, Machine
            Learning, and Software Development.
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
              {[
                {
                  title: "AgenteIAma",
                  description:
                    "An AI assistant based on Llama LLM designed to help young people in Latin America build their educational and professional future.",
                  tags: ["Python", "FastAPI", "AI", "LLM"],
                  image:
                    "/placeholder.svg?height=200&width=400&text=AgenteIAma",
                  link: "https://github.com/johncortes117/Agente-IAma",
                  category: "ai",
                },
                {
                  title: "Comprandito",
                  description:
                    "Mobile and web application with an AI assistant that helps users in Tulcán find the best products and stores for their purchases.",
                  tags: [
                    "Flutter",
                    "Dart",
                    "Node.js",
                    "TypeScript",
                    "AI",
                    "LLM",
                  ],
                  image:
                    "/placeholder.svg?height=200&width=400&text=Comprandito",
                  link: "https://v0-modern-landing-page-eosin-one.vercel.app/",
                  category: "web",
                },
                {
                  title: "Portal CITT",
                  description:
                    "Portal to centralize and manage the centers and projects of UPEC's research department.",
                  tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
                  image:
                    "/placeholder.svg?height=200&width=400&text=Portal+CITT",
                  link: "https://github.com/johncortes117/portal-citt",
                  category: "web",
                },
              ].map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AgenteIAma",
                  description:
                    "An AI assistant based on Llama LLM designed to help young people in Latin America build their educational and professional future.",
                  tags: ["Python", "FastAPI", "AI", "LLM"],
                  image:
                    "/placeholder.svg?height=200&width=400&text=AgenteIAma",
                  link: "https://github.com/johncortes117/Agente-IAma",
                  category: "ai",
                },
              ].map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Comprandito",
                  description:
                    "Mobile and web application with an AI assistant that helps users in Tulcán find the best products and stores for their purchases.",
                  tags: [
                    "Flutter",
                    "Dart",
                    "Node.js",
                    "TypeScript",
                    "AI",
                    "LLM",
                  ],
                  image:
                    "/placeholder.svg?height=200&width=400&text=Comprandito",
                  link: "https://v0-modern-landing-page-eosin-one.vercel.app/",
                  category: "web",
                },
                {
                  title: "Portal CITT",
                  description:
                    "Portal to centralize and manage the centers and projects of UPEC's research department.",
                  tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
                  image:
                    "/placeholder.svg?height=200&width=400&text=Portal+CITT",
                  link: "https://github.com/johncortes117/portal-citt",
                  category: "web",
                },
              ].map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* No projects in this category yet */}
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400">
                  No projects in this category yet. Stay tuned!
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden">
            <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
            View All Projects{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
