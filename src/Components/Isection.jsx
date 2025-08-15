import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Isection = () => {
  useEffect(() => {
    gsap.fromTo(
      '.reveal-image', // Select the image to animate
      {
        opacity: 0, // Initially the image is hidden
        y: 100, // Starting position (100px below)
      },
      {
        opacity: 1, // Final opacity
        y: 0, // Final position (reset to its original position)
        duration: 1, // Duration of the animation
        ease: 'power2.out', // Easing function for smoothness
        scrollTrigger: {
          trigger: '.reveal-image', // Element that triggers the animation
          start: 'top 80%', // Trigger when the top of the element reaches 80% of the viewport height
          end: 'top 20%', // End trigger when the top of the element reaches 20% of the viewport height
          scrub: true, // Smooth scroll effect (scrubbing)
        },
      }
    );
  }, []);

  return (
    <section className="h-[100vh] w-full px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="h-[80%] w-full">
        <img
          className="reveal-image h-[100%] w-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1663100163323-bcc8b597ce4b?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Scenic View"
        />
      </div>
    </section>
  );
};

export default Isection;
