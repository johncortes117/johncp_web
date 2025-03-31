"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experienceData, educationData, extracurricularData } from "@/app/data/education";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
              <Briefcase className="mr-1 h-3 w-3" /> Experience & Education
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Experience
            </span>{" "}
            & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
              <Briefcase className="mr-2 h-5 w-5" /> Experience
            </h3>

            <div className="relative border-l-2 border-blue-600/30 pl-8 ml-4 space-y-8">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[1.06rem] top-1 w-5 h-5 rounded-full border-2 border-blue-500 bg-blue-900"></div>
                  <div className="absolute -left-[2.25rem] top-0 bg-blue-900/50 p-1.5 rounded-lg border border-blue-500/30">
                    {item.icon}
                  </div>

                  <div>
                    <div className="flex items-center mb-1">
                      <h4 className="text-lg text-blue-400 font-semibold">
                        {item.title}
                      </h4>
                      <span className="mx-2 text-blue-600/70">•</span>
                      <span className="text-gray-400">{item.company}</span>
                    </div>
                    <p className="text-gray-500 mb-3 text-sm">{item.period}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5" /> Education
            </h3>

            <div className="relative border-l-2 border-blue-600/30 pl-8 ml-4 space-y-8">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[1.06rem] top-1 w-5 h-5 rounded-full border-2 border-blue-500 bg-blue-900"></div>
                  <div className="absolute -left-[2.25rem] top-0 bg-blue-900/50 p-1.5 rounded-lg border border-blue-500/30">
                    {item.icon}
                  </div>

                  <div>
                    <div className="flex items-center mb-1">
                      <h4 className="text-lg text-blue-400 font-semibold">
                        {item.degree}
                      </h4>
                      <span className="mx-2 text-blue-600/70">•</span>
                      <span className="text-gray-400">{item.institution}</span>
                    </div>
                    <p className="text-gray-500 mb-3 text-sm">{item.period}</p>
                    <p className="text-gray-300">{item.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Extracurricular Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center text-center md:text-left">
            <Users className="mr-2 h-5 w-5" /> Extracurricular Activities
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {extracurricularData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                  <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                    <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                    <div className="flex items-center mb-3">
                      <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-400">
                          {item.role}
                        </h4>
                        <p className="text-gray-400 text-sm">{item.organization}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 relative z-10">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 