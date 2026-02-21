"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/DivyankLosse",
            icon: "/github.svg",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/divyank-khewale-9461b9309/",
            icon: "/linkedin.svg",
        },
        {
            name: "Kaggle",
            url: "https://www.kaggle.com/divyankkhewale",
            icon: "/kaggle.svg",
        },
        {
            name: "Email",
            url: "mailto:chinmaykhewale2005@gmail.com",
            icon: "/mail.svg",
        },
    ];

    return (
        <footer className="w-full py-[var(--spacing-fluid-gap)] px-[var(--spacing-section-px)] border-t border-white/10 bg-black text-white z-40 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand / Copyright */}
                <div className="text-center md:text-left">
                    <p className="text-fluid-xs font-light text-gray-400">
                        &copy; {currentYear} Divyank Khewale. <br className="md:hidden" />
                        All rights reserved.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block transition-transform duration-300 hover:scale-110"
                            aria-label={link.name}
                        >
                            <div className="relative w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src={link.icon}
                                    alt={link.name}
                                    fill
                                    className="object-contain invert opacity-80 group-hover:opacity-100 transition-opacity"
                                    style={{ filter: "invert(1)" }}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
