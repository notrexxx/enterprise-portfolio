"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useUI } from "@/context/UIContext";

export function ContactModal() {
  const { isContactOpen, closeContact } = useUI();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary logic: We will wire this to a real backend in the next phase
    alert("Form submission logic will be connected shortly!");
    closeContact();
  };

  return (
    <AnimatePresence>
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContact}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-surface border border-surface-border rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-surface-border bg-zinc-900/50">
              <h2 className="text-xl font-bold text-foreground tracking-tight">Let's Connect</h2>
              <button 
                onClick={closeContact}
                className="p-2 rounded-md text-zinc-400 hover:text-foreground hover:bg-surface-border transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-2 bg-background border border-surface-border rounded-md text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-2 bg-background border border-surface-border rounded-md text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-surface-border rounded-md text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 mt-2 bg-accent text-background font-semibold rounded-md hover:bg-accent/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}