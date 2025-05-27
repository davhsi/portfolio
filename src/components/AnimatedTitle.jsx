import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const words = titleRef.current.children;

    gsap.from(words, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%', // Adjust as needed
        toggleActions: 'play none none reverse',
        // markers: true, // Uncomment for debugging
      },
      opacity: 0,
      y: 20, // Animate from slightly below
      rotationX: -90, // Rotate on X axis
      stagger: 0.05, // Stagger animation for each word
      duration: 0.8,
      ease: 'power3.out',
      immediateRender: false,
    });

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Split the title into words and wrap each in a span
  const renderTitle = () => {
    return title.split(' ').map((word, index) => (
      <span 
        key={index} 
        style={{ display: 'inline-block', marginRight: '0.5em' }} // Use inline-block for transformation and add space
      >
        {word}
      </span>
    ));
  };

  return (
    <h2 
      ref={titleRef} 
      className="text-4xl font-bold mb-8 text-center text-violet-300 section-title" // Keep section-title class for general styling
    >
      {renderTitle()}
    </h2>
  );
};

export default AnimatedTitle; 