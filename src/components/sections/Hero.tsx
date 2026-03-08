"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] bg-[#D4AF37]/8 blur-[150px] rounded-full"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/3 -right-1/4 w-[700px] h-[700px] bg-[#8E6F3E]/6 blur-[120px] rounded-full"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5D17E]/3 blur-[180px] rounded-full"
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="flex flex-col gap-10">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 w-fit"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
              </span>
              <span className="text-xs font-mono tracking-[0.3em] text-[#a1a1aa] uppercase">
                Available for new projects
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="text-xs font-mono text-[#52525b]">2025</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-gradient-animated"
              >
                Building
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                things that feel
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block text-gradient"
              >
                inevitable.
              </motion.span>
            </h1>

            {/* Subtitle */}
            <RevealOnScroll delay={0.7} direction="up">
              <p className="text-xl md:text-2xl text-[#a1a1aa] max-w-xl font-light leading-relaxed">
                Full-stack dev & AI builder crafting{' '}
                <span className="text-[#D4AF37] font-medium">extraordinary experiences</span> with Next.js, Flutter & intelligent automation.
              </p>
            </RevealOnScroll>

            {/* CTA Buttons */}
            <RevealOnScroll delay={0.85} direction="up">
              <div className="flex flex-wrap items-center gap-5">
                <MagneticButton>
                  <button className="h-16 px-12 rounded-full border border-[#D4AF37]/40 glass glass-hover text-[#fafafa] font-bold text-lg flex items-center justify-center bg-[#D4AF37]/10 backdrop-blur-2xl group shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500">
                    <span className="relative z-10 flex items-center gap-3">
                      View Work 
                      <motion.svg 
                        whileHover={{ x: 5 }}
                        className="w-5 h-5 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </span>
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <button className="h-16 px-12 rounded-full border border-white/10 glass text-white/80 text-lg font-medium flex items-center justify-center hover:border-[#D4AF37]/30 hover:text-white transition-all duration-500 group">
                    <span className="relative z-10">Let&apos;s Talk</span>
                  </button>
                </MagneticButton>
              </div>
            </RevealOnScroll>

            {/* Tech Stack */}
            <RevealOnScroll delay={1} direction="up">
              <div className="flex flex-col gap-5 pt-4">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#52525b] uppercase">
                  Crafted with precision using
                </span>
                <div className="flex flex-wrap items-center gap-8">
                  {[
                    { name: "Next.js", label: "Framework" },
                    { name: "Flutter", label: "Mobile" },
                    { name: "TypeScript", label: "Language" },
                    { name: "AI/ML", label: "Intelligence" },
                    { name: "PostgreSQL", label: "Database" },
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -3, color: "#D4AF37" }}
                      className="flex flex-col gap-1 cursor-default"
                    >
                      <span className="text-sm font-medium text-[#fafafa]">{tech.name}</span>
                      <span className="text-[9px] font-mono text-[#52525b] tracking-wider">{tech.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:flex justify-center items-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateX: 20, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[420px]"
              >
                {/* Main Card */}
                <div className="premium-card p-10 relative overflow-hidden">
                  {/* Card Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 blur-3xl"
                  />

                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8E6F3E] flex items-center justify-center font-serif text-3xl font-bold text-[#050505] shadow-lg shadow-[#D4AF37]/20">
                            R
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-[#050505]"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-[#fafafa]">Rajesh</h3>
                          <p className="text-[10px] font-mono text-[#52525b] uppercase tracking-[0.2em]">Full-Stack Developer</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                        <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider">Available</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-6 mb-10">
                      <div className="flex justify-between items-center py-3 border-b border-white/5">
                        <span className="text-sm text-[#a1a1aa]">Location</span>
                        <span className="font-medium text-[#fafafa]">Pune, India</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/5">
                        <span className="text-sm text-[#a1a1aa]">Timezone</span>
                        <span className="font-medium text-[#fafafa]">IST (GMT+5:30)</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-sm text-[#a1a1aa]">Experience</span>
                        <span className="font-medium text-[#fafafa]">3+ Years</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-sm text-[#a1a1aa] leading-relaxed italic">
                        &ldquo;I don&apos;t just write code &mdash; I engineer experiences that feel inevitable.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 border border-[#D4AF37]/10 rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 border border-white/5 rounded-full" />
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -left-20 top-20 glass p-6 rounded-2xl"
              >
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">12+</div>
                <div className="text-[10px] font-mono text-[#52525b] uppercase tracking-wider">Projects Shipped</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -right-16 bottom-32 glass p-6 rounded-2xl"
              >
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">99%</div>
                <div className="text-[10px] font-mono text-[#52525b] uppercase tracking-wider">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="scroll-indicator"
      >
        <span className="text-[10px] font-mono text-[#52525b] tracking-widest">SCROLL</span>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};
