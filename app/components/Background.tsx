"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
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
  );
}
