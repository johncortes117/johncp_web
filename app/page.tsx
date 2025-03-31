"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import dynamic from 'next/dynamic';

// Componentes refactorizados
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ExperienceEducation from "./components/ExperienceEducation";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import CertificateModal from "./components/shared/CertificateModal";
import { useCertificateModal } from "@/hooks/use-certificate-modal";

// Carga dinámica de componentes que no son visibles inicialmente
const Certificates = dynamic(() => import('./components/Certificates'), {
  loading: () => <div className="h-screen"></div>
});
const Contact = dynamic(() => import('./components/Contact'));

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { selectedCertificate, closeModal } = useCertificateModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Fondo animado */}
      <Background />
      
      {/* Header */}
      <Header />

      <main className="relative z-10 pt-16 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />
        
        {/* Experience & Education Section */}
        <ExperienceEducation />

        {/* Projects Section */}
        <Projects />

        {/* Achievements Section */}
        <Achievements />

        {/* Certifications Section */}
        <Certificates />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Botón de scroll hacia arriba */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      {/* Footer */}
      <Footer />

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>

      {/* Custom cursor effect */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px; /* Adjust based on your header height */
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
