import React, { useState } from "react";
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
    const tooltipWidth = 400; // Fixed width of the tooltip
    const viewportWidth = window.innerWidth;
    let x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Clip x to prevent tooltip from extending beyond viewport
    if (e.clientX + tooltipWidth > viewportWidth) {
      x = viewportWidth - rect.left - tooltipWidth; // Adjust to keep tooltip within viewport
    }

    // Ensure x doesn't go negative (optional, for left edge clipping)
    if (x < 0) {
      x = 0;
    }

    setTooltip({ visible: true, x, y, index });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, index: null });
  };

  return (
    <div className="py-8 bg-white">
      <div className="max-w-[1500px] mx-auto px-8 lg:px-6">
        <h2 className="text-3xl font-bold text-left mb-8">
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
                className="w-full h-full object-cover border-2 border-black bg-[#f7f3ef]"
              />
              <h1 className="mt-4 text-center text-xl font-medium">
                {card.text}
              </h1>
              {tooltip.visible && tooltip.index === index && (
                <div
                  className="absolute bg-black text-white text-lg p-4 z-10"
                  style={{
                    left: `${tooltip.x}px`,
                    top: `${tooltip.y}px`,
                    borderRadius: "0 8px 8px 8px",
                    transform: "translate(5%, 5%)",
                    width: "300px",
                    minHeight: "fit-content",
                    overflow: "auto"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
