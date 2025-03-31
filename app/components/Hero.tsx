"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Database,
  Code,
  Brain,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
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
                <Link 
                  href="https://drive.google.com/file/d/1x54jXSzYkmjPj6RsGao8b-H-i1A0ckd2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden">
                    <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                    Download CV{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
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
  );
}
