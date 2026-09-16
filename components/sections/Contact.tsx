"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-secondary font-mono tracking-widest uppercase text-sm mb-4"
            >
              Get in Touch
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Let's build something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">extraordinary</span>.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="mailto:divyankkhewale@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="p-4 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm tracking-widest uppercase mb-1">Email</p>
                      <p className="text-foreground font-medium">divyankkhewale@example.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="p-4 rounded-full bg-background border border-border">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm tracking-widest uppercase mb-1">Location</p>
                      <p className="text-foreground font-medium">Global / Remote</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Connect</h4>
                  <div className="flex gap-4">
                    <a href="https://github.com/DivyankLosse" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form Placeholder */}
              <div className="bg-background/50 p-6 rounded-2xl border border-border">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</label>
                    <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?"></textarea>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
