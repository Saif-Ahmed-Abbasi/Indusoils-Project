import React from 'react';
import Button from '../Components/Button';
import StackedCard from '../Components/StackedCard';
import ScrollSection from '../Components/ScrollSection';
import Isection from '../Components/isection';
import ProductSlider from '../Components/ProductSlider';

const Home = () => {
  const buttext = ["learn more"];
  const buttext1 = ["View Products"];
  // Define card data
  const cardsData = [
    {
      id: "card1",
      heading: "ISO :9001 :2015 Certified",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: "card2",
      heading: "100% pakistani company",
      text: "We provide high-quality lubricants that meet industry standards and help keep your equipment running smoothly. Trusted by professionals across industries."
    },
    {
      id: "card3",
      heading: "ogra certified ",
      text: "Our lubricants are formulated using advanced technology to enhance engine performance and longevity. Ensuring that your engines run efficiently and reliably."
    }

  ];

  const images = [
  { src: "https://picsum.photos/500/302", caption: "Premium Oil" },
  { src: "https://picsum.photos/500/303", caption: "Industrial Lubricant" },
  { src: "https://picsum.photos/500/304", caption: "Industrial Lubricant" },
  { src: "https://picsum.photos/500/305", caption: "Industrial Lubricant" },
  { src: "https://picsum.photos/500/306", caption: "Industrial Lubricant" },
];

  return (
    <>
    
        <div className="relative h-screen w-full mb-40  overflow-hidden">
          <video
            muted
            loop
            autoPlay
            src="https://videos.pexels.com/video-files/856627/856627-hd_1920_1080_24fps.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          ></video>

          <div className='relative z-10 flex flex-col justify-center items-center h-full px-4'>
            <div className='text-center flex flex-col justify-center items-center mb-10'>
              <h1 className='font-bold text-[2rem] md:text-[4rem] leading-[3rem] md:leading-[5rem] text-white'>
                Powering Industry with
              </h1>
              <h1 className='font-bold text-[2rem] md:text-[4rem] leading-[3rem] md:leading-[5rem] text-white'>
                Premium Lubricants
              </h1>
              <div className='w-full md:w-[50%] text-[0.9rem] md:text-[1rem] text-white leading-[1.5rem] mt-4'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
              </div>
            </div>

            <div className='flex justify-center items-center gap-10'>
              <Button buttext={buttext} />
              <Button buttext={buttext1} />
            </div>

          </div>
        </div>

        {/* Pass the cardsData to the StackedCard component */}
        <StackedCard cardsData={cardsData} />
        <Isection />
        <ScrollSection />
        <div className='mb-10'>
        <ProductSlider images={images} />
        </div>
    </>
  );
};

export default Home;
