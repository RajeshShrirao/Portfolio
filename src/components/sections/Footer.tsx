"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, MapPin, ArrowUpRight, Instagram, Youtube } from "lucide-react";

const SocialLink = ({ 
  name, 
  icon: Icon, 
  href, 
  delay 
}: { 
  name: string; 
  icon: any; 
  href: string; 
  delay: number;
}) => {
  const isExternal = href.startsWith("http");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link 
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center justify-between p-5 rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all group"
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:text-[#D4AF37] transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-lg text-[#fafafa] font-medium">{name}</span>
        </div>
        <motion.div
          whileHover={{ x: 5, y: -5 }}
          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#52525b] group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-colors"
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 md:py-32 border-t border-white/[0.06] bg-[#030303] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8E6F3E]/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-16 lg:gap-24 mb-20">
          {/* Left Column - Brand */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="text-4xl font-serif font-bold tracking-tight inline-block">
                Rajesh<span className="text-gradient">.</span>
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[#a1a1aa] text-lg max-w-sm font-light leading-relaxed"
            >
              Building the next generation of digital experiences and AI-powered tools from Pune, India.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 text-sm font-mono text-[#52525b]"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Pune, India</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>IST (GMT+5:30)</span>
            </motion.div>
          </div>

          {/* Center Column - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#52525b] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "Work", href: "#work" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
              ].map((link, i) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-lg text-[#a1a1aa] hover:text-[#fafafa] transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#D4AF37] transition-all duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#52525b] mb-8">Connect</h4>
            <div className="flex flex-col gap-3">
              <SocialLink name="GitHub" icon={Github} href="https://github.com/RajeshShrirao" delay={0.5} />
              <SocialLink name="Twitter" icon={Twitter} href="https://x.com/RajeshShrirao" delay={0.55} />
              <SocialLink name="Instagram" icon={Instagram} href="https://www.instagram.com/rajesh.shrirao" delay={0.58} />
              <SocialLink name="YouTube" icon={Youtube} href="https://www.youtube.com/@rajesh.shrirao" delay={0.6} />
              <SocialLink name="Email" icon={Mail} href="mailto:rajeshshrirao.696@gmail.com" delay={0.65} />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/[0.06] gap-8"
        >
          <div className="flex flex-wrap gap-8">
            <Link href="#" className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors uppercase tracking-widest">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors uppercase tracking-widest">
              Terms of Service
            </Link>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-mono text-[#52525b]">
            <span>© {currentYear} Rajesh. All rights reserved.</span>
          </div>
        </motion.div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-xs font-mono text-[#52525b]">
            Crafted with <span className="text-[#D4AF37]">♥</span> in Pune, India
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
