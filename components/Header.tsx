"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLenis } from "@/components/SmoothScroll";
import { usePathname } from "next/navigation";

export default function Header() {
    // const [isHovered, setIsHovered] = useState(false);
    const { lenis } = useLenis();
    const pathname = usePathname();

    // ... useEffect

    // const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    //     if (href.startsWith("#")) {
    //         e.preventDefault();
    //         if (pathname === "/") {
    //             if (lenis) {
    //                 lenis.scrollTo(href);
                    // Manually update URL to reflect the section
    //                 history.pushState(null, "", href);
    //             }
    //         } else {
    //             window.location.href = "/" + href;
    //         }
    //     }
    // };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-4 md:px-8 mix-blend-difference text-white"
        >
            <Link href="/" className="hover:opacity-70 transition-opacity" onClick={() => {
                if (lenis) lenis.scrollTo(0);
            }}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Image
                        src="/logo.svg"
                        alt="Divyank Khewale"
                        width={100}
                        height={33}
                        className="invert"
                        style={{ filter: 'invert(1)' }}
                    />
                </motion.div>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs md:text-sm font-medium tracking-widest uppercase">
                <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
                <a href="#work" className="hover:text-blue-500 transition-colors">Work</a>
                <a href="mailto:hello@divyank.com" className="hover:text-blue-500 transition-colors">Contact</a>
            </nav>

            <Link
                href="/contact"
                className="hidden md:block px-5 py-2 text-xs font-bold tracking-widest uppercase border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
                Send Inquiry
            </Link>

            {/* Mobile Menu Button - Placeholder for mobile responsiveness */}
            <button className="md:hidden text-xs font-bold tracking-widest uppercase">
                Menu
            </button>
        </motion.header>
    );
}
