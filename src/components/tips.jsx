import React from "react";

const Tips = () => {
  const cards = [
    { image: "im1", text: "Absurdly simple to setup" },
    { image: "im2", text: "A single source of truth" },
    { image: "im3", text: "Built for team-selling" },
    { image: "im4", text: "Surprisingly proactive" }
  ];

  return (
    <div className="py-8 bg-white">
      <div className="max-w-[1500px] mx-auto px-8 lg:px-6">
        <h2 className="text-3xl font-bold text-left mb-8">
          Finally, a CRM that works for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={`/src/assets/images/${card.image}.png`}
                alt={card.text}
                className="w-full h-full object-cover border-2 border-black bg-[#f7f3ef]"
              />
              <h1 className="mt-4 text-center text-xl font-medium">
                {card.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
