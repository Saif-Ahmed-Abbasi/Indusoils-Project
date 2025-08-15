import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  useEffect(() => {
    // Animate the text paragraph when it comes into view
    gsap.fromTo(
      '.scroll-text', // Select the element to animate
      {
        opacity: 0, // Initially, the text is hidden
        y: 50, // Starting position (move the text 50px down from its initial position)
      },
      {
        opacity: 1, // Fade-in to fully visible
        y: 0, // Move the text back to its original position
        duration: 1, // Duration of the animation
        ease: 'power2.out', // Easing function for smooth animation
        scrollTrigger: {
          trigger: '.scroll-text', // Element that triggers the animation (the text itself)
          start: 'top 80%', // Start animation when the top of the text hits 80% of the viewport height
          end: 'top 20%', // End animation when the top of the text hits 20% of the viewport height
          scrub: true, // Smoothly scrubs the animation as the user scrolls
        },
      }
    );
  }, []);

  return (
    <section className="h-[70vh]  sm:h-[80vh] w-full px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="flex justify-center">
        <p className="scroll-text text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-8  w-full sm:w-3/4 md:w-2/3 lg:w-full font-medium leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default ScrollSection;
