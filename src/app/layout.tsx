import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tharindud02.github.io";
const siteName = "Tharindu Damith - Full Stack Engineer & Web3 Developer";
const siteDescription = "A passionate Full Stack Engineer crafting exceptional digital experiences with modern technologies. Specialized in React, Next.js, Node.js, and Web3 development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Full Stack Developer",
    "Web3 Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Solana Developer",
    "Blockchain Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Tharindu Damith" }],
  creator: "Tharindu Damith",
  publisher: "Tharindu Damith",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/images/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Tharindu Damith - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/portfolio.jpg"],
    creator: "@tharindud02",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tharindu Damith",
              jobTitle: "Full Stack Engineer & Web3 Developer",
              url: siteUrl,
              sameAs: [
                "https://github.com/tharindud02",
                "https://linkedin.com/in/ztharinduz",
              ],
              email: "tharindud02@gmail.com",
              description: siteDescription,
              image: `${siteUrl}/images/portfolio.jpg`,
            }),
          }}
        />
      </body>
    </html>
  );
}
