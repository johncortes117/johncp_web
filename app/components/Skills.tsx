"use client";

import { motion } from "framer-motion";
import {
  Database,
  Code,
  Brain,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

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
              <Code className="mr-1 h-3 w-3" /> Skills & Experience
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Skills
            </span>{" "}
            & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
            <Database className="mr-2 h-5 w-5" /> Skills & Technologies
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Data Science & ML Tools */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                  <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                  <div className="flex items-center mb-4">
                    <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                      <Database className="h-5 w-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-300">
                      Data Science & ML Tools
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {["Pandas", "NumPy", "Scikit-learn", "TensorFlow"].map(
                      (tech, i) => (
                        <Badge
                          key={i}
                          className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Tools */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                  <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                  <div className="flex items-center mb-4">
                    <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                      <Brain className="h-5 w-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-300">
                      AI Tools
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {[
                      "Jupyter Notebooks",
                      "Google Colab",
                      "LangChain",
                      "OpenAI API",
                      "Azure AI",
                      "IBM Watson",
                    ].map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backend & API Development */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                  <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                  <div className="flex items-center mb-4">
                    <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                      <Code className="h-5 w-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-300">
                      Backend & API Development
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {["Django", "FastAPI"].map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Others */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                  <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                  <div className="flex items-center mb-4">
                    <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                      <Sparkles className="h-5 w-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-300">
                      Others
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {[
                      "Git & GitHub",
                      "Linux",
                      "VS Code",
                      "Anaconda",
                      "Docker",
                      "Figma",
                    ].map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Soft Skills - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 group"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
              <div className="relative bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-20 translate-y-20"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-300">
                    Soft Skills
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {[
                    "Problem Solving",
                    "Critical Thinking",
                    "Team Work",
                    "Time Management",
                    "Continuous Learning",
                    "Adaptability",
                    "Communication",
                    "Leadership",
                  ].map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
