"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/app/data/certificates";
import { useCertificateModal } from "@/hooks/use-certificate-modal";
import CertificateModal from "./shared/CertificateModal";

export default function Certificates() {
  const { selectedCertificate, openModal, closeModal } = useCertificateModal();

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
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
              onClick={() => openModal(cert)}
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
                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                      <span className="text-blue-400">{cert.issuer}</span>
                      <span className="text-gray-600">•</span>
                      <span>{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
