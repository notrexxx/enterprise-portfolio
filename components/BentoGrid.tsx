import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full ${className}`}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  title: string;
  description: string;
  className?: string; 
  children?: ReactNode;
}

export function BentoCard({ title, description, className = "", children }: BentoCardProps) {
  return (
    <div 
      className={`p-6 rounded-2xl bg-surface border border-surface-border shadow-sm flex flex-col overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_15px_var(--tw-shadow-color)] hover:shadow-accent/10 ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground tracking-tight">{title}</h3>
        <p className="text-zinc-400 text-sm mt-1">{description}</p>
      </div>
      <div className="flex-grow flex flex-col justify-end">
        {children}
      </div>
    </div>
  );
}