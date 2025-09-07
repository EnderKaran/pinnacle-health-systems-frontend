// src/components/magicui/animated-counter.jsx

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const AnimatedCounter = ({ from = 0, to, className }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 1.5, ease: "easeOut" });
    }
  }, [count, inView, to]);

  return <motion.span ref={ref} className={cn(className)}>{rounded}</motion.span>;
};