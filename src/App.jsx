import React, { useState, useEffect, useCallback } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Background3D from "./components/Background3D";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // GSAP Animations for Cards in About, Education, Certifications, and Contact sections
    gsap.from("#about .card, #education .card, #certifications .card, #contact .card", {
      scrollTrigger: {
        trigger: "#about .card, #education .card, #certifications .card, #contact .card",
        start: "top 85%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      immediateRender: false,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clean up all ScrollTriggers created in this effect
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Background Container - Always render but with lower z-index */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <Background3D />
      </div>

      {/* Content Container - Ensure it's above the background */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-2xl font-bold text-violet-400 hover:text-violet-300 transition-colors">
                DE
              </a>

              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md text-violet-200 hover:text-violet-400 hover:bg-slate-800/50 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              <div className={`md:flex md:items-center md:space-x-4 ${
                isMobileMenuOpen ? 'absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md p-4 space-y-2' : 'hidden'
              }`}>
                <a href="#about" className="block px-3 py-2 rounded-md text-violet-200 hover:text-violet-400 hover:bg-slate-800/50 transition-colors" onClick={closeMobileMenu}>About</a>
                <a href="#projects" className="block px-3 py-2 rounded-md text-violet-200 hover:text-violet-400 hover:bg-slate-800/50 transition-colors" onClick={closeMobileMenu}>Projects</a>
                <a href="#education" className="block px-3 py-2 rounded-md text-violet-200 hover:text-violet-400 hover:bg-slate-800/50 transition-colors" onClick={closeMobileMenu}>Education</a>
                <a href="#certifications" className="block px-3 py-2 rounded-md text-violet-200 hover:text-violet-400 hover:bg-slate-800/50 transition-colors" onClick={closeMobileMenu}>Certifications</a>
                <a href="#contact" className="block px-3 py-2 rounded-md text-violet-200 hover:text-violet-400 hover:bg-slate-800/50 transition-colors" onClick={closeMobileMenu}>Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <section id="hero">
            <Hero />
          </section>

          <section id="about" className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <About />
            </div>
          </section>

          <section id="projects" className="py-20 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Projects />
            </div>
          </section>

          <section id="education" className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Education />
            </div>
          </section>

          <section id="certifications" className="py-20 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Certifications />
            </div>
          </section>

          <section id="contact" className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Contact />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900/80 backdrop-blur-md border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-lg text-center text-violet-200 mb-4">Let's connect and create something amazing together!</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://linkedin.com/in/edavish" target="_blank" className="text-violet-200 hover:text-violet-400 transition-colors">LinkedIn</a>
              <a href="https://github.com/davhsi" target="_blank" className="text-violet-200 hover:text-violet-400 transition-colors">GitHub</a>
              <a href="https://leetcode.com/dayywish" target="_blank" className="text-violet-200 hover:text-violet-400 transition-colors">LeetCode</a>
            </div>
            <p className="mt-8 text-sm text-center text-slate-500">© 2024 Davish. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
