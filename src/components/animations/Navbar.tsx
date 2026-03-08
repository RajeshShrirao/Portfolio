"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 glass !bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.06]" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight group">
          <span className="text-[#fafafa] group-hover:text-gradient transition-all duration-500">Rajesh</span>
          <span className="text-[#D4AF37]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-[#a1a1aa] hover:text-[#fafafa] transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#contact">
              <Button className="bg-[#D4AF37]/10 backdrop-blur-xl border border-[#D4AF37]/20 px-6 rounded-full font-bold hover:border-[#D4AF37]/50 hover:text-[#fafafa] transition-all duration-300 text-sm">
                Let&apos;s Talk
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger className="text-[#fafafa] hover:text-[#D4AF37] p-2 cursor-pointer">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-[#050505] border-l border-white/[0.06] p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
                  <Link href="/" className="text-2xl font-serif font-bold" onClick={() => setIsMobileOpen(false)}>
                    <span className="text-[#fafafa]">Rajesh</span>
                    <span className="text-[#D4AF37]">.</span>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsMobileOpen(false)}
                    className="text-[#a1a1aa] hover:text-[#fafafa]"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 flex flex-col justify-center p-6 space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block text-3xl font-serif font-medium text-[#fafafa] hover:text-[#D4AF37] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-white/[0.06]">
                  <Link href="#contact" onClick={() => setIsMobileOpen(false)}>
                    <Button className="w-full h-14 rounded-2xl bg-[#D4AF37] text-[#050505] font-bold text-lg">
                      Let&apos;s Talk
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};
