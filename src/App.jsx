import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900 cursor-animated">
      <Cursor />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
