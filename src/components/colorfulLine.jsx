import React from "react";

const ColorfulLine = () => {
  const colors = [
    "#EADDF3",
    "#C4EAEE",
    "#FAF7D1",
    "#E3EFDC",
    "#F6DFF6",
    "#FFF0BD"
  ];

  // Generate random flex value between 1 and 3 for varied widths
  const getRandomFlex = () => Math.random() * 2 + 1;

  return (
    <div style={{ display: "flex", height: "15px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            flex: getRandomFlex(),
            backgroundColor: color,
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            borderRight: index < colors.length - 1 ? "1px solid black" : "none"
          }}
        />
      ))}
    </div>
  );
};

export default ColorfulLine;
