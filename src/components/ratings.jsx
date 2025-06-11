import React from "react";

const Ratings = () => {
  const ratingsData = [
    {
      rating: 4.9,
      companyName: "Product hunt",
      logo: "src/assets/images/plogo.svg"
    },
    {
      rating: 4.8,
      companyName: "Chrome store",
      logo: "src/assets/images/clogo.png"
    },
    {
      rating: 4.5,
      companyName: "G2 review",
      logo: "src/assets/images/glogo.svg"
    }
  ];

  return (
    <div className="py-8 px-6">
      <h2 className="text-2xl font-bold text-center mb-4 font-uxum normal">
        Trusted by 3,000+ companies around the world
      </h2>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {ratingsData.map((rating, index) => (
          <div key={index} className="p-2 flex flex-row items-start">
            <div
              className="text-4xl font-serif italic px-4"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              {rating.rating}
            </div>
            <div className="flex flex-col items-start justify-center my-auto">
              <img
                src="src/assets/images/5stars.png"
                alt="5 stars"
                className="w-18 h-auto"
              />
              <div className="flex items-center">
                <img
                  src={rating.logo}
                  alt={`${rating.companyName} logo`}
                  className="w-4 h-4 mr-2 object-contain"
                />
                <span className="text-md font-medium text-gray-900">
                  {rating.companyName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
