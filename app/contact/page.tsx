"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white px-4 md:px-8 pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl mx-auto"
            >
                <div className="mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 font-hammersmith"
                    >
                        Let's start a<br />
                        project together.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl max-w-2xl font-light text-gray-300"
                    >
                        I help companies from all over the world with tailor-made solutions. With each project, I push my boundaries.
                    </motion.p>
                </div>

                <ContactForm />
            </motion.div>
        </main>
    );
}
