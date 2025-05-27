import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, FileText, Code, Terminal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Helper function to apply magnetic effect
const applyMagneticEffect = (element, strength = 20) => {
  if (!element) return; // Add null check

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // Calculate distance from center
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Apply effect only within a certain radius (e.g., twice the element's size)
    const maxDistance = Math.max(rect.width, rect.height) * 2;

    if (distance < maxDistance) {
      const moveX = (deltaX / maxDistance) * strength;
      const moveY = (deltaY / maxDistance) * strength;
      gsap.to(element, { x: moveX, y: moveY, duration: 0.5, ease: "power3.out" });
    } else {
      // If outside the radius, snap back to original position
      gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    }
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
  });
};

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialLinksRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Wait for refs to be available
    if (!titleRef.current || !subtitleRef.current || !socialLinksRef.current || !ctaRef.current) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate title
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, clearProps: "all" }
    , "start")
    // Animate subtitle
    .fromTo(subtitleRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, clearProps: "all" }
    , "start+=0.2");

    // Animate social links if they exist
    if (socialLinksRef.current.children.length > 0) {
      tl.from(socialLinksRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        clearProps: "opacity,y"
      }, "start+=0.4");
    }

    // Animate CTA buttons if they exist
    if (ctaRef.current.children.length > 0) {
      tl.from(ctaRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        clearProps: "opacity,y"
      }, "start+=0.6");
    }

    // Apply magnetic effect to CTA buttons if they exist
    if (ctaRef.current && ctaRef.current.children.length > 0) {
      Array.from(ctaRef.current.children).forEach(button => {
        applyMagneticEffect(button, 30);
      });
    }

    return () => {
      // Clean up GSAP animations
      if (titleRef.current) gsap.killTweensOf(titleRef.current);
      if (subtitleRef.current) gsap.killTweensOf(subtitleRef.current);
      if (socialLinksRef.current && socialLinksRef.current.children) {
        gsap.killTweensOf(socialLinksRef.current.children);
      }
      if (ctaRef.current && ctaRef.current.children) {
        gsap.killTweensOf(ctaRef.current.children);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-slate-900/50"
    >
      {/* Background Pattern - Ensure it's behind everything */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_0%_50%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_100%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.15),transparent_50%)] opacity-30 will-change-transform z-0"></div>

      {/* Cursor Follower 3D Component - Removed */}
      {/* <div className="absolute inset-0 z-10 w-full h-full"> */}
      {/*   <CursorFollower3D /> */}
      {/* </div> */}
      
      {/* Content - Ensure it's above the background */}
      <div className="relative z-30">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code className="w-8 h-8 text-violet-400 animate-pulse" />
          <Terminal className="w-8 h-8 text-fuchsia-400 animate-pulse" />
        </div>
        
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 text-white relative z-40"
          style={{ opacity: 1 }} // Ensure final opacity is 1
        >
          Davish E
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-3xl text-white mb-8 font-light tracking-wide relative z-40"
          style={{ opacity: 1 }} // Ensure final opacity is 1
        >
          Software Developer
        </p>
        
        {/* Social Links */}
        <div 
          ref={socialLinksRef}
          className="flex gap-4 justify-center mb-8 relative z-40"
        >
          <a 
            href="mailto:davish.std@gmail.com" 
            className="p-3 rounded-full bg-white/10 text-white hover:text-violet-400 hover:bg-white/20 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            title="Email"
          >
            <Mail className="w-6 h-6 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://github.com/davhsi" 
            target="_blank" 
            className="p-3 rounded-full bg-white/10 text-white hover:text-violet-400 hover:bg-white/20 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            title="GitHub"
          >
            <Github className="w-6 h-6 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://linkedin.com/in/edavish" 
            target="_blank" 
            className="p-3 rounded-full bg-white/10 text-white hover:text-violet-400 hover:bg-white/20 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://leetcode.com/dayywish" 
            target="_blank" 
            className="p-3 rounded-full bg-white/10 text-white hover:text-violet-400 hover:bg-white/20 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            title="LeetCode"
          >
            <FileText className="w-6 h-6 group-hover:animate-bounce" />
          </a>
        </div>

        {/* The Cursor Follower 3D component is now placed in a dedicated background layer */}
        {/* <InteractiveModel /> */}
        {/* <CursorFollower3D /> */} {/* Removed duplicate instance */}

        {/* CTA Buttons */}
        <div 
          ref={ctaRef}
          className="flex gap-4 justify-center relative z-40"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 group backdrop-blur-sm"
          >
            <span className="text-lg">View Projects</span>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 group backdrop-blur-sm"
          >
            <span className="text-lg">Contact Me</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce relative z-40">
        <a href="#about" className="text-violet-400">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}