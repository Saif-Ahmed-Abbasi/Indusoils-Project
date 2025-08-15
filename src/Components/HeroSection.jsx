import React from 'react';

const HeroSection = ({ heading, backgroundImage }) => {
  return (
    <div
      className="relative h-[50vh] w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <span className="text-white font-extrabold text-4xl md:text-6xl text-center tracking-wide">
          {heading}
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
