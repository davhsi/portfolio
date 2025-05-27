import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";

export default function Education() {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      school: "Bannari Amman Institute of Technology",
      location: "Sathyamangalam, Erode",
      duration: "2022–2026",
      score: "CGPA: 9.05 (Upto 5th Semester)",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Currently pursuing my undergraduate degree in Computer Science and Engineering. Focused on software development, algorithms, and system design."
    },
    {
      degree: "HSC - 95.83%",
      school: "Rose Mary Matriculation Hr. Sec. School",
      location: "Palayamkottai, Tirunelveli",
      duration: "2021–2022",
      score: "95.83%",
      icon: <Award className="w-6 h-6" />,
      description: "Completed Higher Secondary Education with distinction. Achieved outstanding results in Mathematics and Computer Science."
    },
    {
      degree: "SSLC - 92.80%",
      school: "Rose Mary Matriculation Hr. Sec. School",
      location: "Palayamkottai, Tirunelveli",
      duration: "2019–2020",
      score: "92.80%",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Completed Secondary School Education with excellent academic performance. Developed strong foundation in core subjects."
    }
  ];

  return (
    <div className="animate-fade-in">
      <AnimatedTitle title="Education" />
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-violet-500/30"></div>
        
        {/* Education Items */}
        <div className="space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-violet-500 rounded-full"></div>
              
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                {/* Content */}
                <div className={`card bg-slate-800/80 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-violet-500/20 rounded-lg text-violet-400">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-violet-300">{item.degree}</h3>
                      <p className="text-violet-200">{item.school}</p>
                      <p className="text-sm text-violet-300/90">{item.location}</p>
                      <p className="text-sm text-violet-300/90">{item.duration}</p>
                      <p className="text-sm font-medium text-violet-400">{item.score}</p>
                      <p className="text-violet-200 mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
