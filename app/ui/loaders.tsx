"use client";
import { motion } from "framer-motion";

export const BarLoader = ({ loadingText = "" }) => {
  const barVariants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [0, 1, 0], // fades in and out
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full h-screen grid place-content-center gap-6">
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex justify-center gap-1.5"
      >
        <motion.div
          variants={barVariants}
          className="h-12 w-2 dark:bg-white bg-ipxon-magenta"
        />
        <motion.div
          variants={barVariants}
          className="h-12 w-2 dark:bg-white bg-ipxon-magenta"
        />
        <motion.div
          variants={barVariants}
          className="h-12 w-2 dark:bg-white bg-ipxon-magenta"
        />
        <motion.div
          variants={barVariants}
          className="h-12 w-2 dark:bg-white bg-ipxon-magenta"
        />
        <motion.div
          variants={barVariants}
          className="h-12 w-2 dark:bg-white bg-ipxon-magenta"
        />
      </motion.div>
      <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-sm uppercase font-semibold opacity-50 dark:text-white text-ipxon-magenta"
      >
        {loadingText}
      </motion.h1>
    </div>
  );
};
