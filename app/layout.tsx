import type { Metadata } from "next";
import { Inter, Grape_Nuts, Hammersmith_One } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grapeNuts = Grape_Nuts({ subsets: ["latin"], weight: "400", variable: "--font-grape-nuts" });
const hammersmith = Hammersmith_One({ subsets: ["latin"], weight: "400", variable: "--font-hammersmith-one" });

export const metadata: Metadata = {
  title: "Divyank Khewale | AI Engineer",
  description: "A high-end, cinematic, dark-themed personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${grapeNuts.variable} ${hammersmith.variable} font-sans antialiased cursor-none bg-black text-white`}>
        <Cursor />
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
