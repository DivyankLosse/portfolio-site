"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLenis } from "@/components/SmoothScroll";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { lenis } = useLenis();
    const pathname = usePathname();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white"
            >
                <Link href="/" className="hover:opacity-70 transition-opacity" onClick={() => {
                    if (lenis) lenis.scrollTo(0);
                    closeMenu();
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
                            className="invert w-24 md:w-32"
                            style={{ filter: 'invert(1)' }}
                        />
                    </motion.div>
                </Link>

                <nav className="hidden md:flex items-center gap-12 text-xs font-bold tracking-[0.2em] uppercase">
                    <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
                    <a href="#work" className="hover:text-blue-500 transition-colors">Work</a>
                </nav>

                <div className="flex items-center gap-6">
                    <Link
                        href="/contact"
                        className="hidden md:block px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Send Inquiry
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden z-50 p-2 -mr-2 text-white"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center p-8 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8 text-2xl font-light tracking-widest uppercase">
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                href="#about"
                                onClick={closeMenu}
                                className="hover:text-blue-500 transition-colors"
                            >
                                About
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                href="#work"
                                onClick={closeMenu}
                                className="hover:text-blue-500 transition-colors"
                            >
                                Work
                            </motion.a>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={closeMenu}
                                    className="px-8 py-3 text-sm font-bold tracking-[0.2em] uppercase border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Send Inquiry
                                </Link>
                            </motion.div>
                        </nav>

                        <div className="absolute bottom-12 text-center">
                            <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Socials</p>
                            <div className="flex gap-6 text-sm font-mono tracking-tighter">
                                <a href="#" className="hover:text-blue-500 transition-colors">LI /</a>
                                <a href="#" className="hover:text-blue-500 transition-colors">GH /</a>
                                <a href="#" className="hover:text-blue-500 transition-colors">TW</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

