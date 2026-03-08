"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const StatCard = ({ 
  label, 
  value, 
  symbol = "",
  delay = 0 
}: { 
  label: string; 
  value: number; 
  symbol?: string;
  delay?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const springValue = useSpring(rounded, { damping: 25, stiffness: 50 });
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          count.set(value);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="premium-card p-8 md:p-10 relative group cursor-default"
    >
      <div className="text-5xl md:text-6xl font-serif font-bold text-gradient-animated mb-3">
        <motion.span>{rounded}</motion.span>
        {symbol}
      </div>
      <div className="text-xs font-mono text-[#52525b] uppercase tracking-[0.2em]">{label}</div>
      
      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"
      />
    </motion.div>
  );
};

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} id="about" className="py-32 md:py-48 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 -left-64 w-96 h-96 blur-[120px] pointer-events-none">
        <div className="w-full h-full bg-[#D4AF37]/5 rounded-full" />
      </motion.div>
      
      <motion.div style={{ y: y2 }} className="absolute bottom-20 -right-64 w-80 h-80 blur-[100px] pointer-events-none">
        <div className="w-full h-full bg-[#8E6F3E]/5 rounded-full" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20 lg:gap-32 items-start">
          {/* Left Side - Main Content */}
          <div className="space-y-12">
            {/* Section Label */}
            <RevealOnScroll>
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.3em]">About Me</span>
              </div>
            </RevealOnScroll>

            {/* Main Quote */}
            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold italic leading-[1.2]">
                <span className="text-[#a1a1aa]">&ldquo;</span>
                <span className="text-[#fafafa]">I don&apos;t just write code</span>
                <span className="text-[#a1a1aa]">&mdash;</span>
                <br />
                <span className="text-gradient">I engineer experiences</span>
                <br />
                <span className="text-[#fafafa]">that feel inevitable.</span>
                <span className="text-[#a1a1aa]">&rdquo;</span>
              </h2>
            </RevealOnScroll>

            {/* Bio Text */}
            <RevealOnScroll delay={0.2}>
              <div className="space-y-6 text-lg md:text-xl text-[#a1a1aa] leading-relaxed font-light max-w-2xl">
                <p>
                  I&apos;m <span className="text-[#fafafa] font-medium">Rajesh</span>, a 21-year-old developer based in{' '}
                  <span className="text-[#fafafa] font-medium">Pune, India</span>. My journey started with a fascination 
                  for how things work, which quickly evolved into a passion for building complex, scalable systems.
                </p>
                <p>
                  Specializing in the intersection of <span className="text-[#fafafa] font-medium">Full-Stack Development and AI</span>, 
                  I create products that don&apos;t just solve problems but feel like a natural extension of the user&apos;s workflow.
                </p>
                <p>
                  Whether it&apos;s building high-performance web apps with <span className="text-[#fafafa] font-medium">Next.js</span> 
                  or automating workflows with <span className="text-[#fafafa] font-medium">LLMs</span>, I focus on 
                  shipping excellence, every single time.
                </p>
              </div>
            </RevealOnScroll>

            {/* Skills Tags */}
            <RevealOnScroll delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js", "Flutter", "TypeScript", "React", "Node.js", 
                  "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", 
                  "AI/ML", "LLM Integration", "System Design"
                ].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.03 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(212, 175, 55, 0.4)" }}
                    className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-sm text-[#a1a1aa] cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-1 gap-6 lg:sticky lg:top-32">
            <StatCard label="Years Building" value={3} delay={0} />
            <StatCard label="Projects Shipped" value={12} delay={0.1} />
            <StatCard label="Problems Solved" value={999} symbol="+" delay={0.2} />
            <StatCard label="Coffee Consumed" value={2500} symbol="+" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
};
