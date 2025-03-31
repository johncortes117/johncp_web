"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-blue-900/30 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          John Cortés
        </motion.div>
        <motion.nav
          className="hidden md:flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { name: "Home", href: "#inicio" },
            { name: "Skills", href: "#skills" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#proyectos" },
            { name: "Achievements", href: "#logros" },
            { name: "Certifications", href: "#certificaciones" },
            { name: "Contact", href: "#contacto" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition-all relative group text-sm uppercase tracking-wider font-medium"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </motion.nav>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="https://github.com/johncortes117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-blue-400 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Github className="h-5 w-5 relative z-10" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/john-cortes-pozo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-blue-400 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Linkedin className="h-5 w-5 relative z-10" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:stevencortespozo@gmail.com">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-blue-400 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Mail className="h-5 w-5 relative z-10" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-blue-400 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-blue-900/30 py-4 px-4 md:hidden z-50"
          >
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Home", href: "#inicio" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#proyectos" },
                { name: "Achievements", href: "#logros" },
                { name: "Certifications", href: "#certificaciones" },
                { name: "Contact", href: "#contacto" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-all py-2 px-4 rounded-md hover:bg-blue-900/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-2 pl-4">
                <Link
                  href="https://github.com/johncortes117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/john-cortes-pozo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:stevencortespozo@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
