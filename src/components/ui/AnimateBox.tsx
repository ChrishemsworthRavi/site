'use client';

import { motion } from 'framer-motion';

export function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white rounded shadow"
    >
      Hello Motion!
    </motion.div>
  );
}
