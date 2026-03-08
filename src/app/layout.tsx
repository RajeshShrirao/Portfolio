import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans, Outfit, Syne } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajesh | Full-Stack Developer & AI Builder",
  description: "Personal portfolio of Rajesh, a full-stack developer and AI builder based in Pune, India.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark', backgroundColor: '#050505' }}>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${outfit.variable} ${syne.variable} font-sans antialiased bg-[#050505] text-[#fafafa] overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-white`}
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
