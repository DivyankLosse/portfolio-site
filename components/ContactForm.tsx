"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const inputClasses = "w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none transition-colors duration-300";
    const labelClasses = "block text-xs uppercase tracking-widest text-gray-400 mb-2";

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl mx-auto space-y-12"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div variants={itemVariants} className="relative group">
                    <label htmlFor="name" className={labelClasses}>What's your name?</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="John Doe *"
                        className={inputClasses}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 h-[1px] bg-white w-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                    <label htmlFor="email" className={labelClasses}>What's your email?</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="john@doe.com *"
                        className={inputClasses}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 h-[1px] bg-white w-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div variants={itemVariants} className="relative group">
                    <label htmlFor="company" className={labelClasses}>What's the name of your organization?</label>
                    <input
                        type="text"
                        id="company"
                        placeholder="John & Doe ®"
                        className={inputClasses}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 h-[1px] bg-white w-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === 'company' ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                    <label htmlFor="services" className={labelClasses}>What services are you looking for?</label>
                    <input
                        type="text"
                        id="services"
                        placeholder="Web Design, Development..."
                        className={inputClasses}
                        onFocus={() => setFocusedField('services')}
                        onBlur={() => setFocusedField(null)}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 h-[1px] bg-white w-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === 'services' ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="relative group">
                <label htmlFor="message" className={labelClasses}>Tell me about your project</label>
                <textarea
                    id="message"
                    rows={4}
                    placeholder="Hello, I'm looking to..."
                    className={`${inputClasses} resize-none`}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                />
                <motion.div
                    className="absolute bottom-5 left-0 h-[1px] bg-white w-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
                <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white/30 rounded-full"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Send Inquiry</span>
                    <span className="relative invisible">Send Inquiry</span>
                </button>
            </motion.div>
        </motion.form>
    );
}
