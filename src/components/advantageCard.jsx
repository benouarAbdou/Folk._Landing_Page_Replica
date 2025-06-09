import React from "react";
import { motion } from "framer-motion";

function AdvantageCard(props) {
  const lineVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 }
  };

  return (
    <div className="flex flex-col w-full max-w-[1500px] p-6">
      <div className="flex flex-row items-end justify-between mb-4 gap-20">
        <div className="flex flex-col flex-1">
          <h2 className="text-5xl font-bold mb-2">{props.title}</h2>
          <p className="text-xl">{props.paragraph}</p>
        </div>
        <div className="flex items-center">
          <motion.button
            className="text-xl font-semibold flex items-center hover:cursor-pointer" // Removed 'relative' as it's no longer needed for the line
            initial="initial"
            whileHover="hover"
          >
            {/* 1. Wrap the text in a span and make it the relative container */}
            <span className="relative">
              {props.buttonText}

              {/* 2. Move the line inside the span */}
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
        </div>
      </div>

      <img
        src={props.imageSrc}
        className="w-full h-full object-cover border-2 border-black"
        alt=""
      />
    </div>
  );
}

export default AdvantageCard;
