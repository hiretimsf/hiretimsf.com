"use client";

import { useReadingProgress } from "@/hooks/use-reading-progress";
import { motion } from "framer-motion";

const ProgressBar = () => {
  const completion = useReadingProgress();
  return (
    <motion.span
      style={{ transform: `translateX(${completion - 100}%)` }}
      className="bg-accent absolute bottom-0 h-0.5 w-full"
      animate={{ transform: `translateX(${completion - 100}%)` }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default ProgressBar;
