// UnderlinedButton.js
import React from "react";
import { motion } from "framer-motion";

const lineVariants = {
  initial: { scaleX: 0 },
  hover: { scaleX: 1 }
};

function UnderlinedButton({ text }) {
  return (
    <motion.button
      className="text-sm font-semibold flex items-center hover:cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <span className="relative text-left">
        {text}
        <motion.div
          className="h-[1px] bg-black absolute left-0 right-0 bottom-[-2px]"
          variants={lineVariants}
          transition={{ duration: 0.3 }}
        />
      </span>

      <svg
        className="w-5 h-5 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </motion.button>
  );
}

export default UnderlinedButton;
