import React, { useState, useEffect, useCallback } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import { Menu, X } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="font-sans bg-slate-900 text-white">
      <Cursor />
      
      {/* Modern Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold text-violet-400 hover:text-violet-300 transition-colors">Davish</a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 rounded-md text-violet-200 hover:text-violet-400 hover:bg-slate-800/50 focus:outline-none transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            {/* Navigation Links */}
            <div className={`md:flex md:items-center md:space-x-4 ${isMobileMenuOpen ? 'absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md p-4 space-y-2' : 'hidden'}`}>
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

        <section id="about" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>

        <section id="projects" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
        </section>

        <section id="education" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Education />
          </div>
        </section>

        <section id="certifications" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Certifications />
          </div>
        </section>

        <section id="contact" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
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
  );
}
