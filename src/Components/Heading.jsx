import React from "react";

// Heading component
const Heading = ({ text }) => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-center">
      {text}
    </h1>
  );
};

export default Heading;
