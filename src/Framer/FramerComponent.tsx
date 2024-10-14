"use client";

import { motion } from "framer-motion";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const FramerComponent = ({
  children,
  style,
  animationInitial,
  animationAnimate,
  animationTransition,
  animationWhileInView,
  animationViewPort,
  animationVariants,
  animationExit,
  animationWhileHover,
}: {
  children?: React.ReactNode;
  style?: string;
  animationInitial?: Record<string, any> | string;
  animationAnimate?: Record<string, any> | string;
  animationTransition?: Record<string, any>;
  animationWhileInView?: Record<string, any> | string;
  animationViewPort?: Record<string, any>;
  animationVariants?: Record<string, any>;
  animationExit?: Record<string, any>;
  animationWhileHover?: Record<string, any>;
}) => {
  return (
    <motion.div
      className={style}
      initial={animationInitial}
      animate={animationAnimate}
      transition={animationTransition}
      whileInView={animationWhileInView}
      viewport={animationViewPort}
      variants={animationVariants}
      exit={animationExit}
      whileHover={animationWhileHover}
    >
      {children}
    </motion.div>
  );
};
