import React from "react";
import UnderlinedButton from "./UnderlinedButton.jsx"; // Adjust the import path as necessary
import SpotlightCard from "./SpotlightCard.jsx"; // Adjust the import path as necessary

const Qr = () => {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-[1500px] mx-auto px-8 lg:px-6">
        <div className="flex flex-col items-center gap-8 p-8 lg:p-12 sm:flex-row border-2 border-black">
          {/* QR Code Image - Hidden on mobile */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img
              src="/src/assets/images/qr.webp"
              alt="QR Code"
              className="w-xs h-xs hidden lg:block"
            />
          </SpotlightCard>
          {/* Text Column */}
          <div className="flex flex-col  gap-6">
            <div className="inline-block">
              <span className="px-4 py-2 text-lg font-semibold text-black border-black border-[1px] rounded-full">
                New
              </span>
            </div>
            <p className="text-4xl lg:text-6xl font-semibold">
              Keep it casual with clients on <br /> WhatsApp, without leaving{" "}
              <br />
              your team out of the loop
            </p>
            <UnderlinedButton text="Explore WhatsApp integration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qr;
