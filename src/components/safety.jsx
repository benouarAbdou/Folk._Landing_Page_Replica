import React from "react";
import alogo from "../assets/images/alogo.svg";
import gdlogo from "../assets/images/gdlogo.svg";
import gologo from "../assets/images/gologo.svg";

const Safety = () => {
  return (
    <div className="flex flex-col w-full max-w-6xl p-6 mx-auto mb-8">
      <div className="flex flex-col xl:flex-row items-center border-black border-[1px]">
        {/* Text Section */}
        <div className="flex-1 w-full py-4 px-6 text-center lg:text-left xl:border-none border-b-[1px] border-black">
          <h2 className="text-3xl lg:text-4xl font-semibold font-uxum normal">
            Your data is safe with us
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex flex-row justify-between items-center w-full xl:w-auto">
          <div className="flex-1 xl:w-26 flex items-center justify-center border-l-0 xl:border-l-[1px] border-black">
            <img
              src={alogo}
              alt="A Logo"
              className="object-contain h-26 w-26 p-4"
            />
          </div>
          <div className="flex-1 xl:w-26 flex items-center justify-center border-l-[1px] border-black">
            <img
              src={gdlogo}
              alt="GD Logo"
              className="object-contain h-26 w-26 p-4"
            />
          </div>
          <div className="flex-1 xl:w-26 flex items-center justify-center border-l-[1px] border-black">
            <img
              src={gologo}
              alt="GO Logo"
              className="object-contain h-26 w-26 p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
