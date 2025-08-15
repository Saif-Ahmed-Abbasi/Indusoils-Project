import React from 'react';

// import required components
import Button from './Button';
import HeroSection from './HeroSection';

const AboutPage = () => {
  const buttext = ["Read More"];
  return (
    <div>
      {/* Hero Section */}
       <HeroSection
        heading="About Us"
        backgroundImage="/images/about-banner-4.webp"
      />

      {/* Section 1 - Mission */}
      <div className="container mx-auto py-16 flex flex-col md:flex-row md:justify-between gap-10 px-4">
        <img
          src="https://picsum.photos/600/540"
          alt="Our Mission"
          className="w-full md:w-2/5 rounded-lg shadow-lg"
        />
        <div className="w-full md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mb-6"></div>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            At <span className="font-semibold">Global Energy Oils</span>, our mission is to
            deliver premium-quality petroleum products while maintaining our
            commitment to sustainability, safety, and innovation.  
            We strive to fuel progress by providing reliable energy solutions
            that power industries, communities, and economies worldwide.  
            Through cutting-edge technology and an unwavering dedication to
            environmental stewardship, we aim to be a trusted partner in shaping
            a cleaner, more efficient future for the oil and gas sector.
          </p>

          <Button buttext={buttext} />
        </div>
      </div>

      {/* Section 2 - Vision */}
      <div className="container mx-auto py-16 flex flex-col md:flex-row md:flex-row-reverse md:justify-between gap-10 px-4 mb-6">
        <img
          src="https://picsum.photos/600/560"
          alt="Our Vision"
          className="w-full md:w-2/5 rounded-lg shadow-lg"
        />
        <div className="w-full md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-6"></div>

          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg mb-6">
            <li>
              <span className="font-semibold">Lead in sustainable energy</span> by adopting cleaner extraction and refining technologies.
            </li>
            <li>
              <span className="font-semibold">Enhance global supply chains</span> to ensure consistent and reliable fuel delivery.
            </li>
            <li>
              <span className="font-semibold">Invest in renewable integration</span> alongside traditional oil and gas operations.
            </li>
            <li>
              <span className="font-semibold">Minimize environmental impact</span> through strict compliance and eco-friendly initiatives.
            </li>
            <li>
              <span className="font-semibold">Empower local communities</span> by creating jobs and supporting development projects.
            </li>
          </ul>

          <Button buttext={buttext} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;