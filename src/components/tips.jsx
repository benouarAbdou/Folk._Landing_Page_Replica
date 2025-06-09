import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/heroStyle.css"; // Assuming you have a CSS file for additional styles

const Tips = () => {
  const cards = [
    { image: "im1", text: "Absurdly simple to setup" },
    { image: "im2", text: "A single source of truth" },
    { image: "im3", text: "Built for team-selling" },
    { image: "im4", text: "Surprisingly proactive" }
  ];

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    index: null
  });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const tooltipWidth = 400;
    const viewportWidth = window.innerWidth;
    let x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (e.clientX + tooltipWidth > viewportWidth) {
      x = viewportWidth - rect.left - tooltipWidth;
    }

    if (x < 0) {
      x = 0;
    }

    setTooltip({ visible: true, x, y, index });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, index: null });
  };

  // Tooltip text split into words
  const tooltipText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const words = tooltipText.split(" ");

  // Animation variants for words
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Fast stagger effect
        duration: 0.2 // Fast animation
      }
    })
  };

  return (
    <div className="py-8 bg-white">
      <div className="max-w-[1500px] mx-auto px-8 lg:px-6">
        <h2 className="text-3xl font-bold text-left mb-8 font-uxum normal">
          Finally, a CRM that works{" "}
          <span className="font-instrument italic font-normal">for</span> you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={`/src/assets/images/${card.image}.png`}
                alt={card.text}
                className="w-full h-full object-cover border-2 border-black bg-[#f7f3ef] "
              />
              <h1 className="mt-4 text-center text-xl font-bold font-uxum normal">
                {card.text}
              </h1>
              <AnimatePresence>
                {tooltip.visible && tooltip.index === index && (
                  <motion.div
                    className="absolute bg-black text-white text-lg p-4 z-10"
                    style={{
                      left: `${tooltip.x + 20}px`,
                      top: `${tooltip.y + 20}px`, // Added 20px offset below cursor
                      borderRadius: "0 24px 24px 24px",
                      transform: "translate(10%, 10%)", // Increased translate for more space
                      width: "350px",
                      minHeight: "fit-content",
                      overflow: "hidden"
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                  >
                    {words.map((word, i) => (
                      <motion.span
                        key={i}
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
