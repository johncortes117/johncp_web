import { useState, useEffect } from "react";
import { Certificate } from "@/app/data/certificates";

export const useCertificateModal = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

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

  return {
    selectedCertificate,
    setSelectedCertificate,
    openModal: (certificate: Certificate) => setSelectedCertificate(certificate),
    closeModal: () => setSelectedCertificate(null),
  };
}; 