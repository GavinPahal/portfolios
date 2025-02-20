"use client";

import { motion } from "motion";

export const TextGenerateEffect = ({ words }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {words.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
};
