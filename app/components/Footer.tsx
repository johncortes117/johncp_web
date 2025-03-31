"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-blue-900/30 py-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 md:mb-0"
          >
            John Cortés
          </motion.div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://github.com/johncortes117"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-blue-400"
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
                className="text-gray-400 hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:stevencortespozo@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-blue-400"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-900/30 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} | John Cortés | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
