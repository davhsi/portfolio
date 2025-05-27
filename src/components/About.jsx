import React from "react";
import { 
  FaCode, FaServer, FaDatabase, FaGitAlt, FaGithub, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaLinux, FaFigma
} from "react-icons/fa";
import { SiC, SiJavascript, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import AnimatedTitle from "./AnimatedTitle";

export default function About() {
  const skills = [
    { 
      icon: <FaCode className="w-6 h-6" />, 
      name: "Programming Languages", 
      items: [
        { name: "C", icon: <SiC className="w-5 h-5" /> },
        { name: "Java", icon: <FaJava className="w-5 h-5" /> },
        { name: "Python", icon: <FaPython className="w-5 h-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> }
      ]
    },
    { 
      icon: <FaServer className="w-6 h-6" />, 
      name: "Backend", 
      items: [
        { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-5 h-5" /> },
        { name: "SQL", icon: <FaDatabase className="w-5 h-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> }
      ]
    },
    { 
      icon: <FaReact className="w-6 h-6" />, 
      name: "Frontend", 
      items: [
        { name: "HTML", icon: <FaHtml5 className="w-5 h-5" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-5 h-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
        { name: "React", icon: <FaReact className="w-5 h-5" /> }
      ]
    },
    { 
      icon: <FaGitAlt className="w-6 h-6" />, 
      name: "Tools", 
      items: [
        { name: "Git/GitHub", icon: <FaGithub className="w-5 h-5" /> },
        { name: "Postman", icon: <SiPostman className="w-5 h-5" /> },
        { name: "Figma", icon: <FaFigma className="w-5 h-5" /> },
        { name: "VS Code", icon: <FaCode className="w-5 h-5" /> }
      ]
    },
    { 
      icon: <FaDatabase className="w-6 h-6" />, 
      name: "Areas of Interest", 
      items: [
        { name: "Backend Development", icon: <FaServer className="w-5 h-5" /> },
        { name: "DBMS", icon: <FaDatabase className="w-5 h-5" /> },
        { name: "Operating Systems", icon: <FaLinux className="w-5 h-5" /> },
        { name: "Problem Solving", icon: <FaCode className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <div className="">
      <AnimatedTitle title="About Me" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About Text */}
        <div className="space-y-6">
          <p className="text-lg text-violet-200 leading-relaxed">
            Passionate computer science student with a strong foundation in programming and problem-solving.
            Eager to apply my skills in building efficient and scalable applications while learning and growing in a
            collaborative environment.
          </p>
          <p className="text-lg text-violet-200 leading-relaxed">
            Currently pursuing B.E. in Computer Science and Engineering at Bannari Amman Institute of Technology
            with a CGPA of 9.05. Focused on backend development, database management, and creating efficient
            solutions to complex problems.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 group">
              <span className="group-hover:text-violet-100 transition-colors">Get in Touch</span>
            </a>
            <a href="#projects" className="px-6 py-3 border-2 border-violet-400 text-violet-400 rounded-lg hover:bg-violet-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-400/20 group">
              <span className="group-hover:text-white transition-colors">View Projects</span>
            </a>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card bg-slate-800/80 hover:scale-105 transition-transform group"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="text-violet-400 group-hover:animate-pulse">{skill.icon}</div>
                <h3 className="font-semibold text-violet-300 group-hover:text-violet-200 transition-colors">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-violet-200 flex items-center gap-2 group/item">
                    <span className="text-violet-400 group-hover/item:animate-pulse">{item.icon}</span>
                    <span className="group-hover/item:text-violet-300 transition-colors">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}