"use client";

import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CertificateModalProps {
  certificate: {
    title: string;
    issuer: string;
    date: string;
    description?: string;
    link: string;
    icon: React.ReactNode;
  };
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
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
}
