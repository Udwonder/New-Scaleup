import { motion } from 'motion/react';

export function Skeleton({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      className={`bg-slate-200 dark:bg-slate-700 rounded-md ${className}`}
    />
  );
}
