"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Componentes refactorizados
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificateModal from "./components/shared/CertificateModal";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertificate]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Fondo animado */}
      <Background />
      
      {/* Header */}
      <Header />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

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
            onClose={() => setSelectedCertificate(null)}
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
