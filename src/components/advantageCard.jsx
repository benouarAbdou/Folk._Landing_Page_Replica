// AdvantageCard.js
import React from "react";
import UnderlinedButton from "./UnderlinedButton";

function AdvantageCard(props) {
  return (
    <div className="flex flex-col w-full max-w-[1500px] p-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-4 gap-4 lg:gap-20">
        <div className="flex flex-col flex-1">
          <h2 className="text-5xl font-bold mb-2 font-uxum normal">
            {props.title}
          </h2>
          <p className="text-xl">{props.paragraph}</p>
        </div>
        <div className="flex items-center">
          <UnderlinedButton text={props.buttonText} />
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
