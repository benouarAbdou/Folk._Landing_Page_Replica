import React from "react";

const TestimonialCard = ({
  quoteBeforeHighlight,
  highlightedText,
  quoteAfterHighlight,
  name,
  job,
  twitterHandle,
  imageUrl,
  highlightColor = "bg-yellow-200",
  sideImageUrl = null // optional
}) => {
  return (
    <div className="relative h-full group">
      {/* Shadow effect */}
      <div
        className={`
          absolute inset-0 ${highlightColor} border border-black
          opacity-0 group-hover:opacity-100
          group-hover:translate-x-[1%] group-hover:translate-y-[1%]
          transition-all duration-300
          z-0
        `}
      ></div>

      {/* Main card */}
      <div
        className={`
          relative p-5 border flex ${
            sideImageUrl ? "flex-row" : "flex-col"
          } items-start
          hover:-translate-x-[1%] hover:-translate-y-[1%]
          transition-transform duration-300
          z-10 h-full bg-white
        `}
        style={{ minHeight: sideImageUrl ? "250px" : "auto" }}
      >
        {/* Content Section */}
        <div className="flex flex-col justify-between min-h-full max-w-full pr-4 flex-1">
          <p className="text-md font-uxum font-medium mb-4">
            "{quoteBeforeHighlight}
            <span className={`${highlightColor} px-1`}>{highlightedText}</span>
            {quoteAfterHighlight}"
          </p>

          <div className="flex items-center mt-auto">
            <img
              src={imageUrl}
              alt={name}
              className="w-14 h-14 rounded-full border-1 border-black mr-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/64x64/cccccc/333333?text=N/A`;
              }}
            />
            <div>
              <p className="font-semibold text-md leading-4">
                {name}, {job}
              </p>
              <p className="text-md">@{twitterHandle}</p>
            </div>
          </div>
        </div>

        {/* Side Image Section */}
        {sideImageUrl && (
          <div className="w-1/2 h-full flex-shrink-0">
            <img
              src={sideImageUrl}
              alt="Side Visual"
              className="h-full object-cover border border-black"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
