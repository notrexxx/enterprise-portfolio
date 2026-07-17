"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="show"
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(210px,auto)] max-w-7xl mx-auto w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export function BentoCard({ title, description, className = "", children }: BentoCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`p-5 rounded-2xl bg-surface border border-surface-border shadow-sm flex flex-col overflow-hidden transition-colors duration-300 hover:border-accent/50 hover:shadow-[0_0_15px_var(--tw-shadow-color)] hover:shadow-accent/10 cursor-pointer ${className}`}
    >
      <div className="mb-3">
        <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-tight">{title}</h3>
        <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-snug">{description}</p>
      </div>
      <div className="grow flex flex-col justify-end">
        {children}
      </div>
    </motion.div>
  );
}