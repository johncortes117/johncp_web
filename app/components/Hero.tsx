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

  // Variantes para la animación neuronal
  const neuronVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const connectionVariants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)" 
    },
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0.7)",
        "0 0 0 8px rgba(59, 130, 246, 0)",
        "0 0 0 0 rgba(59, 130, 246, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  // Array para partículas de datos en el fondo
  const dataParticles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2
  }));

  // Datos para la animación fluida de los nodos
  const focusItems = [
    { 
      name: "Data Science", 
      icon: <Database className="h-4 w-4 text-blue-400" />, 
      x: 10, 
      y: 22, 
      delay: 0,
      connections: [1, 2, 3]
    },
    { 
      name: "Machine Learning", 
      icon: <Code className="h-4 w-4 text-blue-400" />, 
      x: 37, 
      y: 32, 
      delay: 0.2,
      connections: [0, 2, 3] 
    },
    { 
      name: "Artificial Intelligence", 
      icon: <Brain className="h-4 w-4 text-blue-400" />, 
      x: 14, 
      y: 42, 
      delay: 0.4,
      connections: [0, 1, 3] 
    },
    { 
      name: "Mathematics", 
      icon: <BarChart className="h-4 w-4 text-blue-400" />, 
      x: 33, 
      y: 52, 
      delay: 0.6,
      connections: [0, 1, 2] 
    }
  ];

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

      <div className="container mx-auto px-4 md:px-8 lg:px-12 2xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Columna derecha - Imagen y Main Focus */}
          <motion.div
            className="lg:col-span-2 relative order-1 lg:order-2 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Modern profile image container - moved up */}
            <div className="w-full flex justify-center mb-8">
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] relative">
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

            {/* Main Focus - Perfectamente alineado con la imagen de perfil */}
            <div className="w-full flex justify-center">
              <div className="w-[280px] md:w-[320px] h-[280px] md:h-[320px] relative">
                <motion.h4 
                  className="text-xl font-semibold text-blue-400 mb-3 mt-2 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Main Focus
                </motion.h4>
                
                {/* Fondo con partículas de datos flotantes */}
                <div className="absolute inset-0">
                  {dataParticles.map((particle) => (
                    <motion.div
                      key={`data-particle-${particle.id}`}
                      className="absolute rounded-full bg-blue-500/40"
                      style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        filter: "blur(0.5px)"
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, particle.id % 2 === 0 ? 10 : -10, 0],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                {/* Resplandor central */}
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Líneas de conexión SVG */}
                <svg className="absolute inset-0 w-full h-full z-0">
                  {focusItems.flatMap((item, idx) => 
                    item.connections.map((targetIdx, connIdx) => {
                      // Solo dibuja cada conexión una vez
                      if (targetIdx > idx) {
                        const start = { x: item.x, y: item.y };
                        const end = { x: focusItems[targetIdx].x, y: focusItems[targetIdx].y };
                        const controlPoint1 = {
                          x: start.x + (end.x - start.x) * 0.4 + (Math.random() * 20 - 10),
                          y: start.y + (end.y - start.y) * 0.2 + (Math.random() * 20 - 10)
                        };
                        const controlPoint2 = {
                          x: start.x + (end.x - start.x) * 0.6 + (Math.random() * 20 - 10),
                          y: start.y + (end.y - start.y) * 0.8 + (Math.random() * 20 - 10)
                        };
                        
                        const pathData = `M ${start.x}% ${start.y}% C ${controlPoint1.x}% ${controlPoint1.y}%, ${controlPoint2.x}% ${controlPoint2.y}%, ${end.x}% ${end.y}%`;
                        
                        return (
                          <g key={`connection-${idx}-${targetIdx}`}>
                            <motion.path
                              d={pathData}
                              stroke="url(#blueGradient)"
                              strokeWidth="1"
                              fill="none"
                              strokeDasharray="0 1"
                              variants={connectionVariants}
                              initial="initial"
                              animate="animate"
                              transition={{
                                pathLength: {
                                  delay: Math.min(item.delay, focusItems[targetIdx].delay) + 0.3,
                                  duration: 1.5,
                                  ease: "easeInOut"
                                },
                                opacity: {
                                  delay: Math.min(item.delay, focusItems[targetIdx].delay) + 0.3,
                                  duration: 1
                                }
                              }}
                              className="opacity-60"
                            />
                            
                            {/* Pulsos de datos en las conexiones */}
                            {[0, 1, 2].map((pulse) => (
                              <motion.circle 
                                key={`pulse-${idx}-${targetIdx}-${pulse}`}
                                r="2"
                                fill="#3b82f6"
                                filter="url(#glow)"
                                animate={{
                                  offsetDistance: ["0%", "100%"],
                                  opacity: [0, 1, 0]
                                }}
                                transition={{
                                  duration: 3,
                                  delay: pulse * 1 + Math.min(item.delay, focusItems[targetIdx].delay) + 1,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                                style={{
                                  offsetPath: `path("${pathData}")`,
                                  offsetRotate: "0deg"
                                }}
                              />
                            ))}
                          </g>
                        );
                      }
                      return null;
                    })
                  )}
                  
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                </svg>
                
                {/* Nodos de habilidades flotantes */}
                {focusItems.map((item, idx) => (
                  <motion.div
                    key={`focus-item-${idx}`}
                    className="absolute flex items-center z-10"
                    style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%, -50%)' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -2, 0, 2, 0],
                      x: [0, 1, 0, -1, 0]
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: item.delay },
                      scale: { duration: 0.5, delay: item.delay },
                      y: { 
                        repeat: Infinity, 
                        duration: 5, 
                        ease: "easeInOut",
                        delay: item.delay
                      },
                      x: { 
                        repeat: Infinity, 
                        duration: 7, 
                        ease: "easeInOut",
                        delay: item.delay
                      }
                    }}
                  >
                    <div className="relative">
                      {/* Aura exterior */}
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-blue-500/10"
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0.1, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.2
                        }}
                        style={{ 
                          filter: "blur(8px)",
                          width: "100%",
                          height: "100%"
                        }}
                      />
                      
                      {/* Contenedor principal */}
                      <motion.div
                        className="relative backdrop-blur-sm bg-blue-900/40 border border-blue-500/40 p-2 pl-3 pr-4 rounded-full flex items-center shadow-lg shadow-blue-900/20"
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 0 20px 5px rgba(37, 99, 235, 0.3)",
                          borderColor: "rgba(59, 130, 246, 0.7)"
                        }}
                      >
                        {/* Icono */}
                        <div className="bg-blue-500/20 p-1.5 rounded-full mr-2 flex items-center justify-center relative">
                          <motion.div 
                            className="absolute inset-0 rounded-full"
                            animate={{ 
                              boxShadow: [
                                "0 0 0 0 rgba(59, 130, 246, 0.1)",
                                "0 0 10px 2px rgba(59, 130, 246, 0.5)",
                                "0 0 0 0 rgba(59, 130, 246, 0.1)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.5
                            }}
                          />
                          {item.icon}
                        </div>
                        
                        {/* Texto */}
                        <span className="text-xs font-medium text-white">{item.name}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Efectos adicionales - círculos concéntricos radiantes */}
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={`ring-${ring}`}
                      className="absolute rounded-full border border-blue-500/10"
                      style={{
                        width: `${ring * 10}%`,
                        height: `${ring * 10}%`,
                        left: "50%",
                        top: "50%",
                        x: "-50%",
                        y: "-50%"
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                        borderColor: [
                          "rgba(59, 130, 246, 0.1)",
                          "rgba(59, 130, 246, 0.3)",
                          "rgba(59, 130, 246, 0.1)"
                        ]
                      }}
                      transition={{
                        duration: 4 + ring,
                        repeat: Infinity,
                        delay: ring * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna izquierda - Introducción */}
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
            </motion.div>
          </div>
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
