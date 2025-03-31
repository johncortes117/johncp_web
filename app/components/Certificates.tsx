"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Code,
  Database,
  Brain,
  ExternalLink,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  // Certificate Modal Component
  const CertificateModal = ({
    certificate,
    onClose,
  }: {
    certificate: any;
    onClose: () => void;
  }) => (
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
        className="relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-30"></div>
        <Card className="relative bg-gradient-to-br from-blue-900/80 to-black border-blue-500/30 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-blue-900/50 w-16 h-16 rounded-lg flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                {certificate.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-300 mb-2">
                  {certificate.title}
                </h3>

                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span className="text-blue-400 font-medium">
                    {certificate.issuer}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{certificate.date}</span>
                </div>

                {certificate.description && (
                  <p className="text-gray-300 mb-6">
                    {certificate.description}
                  </p>
                )}

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors group relative overflow-hidden"
                >
                  <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                  View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="certificaciones" className="py-24 relative">
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
              <FileText className="mr-1 h-3 w-3" /> Education
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-5">
          {[
            {
              title: "Mobile App Development",
              issuer: "Google",
              date: "March 2025",
              link: "https://skillshop.exceedlms.com/student/award/seN4oojwAErbP2NEfJCnn8Qm",
              icon: <Code className="h-6 w-6 text-blue-400" />,
              description:
                "Comprehensive course on mobile application development fundamentals and best practices.",
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
            },
            {
              title: "Introduction to Terminal and Command Line",
              issuer: "Platzi",
              date: "November 2024",
              link: "https://platzi.com/p/john_cortes/curso/2292-terminal/diploma/detalle/",
              icon: <Code className="h-6 w-6 text-blue-400" />,
              description:
                "Fundamentals of terminal usage and command line operations for developers.",
            },
            {
              title: "Professional Git and GitHub",
              issuer: "Platzi",
              date: "October 2024",
              link: "https://platzi.com/p/john_cortes/curso/1557-course/diploma/detalle/",
              icon: <Code className="h-6 w-6 text-blue-400" />,
              description:
                "Advanced version control with Git and collaboration using GitHub.",
            },
            {
              title: "Artificial Intelligence Fundamentals",
              issuer: "IBM",
              date: "August 2024",
              link: "https://www.credly.com/badges/749f04c6-12bd-45c1-9e0a-b061c3226c4a/linked_in_profile",
              icon: <Brain className="h-6 w-6 text-blue-400" />,
              description:
                "Core concepts and applications of artificial intelligence and machine learning.",
            },
            {
              title: "Database Fundamentals",
              issuer: "Platzi",
              date: "July 2024",
              link: "https://platzi.com/p/john_cortes/curso/1566-fundamentos-db/diploma/detalle/",
              icon: <Database className="h-6 w-6 text-blue-400" />,
              description:
                "Essential concepts of database design, management, and optimization.",
            },
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="relative cursor-pointer">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <Card className="relative bg-gradient-to-br from-blue-900/30 to-black border-blue-500/20 overflow-hidden h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                        {cert.icon}
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors line-clamp-1">
                        {cert.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-sm">
                      <span className="text-blue-400">{cert.issuer}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{cert.date}</span>
                    </div>
                    <div className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm">
                      View Details{" "}
                      <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
