import React from "react";

const TestimonialCard = ({
  quoteBeforeHighlight,
  highlightedText,
  quoteAfterHighlight,
  name,
  job,
  twitterHandle,
  imageUrl,
  highlightColor = "bg-yellow-200"
}) => {
  return (
    // The outer div is now the 'group' to enable 'group-hover' effects on its children
    <div className="relative max-w-md h-full group ">
      {/* The "shadow" div that appears on hover */}
      {/* It's positioned absolutely to fill the parent container, sitting behind the main card */}
      <div
        className={`
                absolute inset-0
                ${highlightColor}
                border border-black
                opacity-0
                group-hover:opacity-100
                group-hover:translate-x-[1%] group-hover:translate-y-[1%]
                transition-opacity duration-300
                transition-transform duration-300
                z-0
            `}
      ></div>

      {/* Main card */}
      {/* This div has its own hover transform effect and sits above the shadow div */}
      <div
        className="
                relative max-w-md p-6 border flex flex-col justify-between
                hover:-translate-x-[1%] hover:-translate-y-[1%]
                transition-transform duration-300
                z-10
                h-full
                
                bg-white
            "
      >
        <p className="text-xl font-uxum normal mb-4">
          "{quoteBeforeHighlight}
          <span className={`${highlightColor} px-1`}>{highlightedText}</span>
          {quoteAfterHighlight}"
        </p>
        <div className="flex items-center">
          <img
            src={imageUrl}
            alt={name}
            className="w-16 h-16 rounded-full border-2 border-black mr-4"
            // Fallback for image loading errors
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = `https://placehold.co/64x64/cccccc/333333?text=N/A`; // Placeholder image
            }}
          />
          <div>
            <p className="font-semibold text-xl">
              {name} , {job}
            </p>
            <p className="text-lg">@{twitterHandle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
