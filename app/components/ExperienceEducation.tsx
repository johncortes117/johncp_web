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
              Experience & Education
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
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Experience
            </h3>

            <div className="relative border-l-2 border-blue-600/40 pl-6 ml-2 space-y-12">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline icon */}
                  <motion.div 
                    className="absolute -left-[1.1rem] top-5 w-6 h-6 bg-blue-900/80 rounded-full border border-blue-500/50 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-800/80"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <motion.div
                      animate={{ 
                        boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 4px rgba(59, 130, 246, 0.3)", "0 0 0 0 rgba(59, 130, 246, 0)"] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-full h-full rounded-full flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Briefcase className="h-3 w-3 text-blue-400" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <div className="group-hover:translate-x-1 transition-transform duration-300 pt-1 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-lg text-blue-400 font-semibold">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm">{item.company}</p>
                    <p className="text-gray-500 text-xs mb-2">
                      {item.period}
                    </p>
                    <p className="text-gray-300 text-sm">{item.description}</p>
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
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Education
            </h3>

            <div className="relative border-l-2 border-blue-600/40 pl-6 ml-2 space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline icon */}
                  <motion.div 
                    className="absolute -left-[1.1rem] top-5 w-6 h-6 bg-blue-900/80 rounded-full border border-blue-500/50 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-800/80"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <motion.div
                      animate={{ 
                        boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 4px rgba(59, 130, 246, 0.3)", "0 0 0 0 rgba(59, 130, 246, 0)"] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-full h-full rounded-full flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <GraduationCap className="h-3 w-3 text-blue-400" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <div className="group-hover:translate-x-1 transition-transform duration-300 pt-2 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-lg text-blue-400 font-semibold">
                        {item.degree}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm">{item.institution}</p>
                    <p className="text-gray-500 text-xs mb-2">
                      {item.period}
                    </p>
                    <p className="text-gray-300 text-sm">{item.location}</p>
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
          <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center md:text-left">
            Extracurricular Activities
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
                <div className="relative h-full group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden group-hover:border-blue-500/50 transition-all duration-300">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                    <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                    <div>
                      <h4 className="text-xl font-semibold text-blue-400 mb-1">
                        {item.role}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">{item.organization}</p>
                      <p className="text-gray-300 relative z-10">{item.description}</p>
                    </div>
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