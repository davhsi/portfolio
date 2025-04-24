import React from "react";
import { Github, Linkedin, Mail, Phone, FileText, ArrowDown, Code, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Optimized Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_0%_50%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_100%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.15),transparent_50%)] opacity-20 will-change-transform"></div>
      
      {/* Content */}
      <div className="relative z-10 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code className="w-8 h-8 text-violet-400 animate-pulse" />
          <Terminal className="w-8 h-8 text-fuchsia-400 animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
          Davish E
        </h1>
        <p className="text-xl md:text-2xl text-violet-200 mb-8">
          Software Developer
        </p>
        
        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-8">
          <a 
            href="mailto:davish.std@gmail.com" 
            className="p-3 rounded-full bg-slate-800/50 text-violet-200 hover:text-violet-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
            title="Email"
          >
            <Mail className="w-6 h-6 group-hover:animate-bounce" />
          </a>
          <a 
            href="tel:+919489483316" 
            className="p-3 rounded-full bg-slate-800/50 text-violet-200 hover:text-violet-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
            title="Phone"
          >
            <Phone className="w-6 h-6 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://github.com/davhsi" 
            target="_blank" 
            className="p-3 rounded-full bg-slate-800/50 text-violet-200 hover:text-violet-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
            title="GitHub"
          >
            <Github className="w-6 h-6 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://linkedin.com/in/edavish" 
            target="_blank" 
            className="p-3 rounded-full bg-slate-800/50 text-violet-200 hover:text-violet-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://leetcode.com/dayywish" 
            target="_blank" 
            className="p-3 rounded-full bg-slate-800/50 text-violet-200 hover:text-violet-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
            title="LeetCode"
          >
            <FileText className="w-6 h-6 group-hover:animate-bounce" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 group"
          >
            <span className="group-hover:text-violet-100 transition-colors">View Projects</span>
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-violet-400 text-violet-400 rounded-lg hover:bg-violet-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-400/20 group"
          >
            <span className="group-hover:text-white transition-colors">Contact Me</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-violet-400" />
      </div>
    </section>
  );
}