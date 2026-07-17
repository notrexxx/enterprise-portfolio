"use client";

import { useUI } from "@/context/UIContext";

export function Footer() {
  const { openContact } = useUI();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-surface-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold text-[10px] tracking-tighter">AL</span>
            </div>
            <span className="font-semibold text-foreground tracking-tight text-sm">Andres Leon</span>
          </div>
          <p className="text-zinc-500 text-xs">
            © {currentYear} Andres Leon. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-sm font-medium text-zinc-400">
          <a href="https://github.com/notrexxx" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/emigdio-leon-689109195" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <button onClick={openContact} className="hover:text-foreground transition-colors">
            Contact
          </button>
        </div>

      </div>
    </footer>
  );
}