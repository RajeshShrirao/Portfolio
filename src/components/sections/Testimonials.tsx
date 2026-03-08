"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { ArrowRight, Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Founder, TechFlow",
    quote: "Rajesh delivered a product that exceeded our expectations within weeks. His eye for detail is unmatched in the industry.",
    avatar: "AR",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, AI Synergies",
    quote: "The cleanest code I've ever seen. The AI pipelines Rajesh built for us are robust, scalable, and extremely efficient.",
    avatar: "SC",
  },
  {
    name: "Marcus Thorne",
    role: "CTO, NextScale",
    quote: "Working with Rajesh was an absolute breeze. He understands both the business and technical aspects perfectly.",
    avatar: "MT",
  },
  {
    name: "Elena Vogt",
    role: "Creative Director, Studio Aura",
    quote: "Absolutely legendary work. The animations and UI/UX feel like they were built by a top-tier design agency.",
    avatar: "EV",
  },
  {
    name: "David Park",
    role: "CEO, DataMinds",
    quote: "Rajesh transformed our vision into reality. His ability to bridge design and engineering is truly remarkable.",
    avatar: "DP",
  },
  {
    name: "Lisa Wang",
    role: "VP Engineering, Cloudify",
    quote: "Exceptional developer who delivers on time, every time. The quality of work speaks for itself.",
    avatar: "LW",
  },
];

const MarqueeRow = ({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden py-6">
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 whitespace-nowrap min-w-full items-center"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 glass items-center gap-6 p-6 rounded-3xl border border-white/[0.06] min-w-[420px] mx-2"
          >
            <Avatar className="w-14 h-14 border-2 border-[#D4AF37]/20">
              <AvatarFallback className="bg-gradient-to-br from-[#D4AF37]/20 to-[#8E6F3E]/20 text-[#D4AF37] text-sm font-bold">
                {item.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 min-w-0 flex-1">
              <p className="text-[#a1a1aa] text-sm font-light italic truncate max-w-[300px]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-[#fafafa]">{item.name}</span>
                <span className="text-[10px] text-[#52525b] font-mono uppercase tracking-widest">— {item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#D4AF37]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.3em]">Testimonials</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4">
            Trusted by <span className="text-gradient">Visionaries</span>
          </h2>
          
          <p className="text-[#a1a1aa] text-xl font-light max-w-xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what industry leaders say.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="relative">
        <MarqueeRow items={testimonials.slice(0, 3)} />
        <MarqueeRow items={testimonials.slice(3, 6)} reverse />
        
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>

      {/* CTA Banner */}
      <div className="container mx-auto px-6 mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="premium-card p-12 md:p-20 lg:p-24 text-center relative overflow-hidden group"
        >
          {/* Animated Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/8 blur-[120px] rounded-full"
          />

          {/* Ring Animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#D4AF37]/5 rounded-full"
          />
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#D4AF37]/5 rounded-full border-dashed"
          />

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 relative z-10 text-[#fafafa]">
            Ready to build something <span className="text-gradient">extraordinary?</span>
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            <MagneticButton>
              <Button className="h-16 px-12 rounded-full bg-[#D4AF37] text-[#050505] font-bold text-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all flex items-center gap-3 border-none group">
                <span>Start a Project</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.span>
              </Button>
            </MagneticButton>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/RajeshShrirao", name: "GitHub" },
                { icon: Twitter, href: "https://x.com/RajeshShrirao", name: "Twitter" },
                { icon: Instagram, href: "https://www.instagram.com/rajesh.shrirao", name: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/@rajesh.shrirao", name: "YouTube" },
              ].map((social) => (
                <MagneticButton key={social.name}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full glass border border-white/[0.06] cursor-pointer group"
                  >
                    <social.icon className="w-6 h-6 text-[#a1a1aa] group-hover:text-[#D4AF37] transition-colors" />
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
