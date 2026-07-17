"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useUI } from "@/context/UIContext";

export function ContactModal() {
  const { isContactOpen, closeContact } = useUI();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
    } catch (err) {
      setError("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeContact();
    setTimeout(() => setIsSuccess(false), 500); 
  };

  return (
    <AnimatePresence>
      {isContactOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
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
              <h2 className="text-xl font-bold text-foreground tracking-tight">
                {isSuccess ? "Message Sent" : "Let's Connect"}
              </h2>
              <button 
                onClick={handleClose}
                className="p-2 rounded-md text-zinc-400 hover:text-foreground hover:bg-surface-border transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank you for reaching out!</h3>
                  <p className="text-zinc-400 max-w-sm">
                    Your message has been delivered securely. I will review it and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 px-6 py-2 bg-surface-border text-foreground rounded-md hover:bg-zinc-700 transition-colors font-medium"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 bg-background border border-surface-border rounded-md text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 bg-background border border-surface-border rounded-md text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                    <textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 bg-background border border-surface-border rounded-md text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none disabled:opacity-50"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 mt-2 bg-accent text-background font-semibold rounded-md hover:bg-accent/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}