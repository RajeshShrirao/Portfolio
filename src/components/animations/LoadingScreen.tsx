"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050505] overflow-hidden"
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full"
            />
          </div>

          {/* Main Logo Animation */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#loading-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Inner R Letter */}
                <motion.path
                  d="M35 65V35H55C65 35 70 42 70 50C70 58 65 62 58 63L72 75"
                  stroke="url(#loading-gradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                />

                {/* Decorative Dots */}
                {[
                  { x: 90, y: 50 },
                  { x: 70, y: 84.64 },
                  { x: 30, y: 84.64 },
                  { x: 10, y: 50 },
                  { x: 30, y: 15.36 },
                  { x: 70, y: 15.36 }
                ].map((pos, i) => (
                  <motion.circle
                    key={i}
                    cx={pos.x}
                    cy={pos.y}
                    r="2"
                    fill="#D4AF37"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ 
                      duration: 2, 
                      delay: i * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                <defs>
                  <linearGradient id="loading-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D17E" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8E6F3E" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <span className="text-xl font-serif font-bold text-gradient-animated">
                RAJESH
              </span>
              <div className="flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1, 
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Curtain Effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a]"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.8, delay: 3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a]"
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.8, delay: 3, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
