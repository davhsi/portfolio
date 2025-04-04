import React from "react";
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Davish E</h1>
      <p className="text-xl text-gray-600">Software Developer | MERN Stack | CS Undergrad</p>
      <div className="flex gap-4 mt-6">
        <a href="mailto:davish.std@gmail.com"><Mail className="w-6 h-6" /></a>
        <a href="tel:+919489483316"><Phone className="w-6 h-6" /></a>
        <a href="https://github.com/davhsi" target="_blank"><Github className="w-6 h-6" /></a>
        <a href="https://linkedin.com/in/edavish" target="_blank"><Linkedin className="w-6 h-6" /></a>
        <a href="https://leetcode.com/dayywish" target="_blank"><FileText className="w-6 h-6" /></a>
      </div>
    </section>
  );
}