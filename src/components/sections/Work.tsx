"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

interface Project {
  title: string;
  description: string;
  tag: string;
  stack: string[];
  link: string;
  className?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <RevealOnScroll delay={index * 0.1} distance={50}>
      <motion.div
        onMouseMove={handleMouseMove}
        className={`group relative premium-card overflow-hidden ${project.className}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                750px circle at ${mouseX}px ${mouseY}px,
                rgba(212, 175, 55, 0.12),
                transparent 80%
              )
            `,
          }}
        />

        {/* Card Content */}
        <div className="relative z-30 p-8 md:p-10 h-full flex flex-col justify-between">
          {/* Top Section */}
          <div>
            <div className="flex justify-between items-start mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-sm"
              >
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                  {project.tag}
                </span>
              </motion.div>
              
              <motion.div 
                whileHover={{ rotate: 45, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#a1a1aa] group-hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 group-hover:text-gradient transition-all duration-500">
              {project.title}
            </h3>
            
            <p className="text-[#a1a1aa] text-lg font-light leading-relaxed mb-8 max-w-md">
              {project.description}
            </p>
          </div>

          {/* Bottom Section - Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="text-[11px] font-mono text-[#52525b] uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.02] border border-white/5"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-4 right-4 w-px h-16 bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />
          <div className="absolute top-4 right-4 h-px w-16 bg-gradient-to-l from-[#D4AF37]/30 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute bottom-4 left-4 w-px h-16 bg-gradient-to-t from-[#D4AF37]/20 to-transparent" />
          <div className="absolute bottom-4 left-4 h-px w-16 bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
        </div>
      </motion.div>
    </RevealOnScroll>
  );
};

export const Work = () => {
  const projects: Project[] = [
    {
      title: "AI Camera App",
      description: "Real-time image enhancement powered by Flutter, TFLite, and Real-ESRGAN neural networks.",
      tag: "AI Tool",
      stack: ["Flutter", "TensorFlow", "Dart", "Computer Vision"],
      link: "#",
      className: "md:col-span-2 aspect-[16/10]",
    },
    {
      title: "SaaS Landing Kit",
      description: "Premium digital product built with Next.js 14 and Framer Motion.",
      tag: "SaaS",
      stack: ["Next.js", "Tailwind", "Framer"],
      link: "#",
      className: "",
    },
    {
      title: "Ripple",
      description: "Mood-based visual toy with complex spring physics and WebGL canvas.",
      tag: "Visual",
      stack: ["React", "Three.js", "Physics"],
      link: "#",
      className: "",
    },
    {
      title: "Freelance Dashboard",
      description: "Complete client management system with Prisma, PostgreSQL and Next Auth.",
      tag: "Dashboard",
      stack: ["Prisma", "Next.js", "Postgres"],
      link: "#",
      className: "",
    },
    {
      title: "AI Automation Tool",
      description: "Custom LLM pipeline for high-growth startup workflow automation.",
      tag: "Enterprise",
      stack: ["Python", "FastAPI", "OpenAI"],
      link: "#",
      className: "",
    },
  ];

  return (
    <section id="work" className="py-32 md:py-48 relative">
      {/* Background Accent */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D4AF37]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#8E6F3E]/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <RevealOnScroll>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.3em]">Portfolio</span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.1}>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4">
                Selected <span className="text-gradient">Work</span>
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <p className="text-[#a1a1aa] text-xl font-light">
                Built with precision, delivered with impact.
              </p>
            </RevealOnScroll>
          </div>
          
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/5 mb-4" />
          
          <RevealOnScroll delay={0.3}>
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 text-[#fafafa] font-medium"
            >
              <span>View all projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.span>
            </motion.button>
          </RevealOnScroll>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
