"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/animations/Navbar";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { CustomCursor } from "@/components/animations/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-primary">
      {/* Global Animations */}
      <LoadingScreen />
      <CustomCursor />
      <Navbar />

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero />
        <About />
        <Work />
        <Services />
        <Testimonials />
        <Footer />
      </motion.div>
    </main>
  );
}
