"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Award,
  FileText,
  Send,
  ArrowRight,
  Sparkles,
  Database,
  Brain,
  BookOpen,
  Briefcase,
  GraduationCap,
  BarChart,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Typing effect for hero text
  const [text, setText] = useState("");
  const fullText = "AI/ML Student";
  const typingSpeed = 100;

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

  // Project Card Component
  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
        aria-label={`View project: ${project.title}`}
      >
        <div className="relative h-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <Card className="relative h-full bg-gradient-to-br from-blue-900/30 to-black border-blue-500/20 overflow-hidden transition-all duration-300 group-hover:border-blue-500/40">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={
                  project.image ||
                  "/placeholder.svg?height=200&width=400&text=Project+Preview"
                }
                alt={project.title}
                width={400}
                height={200}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

              {/* Category badge */}
              <div className="absolute top-3 right-3">
                <Badge className="bg-blue-600/80 hover:bg-blue-600 text-white border-none backdrop-blur-sm">
                  {project.category === "ai"
                    ? "AI/ML"
                    : project.category === "web"
                    ? "Web/Mobile"
                    : "Other"}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, i: number) => (
                  <Badge
                    key={i}
                    className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1 text-sm transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                View Project{" "}
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </div>
      </a>
    </motion.div>
  );

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
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Animated background with neural network */}
      {/* Animated Neural Network Background */}
      {/* Animated Neural Network Background - More Subtle Version */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>

        {/* Dynamic Neural Network - More Subtle */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Fewer neurons with smaller size and lower opacity */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`neuron-${i}`}
              className="absolute rounded-full bg-blue-500"
              initial={{
                width: `${3 + (i % 4)}px`,
                height: `${3 + (i % 4)}px`,
                x: `${(i * 10) % 100}vw`,
                y: `${(i * 10) % 100}vh`,
                opacity: 0.2,
              }}
              animate={{
                x: [`${(i * 10) % 100}vw`, `${(i * 10 + 50) % 100}vw`],
                y: [`${(i * 10) % 100}vh`, `${(i * 10 + 50) % 100}vh`],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {Array.from({ length: 2 }).map((_, j) => {
                const targetNeuron = (i + j + 1) % 10;
                return (
                  <motion.div
                    key={`connection-${i}-${j}`}
                    className="absolute top-1/2 left-1/2 h-px bg-blue-500/10 origin-left"
                    style={{
                      width: "100vw",
                      zIndex: -1,
                    }}
                    initial={{
                      opacity: 0.1,
                    }}
                    animate={{
                      opacity: [0.1, 0.15, 0.1],
                      rotate: `${targetNeuron * 36}deg`,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: j * 2,
                    }}
                  />
                );
              })}
            </motion.div>
          ))}

          {/* Fewer pulsing neurons with reduced effect */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`pulse-neuron-${i}`}
              className="absolute rounded-full bg-blue-400"
              initial={{
                width: `${Math.random() * 5 + 4}px`,
                height: `${Math.random() * 5 + 4}px`,
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                opacity: 0.15,
                boxShadow: "0 0 4px 1px rgba(59, 130, 246, 0.15)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15],
                boxShadow: [
                  "0 0 4px 1px rgba(59, 130, 246, 0.15)",
                  "0 0 6px 2px rgba(59, 130, 246, 0.25)",
                  "0 0 4px 1px rgba(59, 130, 246, 0.15)",
                ],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* More subtle neural network grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="neural-net"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                {/* Smaller, less visible neurons */}
                <circle cx="20" cy="20" r="2" fill="#3b82f6" />
                <circle cx="60" cy="40" r="2" fill="#3b82f6" />
                <circle cx="100" cy="30" r="2" fill="#3b82f6" />
                <circle cx="140" cy="60" r="2" fill="#3b82f6" />
                <circle cx="180" cy="20" r="2" fill="#3b82f6" />
                <circle cx="40" cy="80" r="2" fill="#3b82f6" />
                <circle cx="80" cy="100" r="2" fill="#3b82f6" />
                <circle cx="120" cy="120" r="2" fill="#3b82f6" />
                <circle cx="160" cy="140" r="2" fill="#3b82f6" />
                <circle cx="20" cy="160" r="2" fill="#3b82f6" />
                <circle cx="60" cy="180" r="2" fill="#3b82f6" />
                <circle cx="100" cy="160" r="2" fill="#3b82f6" />
                <circle cx="140" cy="140" r="2" fill="#3b82f6" />
                <circle cx="180" cy="180" r="2" fill="#3b82f6" />

                {/* Less visible neural connections */}
                <line
                  x1="20"
                  y1="20"
                  x2="60"
                  y2="40"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="60"
                  y1="40"
                  x2="100"
                  y2="30"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="100"
                  y1="30"
                  x2="140"
                  y2="60"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="140"
                  y1="60"
                  x2="180"
                  y2="20"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="20"
                  y1="20"
                  x2="40"
                  y2="80"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="60"
                  y1="40"
                  x2="80"
                  y2="100"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="100"
                  y1="30"
                  x2="120"
                  y2="120"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="140"
                  y1="60"
                  x2="160"
                  y2="140"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="40"
                  y1="80"
                  x2="80"
                  y2="100"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="80"
                  y1="100"
                  x2="120"
                  y2="120"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="120"
                  y1="120"
                  x2="160"
                  y2="140"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="20"
                  y1="160"
                  x2="60"
                  y2="180"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="60"
                  y1="180"
                  x2="100"
                  y2="160"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="100"
                  y1="160"
                  x2="140"
                  y2="140"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <line
                  x1="140"
                  y1="140"
                  x2="180"
                  y2="180"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />

                {/* Fewer cross connections */}
                <line
                  x1="20"
                  y1="20"
                  x2="100"
                  y2="30"
                  stroke="#3b82f6"
                  strokeWidth="0.3"
                  strokeOpacity="0.2"
                />
                <line
                  x1="60"
                  y1="40"
                  x2="140"
                  y2="60"
                  stroke="#3b82f6"
                  strokeWidth="0.3"
                  strokeOpacity="0.2"
                />
                <line
                  x1="40"
                  y1="80"
                  x2="120"
                  y2="120"
                  stroke="#3b82f6"
                  strokeWidth="0.3"
                  strokeOpacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-net)" />
          </svg>
        </div>

        {/* Very subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,24,69,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,24,69,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      {/* Header */}
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

      <main className="relative z-10 pt-16">
        {/* Hero Section - About Me */}
        <section
          id="inicio"
          ref={heroRef}
          className="min-h-screen flex items-center relative overflow-hidden pb-32"
        >
          <motion.div className="absolute inset-0 z-0" style={{ y }}>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"></div>
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  ></motion.div>

                  <motion.h1
                    className="text-5xl md:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      John Cortés
                    </span>
                  </motion.h1>

                  <motion.div
                    className="space-y-6 text-gray-300 text-lg max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <p>
                      I am a Computer Engineering student with a strong focus on
                      Artificial Intelligence, Machine Learning, and
                      Mathematics. I am passionate not only about learning these
                      subjects but also about applying them, researching, and
                      understanding how AI can transform the way we solve
                      problems.
                    </p>
                    <p>
                      Additionally, I enjoy developing software and constantly
                      challenge myself with projects that contribute to my
                      professional growth.
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">
                        Fun fact:
                      </span>{" "}
                      My fascination with AI is so great that, in my free time,
                      I follow the latest news and advances in the field to stay
                      up-to-date and continue to be inspired.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden">
                      <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                      Download CV{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-400 hover:bg-blue-900/20 group"
                    >
                      View Projects{" "}
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>

                  <motion.div
                    className="pt-8 order-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">
                      Main Focus
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Data Science",
                        "Machine Learning",
                        "Artificial Intelligence",
                        "Mathematics",
                      ].map((focus, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index + 1 }}
                          className="bg-blue-900/30 border border-blue-500/30 rounded-lg px-4 py-2 flex items-center"
                        >
                          <div className="mr-2 bg-blue-500/20 p-1.5 rounded-full">
                            {index === 0 && (
                              <Database className="h-4 w-4 text-blue-400" />
                            )}
                            {index === 1 && (
                              <Code className="h-4 w-4 text-blue-400" />
                            )}
                            {index === 2 && (
                              <Brain className="h-4 w-4 text-blue-400" />
                            )}
                            {index === 3 && (
                              <BarChart className="h-4 w-4 text-blue-400" />
                            )}
                          </div>
                          <span className="text-white text-sm">{focus}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="lg:col-span-2 relative order-1 lg:order-2 mb-8 lg:mb-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Modern profile image container */}
                <div className="relative h-[450px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl overflow-hidden border border-blue-500/20">
                    <div className="absolute inset-0 backdrop-blur-sm"></div>

                    {/* Profile image with effects */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>

                        {/* Circular frame */}
                        <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 overflow-hidden p-2">
                          <div className="w-full h-full rounded-full overflow-hidden border border-blue-400/30 p-2">
                            <div className="w-full h-full rounded-full overflow-hidden relative group">
                              {/* Replace with your image */}
                              <Image
                                src="/placeholder-user.jpg?height=400&width=400&text=Your+Photo"
                                alt="John Cortés"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />

                              {/* Overlay gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-70"></div>

                              {/* Animated particles */}
                              {Array.from({ length: 8 }).map((_, i) => (
                                <motion.div
                                  key={`particle-${i}`}
                                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                  style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                  }}
                                  animate={{
                                    y: [0, -10, 0],
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Orbiting elements */}
                        <motion.div
                          className="absolute w-8 h-8 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                          style={{ top: "10%", right: "0%" }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Code className="h-4 w-4 text-blue-400" />
                        </motion.div>

                        <motion.div
                          className="absolute w-10 h-10 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                          style={{ bottom: "15%", left: "5%" }}
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Brain className="h-5 w-5 text-blue-400" />
                        </motion.div>

                        <motion.div
                          className="absolute w-6 h-6 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                          style={{ top: "20%", left: "10%" }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 12,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Database className="h-3 w-3 text-blue-400" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-700/10 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-blue-500/50 flex justify-center">
              <motion.div
                className="w-1 h-2 bg-blue-500 rounded-full mt-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 relative overflow-hidden">
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
                  <Code className="mr-1 h-3 w-3" /> Skills & Experience
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Skills
                </span>{" "}
                & Experience
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                <Database className="mr-2 h-5 w-5" /> Skills & Technologies
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Data Science & ML Tools */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                    <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                      <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                      <div className="flex items-center mb-4">
                        <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                          <Database className="h-5 w-5 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-blue-300">
                          Data Science & ML Tools
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2 relative z-10">
                        {["Pandas", "NumPy", "Scikit-learn", "TensorFlow"].map(
                          (tech, i) => (
                            <Badge
                              key={i}
                              className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                            >
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* AI Tools */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                    <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                      <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                      <div className="flex items-center mb-4">
                        <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                          <Brain className="h-5 w-5 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-blue-300">
                          AI Tools
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2 relative z-10">
                        {[
                          "Jupyter Notebooks",
                          "Google Colab",
                          "LangChain",
                          "OpenAI API",
                          "Azure AI",
                          "IBM Watson",
                        ].map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Backend & API Development */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                    <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                      <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                      <div className="flex items-center mb-4">
                        <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                          <Code className="h-5 w-5 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-blue-300">
                          Backend & API Development
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2 relative z-10">
                        {["Django", "FastAPI"].map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Others */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                    <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                      <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                      <div className="flex items-center mb-4">
                        <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                          <Sparkles className="h-5 w-5 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-blue-300">
                          Others
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2 relative z-10">
                        {[
                          "Git & GitHub",
                          "Linux",
                          "VS Code",
                          "Anaconda",
                          "Docker",
                          "Figma",
                        ].map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-blue-900/70 hover:bg-blue-800/90 text-blue-100 border border-blue-500/40 px-3 py-1.5 text-sm transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Soft Skills - Full Width */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 group"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-75"></div>
                  <div className="relative bg-gradient-to-br from-blue-900/40 to-[#001233] border border-blue-500/30 rounded-lg p-6 overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
                    <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-20 translate-y-20"></div>

                    <div className="flex items-center mb-4">
                      <div className="bg-blue-900/60 p-2.5 rounded-lg mr-3 border border-blue-500/30">
                        <BookOpen className="h-5 w-5 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-blue-300">
                        Soft Skills
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-3 relative z-10">
                      {[
                        "Effective Communication",
                        "Leadership",
                        "Team Collaboration",
                        "Teaching",
                        "Proactivity",
                      ].map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-blue-500/40 text-blue-300 bg-blue-900/30 px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:bg-blue-900/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Experience & Education */}
            <div className="grid md:grid-cols-2 gap-10 mt-20">
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">
                    Experience
                  </h3>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-600 before:via-blue-400 before:to-blue-600/0">
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2"></div>
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500/30 -translate-x-1/2 animate-ping"></div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white">
                      Junior AI Developer
                    </h4>
                    <p className="text-blue-300 text-sm mb-2">
                      Qikstarts AI • March 2025 - Present
                    </p>
                    <p className="text-gray-300">
                      Working on AI solutions and implementing machine learning
                      models for various client projects.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">
                    Education
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-600 before:via-blue-400 before:to-blue-600/30">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2"></div>
                    <h4 className="text-xl font-bold text-white">
                      Computer Science Engineering
                    </h4>
                    <p className="text-blue-300 text-sm mb-2">
                      State Polytechnic University of Carchi • May 2022 -
                      Present
                    </p>
                    <p className="text-gray-300">Tulcan, Ecuador</p>
                  </div>

                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-600/30 before:via-blue-400/30 before:to-blue-600/10">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2"></div>
                    <h4 className="text-xl font-bold text-white">
                      Self-Study & Certifications
                    </h4>
                    <p className="text-blue-300 text-sm mb-2">
                      Platzi • November 2023 - Present
                    </p>
                    <p className="text-gray-300">Remote</p>
                  </div>

                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-600/10 before:via-blue-400/10 before:to-transparent">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2"></div>
                    <h4 className="text-xl font-bold text-white">
                      IBM Certifications
                    </h4>
                    <p className="text-blue-300 text-sm mb-2">
                      IBM • July 2024
                    </p>
                    <p className="text-gray-300">Remote</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Extracurricular Activities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-400">
                  Extracurricular Activities
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "President",
                    organization:
                      "Computational Mathematical Optimization Club",
                    description:
                      "Leading the UPEC's Computational Mathematical Optimization Club.",
                  },
                  {
                    title: "Active Member",
                    organization: "Programming Club",
                    description:
                      "Participating in UPEC's Programming Club activities and competitions.",
                  },
                  {
                    title: "Research Assistant",
                    organization: "Precision Livestock Project",
                    description:
                      "Assisting in the 'Precision Livestock at San Francisco Experimental Center' research project at UPEC.",
                  },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <Card className="relative h-full bg-gradient-to-br from-blue-900/30 to-black border-blue-500/20 group hover:border-blue-500/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-blue-400 mb-1">
                          {activity.title}
                        </h4>
                        <p className="text-white mb-3">
                          {activity.organization}
                        </p>
                        <p className="text-gray-300">{activity.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-24 relative">
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
                  <Code className="mr-1 h-3 w-3" /> Projects
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Featured
                </span>{" "}
                Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-300">
                A selection of my most innovative projects in AI, Machine
                Learning, and Software Development.
              </p>
            </motion.div>

            <Tabs defaultValue="all" className="w-full mb-12">
              <div className="flex justify-center">
                <TabsList className="bg-blue-950/30 border border-blue-500/20 p-1">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-blue-600"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="ai"
                    className="data-[state=active]:bg-blue-600"
                  >
                    AI/ML
                  </TabsTrigger>
                  <TabsTrigger
                    value="web"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Web/Mobile
                  </TabsTrigger>
                  <TabsTrigger
                    value="other"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Other
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "AgenteIAma",
                      description:
                        "An AI assistant based on Llama LLM designed to help young people in Latin America build their educational and professional future.",
                      tags: ["Python", "FastAPI", "AI", "LLM"],
                      image:
                        "/placeholder.svg?height=200&width=400&text=AgenteIAma",
                      link: "https://github.com/johncortes117/Agente-IAma",
                      category: "ai",
                    },
                    {
                      title: "Comprandito",
                      description:
                        "Mobile and web application with an AI assistant that helps users in Tulcán find the best products and stores for their purchases.",
                      tags: [
                        "Flutter",
                        "Dart",
                        "Node.js",
                        "TypeScript",
                        "AI",
                        "LLM",
                      ],
                      image:
                        "/placeholder.svg?height=200&width=400&text=Comprandito",
                      link: "https://v0-modern-landing-page-eosin-one.vercel.app/",
                      category: "web",
                    },
                    {
                      title: "Portal CITT",
                      description:
                        "Portal to centralize and manage the centers and projects of UPEC's research department.",
                      tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
                      image:
                        "/placeholder.svg?height=200&width=400&text=Portal+CITT",
                      link: "https://github.com/johncortes117/portal-citt",
                      category: "web",
                    },
                  ].map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ai" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "AgenteIAma",
                      description:
                        "An AI assistant based on Llama LLM designed to help young people in Latin America build their educational and professional future.",
                      tags: ["Python", "FastAPI", "AI", "LLM"],
                      image:
                        "/placeholder.svg?height=200&width=400&text=AgenteIAma",
                      link: "https://github.com/johncortes117/Agente-IAma",
                      category: "ai",
                    },
                  ].map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Comprandito",
                      description:
                        "Mobile and web application with an AI assistant that helps users in Tulcán find the best products and stores for their purchases.",
                      tags: [
                        "Flutter",
                        "Dart",
                        "Node.js",
                        "TypeScript",
                        "AI",
                        "LLM",
                      ],
                      image:
                        "/placeholder.svg?height=200&width=400&text=Comprandito",
                      link: "https://v0-modern-landing-page-eosin-one.vercel.app/",
                      category: "web",
                    },
                    {
                      title: "Portal CITT",
                      description:
                        "Portal to centralize and manage the centers and projects of UPEC's research department.",
                      tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
                      image:
                        "/placeholder.svg?height=200&width=400&text=Portal+CITT",
                      link: "https://github.com/johncortes117/portal-citt",
                      category: "web",
                    },
                  ].map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="other" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* No projects in this category yet */}
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-400">
                      No projects in this category yet. Stay tuned!
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden">
                <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                View All Projects{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="logros" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl"></div>

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
                  <Award className="mr-1 h-3 w-3" /> Achievements
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Awards &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Recognition
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  year: "2025",
                  title: "Finalist in Interact2Hack",
                  description:
                    "With my team, we qualified for the finals in the Deuna app challenge at the Interact2Hack hackathon organized by Universidad San Francisco de Quito.",
                  link: "https://www.linkedin.com/posts/john-cortes-pozo_interact2hack-mitimiti-acolitar-activity-7305065377154121729-9pZP",
                },
                {
                  year: "2023",
                  title: "1st Place: Research and Entrepreneurship Competition",
                  description:
                    "Together with my team, we won first place in the '1st UPEC-2023 Research and Entrepreneurship Seedbed Competition,' held at the State Polytechnic University of Carchi. Our research, 'Robust Model for Evaluating Sustainable Development under Uncertainty Conditions'.",
                  link: "https://www.facebook.com/UPECCarchi/posts/-semillerosupec-en-el-primer-concurso-de-semilleros-de-investigaci%C3%B3n-y-empre/685852086917592/",
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-20"></div>
                  <Card className="relative bg-gradient-to-br from-blue-900/40 to-black/80 border border-blue-500/20 h-full group hover:border-blue-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="min-w-[60px] h-16 bg-blue-900/30 border border-blue-500/30 rounded flex items-center justify-center">
                          <span className="text-blue-400 font-mono">
                            {achievement.year}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-300 mt-2">
                            {achievement.description}
                          </p>
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View More <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
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
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl"></div>

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
                  <Send className="mr-1 h-3 w-3" /> Contact
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Talk About Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Project
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-300">
                Interested in collaborating or have any questions? Don't
                hesitate to reach out!
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-20"></div>
                <Card className="relative bg-gradient-to-br from-blue-900/40 to-black/80 border border-blue-500/20 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-10">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-2xl font-bold mb-6 text-blue-400">
                          Contact Information
                        </h3>

                        <div className="space-y-6 mb-8">
                          <div className="flex items-center gap-4">
                            <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center border border-blue-500/20">
                              <Mail className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">Email</p>
                              <a
                                href="mailto:stevencortespozo@gmail.com"
                                className="text-white hover:text-blue-400 transition-colors"
                              >
                                stevencortespozo@gmail.com
                              </a>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center border border-blue-500/20">
                              <Linkedin className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">LinkedIn</p>
                              <a
                                href="https://linkedin.com/in/john-cortes-pozo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors"
                              >
                                linkedin.com/in/john-cortes-pozo
                              </a>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center border border-blue-500/20">
                              <Github className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">GitHub</p>
                              <a
                                href="https://github.com/johncortes117"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors"
                              >
                                github.com/johncortes117
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-950/30 p-6 rounded-lg border border-blue-500/20">
                          <h4 className="text-lg font-bold mb-3 text-blue-300">
                            Ready to Collaborate?
                          </h4>
                          <p className="text-gray-300 mb-4">
                            I'm available for freelance projects,
                            collaborations, and learning opportunities in AI and
                            software development.
                          </p>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden">
                            <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                            Download CV{" "}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-2xl font-bold mb-6 text-blue-400">
                          Send Me a Message
                        </h3>

                        <form
                          className="space-y-4"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="name"
                                className="text-sm text-gray-400 mb-1 block"
                              >
                                Name
                              </label>
                              <input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-md bg-blue-950/50 border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="text-sm text-gray-400 mb-1 block"
                              >
                                Email
                              </label>
                              <input
                                id="email"
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-md bg-blue-950/50 border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="subject"
                              className="text-sm text-gray-400 mb-1 block"
                            >
                              Subject
                            </label>
                            <input
                              id="subject"
                              type="text"
                              placeholder="Message subject"
                              className="w-full px-4 py-3 rounded-md bg-blue-950/50 border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="text-sm text-gray-400 mb-1 block"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              placeholder="Your message"
                              rows={5}
                              className="w-full px-4 py-3 rounded-md bg-blue-950/50 border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                              required
                            ></textarea>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
                          >
                            <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </Button>
                        </form>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600/80 text-white backdrop-blur-sm border border-blue-500/50 shadow-lg z-50 hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          y: scrollYProgress.get() > 0.1 ? 0 : 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      {/* Footer */}
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
