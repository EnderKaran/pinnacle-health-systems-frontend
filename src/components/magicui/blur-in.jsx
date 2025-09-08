// src/components/magicui/blur-in.jsx

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const BlurIn = ({ word, className, variant, duration = 0.5 }) => {
  
  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: 20, 
    },
    visible: {
      opacity: 1,
      y: 0, 
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(className)}
    >
      {word}
    </motion.div>
  );
};

export default BlurIn;