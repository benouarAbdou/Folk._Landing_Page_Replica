import React from "react";
import UnderlinedButton from "./UnderlinedButton.jsx"; // Adjust the import path as necessary
import SpotlightCard from "./SpotlightCard.jsx"; // Adjust the import path as necessary

const Qr = () => {
  return (
    <div className="flex flex-col w-full max-w-6xl p-6 mx-auto">
      <div className="flex flex-col items-center lg:gap-16 p-6 lg:p-12 sm:flex-row border-1 border-black">
        {/* QR Code Image - Hidden on mobile */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <img
            src="/src/assets/images/qr.webp"
            alt="QR Code"
            className="w-3xs h-3xs hidden lg:block"
          />
        </SpotlightCard>
        {/* Text Column */}
        <div className="flex flex-col gap-6">
          <div className="inline-block">
            <span className="px-2 py-1 text-sm font-semibold text-black border-black border-[1px] rounded-full">
              New
            </span>
          </div>
          <p className="text-4xl lg:text-4xl font-bold font-uxum normal">
            Keep it casual with clients on <br /> WhatsApp, without leaving{" "}
            <br />
            your team out of the loop
          </p>
          <UnderlinedButton text="Explore WhatsApp integration" />
        </div>
      </div>
    </div>
  );
};

export default Qr;
