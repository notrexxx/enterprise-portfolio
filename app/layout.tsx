import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/context/UIContext";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://andres-portfolio-tau.vercel.app"),
  title: {
    default: "Andres Leon | Software Engineer",
    template: "%s | Andres Leon",
  },
  description: "Computer Science Engineer and Full-Stack Developer specializing in React, React Native, Node.js, and SQL.",
  keywords: ["Software Engineer", "Full-Stack Developer", "React", "React Native", "Node.js", "Portfolio", "Andres Leon"],
  authors: [{ name: "Andres Leon" }],
  creator: "Andres Leon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andres-portfolio-tau.vercel.app", 
    title: "Andres Leon | Software Engineer",
    description: "Computer Science Engineer and Full-Stack Developer specializing in React, React Native, Node.js, and SQL.",
    siteName: "Andres Leon Portfolio",
    images: [
      {
        url: "/api/og", 
        width: 1200,
        height: 630,
        alt: "Andres Leon Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andres Leon | Software Engineer",
    description: "Computer Science Engineer and Full-Stack Developer specializing in React, Node.js, and SQL.",
    creator: "@notrexxx", 
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-accent/30 selection:text-white min-h-screen flex flex-col`}>
        <UIProvider>
          <Navbar />
          <div className="grow">
            {children}
          </div>
          <ContactModal />
        </UIProvider>
      </body>
    </html>
  );
}