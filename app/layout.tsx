import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL("https://divyankkhewale.vercel.app"),
  title: "Divyank Khewale | AI Engineer",
  description: "A premium, cinematic personal portfolio for an AI Engineer specializing in Machine Learning, Computer Vision, and scalable AI Architectures.",
  keywords: ["AI Engineer", "Machine Learning", "Computer Vision", "Software Engineer", "Portfolio", "Divyank Khewale", "React", "Next.js"],
  authors: [{ name: "Divyank Khewale" }],
  openGraph: {
    title: "Divyank Khewale | AI Engineer",
    description: "A premium, cinematic personal portfolio for an AI Engineer.",
    url: "https://divyankkhewale.vercel.app",
    siteName: "Divyank Khewale Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure you have this image in public/
        width: 1200,
        height: 630,
        alt: "Divyank Khewale - AI Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyank Khewale | AI Engineer",
    description: "A premium, cinematic personal portfolio for an AI Engineer.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground cursor-none`}>
        <Cursor />
        <Header />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
