import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Database, Server, Code, Webhook, Cloud } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef(null);
  const projectCardsRef = useRef([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && projectCardsRef.current.length === projects.length) { // Check if mounted and all refs are available
      const cards = projectCardsRef.current;

      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
            // markers: true,
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          immediateRender: false,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [mounted]); // Re-run effect when mounted state changes

  const projects = [
    {
      title: "FreshFleet - Health Focused Grocery Shopping",
      desc: "Built a full-stack MERN-based online grocery platform focused on health-conscious shopping. Implemented core backend functionalities for seamless user experience including product browsing, vendor management, reviews, nutrition insights, and recipe recommendations. Integrated AWS S3 for secure image storage and used AWS CloudFront as a CDN for fast, scalable image delivery.",
      role: "Full Stack Developer",
      teamSize: "3",
      duration: "2 months",
      link: "https://freshfleet.davish.me/",
      github: "https://github.com/davhsi/freshfleet",
      technologies: [
        { name: "React", icon: <Code className="w-5 h-5" /> },
        { name: "Node.js", icon: <Code className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "Express", icon: <Server className="w-5 h-5" /> },
        { name: "WebSocket", icon: <Webhook className="w-5 h-5" /> }
      ],
      image: "/projects/freshfleet.png"
    },
    {
      title: "Multiplayer Fruit Ninja Game with Live Leaderboard",
      desc: "Built a real-time multiplayer Fruit Ninja game with a Redis-backed live leaderboard and WebSocket-based dynamic gameplay synchronization. Designed the backend to be NoSQL-agnostic for flexible data handling. Achieved seamless real-time score updates and responsive multiplayer interactions to deliver an engaging gaming experience.",
      role: "Frontend and Backend Developer",
      teamSize: "1",
      duration: "1 month",
      link: "https://fruitninja.davish.me/",
      github: "https://github.com/davhsi/fruit-ninja",
      technologies: [
        { name: "Redis", icon: <Database className="w-5 h-5" /> },
        { name: "Express", icon: <Server className="w-5 h-5" /> },
        { name: "React", icon: <Code className="w-5 h-5" /> },
        { name: "Node.js", icon: <Code className="w-5 h-5" /> },
      ],
      image: "/projects/fruit-ninja.png"
    },
    {
      title: "Personal Portfolio Website",
      desc: "Designed and developed a responsive personal portfolio website to showcase projects, skills, and achievements. Built with React.js and deployed on Vercel, featuring modern UI/UX, smooth navigation, and section-wise highlights of professional experience. Configured a custom .me domain via Namecheap and mapped DNS records to Vercel for seamless deployment and accessibility.",
      role: "Frontend and Backend Developer",
      teamSize: "1",
      duration: "1 month",
      link: "https://davish.me",
      github: "https://github.com/davhsi/portfolio",
      technologies: [
        { name: "React", icon: <Code className="w-5 h-5" /> },
        { name: "Node.js", icon: <Code className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "Express", icon: <Server className="w-5 h-5" /> },
        { name: "Vercel", icon: <Cloud className="w-5 h-5" /> }
      ],
      image: "/projects/portfolio.png"
    }
  ];

  return (
    <div ref={projectsRef} className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-center text-violet-300 section-title">Projects</h2>
      
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            ref={el => projectCardsRef.current[index] = el}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-105 -z-10"></div>
            
            <div className="card bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl transform transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-violet-300 group-hover:text-violet-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-violet-200 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Project Details Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                      <p className="text-sm font-medium text-violet-300">Role</p>
                      <p className="text-violet-200">{project.role}</p>
                    </div>
                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                      <p className="text-sm font-medium text-violet-300">Team Size</p>
                      <p className="text-violet-200">{project.teamSize}</p>
                    </div>
                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                      <p className="text-sm font-medium text-violet-300">Duration</p>
                      <p className="text-violet-200">{project.duration}</p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-3 py-1 text-sm bg-violet-500/20 text-violet-200 rounded-full flex items-center gap-1 hover:bg-violet-500/30 transition-all duration-300 group/tech transform hover:scale-105"
                      >
                        <span className="text-violet-400 group-hover/tech:animate-pulse">{tech.icon}</span>
                        <span className="group-hover/tech:text-violet-300 transition-colors">{tech.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 flex items-center gap-2 group/link"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:animate-bounce" />
                      <span className="group-hover/link:text-violet-100 transition-colors">Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-violet-400 text-violet-400 rounded-lg hover:bg-violet-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-400/20 flex items-center gap-2 group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:animate-bounce" />
                      <span className="group-hover/link:text-white transition-colors">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
