"use client";

import { motion } from "framer-motion";

export const TextGenerateEffect = ({ words }) => {
  const wordArray = words.split(" ");

  return (
    <span>
      {wordArray.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          style={{ marginRight: "8px", display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
