"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const ServiceCard = ({ 
  title, 
  description, 
  index,
  features
}: { 
  title: string; 
  description: string; 
  index: number;
  features: string[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="premium-card p-10 md:p-12 relative group overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8E6F3E]/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.15 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-6xl font-serif text-[#D4AF37]/20 font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
        </motion.div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#fafafa] group-hover:text-gradient transition-all duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#a1a1aa] text-lg leading-relaxed font-light mb-10 max-w-md">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-sm text-[#a1a1aa]">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications built with Next.js, featuring blazing-fast performance, scalable architecture, and meticulously crafted code that stands the test of time.",
      features: [
        "Next.js 14 & App Router",
        "REST & GraphQL APIs",
        "Real-time Systems",
        "Database Architecture"
      ],
    },
    {
      title: "AI Integration",
      description: "Intelligent automation solutions powered by large language models, computer vision, and custom ML pipelines that transform how businesses operate.",
      features: [
        "LLM Fine-tuning",
        "Workflow Automation",
        "Computer Vision",
        "Custom AI Agents"
      ],
    },
    {
      title: "Digital Products",
      description: "Premium UI kits, developer tools, and boilerplates built with obsessive attention to detail that developers actually love and purchase.",
      features: [
        "Component Libraries",
        "Design Systems",
        "Developer Tools",
        "SaaS Templates"
      ],
    },
  ];

  return (
    <section id="services" className="py-32 md:py-48 relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/2 blur-[150px] rounded-full" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.3em]">Expertise</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              What I <span className="text-gradient">Do</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-[#a1a1aa] text-xl font-light leading-relaxed">
              I combine engineering rigor with design intuition to build products that solve problems and look absolutely stunning.
            </p>
          </RevealOnScroll>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};
