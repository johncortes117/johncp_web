"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Achievements() {
  return (
    <section id="logros" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl"></div>

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
              <Award className="mr-1 h-3 w-3" /> Achievements
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Recognition
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              year: "2025",
              title: "Finalist in Interact2Hack",
              description:
                "With my team, we qualified for the finals in the Deuna app challenge at the Interact2Hack hackathon organized by Universidad San Francisco de Quito.",
              link: "https://www.linkedin.com/posts/john-cortes-pozo_interact2hack-mitimiti-acolitar-activity-7305065377154121729-9pZP",
            },
            {
              year: "2023",
              title: "1st Place: Research and Entrepreneurship Competition",
              description:
                "Together with my team, we won first place in the '1st UPEC-2023 Research and Entrepreneurship Seedbed Competition,' held at the State Polytechnic University of Carchi. Our research, 'Robust Model for Evaluating Sustainable Development under Uncertainty Conditions'.",
              link: "https://www.facebook.com/UPECCarchi/posts/-semillerosupec-en-el-primer-concurso-de-semilleros-de-investigaci%C3%B3n-y-empre/685852086917592/",
            },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-20"></div>
              <Card className="relative bg-gradient-to-br from-blue-900/40 to-black/80 border border-blue-500/20 h-full group hover:border-blue-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="min-w-[60px] h-16 bg-blue-900/30 border border-blue-500/30 rounded flex items-center justify-center">
                      <span className="text-blue-400 font-mono">
                        {achievement.year}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 mt-2">
                        {achievement.description}
                      </p>
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View More <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
