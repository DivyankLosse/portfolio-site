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
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center px-6 py-4 glass-panel rounded-full w-[95%] max-w-6xl text-foreground"
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
                            width={80}
                            height={26}
                            className="invert w-20 md:w-28"
                            style={{ filter: 'invert(1)' }}
                        />
                    </motion.div>
                </Link>

                <nav className="hidden md:flex items-center gap-12 text-xs font-[500] tracking-widest uppercase">
                    <a href="#about" className="hover:text-white/70 transition-colors">About</a>
                    <a href="#projects" className="hover:text-white/70 transition-colors">Work</a>
                    <a href="#skills" className="hover:text-white/70 transition-colors">Skills</a>
                </nav>

                <div className="flex items-center gap-6">
                    <Link
                        href="/#contact"
                        className="hidden md:block px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(79,140,255,0.3)] hover:shadow-[0_0_25px_rgba(79,140,255,0.6)]"
                    >
                        Send Inquiry
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden z-50 p-2 -mr-2 text-white"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-8 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-6 text-xl font-light tracking-widest uppercase">
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                href="#about"
                                onClick={closeMenu}
                                className="hover:text-white/70 transition-colors"
                            >
                                About
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                href="#projects"
                                onClick={closeMenu}
                                className="hover:text-white/70 transition-colors"
                            >
                                Work
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                href="#skills"
                                onClick={closeMenu}
                                className="hover:text-white/70 transition-colors"
                            >
                                Skills
                            </motion.a>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/#contact"
                                    onClick={closeMenu}
                                    className="px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Send Inquiry
                                </Link>
                            </motion.div>
                        </nav>

                        <div className="absolute bottom-12 text-center">
                            <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Socials</p>
                            <div className="flex gap-6 text-sm font-mono tracking-tighter">
                                <a
                                    href="https://github.com/DivyankLosse"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-500 transition-colors"
                                >
                                    GH /
                                </a>
                                <a
                                    href="mailto:chinmaykhewale2005@gmail.com"
                                    className="hover:text-blue-500 transition-colors"
                                >
                                    EMAIL
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

