import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

// Dynamically import Toaster to avoid SSR issues
const Toaster = dynamic(() => import("@/components/ui/toaster").then(mod => ({ default: mod.Toaster })), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tharindu Damith Hashantha - Senior Software Engineer",
  description: "Senior Software Engineer with 8+ years delivering full-stack, cloud-native, and AI-integrated production systems.",
  keywords: ["Senior Software Engineer", "Full-Stack", "AI Systems", "LLM", "React", "Next.js", "Node.js", "AWS", "Solana"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
